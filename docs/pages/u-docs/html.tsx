import BrandingCssVarsProvider from 'docs/src/BrandingCssVarsProvider';
import AppHeaderBanner from 'docs/src/components/banner/AppHeaderBanner';
import DocsHero from 'docs/src/components/docsLayout/DocsHero';
import GradientText from 'docs/src/components/typography/GradientText';
import AppHeader from 'docs/src/layouts/AppHeader';
import Head from 'docs/src/modules/components/Head';
import ROUTES from 'docs/src/route';

export default function JavaScript() {
  return (
    <BrandingCssVarsProvider>
      <Head
        title="HTML: Lenguaje de etiquetas de hipertexto - Vandlee"
        description="HTML (Lenguaje de Marcas de Hipertexto, del inglés HyperText Markup Language) es el componente más básico de la Web. Define el significado y la estructura del contenido web. Además de HTML, generalmente se utilizan otras tecnologías para describir la apariencia/presentación de una página web (CSS) o la funcionalidad/comportamiento (JavaScript)."
      />
      <AppHeaderBanner />
      <AppHeader gitHubRepository="https://github.com/vandlee/docs" />
      <main id="main-content">
        <DocsHero 
            name="HTML"
            primaryUrl={ROUTES.htmlDocs}
            phrase={
                <>

                    La <GradientText color="secondary">base</GradientText> de
                    <br />
                    <GradientText color="primary">TODA</GradientText>
                    <br />
                    la web
                </>
            }
        />
      </main>
    </BrandingCssVarsProvider>
  );
}
