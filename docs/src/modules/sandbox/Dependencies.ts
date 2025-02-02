import { CODE_VARIANTS } from 'docs/src/modules/constants';
import { DemoData } from './types';

const packagesWithBundledTypes = [
  'date-fns',
  '@emotion/react',
  '@emotion/styled',
  'dayjs',
  'clsx',
  '@react-spring/web',
];
const yushiiNpmOrgs = ['@yushii', '@base_ui', '@pigment-css', '@toolpad'];

/**
 * WARNING: Always uses `latest` typings.
 *
 * Adds dependencies to @types packages only for packages that are not listed
 * in packagesWithBundledTypes
 *
 * @param deps - list of dependency as `name => version`
 */
function addTypeDeps(deps: Record<string, string>): void {
  const packagesWithDTPackage = Object.keys(deps)
    .filter((name) => !packagesWithBundledTypes.includes(name))
    // All the Yushii packages come with bundled types
    .filter((name) => !yushiiNpmOrgs.some((org) => name.startsWith(org)));

  packagesWithDTPackage.forEach((name) => {
    let resolvedName = name;
    // scoped package?
    if (name.startsWith('@')) {
      // https://github.com/DefinitelyTyped/DefinitelyTyped#what-about-scoped-packages
      resolvedName = name.slice(1).replace('/', '__');
    }

    deps[`@types/${resolvedName}`] = 'latest';
  });
}

type Demo = Pick<DemoData, 'productId' | 'raw' | 'codeVariant' | 'relativeModules'>;

export default function SandboxDependencies(demo: Demo, options?: { commitRef?: string }) {
  const { commitRef } = options || {};

  /**
   * @param packageName - The name of a package living inside this repository.
   * @return string - A valid version for a dependency entry in a package.json
   */
  function getYushiiPackageVersion(packageName: string): string {
    if (
      commitRef === undefined ||
      process.env.SOURCE_CODE_REPO !== 'https://github.com/yugashiki/yushii'
    ) {
      // #default-branch-switch
      return 'latest';
    }
    const shortSha = commitRef.slice(0, 8);
    return `https://pkg.csb.dev/yushii/ui/commit/${shortSha}/@yushii/${packageName}`;
  }

  function extractDependencies() {
    const yushiiDocConfig = (window as any).yushiiDocConfig;

    function includePeerDependencies(
      deps: Record<string, string>,
      versions: Record<string, string>,
    ): Record<string, string> {
      let newDeps: Record<string, string> = {
        ...deps,
        'react-dom': versions['react-dom'],
        react: versions.react,
        '@emotion/react': versions['@emotion/react'],
        '@emotion/styled': versions['@emotion/styled'],
      };

      if (newDeps['@yushii/lab'] || newDeps['@mui/icons-material']) {
        newDeps['@yushii/ui'] = versions['@yushii/ui'];
      }

      if (newDeps['@yushii/x-data-grid']) {
        newDeps['@yushii/ui'] = versions['@yushii/ui'];
      }

      // TODO: consider if this configuration could be injected in a "cleaner" way.
      if (yushiiDocConfig && yushiiDocConfig.csbIncludePeerDependencies) {
        newDeps = yushiiDocConfig.csbIncludePeerDependencies(newDeps, {
          versions,
        });
      }

      return newDeps;
    }
    let deps: Record<string, string> = {};
    let versions: Record<string, string> = {
      react: 'latest',
      'react-dom': 'latest',
      '@emotion/react': 'latest',
      '@emotion/styled': 'latest',
      '@yushii/ui': getYushiiPackageVersion('ui'),
      '@mui/icons-material': getYushiiPackageVersion('icons-material'),
      '@yushii/lab': getYushiiPackageVersion('lab'),
      '@yushii/styled-engine': getYushiiPackageVersion('styled-engine'),
      '@yushii/styles': getYushiiPackageVersion('styles'),
      '@yushii/system': getYushiiPackageVersion('system'),
      '@yushii/private-theming': getYushiiPackageVersion('theming'),
      '@yushii/private-classnames': getYushiiPackageVersion('classnames'),
      '@yushii/base': getYushiiPackageVersion('base'),
      '@yushii/utils': getYushiiPackageVersion('utils'),
      '@yushii/ui-nextjs': getYushiiPackageVersion('ui-nextjs'),
      '@yushii/joy': getYushiiPackageVersion('joy'),
    };

    // TODO: consider if this configuration could be injected in a "cleaner" way.
    if (yushiiDocConfig && yushiiDocConfig.csbGetVersions) {
      versions = yushiiDocConfig.csbGetVersions(versions, { yushiiDocConfig: commitRef });
    }

    const re = /^import\s'([^']+)'|import\s[\s\S]*?\sfrom\s+'([^']+)/gm;
    const extractImportedDependencies = (raw: string) => {
      let m: RegExpExecArray | null = null;
      // eslint-disable-next-line no-cond-assign
      while ((m = re.exec(raw))) {
        const fullName = m[2] ?? m[1];
        // handle scope names
        const name =
          fullName.charAt(0) === '@' ? fullName.split('/', 2).join('/') : fullName.split('/', 1)[0];

        if (!deps[name] && !name.startsWith('.')) {
          deps[name] = versions[name] ?? 'latest';
        }

        if (yushiiDocConfig && yushiiDocConfig.postProcessImport) {
          const resolvedDep = yushiiDocConfig.postProcessImport(fullName);
          if (resolvedDep) {
            deps = { ...deps, ...resolvedDep };
          }
        }
      }
    };

    extractImportedDependencies(demo.raw);
    demo.relativeModules?.forEach(({ raw }) => extractImportedDependencies(raw));

    deps = includePeerDependencies(deps, versions);

    return deps;
  }

  const dependencies = extractDependencies();

  if (demo.codeVariant === CODE_VARIANTS.TS) {
    addTypeDeps(dependencies);
    dependencies.typescript = 'latest';
  }

  if (!demo.productId && !dependencies['@yushii/ui']) {
    // The `index.js` imports StyledEngineProvider from '@yushii/ui', so we need to make sure we have it as a dependency
    const name = '@yushii/ui';
    const versions = {
      [name]: getYushiiPackageVersion('ui'),
    };
    dependencies[name] = versions[name] ? versions[name] : 'latest';
  }

  const devDependencies = {
    'react-scripts': 'latest',
  };

  return { dependencies, devDependencies };
}
