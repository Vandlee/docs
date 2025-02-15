---
productId: u-ui
title: Componente Chip de React
components: Chip
githubLabel: 'component: chip'
materialDesign: https://m2.material.io/components/chips
githubSource: packages/u-shii-ui/src/Chip
---

# Chip

<p class="description">Los chips son elementos compactos que representan una entrada, un atributo o una acción.</p>

Los chips permiten a los usuarios introducir información, realizar selecciones, filtrar contenido o desencadenar acciones.

Aunque se incluyen aquí como un componente independiente, el uso más común será en alguna forma de entrada. más común será en alguna forma de entrada, por lo que algunos de los comportamientos no se muestra en contexto.

{{"component": "@u-shii/docs/ComponentLinkHeader"}}

## Chip básico

El componente `Chip` admite estilos de contorno y relleno.

{{"demo": "es/BasicChips.js"}}

## Acciones de chip

Puedes utilizar las siguientes acciones.

- Los chips con la propiedad `onClick` definida cambian de apariencia al enfocar, al pasar el ratón y al hacer clic.
- Las fichas con la propiedad `onDelete` definida mostrarán un icono de borrado que cambia de apariencia al pasar el ratón por encima.

### Cliqueable

{{"demo": "es/ClickableChips.js"}}

### Se puede eliminar

{{"demo": "es/DeletableChips.js"}}

### Cliqueable y eliminable

{{"demo": "es/ClickableAndDeletableChips.js"}}

### Enlace cliqueable

{{"demo": "es/ClickableLinkChips.js"}}

### Icono de eliminación personalizado

{{"demo": "es/CustomDeleteIconChips.js"}}

***

## Adornos de chips

Puede añadir adornos al principio del componente.

Utiliza la propiedad `icon` para añadir un icono.

### Icono de chip

{{"demo": "es/IconChips.js"}}

***

## Chip de color

Puedes usar la prop `color` para definir un color de la paleta de temas.

{{"demo": "es/ColorChips.js"}}

## Tamaños de chip

Puedes utilizar la proposición `size` para definir un Chip pequeño.

{{"demo": "es/SizesChips.js"}}

## Chip multilínea

Por defecto, los chips muestran las etiquetas en una sola línea.
Para que admitan contenido multilínea, utilice la propiedad `sx` para añadir `height:auto` al componente Chip, y `whiteSpace: normal` a los estilos `label`.

{{"demo": "es/MultilineChips.js"}}

## Matriz de chips

Ejemplo de representación de varias fichas a partir de una matriz de valores.
Borrar una ficha la elimina del array (matriz). Ten en cuenta que como no está definida la propiedad `onClick`, el `Chip` puede ser enfocado, pero no gana profundidad mientras es pulsado o tocado.

{{"demo": "es/ChipsArray.js"}}

## Accesibilidad

Si el Chip es borrable o cliqueable entonces es un botón en orden de tabulación. Cuando el Chip está enfocado (por ejemplo al tabular) al soltar (evento `keyup`) `Backspace` o `Delete` se llamará al manejador `onDelete` mientras que al soltar `Escape` se desenfocará el Chip.
