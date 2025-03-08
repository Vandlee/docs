---
productId: u-ui
title: Componente de Papel de React
components: Paper
githubLabel: 'component: Paper'
materialDesign: https://m2.material.io/design/environment/elevation.html
githubSource: packages/u_ui-u-ui/src/Paper
---

# Papel (Paper)

<p class="description">El componente Papel es un contenedor para mostrar contenidos en una superficie elevada.</p>

{{"component": "@u-shii/docs/ComponentLinkHeader"}}

## Introducción

En Material Design, los componentes de superficie y los estilos de sombra están fuertemente influenciados por sus homólogos físicos del mundo real.

U-Ui implementa este concepto como el componente Paper, una superficie similar a un contenedor que cuenta con la propiedad [`elevation`](#elevación) para extraer valores de sombra de caja (`box-shadow`) del tema.

:::success
El componente Papel es ideal para diseños que siguen el sistema de elevación de [Material Design](https://m2.material.io/design/environment/elevation.html#elevation-in-material-design), que pretende reproducir cómo la luz proyecta sombras en el mundo físico.

Si solo necesitas un contenedor genérico, puede que prefieras utilizar los componentes [Box](/u_ui/u-ui/react-box/) o [Container](/u_ui/u-ui/react-container/).
:::

{{"demo": "es/SimplePaper.js", "bg": true}}

## Componente

```jsx
import Paper from '@u_ui/u-ui/Paper';
```

## Personalización

### Elevación

Utilice la propiedad `elevation` para establecer jerarquías mediante el uso de sombras.
El nivel de elevación por defecto del componente Papel es `1`.
La propiedad acepta valores de `0` a `24`.
Cuanto mayor sea el número, más lejos parecerá estar el papel de su fondo.

En modo oscuro, al aumentar la elevación tambien se aclara el color del fondo.
Esto se consigue aplicando un degradado semitransparente con la propiedad CSS `background-image`.

:::warning
El comportamiento del modo oscuro antes mencionado puede llevar a confusión cuando se anula el componente Papel, porque cambiar la propiedad `background-color` no afectará al sombreado más claro.
Para anularlo, debe utilizar un nuevo valor de fondo o personalizar los valores de `background-color` y `background-image`.
:::

{{"demo": "es/Elevation.js", "bg": "outlined"}}

### Variantes

Establezca la variable `variant` prop en `"outlined"` para obtener un papel plano y contorneado sin sombras.

{{"demo": "es/Variants.js", "bg": true}}

### Esquinas

El componente Papel incluye esquinas redondeadas por defecto.
Añada la propiedad `square` para obtener esquinas cuadradas:

{{"demo": "es/SquareCorners.js", "bg": true}}

## Anatomía

El componente Papel esta compuesto por una única raíz `<div>` que envuelve su contenido:

```html
<div class="UshiiPaper-root">
    <!-- Contenido del papel -->
</div>
```