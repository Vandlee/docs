export default function getFileExtension(codeVariant: 'TS' | 'JS' | 'HTML') {
  if (codeVariant === 'TS') {
    return 'tsx';
  }
  if (codeVariant === 'JS') {
    return 'js';
  }
  if (codeVariant === 'HTML') {
    return 'html';
  }
  throw new Error(`Unsupported codeVariant: ${codeVariant}`);
}
