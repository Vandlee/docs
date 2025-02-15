import React from 'react';
import Head from 'docs/src/modules/components/Head';
import BrandingCssVarsProvider from 'docs/src/BrandingCssVarsProvider';
import AppHeader from 'docs/src/layouts/AppHeader';

export default function Home() {
  return (
    <BrandingCssVarsProvider>
      <Head title="u-shii" description="UWU">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'u-shii',
              url: 'https://u-shii.yugacore.com/',
              logo: 'https://u-shii.yugacore.com/static/logo.png',
              sameAs: [
                'https://x.com/u-shii',
                'https://github.com/u-shii/',
                'https://opencollective.com/u-shii',
              ],
            }),
          }}
        />
      </Head>
      <AppHeader />
      <main id="main-content"></main>
    </BrandingCssVarsProvider>
  );
}
