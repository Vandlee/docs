import path from 'path';
import url from 'url';
import fs from 'fs/promises';

/**
 * Returns the full path of the root directory of this repository.
 */
// eslint-disable-next-line import/prefer-default-export
export function getWorkspaceRoot() {
  const currentDirectory = url.fileURLToPath(new URL('.', import.meta.url));
  const workspaceRoot = path.resolve(currentDirectory, '..');
  return workspaceRoot;
}

/**
 * Returns the version and destructured values of the version as env variables to be replaced.
 */
export async function getVersionEnvVariables() {
  const packageJsonData = await fs.readFile(path.resolve('./package.json'), 'utf8');
  const { version = null } = JSON.parse(packageJsonData);

  if (!version) {
    throw new Error('Could not find the version in the package.json');
  }

  const [versionNumber, prerelease] = version.split('-');
  const [major, minor, patch] = versionNumber.split('.');

  if (!major || !minor || !patch) {
    throw new Error(`Couldn't parse version from package.json`);
  }

  return {
    YUSHII_VERSION: version,
    YUSHII_MAJOR_VERSION: major,
    YUSHII_MINOR_VERSION: minor,
    YUSHII_PATCH_VERSION: patch,
    YUSHII_PRERELEASE: prerelease,
  };
}
