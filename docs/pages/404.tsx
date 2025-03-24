import * as React from 'react';
import BrandingCssVarsProvider from 'docs/src/BrandingCssVarsProvider';
import AppHeader from 'docs/src/layouts/AppHeader';
import Head from 'docs/src/modules/components/Head';
import NotFoundHero from 'docs/src/components/NotFoundHero';
import AppHeaderBanner from 'docs/src/components/banner/AppHeaderBanner';

export default function Custom404() {
  return (
    <BrandingCssVarsProvider>
      <Head title="404: Esta página no pudo ser encontrada - Vandlee" description="" />
      <AppHeaderBanner />
      <AppHeader />
      <main id="main-content">
        <NotFoundHero />
      </main>
    </BrandingCssVarsProvider>
  );
}
