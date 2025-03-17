---
productId: u-ui
title: Detectar clic fuera del componente React
components: ClickAwayListener
githubLabel: 'component: ClickAwayListener'
---

# Detector de Clic Fuera

<p class="description">El componente Click-Away Listener detecta cuando se produce un evento de clic fuera de su elemento hijo.</p>

{{"component": "@u-shii/docs/ComponentLinkHeader", "design": false}}

{{"component": "modules/components/ComponentPageTabs.js"}}

## Introducción

El detector de Clic fuera (`Click-Away Listener`) es un componente de utilidad que escucha eventos de clic fuera de su hijo.
(Tenga en cuenta que sólo acepta _un_ elemento hijo).

Esto es útil para componentes como [Popper](/u_ui/u-ui/react-popper) que debe cerrarse cuando el usuario hace clic en cualquier otra parte del documento.

Click-Away Listener también soporta el componente [Portal](/u_ui/u-ui/react-portal).

## Componente

```jsx
import ClickAwayListener from '@u_ui/u-ui/ClickAwayListener';
```

La siguiente demostración muestra cómo ocultar un menú desplegable cuando los usuarios hacen click en cualquier otro lugar de la página:

{{"demo": "es/ClickAway.js"}}

### Uso con Portal

La siguiente demo utiliza el componente [Portal](/u_ui/u-ui/react-portal) para renderizar el desplegable en un nuevo subárbol fuera de la jerarquía DOM actual:

{{"demo": "es/PortalClickAway.js"}}

## Personalización

### Escucha de eventos iniciales

Por defecto, el componente Click-Away Listener responde a **eventos finales** - el _fin_ de un clic o toque.

Puede configurar el componente para que escuche **eventos principales** (el inicio de un clic o toque) utilizando las propiedades `mouseEvent` y `touchEvent`, como se muestra en la siguiente demo:

{{"demo": "es/LeadingClickAway.js"}}

:::warning
Cuando el componente está configurado para escuchar eventos principales, se ignoran las interacciones con la barra de desplazamiento.
:::

## Accesibilidad

Por defecto, Click-Away Listener añadirá un manejador `onClick` a su hijo.
Esto puede provocar que los lectores de pantalla anuncien que se puede hacer clic en el elemento hijo, aunque este manejador `onClick` no tenga ningún efecto sobre el propio elemento hijo.

Para evitar este comportamiento, añada `role="presentation"` al elemento hijo:

```tsx
<ClickAwayListener>
  <div role="presentation">
    <h1>encabezamiento no interactivo</h1>
  </div>
</ClickAwayListener>
```

Esto también es necesario para solucionar un problema conocido en NVDA cuando se utiliza Firefox que impide el anuncio de mensajes de alerta—véase [mui/material-ui#29080](https://github.com/mui/material-ui/issues/29080) para más detalles.