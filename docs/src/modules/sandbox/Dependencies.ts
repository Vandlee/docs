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
const vandleeNpmOrgs = ['@u_ui', '@vandlee', '@pigment-css', '@toolpad'];

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
    // All the Vandlee packages come with bundled types
    .filter((name) => !vandleeNpmOrgs.some((org) => name.startsWith(org)));

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
  function getVandleePackageVersion(packageName: string): string {
    if (
      commitRef === undefined ||
      process.env.SOURCE_CODE_REPO !== 'https://github.com/Vandlee/docs'
    ) {
      // #default-branch-switch
      return 'latest';
    }
    const shortSha = commitRef.slice(0, 8);
    return `https://pkg.csb.dev/u-shii/u-ui/commit/${shortSha}/@u-shii/${packageName}`;
  }

  function extractDependencies() {
    const vandleeDocConfig = (window as any).vandleeDocConfig;

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

      if (newDeps['@u-shii/lab'] || newDeps['@mui/icons-material']) {
        newDeps['@u_ui/u-ui'] = versions['@u_ui/u-ui'];
      }

      if (newDeps['@u-shii/x-data-grid']) {
        newDeps['@u_ui/u-ui'] = versions['@u_ui/u-ui'];
      }

      // TODO: consider if this configuration could be injected in a "cleaner" way.
      if (vandleeDocConfig && vandleeDocConfig.csbIncludePeerDependencies) {
        newDeps = vandleeDocConfig.csbIncludePeerDependencies(newDeps, {
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
      '@u_ui/u-ui': getVandleePackageVersion('u-ui'),
      '@mui/icons-material': getVandleePackageVersion('icons-material'),
      '@u-shii/lab': getVandleePackageVersion('lab'),
      '@u_ui/styled-engine': getVandleePackageVersion('styled-engine'),
      '@u-shii/styles': getVandleePackageVersion('styles'),
      '@u_ui/system': getVandleePackageVersion('system'),
      '@u-shii/private-theming': getVandleePackageVersion('theming'),
      '@u-shii/private-classnames': getVandleePackageVersion('classnames'),
      '@u_ui/base': getVandleePackageVersion('base'),
      '@vandlee/utils': getVandleePackageVersion('utils'),
      '@u-shii/ui-nextjs': getVandleePackageVersion('ui-nextjs'),
      '@u-shii/joy': getVandleePackageVersion('joy'),
    };

    // TODO: consider if this configuration could be injected in a "cleaner" way.
    if (vandleeDocConfig && vandleeDocConfig.csbGetVersions) {
      versions = vandleeDocConfig.csbGetVersions(versions, { vandleeDocConfig: commitRef });
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

        if (vandleeDocConfig && vandleeDocConfig.postProcessImport) {
          const resolvedDep = vandleeDocConfig.postProcessImport(fullName);
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

  if (!demo.productId && !dependencies['@u_ui/u-ui']) {
    // The `index.js` imports StyledEngineProvider from '@u_ui/u-ui', so we need to make sure we have it as a dependency
    const name = '@u_ui/u-ui';
    const versions = {
      [name]: getVandleePackageVersion('u-ui'),
    };
    dependencies[name] = versions[name] ? versions[name] : 'latest';
  }

  const devDependencies = {
    'react-scripts': 'latest',
  };

  return { dependencies, devDependencies };
}
