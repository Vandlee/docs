function importMarkdown(lang: string, route: { product: string; path: string }) {
    if (!route) {
      throw new Error('Error al cargar markdown.');
    }
  
    const lastSegment = route.path.split('/').pop();
  
    try {
      // Carga estática en el idioma solicitado
      const markdown = require(`docs/data/${route.product}/${route.path}/${lastSegment}_${lang}.md?yushiiMarkdown`);
      return markdown;
    } catch (error) {
      console.warn(`No se encontró el archivo en el idioma '${lang}'. Cargando idioma por defecto 'es'.`);
      try {
        // Carga estática en español si el idioma solicitado falla
        const markdown = require(`docs/data/${route.product}/${route.path}/${lastSegment}_es.md?yushiiMarkdown`);
        return markdown;
      } catch (defaultError) {
        throw new Error('Error al cargar el archivo markdown en ambos idiomas.');
      }
    }
  }
  
  export default importMarkdown;
  