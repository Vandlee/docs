---
productId: u-ui
title: Componente Tarjeta de React
components: Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Collapse, Paper
githubLabel: 'component: card'
materialDesign: https://m2.material.io/components/cards
githubSource: packages/u_ui-u-ui/src/Card
---

# Tarjeta

<p class="description">Las tarjetas contienen contenidos y acciones sobre un mismo tema.</p>

{{"component": "@vandlee/docs/ComponentLinkHeader"}}

## Introducción

Las tarjetas son superficies que muestran contenidos y acciones sobre un único tema. El componente Tarjeta de U-Ui incluye varios componentes de utilidad complementarios para gestionar diversos casos de uso:

- **Tarjeta** (`Card`): un contenedor a nivel de superficie para agrupar componentes relacionados.
- **Contenido de la tarjeta** (`CardContent`): envoltura del contenido de la tarjeta.
- **Encabezado de la tarjeta** (`CardHeader`): una envoltura opcional para la cabecera de la Tarjeta.
- **Tarjeta multimedia** (`CardMedia`): un contenedor opcional para mostrar imágenes, videos, etc.
- **Acciones de la tarjeta** (`CardActions`): una envoltura opcional que agrupa un conjunto de botones.
- **Área de Acción de la Tarjeta** (`CardActionArea`): una envoltura opcional que permite a los usuarios interactuar con el área especificada de la Tarjeta.

{{"demo": "es/BasicCard.js", "bg": true}}

## Conceptos básicos

```jsx
import Card from '@u_ui/u-ui/Card';
import CardContent from '@u_ui/u-ui/CardContent';
```

:::success
Aunque las tarjetas pueden admitir múltiples acciones, controles de interfaz de usuario y un menú de desbordamiento, actúe con moderación y recuerde que las tarjetas están pensadas como puntos de entrada a información más compleja y detallada.
:::

## Tarjeta delineada

Establezca `variant="outlined"` para mostrar una tarjeta con contorno.

{{"demo": "es/OutlinedCard.js", "bg": true }}

## Interacción compleja

En el escritorio, el contenido de la tarjeta puede expandirse. (Haga clic en el la flecha hacia abajo para ver la receta).

{{"demo": "es/RecipeReviewCard.js", "bg": true}}

## Medios

Ejemplo de tarjeta que utiliza una imagen para reforzar el contenido.

{{"demo": "es/MediaCard.js", "bg": true}}

Por defecto, utilizamos la combinación de un elemento `<div>` y una _background image_ para mostrar los medios. Esto puede ser problemático en algunas situaciones, por ejemplo, si quieres mostrar un vídeo o una imagen responsiva. Utiliza la propiedad `component` para estos casos:

{{"demo": "es/ImgMediaCard.js", "bg": true}}

## Acción principal

A menudo una tarjeta permite a los usuarios interactuar con la totalidad de su superficie para desencadenar su acción principal, ya sea una expansión, un enlace a otra pantalla o algún otro comportamiento. El área de acción de la tarjeta puede especificarse envolviendo su contenido en un componente `CardActionArea`.

{{"demo": "es/ActionAreaCard.js", "bg": true}}

Una tarjeta también puede ofrecer acciones suplementarias que deben estar separadas del área de acción principal para evitar el solapamiento de eventos.

{{"demo": "es/MultiActionAreaCard.js", "bg": true}}

## Controles de IU

Las acciones complementarias dentro de la tarjeta se indican explícitamente mediante iconos, texto y controles de interfaz de usuario, situados normalmente en la parte inferior de la tarjeta.

He aquí un ejemplo de tarjeta de control multimedia.

{{"demo": "es/MediaControlCard.js", "bg": true}}

## Estilos de estado activo

Para personalizar los estilos de una Tarjeta cuando está en estado activo, puede adjuntar un atributo `data-active` al componente Área de acción (`CardAction`) de la Tarjeta y aplicar estilos con el selector `&[data-active]`, como se muestra a continuación:

{{"demo": "es/SelectActionCard.js", "bg": true}}

🎨 Si buscas inspiración, puedes consultar [Ejemplos de personalización de MUI Treasury](https://mui-treasury.com/?path=/docs/card-introduction--docs).