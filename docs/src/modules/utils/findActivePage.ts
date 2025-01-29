import type { YushiiPage } from 'docs/src/YushiiPage';

export default function findActivePage(
  currentPages: YushiiPage[],
  currentPathname: string,
): { activePage: YushiiPage | null; activePageParents: YushiiPage[] } {
  const map: Record<string, YushiiPage> = {};
  const mapParent: Record<string, YushiiPage> = {};

  const pathname = currentPathname
    .replace('/[docsTab]', '')
    .replace('components-api', '')
    .replace('hooks-api', '');

  const traverse = (parent: YushiiPage) => {
    (parent.children || []).forEach((child) => {
      const childPathname = child.pathname
        .replace('/[docsTab]', '')
        .replace('components-api', '')
        .replace('hooks-api', '');

      map[childPathname] = child;

      const isChildApiPathname =
        child.pathname.includes('components-api') || child.pathname.includes('hooks-api');

      if (!isChildApiPathname && mapParent[childPathname]) {
        throw new Error(`Duplicated pathname ${child.pathname} in pages`);
      }

      if (!isChildApiPathname) {
        mapParent[childPathname] = parent;
      }
      traverse(child);
    });
  };

  traverse({ pathname: '/', children: currentPages });

  const activePage = map[pathname] || null;

  const activePageParents = [];
  let traversePage = activePage;
  while (traversePage && traversePage.pathname !== '/') {
    const parent = mapParent[traversePage.pathname];
    activePageParents.push(parent);
    traversePage = parent;
  }

  return {
    activePage,
    activePageParents,
  };
}
