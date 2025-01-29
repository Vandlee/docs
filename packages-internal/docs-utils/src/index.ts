import { EOL } from 'os';

export * from './createTypeScriptProject';
export { type ComponentClassDefinition } from './ComponentClassDefinition';
export * from './getPropsFromComponentNode';

export function getLineFeed(source: string): string {
  const match = source.match(/\r?\n/);
  return match === null ? EOL : match[0];
}

const fixBabelIssuesRegExp = /(?<=(\/>)|,)(\r?\n){2}/g;

export function fixBabelGeneratorIssues(source: string): string {
  return source.replace(fixBabelIssuesRegExp, '\n');
}

export function fixLineEndings(source: string, target: string): string {
  return target.replace(/\r?\n/g, getLineFeed(source));
}

/**
 * Converts styled or regular component d.ts file to unstyled d.ts
 * @param filename - the file of the styled or regular yushii component
 */
export function getUnstyledFilename(filename: string, definitionFile: boolean = false): string {
  if (filename.includes('yushii-base')) {
    return filename;
  }
  let unstyledFile = '';

  const separator = filename.includes('/') ? '/' : '\\';

  if (!filename.includes('yushii-base')) {
    unstyledFile = filename
      .replace(/.d.ts$/, '')
      .replace(/.tsx?$/, '')
      .replace(/.js$/, '');
    unstyledFile = unstyledFile.replace(/Styled/g, '');

    if (separator === '/') {
      unstyledFile = unstyledFile.replace(
        /packages\/yushii-lab|packages\/yushii-ui/g,
        'packages/yushii-base',
      );
    } else {
      unstyledFile = unstyledFile.replace(
        /packages\\yushii-lab|packages\\yushii-ui/g,
        'packages\\yushii-base',
      );
    }
  }

  return definitionFile ? `${unstyledFile}.d.ts` : `${unstyledFile}.js`;
}
