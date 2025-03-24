import React from 'react';
import Head from 'docs/src/modules/components/Head';
import BrandingCssVarsProvider from 'docs/src/BrandingCssVarsProvider';
import AppHeader from 'docs/src/layouts/AppHeader';
import Hero from 'docs/src/components/home/Hero';

export default function Home() {
  return (
    <BrandingCssVarsProvider>
      <Head title="Vandlee Docs" description="Documentación para todos.">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'vandlee',
              url: 'https://docs.vandle.com/',
              logo: 'https://docs.vandlee.com/static/logo.png',
              sameAs: [
                'https://x.com/vandlee',
                'https://github.com/vandlee/',
                'https://opencollective.com/vandlee',
              ],
            }),
          }}
        />
      </Head>
      <AppHeader />
      <main id="main-content">
        <Hero />
      </main>
    </BrandingCssVarsProvider>
  );
}
