---
productId: u-ui
title: No SSR React component
components: NoSsr
---

# No SSR

<p class="description">El componente No-SSR difiere la renderización de los componentes hijos del servidor al cliente.</p>

{{"component": "@vandlee/docs/ComponentLinkHeader", "design": false}}

{{"component": "modules/components/ComponentPageTabs.js"}}

## Introducción

No-SSR es un componente de utilidad que evita que sus hijos sean renderizados en el servidor.

Este componente puede ser útil en una variedad de situaciones:

- Para crear una escotilla de escape para las dependencias rotas que no soportan la renderización del lado del servidor (SSR).
- Para mejorar el tiempo hasta la primera pintura renderizando sólo por encima del pliegue
- Para reducir el tiempo de renderizado en el servidor
- Activar la degradación del servicio cuando la carga del servidor es demasiado pesada.
- Mejorar el Tiempo de Interacción (TTI) renderizando sólo lo que es importante (usando la propiedad `defer`).

## Componente

```jsx
import NoSsr from '@u_ui/u-ui/NoSsr';
```

En esencia, el propósito del componente No-SSR es diferir la renderización del servidor al cliente, como se muestra en la siguiente demostración:

{{"demo": "es/SimpleNoSsr.js"}}

## Personalización

### Retrasar la renderización del lado del cliente

También puede utilizar No-SSR para retrasar la renderización de componentes específicos en el lado del cliente, por ejemplo, para permitir que el resto de la aplicación se cargue antes que un componente especialmente complejo o con muchos datos.

La siguiente demostración muestra cómo utilizar la propiedad `defer` para priorizar la renderización del resto de la aplicación fuera de lo que está anidado dentro de No-SSR:

{{"demo": "es/FrameDeferring.js"}}

:::warning
Cuando se utiliza No-SSR de esta manera, React aplica [dos commits (Inglés)](https://react.dev/learn/render-and-commit) en lugar de uno.
:::