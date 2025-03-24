---
productId: u-ui
components: Link
githubLabel: 'component: link'
waiAria: https://www.w3.org/WAI/ARIA/apg/patterns/link/
githubSource: packages/u_ui-u-ui/src/Link
---

# Enlaces

<p class="description">El componente Enlace le permite personalizar fácilmente los elementos de anclaje con los colores y estilos tipográficos de su tema.</p>

{{"component": "@vandlee/docs/ComponentLinkHeader"}}

## Enlaces básicos

El componente Link está construido sobre el componente [Typography](/u_ui/u-ui/api/typography/), lo que significa que puedes usar sus propiedades.

{{"demo": "es/Links.js"}}

Sin embargo, el componente Enlace (`<Link />`) tiene algunos props por defecto diferentes a los del componente Tipografía:

- `color="primary"` ya que el enlace necesita destacar.
- Variant="inherit"` ya que el enlace, la mayoría de las veces, se utilizará como hijo de un componente tipográfico.

## Subrayado

La propiedad `underline` puede usarse para establecer el comportamiento del subrayado. Por defecto es `siempre`.

{{"demo": "es/UnderlineLink.js"}}

## Seguridad

Cuando se utiliza `target="_blank"` con Enlaces, es [recomendable](https://developers.google.com/web/tools/lighthouse/audits/noopener) establecer siempre `rel="noopener"` o `rel="noreferrer"` cuando se enlaza a contenido de terceros.

- `rel="noopener"` impide que la nueva página pueda acceder a la propiedad `window.opener` y asegura que se ejecute en un proceso separado.
Sin esto, la página de destino puede potencialmente redirigir su página a una URL maliciosa.
- `rel="noreferrer"` tiene el mismo efecto, pero también evita que la cabecera _Referer_ se envíe a la nueva página.
⚠️ Eliminar la cabecera referrer afectará a los análisis.

## Librería de enrutamiento de terceros

Un caso de uso frecuente es realizar la navegación sólo en el cliente, sin un viaje de ida y vuelta HTTP al servidor.
El componente Enlace (`Link`) proporciona la propiedad `component` para manejar este caso de uso.
Aquí hay una [guía más detallada](/u_ui/u-ui/integrations/routing/#enlace).

## Accesibilidad

(WAI-ARIA (Inglés): https://www.w3.org/WAI/ARIA/apg/patterns/link/)

- Cuando proporcione el contenido del enlace, evite descripciones genéricas como "Haga clic aquí" o "vaya a".
En su lugar, utilice [descripciones específicas (Inglés)](https://developers.google.com/web/tools/lighthouse/audits/descriptive-link-text).
- Para una mejor experiencia de usuario, los enlaces deben destacar sobre el texto de la página. Por ejemplo, puede mantener el comportamiendo predeterminado `underline="always"`.

- If a link doesn't have a meaningful href, [it should be rendered using a `<button>` element](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md).
  The demo below illustrates how to properly link with a `<button>`:

- Si un enlace no tiene un href significativo, [debería mostrarse utilizando un elemento `<button>` (Inglés)](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md).
La ​​demostración a continuación muestra cómo crear un enlace correctamente con un `<button>`:

{{"demo": "es/ButtonLink.js"}}

### Accesibilidad del teclado

- Los elementos interactivos deben recibir el foco en un orden coherente cuando el usuario pulse la tecla <kbd class="key">Tab</kbd>.
- Los usuarios deben poder abrir un enlace pulsando <kbd class="key">Enter</kbd>.

### Accesibilidad para lectores de pantalla

- Cuando un enlace recibe el foco, los lectores de pantalla deben anunciar un nombre de enlace descriptivo.
Si el enlace se abre en una nueva ventana o pestaña del navegador, añada [`aria-label` (Inglés)](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA8) para informar a los usuarios de lectores de pantalla; por ejemplo, _"Para obtener mas información, visite la página Acerca de, que se abre en una nueva ventana."_