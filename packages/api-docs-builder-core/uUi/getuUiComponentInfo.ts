import fs from 'fs';
import path from 'path';
import kebabCase from 'lodash/kebabCase';
import { getHeaders, getTitle } from '@vandlee/internal-markdown';
import {
  ComponentInfo,
  extractPackageFile,
  fixPathname,
  getApiPath,
  getSystemComponents,
  parseFile,
} from '@vandlee-internal/api-docs-builder/buildApiUtils';
import findPagesMarkdown from '@vandlee-internal/api-docs-builder/utils/findPagesMarkdown';
import { migratedBaseComponents } from '../migratedBaseComponents';

export function getuUiDemos(name: string, filename?: string) {
  const allMarkdowns = findPagesMarkdown()
    .filter((markdown) => {
      if (migratedBaseComponents.some((component) => (filename ?? name).includes(component))) {
        return markdown.filename.match(/[\\/]data[\\/]base[\\/]/);
      }
      return true;
    })
    .map((markdown) => {
      const markdownContent = fs.readFileSync(markdown.filename, 'utf8');
      const markdownHeaders = getHeaders(markdownContent);

      return {
        ...markdown,
        markdownContent,
        components: markdownHeaders.components,
      };
    });

  return allMarkdowns
    .filter((page) => page.components.includes(name))
    .map((page) => ({
      demoPageTitle: getTitle(page.markdownContent),
      demoPathname: fixPathname(page.pathname),
    }));
}

export function getuUiComponentInfo(filename: string): ComponentInfo {
  const { name } = extractPackageFile(filename);
  let srcInfo: null | ReturnType<ComponentInfo['readFile']> = null;
  if (!name) {
    throw new Error(`Could not find the component name from: ${filename}`);
  }

  const demos = getuUiDemos(name, filename);
  const apiPath = getApiPath(demos, name) || '';


  return {
    filename,
    name,
    uiName: name,
    apiPathname: apiPath,
    apiPagesDirectory: path.join(process.cwd(), `docs/pages/u_ui/u-ui/api`),
    isSystemComponent: getSystemComponents().includes(name),
    readFile: () => {
      srcInfo = parseFile(filename);
      return srcInfo;
    },
    getInheritance: (inheritedComponent = srcInfo?.inheritedComponent) => {
      if (!inheritedComponent) {
        return null;
      }

      return {
        name: inheritedComponent.replace(/unstyled/i, ''),
        apiPathname:
          inheritedComponent === 'Transition'
            ? 'https://reactcommunity.org/react-transition-group/transition/#Transition-props'
            : `/${
                inheritedComponent.match(/unstyled/i) ? 'u-base' : 'u_ui/u-ui'
              }/api/${kebabCase(inheritedComponent.replace(/unstyled/i, ''))}/`,
      };
    },
    getDemos: () => demos,
  };
}
