---
productId: u-ui
title: React Box
components: Box
githubLabel: 'component: Box'
githubSource: packages/u_ui/u-ui/src/Box
---

# Caja

<p class="description">El componente Caja es un contenedor genérico temático con acceso a las utilidades CSS del Sistema U-Ui.</p>

{{"component": "@u-shii/docs/ComponentLinkHeader", "design": false}}

## Introducción

El componente Caja (`Box` de ahora en adelante) es un contenedor genérico para agrupar otros componentes.
Es un bloque de construcción fundamental cuando se trabaja con U-Ui—puedes pensar en él como un `<div>` con características adicionales incorporadas, como el acceso al tema de tu aplicación y la [propiedad `sx`](/system/getting-started/the-sx-prop/).

### Uso

El componente Box se diferencia de otros contenedores disponibles en U-Ui en que su uso está pensado para ser polivalente y abierto, como un `<div>`.
Los componentes como [Container](/u_ui/u-ui/react-container/), [Stack](/u_ui/u-ui/react-stack/) y [Paper](/u_ui/u-ui/react-paper/), por el contrario, cuentan con accesorios de uso específico que los hacen ideales para determinados casos de uso:
`Container` para la orientación principal del diseño, `Stack` para diseños unidimensionales y `Paper` para superficies elevadas.

## Conceptos básicos

```jsx
import Box from '@u_ui/u-ui/Box';
```

El componente Box se renderiza como un `<div>` por defecto, pero puedes sustituirlo por cualquier otra etiqueta HTML válida o componente React utilizando la propiedad `component`.
La demo de abajo reemplaza el `<div>` por un elemento `<section>`:

{{"demo": "es/BoxBasic.js", "defaultCodeOpen": true }}

## Personalización

### Con la propiedad sx

Use la [propiedad `sx`](/system/getting-started/the-sx-prop/) para personalizar rápidamente cualquier instancia de Box usando un superconjunto de CSS que tiene acceso a todas las funciones de estilo y propiedades temáticas expuestas en el paquete u-shii system.
El demo de abajo muestra como aplicar colores del tema usando esta propiedad:

{{"demo": "es/BoxSx.js", "defaultCodeOpen": true }}

## Anatomía

El componente Box está compuesto por un único elemento raíz `<div>`:

```html
<div className="UshiiBox-root">
    <!-- Contenido de la caja> -->
</div>
```