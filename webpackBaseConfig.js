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
      '@vandlee/internal-markdown': path.resolve(__dirname, './packages/markdown'),
      '@u_ui/u-ui': path.resolve(__dirname, './packages/u_ui-u-ui/src'),
      '@vandlee/docs': path.resolve(__dirname, './packages/vandlee-docs/src'),
      '@u_ui/styled-engine': path.resolve(__dirname, './packages/u_ui-styled-engine/src'),
      '@u_ui/system': path.resolve(__dirname, './packages/u_ui-system/src'),
      '@u_ui/base': path.resolve(__dirname, './packages/u_ui-base/src'),
      '@vandlee/utils': path.resolve(__dirname, './packages/vandlee-utils/src'),
      '@u_ui/u-ui-nextjs': path.resolve(__dirname, './packages/u_ui-u-ui-nextjs/src'),
      '@vandlee-internal/docs-utils': path.resolve(__dirname, './packages-internal/docs-utils/src'),
      '@vandlee/internal-scripts/typescript-to-proptypes': path.resolve(
        __dirname,
        './packages-internal/scripts/typescript-to-proptypes/src',
      ),
      docs: path.resolve(__dirname, './docs'),
    },
    extensions: ['.js', '.mjs', '.ts', '.tsx', '.d.ts'],
  },
};
