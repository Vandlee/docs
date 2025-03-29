---
productId: u-ui
title: Componente de Pila React
components: Stack, PigmentStack
githubLabel: 'component: Stack'
githubSource: packages/u_ui-u-ui/src/Stack
---

# Pila

<p class="description">Pila (Stack) es un componente contenedor para organizar elementos vertical u horizontalmente.</p>

## Introducción

El componente Pila (`Stack`) gestiona la disposición de sus hijos inmediatos a lo alrgo del eje vertical u horizontal, con espaciado y separadores opcionales entre cada hijo.

:::info
Stack es ideal para diseños unidimensionales, mientras que Grid (Cuadrícula) es preferible cuando se necesita una disposición vertical _y_ horizontal.
:::

{{"component": "@vandlee/docs/ComponentLinkHeader"}}

## Conceptos básicos

```jsx
import Stack from '@u_ui/u-ui/Stack';
```

El componente Pila actúa como un contenedor genérico, envolviendo los elementos a organizar.

Utilice la propiedad `spacing` para controlar el espacio entre los elementos secundarios. El valor de espaciado puede ser cualquier número, incluyendo decimales, o una cadena de texto.
(La propiedad se convierte en una propiedad CSS usando el helper [`theme.spacing()`](/u_ui/u-ui/customization/spacing/).)

{{"demo": "es/BasicStack.js", "bg": true}}

### Stack vs. Grid

`Stack` se ocupa de diseños unidimensionales, mientras que [`Grid`](/u_ui/u-ui/react-grid/) maneja diseños bidimensionales. La dirección por defecto es `column` que apila los hijos verticalmente.

## Dirección

Por defecto, `Stack` ordena los elementos verticalmente en una columna.
Utilice la propiedad `direction` para colocar los elementos horizontalmente en una fila:

{{"demo": "es/DirectionStack.js", "bg": true}}

## Divisores

Utilice la propiedad `divider` para insertar un elemento entre cada hijo.
Esto funciona particularmente bien con el componente [Divider](/u_ui/u-ui/react-divider/), como se muestra a continuación:

{{"demo": "es/DividerStack.js", "bg": true}}

## Valores responsivos

Puede cambiar los valores `direction` o `spacing` en función del punto de ruptura activo.

{{"demo": "es/ResponsiveStack.js", "bg": true}}

## Flexbox gap

Para usar [flexbox `gap` (Inglés)](https://developer.mozilla.org/en-US/docs/Web/CSS/gap) para la implementación del espaciado, establece la propiedad `useFlexGap` a true.

Elimina las [limitaciones conocidas](#limitaciones) de la implementación por defecto que utiliza el selector anidado CSS. Sin embargo, CSS flexblox gap no está totalmente soportado en algunos navegadores.

Recomendamos comprobar el [porcentaje de soporte](https://caniuse.com/?search=flex%20gap) antes de usarlo.

{{"demo": "es/FlexboxGapStack.js", "bg": true}}

Para establecer la propiedad en todas las instancias de la pila, cree un tema con props por defecto:

```js
import { ThemeProvider, createTheme } from '@u_ui/u-ui/styles';
import Stack from '@u_ui/u-ui/Stack';

const theme = createTheme({
  components: {
    uiStack: {
      defaultProps: {
        useFlexGap: true,
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Stack>…</Stack> {/* usa flexbox gap por defecto */}
    </ThemeProvider>
  );
}
```

## Limitaciones

### Margen en los hijos

La personalización del margen de los componentes secundarios no es posible por defecto.

Por ejemplo, el margen superior del componente `Button` será ignorado.

```jsx
<Stack>
  <Button sx={{ marginTop: '30px' }}>...</Button>
</Stack>
```

:::success
Para superar esta limitación, establezca la propiedad [`useFlexGap`](#flexbox-gap) a true para cambiar a la implementación de CSS flexbox gap.

Puede obtener más información sobre esta limitación visitando esta [RFC](https://github.com/mui/material-ui/issues/33754).
:::

### white-space: nowrap

La configuración inicial de los elementos flex es `min-width: auto`.
Esto causa un conflicto de posicionamiento cuando los hijos utilizan `white-space: nowrap;`.
Puede reproducir el problema con:

```jsx
<Stack direction="row">
  <Typography noWrap>
```

Para que el elemento permanezca dentro del contenedor es necesario establecer `min-width: 0`.

```jsx
<Stack direction="row" sx={{ minWidth: 0 }}>
  <Typography noWrap>
```

{{"demo": "es/ZeroWidthStack.js", "bg": true}}

## Anatomía

El componente Stack está compuesto por un único elemento raíz `<div>`:

```html
<div class="uiStack-root">
  <!-- Contenido de la pila -->
</div>
```
