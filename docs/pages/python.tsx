import BrandingCssVarsProvider from 'docs/src/BrandingCssVarsProvider';
import AppHeaderBanner from 'docs/src/components/banner/AppHeaderBanner';
import PythonHero from 'docs/src/components/docsPython/PythonHero';
import AppHeader from 'docs/src/layouts/AppHeader';
import Head from 'docs/src/modules/components/Head';

export default function Python() {
  return (
    <BrandingCssVarsProvider>
      <Head
        title="ui: React components"
        description="ui is an open-source React component library"
      />
      <AppHeaderBanner />
      <AppHeader gitHubRepository="https://github.com" />
      <main id="main-content">
        <PythonHero />
      </main>
    </BrandingCssVarsProvider>
  );
}
