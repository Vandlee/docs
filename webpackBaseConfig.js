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
      '@yushii/internal-markdown': path.resolve(__dirname, './packages/markdown'),
      '@yushii/u-ui': path.resolve(__dirname, './packages/yushii-ui/src'),
      '@yushii/docs': path.resolve(__dirname, './packages/yushii-docs/src'),
      '@yushii/styled-engine': path.resolve(__dirname, './packages/yushii-styled-engine/src'),
      '@yushii/system': path.resolve(__dirname, './packages/yushii-system/src'),
      '@yushii/base': path.resolve(__dirname, './packages/yushii-base/src'),
      '@yushii/utils': path.resolve(__dirname, './packages/yushii-utils/src'),
      '@yushii/u-ui-nextjs': path.resolve(__dirname, './packages/yushii-ui-nextjs/src'),
      '@yushii/internal-docs-utils': path.resolve(__dirname, './packages-internal/docs-utils/src'),
      '@yushii/internal-scripts/typescript-to-proptypes': path.resolve(
        __dirname,
        './packages-internal/scripts/typescript-to-proptypes/src',
      ),
      docs: path.resolve(__dirname, './docs'),
    },
    extensions: ['.js', '.mjs', '.ts', '.tsx', '.d.ts'],
  },
};
