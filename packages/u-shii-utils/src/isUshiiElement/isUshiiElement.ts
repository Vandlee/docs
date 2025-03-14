import * as React from 'react';

export default function isUshiiElement(element: any, uiNames: readonly string[]): boolean {
  return (
    React.isValidElement(element) &&
    uiNames.indexOf(
      // For server components `uiName` is avaialble in element.type._payload.value.ui-Name
      // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
      // eslint-disable-next-line no-underscore-dangle
      (element.type as any).uiName ?? (element.type as any)?._payload?.value?.uiName,
    ) !== -1
  );
}
