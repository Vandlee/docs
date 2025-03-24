import deepmerge from '@vandlee/utils/deepmerge';

function merge(acc, item) {
  if (!item) {
    return acc;
  }

  return deepmerge(acc, item, {
    clone: false,
  });
}

export default merge;
