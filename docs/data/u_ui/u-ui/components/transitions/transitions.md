---
productId: u-ui
title: Componente de Transición de React
components: Collapse, Fade, Grow, Slide, Zoom
githubLabel: 'component: transitions'
githubSource: packages/u_ui-u-ui/src/transitions
---

# Transitions

<p class="description">Las transiciones ayudan a que una interfaz de usuario sea expresiva y fácil de usar.</p>

U-Ui proporciona transiciones que pueden utilizarse para introducir algo de [movimiento básico](https://m2.material.io/design/motion/) en tus aplicaciones.

{{"component": "@vandlee/docs/ComponentLinkHeader", "design": false}}

## Collapse (Contraer)

Expandir desde el borde inicial del elemento hijo.
Utilice la propiedad `orientation` si necesita un colapso horizontal.
La propiedad `collapsedSize` puede usarse para establecer la anchura/altura mínima cuando no está expandido.

{{"demo": "es/SimpleCollapse.js", "bg": true}}

## Fade (Fundido)

Fundido de transparente a opaco.

{{"demo": "es/SimpleFade.js", "bg": true}}

## Grow (Crecer)

Se expande hacia fuera desde el centro del elemento hijo, a la vez que se difumina de transparente a opaco.

El segundo ejemplo muestra cómo cambiar el `transform-origin`, y aplica condicionalmente
la proposición `timeout` para cambiar la velocidad de entrada.

{{"demo": "es/SimpleGrow.js", "bg": true}}

## Slide (Deslizar)

Desliza desde el borde de la pantalla.
La propiedad `direction` controla desde qué borde de la pantalla comienza la transición.

La propiedad `mountOnEnter` del componente Transition evita que el componente hijo se monte
hasta que `in` sea `true`.
Esto evita que el componente relativamente posicionado se desplace a la vista
desde su posición fuera de la pantalla.
Del mismo modo, la propiedad `unmountOnExit` elimina el componente del DOM después de que se haya desplazado fuera de la pantalla.

{{"demo": "es/SimpleSlide.js", "bg": true}}

### Deslizar relativo a un contenedor

El componente Slide también acepta la propiedad `container`, que es una referencia a un nodo DOM.
Si se establece esta prop, el componente Slide se deslizará desde el borde de ese nodo DOM.

{{"demo": "es/SlideFromContainer.js", "bg": true}}

## Zoom

Expandir hacia fuera desde el centro del elemento hijo.

Este ejemplo también demuestra cómo retrasar la transición de entrada.

{{"demo": "es/SimpleZoom.js", "bg": true}}

## Requisito de elemento hijo

- **Reenviar el estilo**: Para soportar mejor el renderizado del servidor, U-Ui proporciona un `style` prop a los hijos de algunos componentes de transición (Fade, Grow, Zoom, Slide).
  La propiedad `style` debe aplicarse al DOM para que la animación funcione correctamente.
- **Adelante la referencia**: Los componentes de transición requieren que el primer elemento hijo reenvíe su ref al nodo DOM.
- **Un solo elemento**: Los componentes de transición sólo requieren un elemento hijo (no se permite `React.Fragment`).

```jsx
// El objeto `props` contiene un `style` prop.
// Necesitas proporcionarlo al elemento `div` como se muestra aquí.
const MiComponente = React.forwardRef(function (props, ref) {
  return (
    <div ref={ref} {...props}>
      Fundido
    </div>
  );
});

export default function Main() {
  return (
    <Fade>
      {/* MiComponente debe ser el único hijo */}
      <MiComponente />
    </Fade>
  );
}
```

## TransitionGroup

Para animar un componente cuando se monta o desmonta, puede utilizar el componente [`TransitionGroup`](https://reactcommunity.org/react-transition-group/transition-group/) de _react-transition-group_.
A medida que se añaden o eliminan componentes, la proposición `in` se conmuta automáticamente mediante `TransitionGroup`.

{{"demo": "es/TransitionGroupExample.js"}}

## TransitionComponent prop

Algunos componentes de U-Ui utilizan estas transiciones internamente. Estos aceptan una propiedad `TransitionComponent` para personalizar la transición por defecto.
Puede utilizar cualquiera de los componentes anteriores o el suyo propio.
Debe respetar las siguientes condiciones:

- Acepta una proposición `in`. Corresponde al estado abierto/cerrado.
- Llamar al callback prop `onEnter` cuando se inicia la transición de entrada.
- Llama al callback prop `onExited` cuando se completa la transición de salida.
  Estas dos callback permiten desmontar los hijos cuando están en estado cerrado y la transición ha finalizado.

Para obtener más información sobre la creación de una transición personalizada, visite la _react-transition-group_ [documentación de `Transition`](https://reactcommunity.org/react-transition-group/transition/).
También puedes visitar las secciones dedicadas de algunos de los componentes:

- [Modal](/u_ui/u-ui/react-modal/#transiciones)
- [Popper](/u_ui/u-ui/react-popper/#transiciones)
- [Snackbar](/u_ui/u-ui/react-snackbar/#transiciones)
- [Tooltip](/u_ui/u-ui/react-tooltip/#transiciones)

## Rendimiento y SEO

El contenido del componente de transición se monta por defecto incluso si `in={false}`.
Este comportamiento por defecto tiene en cuenta el renderizado del lado del servidor y el SEO.
Si usted renderiza costosos árboles de componentes dentro de su transición puede ser una buena idea cambiar este comportamiento por defecto habilitando la propiedad
`unmountOnExit` prop:

```jsx
<Fade in={false} unmountOnExit />
```

Como con cualquier optimización del rendimiento, esto no es una bala de plata.
Asegúrate de identificar primero los cuellos de botella y luego prueba estas estrategias de optimización.