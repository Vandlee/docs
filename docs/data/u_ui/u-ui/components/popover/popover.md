---
productId: u-ui
title: Componente Popover de React
components: Grow, Popover
githubLabel: 'component: Popover'
githubSource: packages/u_ui/u-ui/src/Popover
---

# Popover

<p class="description">Un Popover se puede utilizar para mostrar un contenido encima de otro.</p>

Cosas a saber cuando se utiliza el componente `Popover`:

- El componente está construido sobre el componente [`Modal`](/u_ui/u-ui/react-modal/).
- A diferencia del componente [`Popper`](/u_ui/u-ui/react-popper/), el desplazamiento y el clic están bloqueados.

{{"component": "@vandlee/docs/ComponentLinkHeader", "design": false}}

## Popover básico

{{"demo": "es/BasicPopover.js"}}

## Interacción del ratón

Esta demo muestra cómo utilizar el componente `Popover` con los eventos `mouseenter` y `mouseleave` para conseguir un comportamiento popover.

{{"demo": "es/MouseHoverPopover.js"}}

## Elemento virtual

El valor de la proposición `anchorEl` puede ser una referencia a un elemento DOM falso.
Necesitas proporcionar un objeto con la siguiente interfaz:

```ts
interface PopoverVirtualElement {
  nodeType: 1;
  getBoundingClientRect: () => DOMRect;
}
```

Resalte parte del texto para ver la ventana emergente:

{{"demo": "es/VirtualElementPopover.js"}}

Para más información sobre las propiedades del elemento virtual, consulte los siguientes recursos (Inglés):

- [getBoundingClientRect](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)
- [DOMRect](https://drafts.fxtf.org/geometry-1/#domrectreadonly)
- [Node types](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType)

:::warning
El uso de un elemento virtual para el componente Popover requiere la propiedad `nodeType`.
Esto es diferente de los elementos virtuales utilizados para los componentes [`Popper`](/u_ui/u-ui/react-popper/#elemento-virtual) o [`Tooltip`](/u_ui/u-ui/react-tooltip/#elemento-virtual), los cuales no requieren la propiedad.
:::