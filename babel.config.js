// @ts-check
const path = require('path');

/**
 * @typedef {import('@babel/core')} babel
 */

const errorCodesPath = path.resolve(__dirname, './docs/public/static/error-codes.json');
const missingError = process.env.YUSHII_EXTRACT_ERROR_CODES === 'true' ? 'write' : 'annotate';

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
  ['babel-plugin-react-remove-properties', { properties: ['data-yushii-test'] }],
];

/** @type {babel.ConfigFunction} */
module.exports = function getBabelConfig(api) {
  const useESModules = api.env(['regressions', 'modern', 'stable']);

  const defaultAlias = {
    '@yushii/u-ui': resolveAliasPath('./packages/yushii-ui/src'),
    '@yushii/docs': resolveAliasPath('./packages/yushii-docs/src'),
    '@yushii/internal-markdown': resolveAliasPath('./packages/markdown'),
    '@yushii/styled-engine': resolveAliasPath('./packages/yushii-styled-engine/src'),
    '@yushii/system': resolveAliasPath('./packages/yushii-system/src'),
    '@yushii/base': resolveAliasPath('./packages/yushii-base/src'),
    '@yushii/utils': resolveAliasPath('./packages/yushii-utils/src'),
    '@yushii/internal-docs-utils': resolveAliasPath('./packages-internal/docs-utils/src'),
    docs: resolveAliasPath('./docs'),
  };

  const presets = [
    [
      '@babel/preset-env',
      {
        bugfixes: true,
        browserslistEnv: process.env.BABEL_ENV || process.env.NODE_ENV,
        debug: process.env.YUSHII_BUILD_VERBOSE === 'true',
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
        version: process.env.YUSHII_BABEL_RUNTIME_VERSION || '^7.25.0',
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
          'YUSHII_VERSION',
          'YUSHII_MAJOR_VERSION',
          'YUSHII_MINOR_VERSION',
          'YUSHII_PATCH_VERSION',
          'YUSHII_PRERELEASE',
        ],
      },
    ],
    [
      '@mui/internal-babel-plugin-minify-errors',
      {
        missingError,
        errorCodesPath,
      },
    ],
    ...(useESModules
      ? [
          [
            '@yushii/internal-babel-plugin-resolve-imports',
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
        plugins: [['@yushii/internal-babel-plugin-resolve-imports', false]]
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
