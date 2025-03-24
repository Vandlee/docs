---
productId: u-ui
title: React Popper component
components: Popper
githubLabel: 'component: Popper'
unstyled: /base-ui/react-popper/
githubSource: packages/u_ui/u-ui/src/Popper
---

# Popper

<p class="description">Un Popper se puede utilizar para mostrar algún contenido encima de otro. Es una alternativa a react-popper.</p>

Algunas características importantes del componente Popper:

- 🕷 Popper se basa en la biblioteca de terceros ([Popper.js](https://popper.js.org/)) para un posicionamiento perfecto.
- 💄 Es una API alternativa a react-popper. Su objetivo es la simplicidad.
- Su elemento hijo es un [Portal](/u_ui/u-ui/react-portal/) en el cuerpo del documento para evitar problemas de renderizado.
  Puede desactivar este comportamiento con `disablePortal`.
- El desplazamiento no se bloquea como con el componente [Popover](/u_ui/u-ui/react-popover/).
  La colocación del popper se actualiza con el área disponible en la ventana gráfica.
- Al hacer clic fuera no se oculta el componente Popper.
  Si necesita este comportamiento, puede usar el [Click-Away Listener](/u_ui/u-ui/react-click-away-listener/) - vea el ejemplo en la [sección de documentación del menú (`Menu`)](/u_ui/u-ui/react-menu/#composition-with-menu-list).
- El `anchorEl` se pasa como objeto de referencia para crear una nueva instancia de `Popper.js`.

{{"component": "@vandlee/docs/ComponentLinkHeader", "design": false}}

## Popper básico

{{"demo": "es/SimplePopper.js"}}

## Transiciones

El estado de apertura/cierre del popper puede ser animado con un render prop child y un componente de transición.
Este componente debe respetar las siguientes condiciones

- Ser hijo directo descendiente del popper.
- Llamar al callback prop `onEnter` cuando se inicia la transición de entrada.
- Llamar a la prop callback `onExited` cuando se complete la transición de salida.
  Estos dos callbacks permiten al popper desmontar el contenido hijo cuando se cierra y se completa la transición.

Popper tiene soporte integrado para [react-transition-group](https://github.com/reactjs/react-transition-group).

{{"demo": "es/TransitionsPopper.js"}}

## Popper posicionado

{{"demo": "es/PositionedPopper.js"}}

## Zona de juegos de desplazamiento

{{"demo": "es/ScrollPlayground.js", "hideToolbar": true, "bg": true}}

## Elemento virtual

El valor de la prop `anchorEl` puede ser una referencia a un elemento DOM falso.
Necesitas crear un objeto con forma de [`VirtualElement` (Inglés)](https://popper.js.org/docs/v2/virtual-elements/).

Resalta parte del texto para ver el popper:

{{"demo": "es/VirtualElementPopper.js"}}