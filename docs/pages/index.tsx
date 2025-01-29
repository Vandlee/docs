import React from 'react';
import Head from 'docs/src/modules/components/Head';
import BrandingCssVarsProvider from 'docs/src/BrandingCssVarsProvider';
import AppHeader from 'docs/src/layouts/AppHeader';

export default function Home() {
  return (
    <BrandingCssVarsProvider>
      <Head title="Yushii" description="UWU">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Yushii',
              url: 'https://yushii.yugacore.com/',
              logo: 'https://yushii.yugacore.com/static/logo.png',
              sameAs: [
                'https://x.com/yushii',
                'https://github.com/yushii/',
                'https://opencollective.com/yushii',
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
