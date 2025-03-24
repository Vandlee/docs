---
productId: u-ui
title: Componente de tipografía de React
components: Typography
githubLabel: 'component: Typography'
materialDesign: https://m2.material.io/design/typography/the-type-system.html
githubSource: packages/u_ui-u-ui/src/Typography
---

# Tipografía

<p class="description">Utilice la tipografía para presentar su diseño y contenido de la forma más clara y eficaz posible.</p>

{{"component": "@vandlee/docs/ComponentLinkHeader"}}

## Fuentes

U-Ui utiliza la fuente [Quicksand](https://fonts.google.com/specimen/Quicksand) y [Roboto](https://fonts.google.com/specimen/Roboto) por defecto.
Añádela a tu proyecto a través de Fontsource, o con el CDN de Google Fonts.

:::info
Fontsource puede configurarse para cargar subconjuntos, pesos y estilos específicos. La configuración tipográfica por defecto de U-Ui se basa únicamente en los pesos de fuente 300, 400, 500 y 700.
:::

### Quicksand

<codeblock storageKey="package-manager">

```bash npm
npm install @fontsource-variable/quicksand
```

```bash pnpm
pnpm add @fontsource-variable/quicksand
```

```bash yarn
yarn add @fontsource-variable/quicksand
```

```bash bun
bun add @fontsource-variable/quicksand
```

</codeblock>

A continuación, puede importarlo en su punto de entrada de la siguiente manera:

```jsx 
// Soporta pesos (weights) de 300-700
import '@fontsource-variable/quicksand';
```

### Roboto

<codeblock storageKey="package-manager">

```bash npm
npm install @fontsource/roboto
```

```bash pnpm
pnpm add @fontsource/roboto
```

```bash yarn
yarn add @fontsource/roboto
```

</codeblock>

A continuación, puede importarlo en su punto de entrada de la siguiente manera:

```tsx
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
```

### Google Web Fonts

Para instalar Quicksand y/o Roboto a través de la CDN de Google Web Fonts, añada el siguiente código dentro de la etiqueta `<head />` de su proyecto:

```html
<!-- Instalar Quicksand -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap" rel="stylesheet">

<!-- Instalar Roboto -->
 <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
/>
```

## Componente

### Uso

El componente Tipografía sigue la [escala tipográfica de Material Design](https://m2.material.io/design/typography/#type-scale) que proporciona un conjunto limitado de tamaños de letra que funcionan bien juntos para un diseño coherente.

{{"demo": "es/Types.js"}}

### Claves temáticas

En algunas situaciones es posible que no pueda utilizar el componente Typography.
Con suerte, podrá aprovechar las claves [`typography`](/u_ui/u-ui/customization/default-theme/?expand-path=$.typography) del tema.

{{"demo": "es/TypographyTheme.js"}}

## Personalización

### Añadir y desactivar variantes

Además de utilizar las variantes tipográficas predeterminadas, puede añadir variantes personalizadas o desactivar las que no necesite. Consulte la página [Añadir y desactivar variantes](/u_ui/u-ui/customization/typography/#adding-amp-disabling-variants) para más información.

### Cambiar el elemento semántico

El componente Tipografía utiliza la propiedad `variantMapping` para asociar una variante de interfaz de usuario con un elemento semántico.
Es importante tener en cuenta que el estilo de un componente tipográfico es independiente del elemento semántico subyacente.

Para cambiar el elemento subyacente para una situación puntual, como evitar dos elementos `h1` en tu página, utiliza la propiedad `component`:

```jsx
<Typography variant="h1" component="h2">
  h1. Heading
</Typography>
```

Para cambiar el mapeo del elemento tipografía globalmente, [use el tema](/u_ui/u-ui/customization/typography/#adding-amp-disabling-variant):

```js
const theme = createTheme({
  components: {
    uiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h2',
          h2: 'h2',
          h3: 'h2',
          h4: 'h2',
          h5: 'h2',
          h6: 'h2',
          subtitle1: 'h2',
          subtitle2: 'h2',
          body1: 'span',
          body2: 'span',
        },
      },
    },
  },
});
```

### Props del sistema

:::info
Las props del sistema están obsoletas y serán eliminadas en la próxima versión. Por favor, utilice la propiedad `sx` en su lugar.

```diff
- <Typography mt={2} />
+ <Typography sx={{ mt: 2 }}>
```

:::

## Accesibilidad

Factores clave a seguir para una tipografía accesible:

- **Color**. Proporcione suficiente contraste entre el texto y su fondo, compruebe la relación de contraste de color mínima recomendada [WCAG 2.0 (Inglés)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html) (4.5:1).
- **Tamaño de letra**. Utilice [unidades relativas (rem)](/u_ui/u-ui/customization/typography/#font-size), en lugar de píxeles, para adaptarse a la configuración del navegador del usuario.
- **Jerarquía de encabezados**. Basándose en [las directrices W3 (Inglés)](https://www.w3.org/WAI/tutorials/page-structure/headings/), no se salte los niveles de encabezado. Asegúrese de [separar la semántica del estilo](#cambiar-el-elemento-semántico).