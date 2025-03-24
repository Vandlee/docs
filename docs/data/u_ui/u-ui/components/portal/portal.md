---
productId: u-ui
title: Componente Portal de React
components: Portal
githubLabel: 'component: Portal'
---

# Portal

<p class="description">El componente Portal permite renderizar sus hijos en un nodo DOM que existe fuera de la propia jerarquía DOM del Portal.</p>

{{"component": "@vandlee/docs/ComponentLinkHeader", "design": false}}

{{"component": "modules/components/ComponentPageTabs.js"}}

## Introducción

Portal es un componente de utilidad construido alrededor de [API `createPortal()` de React](https://react.dev/reference/react-dom/createPortal).
Proporciona la funcionalidad de `createPortal()` en forma de componente.

El componente Portal es utilizado internamente por los componentes [Modal](/u_ui/u-ui/react-modal/) y [Popper](/u_ui/u-ui/react-popper/).

## Componente

```jsx
import Portal from '@u_ui/u-ui/Portal';
```

Normalmente, los hijos de un componente se renderizan dentro del árbol DOM de ese componente.
Pero a veces es necesario montar un hijo en una ubicación diferente en el DOM.

:::info
Según [los documentos de React](https://react.dev/reference/react-dom/createPortal), los portales son útiles cuando «necesitas que el elemento hijo “salga” visualmente de su contenedor»; por ejemplo, los modales y las descripciones emergentes, que deben existir fuera del flujo normal del documento.
:::

El componente Portal acepta una proposición `container` que pasa una `ref` al nodo DOM donde se montarán sus hijos.

La siguiente demostración muestra cómo un `<span>` anidado dentro de un Portal puede añadirse a un nodo fuera de la jerarquía DOM del Portal: haga clic en **Montar hijos** para ver cómo se comporta:

{{"demo": "es/SimplePortal.js"}}

### Del lado del servidor

La API DOM no está disponible en el servidor, por lo que necesitas usar la llamada de retorno `container` prop.
Este callback es llamado durante un efecto de diseño de React:

```jsx
<Portal container={() => document.getElementById('filter-panel')!}>
  <Child />
</Portal>
```

:::error
El componente Portal no se puede utilizar para renderizar elementos hijo en el servidor; es necesaria la hidratación del lado del cliente.

Esto se debe a que React no admite la API [`createPortal()`](https://es.react.dev/reference/react-dom/createPortal) en el servidor.
Consulte [este tema de GitHub (Inglés)](https://github.com/facebook/react/issues/13097) para obtener más detalles.
:::