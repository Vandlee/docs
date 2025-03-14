import BrandingCssVarsProvider from 'docs/src/BrandingCssVarsProvider';
import AppHeaderBanner from 'docs/src/components/banner/AppHeaderBanner';
import JavaScriptHero from 'docs/src/components/docsJavaScript/JavaScriptHero';
import AppHeader from 'docs/src/layouts/AppHeader';
import Head from 'docs/src/modules/components/Head';

export default function JavaScript() {
  return (
    <BrandingCssVarsProvider>
      <Head
        title="ui: React components"
        description="ui is an open-source React component library"
      />
      <AppHeaderBanner />
      <AppHeader gitHubRepository="https://github.com/yugashiki/u-shii" />
      <main id="main-content">
        <JavaScriptHero />
      </main>
    </BrandingCssVarsProvider>
  );
}
