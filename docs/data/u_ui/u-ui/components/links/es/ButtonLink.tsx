/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Link from '@u_ui/u-ui/Link';

export default function ButtonLink() {
  return (
    <Link
      component="button"
      variant="body2"
      onClick={() => {
        console.info("Soy un botón.");
      }}
    >
      Enlace Botón
    </Link>
  );
}
