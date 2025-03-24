import type { VandleePage } from 'docs/src/vandleePage';

export default function findActivePage(
  currentPages: VandleePage[],
  currentPathname: string,
): { activePage: VandleePage | null; activePageParents: VandleePage[] } {
  const map: Record<string, VandleePage> = {};
  const mapParent: Record<string, VandleePage> = {};

  const pathname = currentPathname
    .replace('/[docsTab]', '')
    .replace('components-api', '')
    .replace('hooks-api', '');

  const traverse = (parent: VandleePage) => {
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
