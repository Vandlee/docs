---
productId: u-ui
components: CssBaseline, ScopedCssBaseline
githubLabel: 'component: CssBaseline'
githubSource: packages/u_ui-u-ui/src/CssBaseline
---

# Base CSS

<p class="description">El componente CssBaseline ayuda a poner en marcha una línea de base elegante, coherente y sencilla sobre la que construir.</p>

{{"component": "@vandlee/docs/ComponentLinkHeader", "design": false}}

## Restablecimiento global

Puede que esté familiarizado con [normalize.css](https://github.com/necolas/normalize.css), una colección de normalizaciones de estilo de elementos y atributos HTML.

```jsx
import * as React from 'react';
import CssBaseline from '@u_ui/u-ui/CssBaseline';

export default function MyApp() {
  return (
    <React.Fragment>
      <CssBaseline />
      {/* El resto de tu aplicación */}
    </React.Fragment>
  );
}
```

## Scoping en los hijos

Sin embargo, si estás migrando progresivamente un sitio web a U-Ui, usar un reset global puede no ser una opción.
Es posible aplicar la línea de base sólo a los hijos utilizando el componente `ScopedCssBaseline`.

```jsx
import * as React from 'react';
import ScopedCssBaseline from '@u_ui/u-ui/ScopedCssBaseline';
import MyApp from './MyApp';

export default function MyApp() {
  return (
    <ScopedCssBaseline>
      {/* El resto de tu aplicación */}
      <MyApp />
    </ScopedCssBaseline>
  );
}
```

⚠️ Asegúrate de importar primero `ScopedCssBaseline` para evitar conflictos de tamaño de caja como en el ejemplo anterior.

## Aproximación

### Página

Los elementos `<html>` y `<body>` se actualizan para ofrecer mejores valores predeterminados para toda la página. Más concretamente:

- Se elimina el margen en todos los navegadores.
- Se aplica el color de fondo por defecto de U-Ui.
  Se utiliza [`theme.palette.background.default`](/u_ui/u-ui/customization/default-theme/?expand-path=$.palette.background) para dispositivos estándar y un fondo blanco para dispositivos de impresión.
- Si se proporciona `enableColorScheme` a `CssBaseline`, el color de los componentes nativos se establecerá aplicando [`color-scheme` (Inglés)](https://web.dev/articles/color-scheme) en `<html>`.
  El valor utilizado es proporcionado por la propiedad de tema `theme.palette.mode`.

### Diseño

- `box-sizing` se establece globalmente en el elemento `<html>` a `border-box`.
  Todos los elementos, incluyendo `*::before` y `*::after` están declarados para heredar esta propiedad,
  lo que garantiza que la anchura declarada del elemento nunca se supere debido al relleno o al borde.

### Barras de desplazamiento

:::error
Esta API está obsoleta.
Considere usar [color-scheme](#color-scheme) en su lugar.
:::

Los colores de las barras de desplazamiento pueden personalizarse para mejorar el contraste (especialmente en Windows). Añade este código a tu tema (para el modo oscuro).

```jsx
import darkScrollbar from '@mui/material/darkScrollbar';

const theme = createTheme({
  components: {
    uiCssBaseline: {
      styleOverrides: (themeParam) => ({
        body: themeParam.palette.mode === 'dark' ? darkScrollbar() : null,
      }),
    },
  },
});
```

Tenga en cuenta, sin embargo, que el uso de esta utilidad (y la personalización de `-webkit-scrollbar`) obliga a macOS a mostrar siempre la barra de desplazamiento.

### Esquema de color

Esta API se introduce en @mui/material (v5.1.0) para cambiar entre los modos `"claro"` y `"oscuro"` de componentes nativos como la barra de desplazamiento, utilizando la propiedad CSS `color-scheme`.
Para habilitarlo, puede establecer `enableColorScheme=true` de la siguiente manera:

```jsx
<CssBaseline enableColorScheme />

// or

<ScopedCssBaseline enableColorScheme >
  {/* El resto de su aplicación utilizando esquema de color */}
</ScopedCssBaseline>
```

### Tipografía

- No se declara un tamaño de fuente base en `<html>`, pero se asume 16px (el predeterminado del navegador).
  Puedes aprender más sobre las implicaciones de cambiar el tamaño de fuente por defecto de `<html>` en la página [the theme documentation](/u_ui/u-ui/customization/typography/#html-font-size).
- Establece el estilo `theme.typography.body1` en el elemento `<body>`.
- Establece el font-weight a `theme.typography.fontWeightBold` para los elementos `<b>` y `<strong>`.
- Se ha activado el suavizado de fuente personalizado para mejorar la visualización de la fuente Roboto.

## Personalización

Dirígete a la sección [personalización global](/u_ui/u-ui/customization/how-to-customize/#4-global-css-override) de la documentación para cambiar la salida de estos componentes.