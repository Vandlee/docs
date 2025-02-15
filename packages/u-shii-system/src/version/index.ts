export const version = process.env.USHII_VERSION;
export const major = Number(process.env.USHII_MAJOR_VERSION);
export const minor = Number(process.env.USHII_MINOR_VERSION);
export const patch = Number(process.env.USHII_PATCH_VERSION);
export const prerelease = process.env.USHII_PRERELEASE;

export default version;