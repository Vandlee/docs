// @ts-check
const path = require('path');

/**
 * @typedef {import('@babel/core')} babel
 */

const errorCodesPath = path.resolve(__dirname, './docs/public/static/error-codes.json');
const missingError = process.env.USHII_EXTRACT_ERROR_CODES === 'true' ? 'write' : 'annotate';

/**
 * @param {string} relativeToBabelConf
 * @returns {string}
 */
function resolveAliasPath(relativeToBabelConf) {
  const resolvedPath = path.relative(process.cwd(), path.resolve(__dirname, relativeToBabelConf));
  return `./${resolvedPath.replace('\\', '/')}`;
}

/** @type {babel.PluginItem[]} */
const productionPlugins = [
  ['babel-plugin-react-remove-properties', { properties: ['data-u-shii-test'] }],
];

/** @type {babel.ConfigFunction} */
module.exports = function getBabelConfig(api) {
  const useESModules = api.env(['regressions', 'modern', 'stable']);

  const defaultAlias = {
    '@u_ui/u-ui': resolveAliasPath('./packages/u_ui-u-ui/src'),
    '@u-shii/docs': resolveAliasPath('./packages/u-shii-docs/src'),
    '@u-shii/internal-markdown': resolveAliasPath('./packages/markdown'),
    '@u-shii/styled-engine': resolveAliasPath('./packages/u-shii-styled-engine/src'),
    '@u-shii/system': resolveAliasPath('./packages/u-shii-system/src'),
    '@u-shii/base': resolveAliasPath('./packages/u-shii-base/src'),
    '@u-shii/utils': resolveAliasPath('./packages/u-shii-utils/src'),
    '@u-shii/internal-docs-utils': resolveAliasPath('./packages-internal/docs-utils/src'),
    docs: resolveAliasPath('./docs'),
  };

  const presets = [
    [
      '@babel/preset-env',
      {
        bugfixes: true,
        browserslistEnv: process.env.BABEL_ENV || process.env.NODE_ENV,
        debug: process.env.USHII_BUILD_VERBOSE === 'true',
        modules: useESModules ? false : 'commonjs',
        shippedProposals: api.env('modern'),
      },
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
    '@babel/preset-typescript',
  ];

  const usesAliases =
    api.env(['coverage', 'development', 'test', 'benchmark']) ||
    process.env.NODE_ENV === 'test' ||
    api.env(['regressions']);

  const outFileExtension = '.js';

  /** @type {babel.PluginItem[]} */
  const plugins = [
    'babel-plugin-optimize-clsx',
    [
      '@babel/plugin-transform-runtime',
      {
        useESModules,
        version: process.env.USHII_BABEL_RUNTIME_VERSION || '^7.25.0',
      },
    ],
    [
      'babel-plugin-transform-react-remove-prop-types',
      {
        mode: 'unsafe-wrap',
      },
    ],
    [
      'transform-inline-environment-variables',
      {
        include: [
          'USHII_VERSION',
          'USHII_MAJOR_VERSION',
          'USHII_MINOR_VERSION',
          'USHII_PATCH_VERSION',
          'USHII_PRERELEASE',
        ],
      },
    ],
    [
      '@u-shii/internal-babel-plugin-minify-errors',
      {
        missingError,
        errorCodesPath,
      },
    ],
    ...(useESModules
      ? [
          [
            '@u-shii/internal-babel-plugin-resolve-imports',
            {
              outExtension: usesAliases ? null : outFileExtension,
            },
          ],
        ]
      : []),
  ];

  if (process.env.NODE_ENV === 'production') {
    plugins.push(...productionPlugins);
  }
  if (process.env.NODE_ENV === 'test') {
    plugins.push([
      'babel-plugin-module-resolver',
      {
        alias: defaultAlias,
        root: ['./'],
      },
    ]);
  }

  return {
    assumptions: {
      noDocumentAll: true,
    },
    presets,
    plugins,
    ignore: [/@babel[\\|/]runtime/], // Fix a Windows issue.
    overrides: [
      {
        exclude: /\.test\.(m?js|ts|tsx)$/,
        plugins: ['@babel/plugin-transform-react-constant-elements'],
      },
      {
        test: /(\.test\.[^.]+$|\.test\/)/,
        plugins: [['@u-shii/internal-babel-plugin-resolve-imports', false]]
      }
    ],
    env: {
      coverage: {
        plugins: [
          'babel-plugin-istanbul',
          [
            'babel-plugin-module-resolver',
            {
              root: ['./'],
              alias: defaultAlias,
            },
          ],
        ],
      },
      development: {
        plugins: [
          [
            'babel-plugin-module-resolver',
            {
              alias: {
                ...defaultAlias,
                modules: './modules',
              },
              root: ['./'],
            },
          ],
        ],
      },
      test: {
        sourceMaps: 'both',
        plugins: [
          [
            'babel-plugin-module-resolver',
            {
              root: ['./'],
              alias: defaultAlias,
            },
          ],
        ],
      },
      benchmark: {
        plugins: [
          ...productionPlugins,
          [
            'babel-plugin-module-resolver',
            {
              alias: defaultAlias,
            },
          ],
        ],
      },
    },
  };
};
