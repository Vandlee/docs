---
productId: u-ui
title: Componente Modal de React
components: Modal
githubLabel: 'component: modal'
waiAria: https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/
unstyled: /base-ui/react-modal/
githubSource: packages/u_ui-u-ui/src/Modal
---

# Modal

<p class="description">El componente modal proporciona una base sólida para crear cuadros de diálogo, ventanas emergentes, cajas de luz o cualquier otra cosa.</p>

El componente renderiza su nodo `children` delante de un componente de fondo.
El `Modal` ofrece características importantes:

- 💄 Gestiona el apilamiento modal cuando uno a la vez no es suficiente.
- 🔐 Crea un telón de fondo, para desactivar la interacción debajo del modal.
- 🔐 Desactiva el desplazamiento del contenido de la página mientras está abierta.
- ♿️ Gestiona correctamente el foco; moviéndose al contenido del modal,
  y manteniéndolo ahí hasta que se cierre el modal.
- ♿️ Añade los roles ARIA apropiados automáticamente.

{{"component": "@vandlee/docs/ComponentLinkHeader", "design": false}}

:::info
El término «modal» se utiliza a veces para referirse a «diálogo», pero es un término equivocado.
Una ventana modal describe partes de una interfaz de usuario.
Un elemento se considera modal si [bloquea la interacción con el resto de la aplicación (Inglés)](https://en.wikipedia.org/wiki/Modal_window).
:::

Si estás creando un diálogo modal, probablemente quieras usar el componente [Dialog](/u_ui/u-ui/react-dialog/) en lugar de usar directamente Modal.
Modal es una construcción de nivel inferior que aprovechan los siguientes componentes:

- [Diálogo `Dialog`](/u_ui/u-ui/react-dialog/)
- [Cajón `Drawer`](/u_ui/u-ui/react-drawer/)
- [Menú `Menu`](/u_ui/u-ui/react-menu/)
- [Popover `Popover`](/u_ui/u-ui/react-popover/)

## Modal Básico

{{"demo": "es/BasicModal.js"}}

Observe que puede desactivar el contorno (a menudo azul o dorado) con la propiedad CSS `outline: 0`.

## Modales anidados

Los modales pueden anidarse, por ejemplo un select dentro de un diálogo, pero se desaconseja el apilamiento de más de dos modales, o de dos modales con un fondo.

{{"demo": "es/NestedModal.js"}}

## Transiciones

El estado de apertura/cierre del modal se puede animar con un componente de transición.
Este componente debe respetar las siguientes condiciones

- Ser descendiente directo del modal.
- Tener una propiedad `in`. Corresponde al estado de apertura/cierre.
- Llamar al callback prop `onEnter` cuando se inicia la transición de entrada.
- Llamar al callback prop `onExited` cuando se complete la transición de salida.
  Estos dos callbacks permiten al modal desmontar el contenido hijo cuando se cierra y se completa la transición.

Modal tiene soporte integrado para [react-transition-group](https://github.com/reactjs/react-transition-group).

{{"demo": "es/TransitionsModal.js"}}

También puede utilizar [react-spring](https://github.com/pmndrs/react-spring).

{{"demo": "es/SpringModal.js"}}

## Rendimiento

El contenido del modal se desmonta cuando se cierra.
Si necesitas que el contenido esté disponible para los motores de búsqueda o renderizar costosos árboles de componentes dentro de tu modal mientras optimizas la capacidad de respuesta de la interacción
puede ser una buena idea cambiar este comportamiento por defecto habilitando la propiedad `keepMounted`:

```jsx
<Modal keepMounted />
```

{{"demo": "es/KeepMountedModal.js", "defaultCodeOpen": false}}

Como ocurre con cualquier optimización del rendimiento, no se trata de una bala de plata.
Asegúrate de identificar primero los cuellos de botella y luego prueba estas estrategias de optimización.

## Modal del lado del servidor

React [no soporta](https://github.com/facebook/react/issues/13097) la API [`createPortal()`](https://react.dev/reference/react-dom/createPortal) en el servidor.
Para mostrar el modal, necesitas deshabilitar la función de portal con la propiedad `disablePortal`:

{{"demo": "es/ServerModal.js"}}

### Limitaciones

### Trampa de foco

El modal mueve el foco de vuelta al cuerpo del componente si el foco intenta escapar de él.

Esto se hace por motivos de accesibilidad. Sin embargo, puede crear problemas.
En caso de que los usuarios necesiten interactuar con otra parte de la página, por ejemplo con una ventana de chatbot, puedes desactivar el comportamiento:

```jsx
<Modal disableEnforceFocus />
```

## Accesibilidad

(WAI-ARIA: https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)

- Asegúrate de añadir `aria-labelledby="id..."`, haciendo referencia al título del modal, al `Modal`.
  Además, puedes dar una descripción de tu modal con la propiedad `aria-describedby="id..."` en el `Modal`.

```jsx
<Modal aria-labelledby="modal-title" aria-describedby="modal-description">
    <h2 id="modal-title">Mi Titulo</h2>
    <p id="modal-description">Mi Descripción</p>
</Modal>
```

- Las [Prácticas de creación WAI-ARIA (Inglés)](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog/) pueden ayudarle a establecer el foco inicial en el elemento más relevante, basándose en su contenido modal.
- Tenga en cuenta que una «ventana modal» se superpone a la ventana principal o a otra ventana modal. Las ventanas bajo un modal son **inertes**. Es decir, los usuarios no pueden interactuar con el contenido fuera de una ventana modal activa. Esto podría crear [comportamientos conflictivos](#trampa-de-foco).