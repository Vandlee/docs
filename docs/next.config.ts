// @ts-check
import * as path from 'path';
import * as url from 'url';
import * as fs from 'fs';
// @ts-ignore
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { createRequire } from 'module';
import { NextConfig } from 'next';
import { findPages } from './src/modules/utils/find';
import { LANGUAGES, LANGUAGES_SSR, LANGUAGES_IGNORE_PAGES, LANGUAGES_IN_PROGRESS } from './config';

const currentDirectory = url.fileURLToPath(new URL('.', import.meta.url));
const require = createRequire(import.meta.url);

const withDocsInfra = require('./nextConfigDocsInfra');

const workspaceRoot = path.join(currentDirectory, '../');

const l10nPRInNetlify = /^l10n_/.test(process.env.HEAD || '') && process.env.NETLIFY === 'true';
const vercelDeploy = Boolean(process.env.VERCEL);
const isDeployPreview = Boolean(process.env.PULL_REQUEST_ID);
// For crowdin PRs we want to build all locales for testing.
const buildOnlySpanishLocale = isDeployPreview && !l10nPRInNetlify && !vercelDeploy;

const pkgContent = fs.readFileSync(path.resolve(workspaceRoot, 'package.json'), 'utf8');
const pkg = JSON.parse(pkgContent);

export default withDocsInfra({
  webpack: (config: NextConfig, options): NextConfig => {
    const plugins = config.plugins.slice();

    if (process.env.DOCS_STATS_ENABLED) {
      plugins.push(
        // For all options see https://github.com/th0r/webpack-bundle-analyzer#as-plugin
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          generateStatsFile: true,
          analyzerPort: options.isServer ? 8888 : 8889,
          reportTitle: `${options.isServer ? 'server' : 'client'} docs bundle`,
          // Will be available at `.next/${statsFilename}`
          statsFilename: `stats-${options.isServer ? 'server' : 'client'}.json`,
        }),
      );
    }

    // next includes node_modules in webpack externals. Some of those have dependencies
    // on the aliases defined above. If a module is an external those aliases won't be used.
    // We need tell webpack to not consider those packages as externals.
    if (
      options.isServer &&
      // Next executes this twice on the server with React 18 (once per runtime).
      // We only care about Node runtime at this point.
      (options.nextRuntime === undefined || options.nextRuntime == 'nodejs')
    ) {
      const externals = config.externals.slice(0, -1);
      const nextExternals = config.externals.at(-1);

      config.externals = [
        // @ts-ignore
        (ctx, callback) => {
          const { request } = ctx;
          const hasDependencyOnRepoPackages = [
            'notistack',
            '@toolpad/core',
          ].some((dep) => request.startsWith(dep));

          if (hasDependencyOnRepoPackages) {
            return callback(null);
          }
          return nextExternals(ctx, callback);
        },
        ...externals,
      ];
    }

    // @ts-ignore
    config.module.rules.forEach((rule) => {
      rule.resourceQuery = { not: [/raw/] };
    });

    return {
      ...config,
      plugins,
      resolve: {
        ...config.resolve,
        // resolve .tsx first
        alias: {
          ...config.resolve.alias,

          // for 3rd party packages with dependencies in this repository
          '@yushii/u-ui$': path.resolve(workspaceRoot, 'packages/yushii-ui/src/index.js'),
          '@yushii/u-ui': path.resolve(workspaceRoot, 'packages/yushii-ui/src'),

          '@yushii/docs': path.resolve(workspaceRoot, 'packages/yushii-docs/src'),
          '@yushii/styled-engine': path.resolve(workspaceRoot, 'packages/yushii-styled-engine/src'),
          '@yushii/system': path.resolve(workspaceRoot, 'packages/yushii-system/src'),
          '@yushii/utils': path.resolve(workspaceRoot, 'packages/yushii-utils/src'),
          '@yushii/base': path.resolve(workspaceRoot, 'packages/yushii-base/src'),
          '@yushii/ui-nextjs': path.resolve(workspaceRoot, 'packages/yushii-ui-nextjs/src'),
        },
        extensions: [
          '.tsx',
          // @ts-ignore
          ...config.resolve.extensions.filter((extension) => extension !== '.tsx'),
        ],
      },
      module: {
        ...config.module,
        rules: config.module.rules.concat([
          {
            test: /\.md$/,
            oneOf: [
              {
                resourceQuery: /yushiiMarkdown/,
                use: [
                  options.defaultLoaders.babel,
                  {
                    loader: require.resolve('@yushii/internal-markdown/loader'),
                    options: {
                      workspaceRoot,
                      ignoreLanguagePages: LANGUAGES_IGNORE_PAGES,
                      languagesInProgress: LANGUAGES_IN_PROGRESS,
                      packages: [
                        {
                          productId: 'ui',
                          paths: [
                            path.join(workspaceRoot, 'packages/yushii-base/src'),
                            path.join(workspaceRoot, 'packages/yushii-ui/src'),
                          ],
                        },
                        {
                          productId: 'base-ui',
                          paths: [path.join(workspaceRoot, 'packages/yushii-base/src')],
                        },
                      ],
                      env: {
                        SOURCE_CODE_REPO: options.config.env.SOURCE_CODE_REPO,
                        LIB_VERSION: options.config.env.LIB_VERSION,
                      },
                    },
                  },
                ],
              },
              {
                // used in some /getting-started/templates
                type: 'asset/source',
              },
            ],
          },
          // required to transpile ../packages/
          {
            test: /\.(js|mjs|tsx|ts)$/,
            resourceQuery: { not: [/raw/] },
            include: [workspaceRoot],
            exclude: /(node_modules|mui-icons-material)/,
            use: options.defaultLoaders.babel,
          },
          {
            resourceQuery: /raw/,
            type: 'asset/source',
          },
        ]),
      },
    };
  },
  env: {
    // docs-infra
    LIB_VERSION: pkg.version,
    SOURCE_CODE_REPO: 'https://github.com/yugashiki/yushii',
    SOURCE_GITHUB_BRANCH: 'master', // #default-branch-switch
    GITHUB_TEMPLATE_DOCS_FEEDBACK: '4.docs-feedback.yml',
    BUILD_ONLY_SPANISH_LOCALE: String(buildOnlySpanishLocale),
    // MUI Core related
    GITHUB_AUTH: process.env.GITHUB_AUTH
      ? `Basic ${Buffer.from(process.env.GITHUB_AUTH).toString('base64')}`
      : '',
  },
  distDir: 'export',
  // Next.js provides a `defaultPathMap` argument, we could simplify the logic.
  // However, we don't in order to prevent any regression in the `findPages()` method.
  // @ts-ignore
  exportPathMap: () => {
    const pages = findPages();
    const map = {};

    // @ts-ignore
    function traverse(pages2, userLanguage) {
      const prefix = userLanguage === 'es' ? '' : `/${userLanguage}`;

      // @ts-ignore
      pages2.forEach((page) => {
        if (
          (page.pathname.startsWith('/experiments/') || page.pathname === '/experiments') &&
          process.env.DEPLOY_ENV === 'production'
        ) {
          return;
        }
        // The blog isn't translated
        if (userLanguage !== 'es' && LANGUAGES_IGNORE_PAGES(page.pathname)) {
          return;
        }
        if (!page.children) {
          // map api-docs to api
          // i: /api-docs/* > /api/* (old structure)
          // ii: /*/api-docs/* > /*/api/* (for new structure)
          // @ts-ignore
          map[`${prefix}${page.pathname.replace(/^(\/[^/]+)?\/api-docs\/(.*)/, '$1/api/$2')}`] = {
            page: page.pathname,
            query: {
              userLanguage,
            },
          };
          return;
        }

        traverse(page.children, userLanguage);
      });
    }

    // We want to speed-up the build of pull requests.
    // For this, consider only Spanish language on deploy previews, except for crowdin PRs.
    if (buildOnlySpanishLocale) {
      // eslint-disable-next-line no-console
      console.log('Considering only Spanish for SSR');
      traverse(pages, 'es');
    } else {
      // eslint-disable-next-line no-console
      console.log('Considering various locales for SSR');
      LANGUAGES_SSR.forEach((userLanguage) => {
        traverse(pages, userLanguage);
      });
    }

    return map;
  },
  ...(process.env.NODE_ENV === 'production'
    ? {
        output: 'export',
      }
    : {
        rewrites: async () => {
          return [
            { source: `/:lang(${LANGUAGES.join('|')})?/:rest*`, destination: '/:rest*' },
            // Make sure to include the trailing slash if `trailingSlash` option is set
            { source: '/api/:rest*/', destination: '/api-docs/:rest*/' },
            { source: `/static/x/:rest*`, destination: 'http://0.0.0.0:3001/static/x/:rest*' },
          ];
        },
      }),
} satisfies NextConfig);
