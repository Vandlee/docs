const path = require('path');

// WARNING: Use this module only as an inspiration.
// Cherry-pick the parts you need and inline them in the webpack.config you need.
// This module isn't used to build the documentation. We use Next.js for that.
// This module is used by the visual regression tests to run the demos and by eslint-plugin-import.
module.exports = {
  context: path.resolve(__dirname),
  resolve: {
    modules: [__dirname, 'node_modules'],
    alias: {
      '@u-shii/internal-markdown': path.resolve(__dirname, './packages/markdown'),
      '@u-shii/u-ui': path.resolve(__dirname, './packages/u-shii-ui/src'),
      '@u-shii/docs': path.resolve(__dirname, './packages/u-shii-docs/src'),
      '@u-shii/styled-engine': path.resolve(__dirname, './packages/u-shii-styled-engine/src'),
      '@u-shii/system': path.resolve(__dirname, './packages/u-shii-system/src'),
      '@u-shii/base': path.resolve(__dirname, './packages/u-shii-base/src'),
      '@u-shii/utils': path.resolve(__dirname, './packages/u-shii-utils/src'),
      '@u-shii/u-ui-nextjs': path.resolve(__dirname, './packages/u-shii-ui-nextjs/src'),
      '@u-shii/internal-docs-utils': path.resolve(__dirname, './packages-internal/docs-utils/src'),
      '@u-shii/internal-scripts/typescript-to-proptypes': path.resolve(
        __dirname,
        './packages-internal/scripts/typescript-to-proptypes/src',
      ),
      docs: path.resolve(__dirname, './docs'),
    },
    extensions: ['.js', '.mjs', '.ts', '.tsx', '.d.ts'],
  },
};
