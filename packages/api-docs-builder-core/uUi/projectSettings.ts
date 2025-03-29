import path from 'path';
import { LANGUAGES } from 'docs/config';
import { ProjectSettings } from '@vandlee-internal/api-docs-builder';
import findApiPages from '@vandlee-internal/api-docs-builder/utils/findApiPages';
import {
  unstable_generateUtilityClass as generateUtilityClass,
  unstable_isGlobalState as isGlobalState,
} from '@vandlee/utils';
import { getuUiComponentInfo } from './getuUiComponentInfo';
import { generateApiLinks } from './generateApiLinks';
import { generateuUIApiPages } from './generateuUiApiPages';

const generateClassName = (componentName: string, slot: string, globalStatePrefix = 'Mui') => {
  if (componentName === 'MuiSwipeableDrawer') {
    // SwipeableDrawer uses Drawer classes without modifying them
    return generateUtilityClass('MuiDrawer', slot, globalStatePrefix);
  }

  return generateUtilityClass(componentName, slot, globalStatePrefix);
};

export const projectSettings: ProjectSettings = {
  output: {
    apiManifestPath: path.join(process.cwd(), 'docs/data/u_ui/u-ui/pagesApi.js'),
  },
  typeScriptProjects: [
    {
      name: 'u-ui',
      rootPath: path.join(process.cwd(), 'packages/u_ui-u-ui'),
      entryPointPath: [
        'src/index.d.ts',
        'src/PigmentStack/PigmentStack.tsx',
        'src/PigmentContainer/PigmentContainer.tsx',
        'src/PigmentHidden/PigmentHidden.tsx',
        'src/PigmentGrid/PigmentGrid.tsx',
      ],
    },
  ],
  getApiPages: () => findApiPages('docs/pages/u_ui/u-ui/api'),
  getComponentInfo: getuUiComponentInfo,
  translationLanguages: LANGUAGES,
  skipComponent(filename: string) {
    return (
      filename.match(
        /(ThemeProvider|CssVarsProvider|DefaultPropsProvider|InitColorSchemeScript)/,
      ) !== null
    );
  },
  onCompleted: async () => {
    await generateuUIApiPages();
  },
  onWritingManifestFile(builds, source) {
    const apiLinks = generateApiLinks(builds);
    if (apiLinks.length > 0) {
      return `module.exports = ${JSON.stringify(apiLinks)}`;
    }
    return source;
  },
  translationPagesDirectory: 'docs/translations/api-u-ui-docs',
  generateClassName,
  isGlobalClassName: isGlobalState,
  // #default-branch-switch
  baseApiUrl: 'https://docs.vandlee.com',
};
