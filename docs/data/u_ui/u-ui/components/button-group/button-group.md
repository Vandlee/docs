---
productId: u-ui
title: Componente Grupo de botones de React
components: Button, ButtonGroup
githubLabel: 'componente: ButtonGroup'
githubSource: packages/u-shii-ui/src/ButtonGroup
---

# Grupo de botones

<p class="description">El componente ButtonGroup puede utilizarse para agrupar botones relacionados.</p>

{{"component": "@u-shii/docs/ComponentLinkHeader"}}

## Grupo de botones básico

Los botones pueden agruparse envolviéndolos con el componente `ButtonGroup`.
Tienen que ser hijos inmediatos.

{{"demo": "es/BasicButtonGroup.js", "bg": "outlined"}}

## Variantes de botones

Se admiten todas las variantes de botones estándar.

{{"demo": "es/VariantButtonGroup.js", "bg": "outlined"}}

## Tamaños y colores

Los props `size` y `color` pueden utilizarse para controlar la apariencia del grupo de botones.

{{"demo": "es/GroupSizesColors.js", "bg": "outlined"}}

## Grupo vertical

El grupo de botones puede mostrarse verticalmente utilizando la propiedad `orientation`;

{{"demo": "es/GroupOrientation.js", "bg": "outlined"}}

## Botón dividido

`ButtonGroup` también puede utilizarse para crear un botón dividido. El desplegable puede cambiar la acción del botón (como en este ejemplo) o utilizarse para activar inmediatamente una acción relacionada.

{{"demo": "es/SplitButton.js", "bg": "outlined"}}

## Elevación deshabilitada

Puede eliminar la elevación con el `disableElevation` prop.

{{"demo": "es/DisableElevation.js", "bg": "outlined"}}

## Cargando

Utiliza la propiedad `loading` de `Button` para poner los botones en estado de carga y desactivar las interacciones.

{{"demo": "es/LoadingButtonGroup.js", "bg": "outlined"}}