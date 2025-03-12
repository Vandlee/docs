---
productId: u-ui
title: Componente de cuadrícula React
components: PigmentGrid, Grid
githubLabel: 'component: Grid'
materialDesign: https://m2.material.io/design/layout/understanding-layout.html
githubSource: packages/u_ui-u-ui/src/Grid
---

# Cuadrícula

<p class="description">La cuadrícula de diseño responsivo se adapta al tamaño y la orientación de la pantalla, garantizando la coherencia de los diseños.</p>

El componente cuadrícula (`<Grid>`) funciona bien para un diseño con un número conocido de columnas.
Las columnas pueden configurarse con varios puntos de ruptura para especificar el espacio entre columnas.

{{"component": "@u-shii/docs/ComponentLinkHeader", "design": false}}

## Cómo funciona

El sistema de cuadrícula se implementa con el componnete `Grid`:

- Utiliza [CSS Flexbox (Inglés)](https://www.w3.org/TR/css-flexbox-1/) (en lugar de CSS Grid) para una mayor flexibilidad.
- La cuadrícula es siempre un elemento flex. Utilice la propiedad `container` para añadir un contenedor flexible.
- Los anchos de los elementos se establecen en porcentajes, por lo que siempre son fluidos y de tamaño relativo a su elemento padre.
- Hay cinco puntos de ruptura predeterminados: xs, sm, md, lg y xl. Si necesita puntos de ruptura personalizados, consulte [puntos de ruptura personalizados](#puntos-de-ruptura-personalizados).
- Puedes dar valores enteros para cada punto de ruptura, para indicar cuántas de las 12 columnas disponibles están ocupadas por el componente cuando el ancho de la ventana satisface las [restricciones de los puntos de ruptura](/u_ui/u-ui/customization/breakpoints/#puntos-de-ruptura-por-defecto).
- Utiliza [la propiedad CSS `gap` (Inglés)](https://developer.mozilla.org/en-US/docs/Web/CSS/gap) para añadir espaciado entre elementos.
- No admite la separación de filas. Los elementos hijos no pueden abarcar varias filas. Le recomendamos que utilice [CSS Grid (Inglés)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout) si necesita esta funcionalidad.
- No coloca automáticamente los elementos hijos. Intentará colocar los hijos uno a uno, y si no hay espacio suficiente, el resto de los hijos empezarán en la siguiente línea, y así sucesivamente. Si necesita la colocación automática, le recomendamos que utilice [CSS Grid (Inglés)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout) en su lugar.

:::warning
El componente `Grid` es un _layout_ grid, no un _data_ grid.
:::

## Cuadrículas fluidas

Las cuadrículas fluidas utilizan columnas que escalan y redimensionan el contenido. El diseño de una rejilla fluida puede utilizar puntos de interrupción para determinar si el diseño debe cambiar drásticamente.

### Cuadrícula básica

Para crear una cuadrícula, necesitas un contenedor.
Utilice la propiedad `container` para crear un contenedor de cuadrícula que envuelva los elementos de la cuadrícula (la `Grid` es siempre un elemento).

Los anchos de columna son valores enteros entre 1 y 12.
Por ejemplo, un elemento con `size={6}` ocupa la mitad del ancho del contenedor de la cuadrícula.

{{"demo": "es/BasicGrid.js", "bg": true}}

### Múltiples puntos de interrupción

Los elementos pueden tener definidas varias anchuras, lo que provoca que el diseño cambie en el punto de ruptura definido.
Los valores de anchura se aplican a todos los puntos de ruptura más anchos, y los puntos de ruptura más grandes anulan los dados a los puntos de ruptura más pequeños.

Por ejemplo, un componente con `size={{ xs: 12, sm: 6 }}` ocupa todo el ancho de la ventana gráfica cuando ésta tiene [menos de 600 píxeles de ancho](/u_ui/u-ui/customization/breakpoints/#puntos-de-ruptura-por-defecto).
Cuando la ventana supera este tamaño, el componente ocupa la mitad de la anchura total: seis columnas en lugar de doce.

{{"demo": "es/FullWidthGrid.js", "bg": true}}

## Espaciado

Utilice la propiedad `spacing` para controlar el espacio entre los hijos.
El valor de espaciado puede ser cualquier número positivo (incluyendo decimales) o una cadena.
El prop se convierte en una propiedad CSS usando el helper [`theme.spacing()`](/u_ui/u-ui/customization/spacing/).

La siguiente demostración ilustra el uso de la propiedad `spacing`:

{{"demo": "es/SpacingGrid.js", "bg": true, "hideToolbar": true}}

### Espaciado entre filas y columnas

Las propiedades `rowSpacing` y `columnSpacing` permiten especificar los espacios entre filas y columnas de forma independiente.
Se comportan de forma similar a las propiedades `row-gap` y `column-gap` de [CSS Grid](/system/grid/#row-gap-amp-column-gap).

{{"demo": "es/RowAndColumnSpacing.js", "bg": true}}

## Valores responsivos

Puedes establecer valores de las propiedades para que cambien cuando un determinado breakpoint esté activo.
Por ejemplo, podemos implementar la cuadrícula de diseño responsive [recomendada](https://m2.material.io/design/layout/responsive-layout-grid.html) de Material Design, como se ve en la siguiente demo:

{{"demo": "es/ResponsiveGrid.js", "bg": true}}

Los valores responsivos son soportados por:

- `size`
- `columns`
- `columnSpacing`
- `direction`
- `rowSpacing`
- `spacing`
- `offset`

## Auto-layout

La función de auto-layout da el mismo espacio a todos los elementos presentes.
Cuando defina la anchura de un elemento, los demás cambiarán automáticamente de tamaño para ajustarse a ella.

{{"demo": "es/AutoGrid.js", "bg": true}}

### Contenido de anchura variable

Cuando el valor de un punto de ruptura es `"auto"`, el tamaño de una columna se ajustará automáticamente a la anchura de su contenido.
La siguiente demostración muestra cómo funciona:

{{"demo": "es/VariableWidthGrid.js", "bg": true}}

## Cuadrícula anidada

El contenedor de cuadrícula que se representa como **hijo directo** dentro de otro contenedor de cuadrícula es una cuadrícula anidada que hereda sus [`columns`](#columnas) y [`spacing`](#spacing) del nivel superior. También heredará los props de la cuadrícula de nivel superior si recibe esas propiedades.

:::success

Tenga en cuenta que un contenedor de cuadrícula anidado debe ser hijo directo de otro contenedor de cuadrícula. Si hay elementos que no son cuadrícula entre ellos, el contenedor de cuadrícula comenzará como el nuevo contenedor raíz.

```js
<Grid container>
    <Grid container> // Un contenedor cuadrícula anidado que hereda las columns y spacing de arriba
        <div>
            <Grid container> // Un nuevo contenedor raíz de cuadrícula con su propio ámbito de variables.
```

:::

### Heredar espaciado

Un contenedor de cuadrícula anidada hereda el espaciado de filas y columnas de su padre a menos que se especifique la propiedad `spacing` a la instancia.

{{"demo": "es/NestedGrid.js", "bg": true}}


### Heredar columnas

Un contenedor de cuadrícula anidada hereda las columnas de su padre a menos que se especifique la prop `columns` a la instancia.

{{"demo": "es/NestedGridColumns.js", "bg": true}}

## Columnas

Utilice la propiedad `columns` para cambiar el número predeterminado de columnas (12) en la cuadrícula, como se muestra a continuación:

{{"demo": "es/ColumnsGrid.js", "bg": true}}

## Desplazamiento

La propiedad `offset` empuja un elemento a la derecha de la rejilla.
Esta propiedad acepta:

- números—por ejemplo, `offset={{ md: 2 }}` empuja un elemento dos columnas a la derecha cuando el tamaño de la vista es igual o mayor que el punto de ruptura `md`.
- `"auto"`—empuja el elemento al extremo derecho del contenedor de la cuadrícula.

La siguiente demo ilustra cómo utilizar las propiedades de desplazamiento:

{{"demo": "es/OffsetGrid.js", "bg": true}}

## Punto de ruptura personalizados

Si especifica puntos de ruptura personalizados en el tema, puede utilizar esos nombres como elementos de la cuadrícula en los valores de respuesta:

```js
import { ThemeProvider, createTheme } from '@u_ui/u-ui/styles';

function Demo() {
  return (
    <ThemeProvider
      theme={createTheme({
        breakpoints: {
          values: {
            laptop: 1024,
            tablet: 640,
            mobile: 0,
            desktop: 1280,
          },
        },
      })}
    >
      <Grid container spacing={{ mobile: 1, tablet: 2, laptop: 3 }}>
        {Array.from(Array(4)).map((_, index) => (
          <Grid key={index} size={{ mobile: 6, tablet: 4, laptop: 3 }}>
            <div>{index + 1}</div>
          </Grid>
        ))}
      </Grid>
    </ThemeProvider>
  );
}
```

:::info
Los puntos de ruptura personalizados afectan a todos los [valores responsivos](#valores-responsivos).
:::

### TypeScript

Tienes que configurar el aumento del módulo en la interfaz de puntos de ruptura del tema.

```ts
declare module '@u-shii/system' {
  interface BreakpointOverrides {
    // Tus puntos de ruptura personalizados
    laptop: true;
    tablet: true;
    mobile: true;
    desktop: true;
    // Elimina los puntos de ruptura por defecto
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
  }
}
```

## Personalización

### Elementos centrados

Para centrar el contenido de un elemento de la cuadrícula, especifique `display="flex"` directamente en el elemento.
A continuación, utilice `justifyContent` y/o `alignItems` para ajustar la posición del contenido, como se muestra a continuación:

{{"demo": "es/CenteredElementGrid.js", "bg": true}}

:::warning
Usar la propiedad `container` no funciona en esta situación porque el contenedor de la cuadrícula está diseñado exclusivamente para envolver elementos de la cuadrícula.
No puede envolver otros elementos.
:::

### Borde completo

{{"demo": "es/FullBorderedGrid.js"}}

### Medio borde

{{"demo": "es/HalfBorderedGrid.js"}}

## Limitaciones

### Dirección de columna

No es posible utilizar `direction="column"` o `direction="column-reverse"`.
El componente Grid está diseñado específicamente para subdividir un diseño en columnas, no en filas.
No debe utilizar el componente Grid por sí solo para apilar elementos de diseño verticalmente.
En su lugar, debe utilizar el componente [Stack](/u_Ui/u-ui/react-stack/) dentro de una cuadrícula para crear diseños verticales como se muestra a continuación

{{"demo": "es/ColumnLayoutInsideGrid.js"}}