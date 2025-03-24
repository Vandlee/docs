export const version = process.env.VANDLEE_VERSION;
export const major = Number(process.env.VANDLEE_MAJOR_VERSION);
export const minor = Number(process.env.VANDLEE_MINOR_VERSION);
export const patch = Number(process.env.VANDLEE_PATCH_VERSION);
export const prerelease = process.env.VANDLEE_PRERELEASE;

export default version;