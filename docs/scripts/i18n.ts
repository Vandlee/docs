// @ts-check
import path from 'path';
import fse from 'fs-extra';
import { pageToTitle } from 'docs/src/modules/utils/helpers';
import U_UiPages from 'docs/data/u_ui/u-ui/pages';
import { UshiiPage } from 'docs/src/u-shiiPage';

const EXCLUDES = ['/api', '/blog', '/x/react-', '/toolpad'];

async function run() {
  const translationsFilename = path.join(__dirname, '../translations/translations.json');
  const translationsFile = await fse.readFile(translationsFilename, 'utf8');
  /**
   * @type {{ pages: Record<String, string> }}
   */
  const output = JSON.parse(translationsFile);
  output.pages = {};

  /**
   * @param {readonly import('docs/src/u-shiiPage').ui-Page[]} pages
   */
  const traverse = (pages: UshiiPage[]) => {
    pages.forEach((page) => {
      if (
        (page.pathname !== '/' && page.pathname === '/api-docs') ||
        !EXCLUDES.some((exclude) => page.pathname.includes(exclude))
      ) {
        const title = pageToTitle(page);

        if (title) {
          const pathname = page.subheader || page.pathname;
          output.pages[pathname] = title;
        }
      }

      if (page.children) {
        traverse(page.children);
      }
    });
  };

  traverse([...U_UiPages]);

  await fse.writeFile(translationsFilename, `${JSON.stringify(output, null, 2)}\n`);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
