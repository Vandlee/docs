---
productId: u-ui
title: Componente Tooltip de React
components: Tooltip
githubLabel: 'component: tooltip'
materialDesign: https://m2.material.io/components/tooltips
waiAria: https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/
githubSource: packages/u_ui-u-ui/src/Tooltip
---

# Tooltip

<p class="description">Los tooltips muestran texto informativo cuando los usuarios pasan el cursor, enfocan o tocan un elemento.</p>

Cuando se activan, los tooltips muestran una etiqueta de texto que identifica un elemento, como una descripción de su función.

{{"component": "@vandlee/docs/ComponentLinkHeader"}}

## Tooltip básico

{{"demo": "es/BasicTooltip.js"}}

## Tooltips posicionados

El componente Tooltip tiene 12 opciones de ubicación.
No tienen flechas direccionales; en su lugar, dependen del movimiento que emana desde la fuente para indicar la dirección.

{{"demo": "es/PositionedTooltips.js"}}

## Personalización

Aquí hay algunos ejemplos de cómo personalizar el componente.
Puedes obtener más información en la [página de documentación sobre personalización](/u_ui/u-ui/customization/how-to-customize/).

{{"demo": "es/CustomizedTooltips.js"}}

## Tooltips con flecha

Puedes usar la prop `arrow` para agregar una flecha al tooltip que indique el elemento al que hace referencia.

{{"demo": "es/ArrowTooltips.js"}}

## Distancia desde el anclaje

Para ajustar la distancia entre el tooltip y su elemento anclado, puedes usar la prop `slotProps` para modificar el [offset](https://popper.js.org/docs/v2/modifiers/offset/) del popper.

{{"demo": "es/TooltipOffset.js"}}

Alternativamente, puedes usar la prop `slotProps` para personalizar el margen del popper.

{{"demo": "es/TooltipMargin.js"}}

## Elemento hijo personalizado

El tooltip necesita aplicar listeners de eventos del DOM a su elemento hijo.
Si el hijo es un elemento personalizado de React, debes asegurarte de que propague sus props al elemento DOM subyacente.

```jsx
const MiComponente = React.forwardRef(function MiComponente(props, ref) {
  // Distribuye los props al elemento DOM subyacente.
  return (
    <div {...props} ref={ref}>
      Papelera
    </div>
  );
});

// ...

<Tooltip title="Eliminar">
  <MiComponente />
</Tooltip>;
```

Si usas un componente de clase como hijo, también debes asegurarte de que la ref se reenvíe al elemento DOM subyacente. (Una ref al componente de clase en sí no funcionará).

```jsx
class MiComponente extends React.Component {
  render() {
    const { innerRef, ...props } = this.props;
    // Distribuye los props al elemento DOM subyacente.
    return (
      <div {...props} ref={innerRef}>
        Papelera
      </div>
    );
  }
}

// Envolver MiComponente para reenviar la ref como espera Tooltip
const WrappedMiComponente = React.forwardRef(function WrappedMyComponent(props, ref) {
  return <MiComponente {...props} innerRef={ref} />;
});

// ...

<Tooltip title="Eliminar">
  <WrappedMiComponente />
</Tooltip>;
```

## Disparadores

Puedes definir los tipos de eventos que activan la visualización de un tooltip.

La acción táctil requiere una pulsación prolongada debido a que la prop `enterTouchDelay` está establecida en `700ms` por defecto.

{{"demo": "es/TriggersTooltips.js"}}

## Tooltips controlados

Puedes usar las props `open`, `onOpen` y `onClose` para controlar el comportamiento del tooltip.

{{"demo": "es/ControlledTooltips.js"}}

## Ancho variable

El `Tooltip` ajusta el texto largo de forma predeterminada para hacerlo legible.

{{"demo": "es/VariableWidth.js"}}

## Interactivo

Los tooltips son interactivos por defecto (para cumplir con el [criterio de éxito 1.4.13 de WCAG 2.1 (Inglés)](https://www.w3.org/TR/WCAG21/#content-on-hover-or-focus)).
No se cerrará cuando el usuario pase el cursor sobre el tooltip antes de que expire el `leaveDelay`.
Puedes desactivar este comportamiento (lo que incumpliría el criterio de éxito requerido para alcanzar el nivel AA) pasando la prop `disableInteractive`.

{{"demo": "es/NonInteractiveTooltips.js"}}

## Elementos deshabilitados

Por defecto, los elementos deshabilitados como `<button>` no activan interacciones del usuario, por lo que un `Tooltip` no se activará con eventos normales como el hover. Para solucionar esto, agrega un elemento contenedor simple, como un `span`.

:::warning
Para que funcione en Safari, debes incluir al menos un elemento con display: block o flex debajo del contenedor del tooltip.
:::

{{"demo": "es/DisabledTooltips.js"}}

:::warning
Si no estás envolviendo un componente de U-Ui que herede de `ButtonBase`, por ejemplo, un elemento `<button>` nativo, debes agregar la propiedad CSS _pointer-events: none;_ a tu elemento cuando esté deshabilitado:
:::

```jsx
<Tooltip title="No tienes permiso para hacer esto">
  <span>
    <button disabled={disabled} style={disabled ? { pointerEvents: 'none' } : {}}>
      Un botón desactivado
    </button>
  </span>
</Tooltip>
```

## Transiciones

Usa una transición diferente.

{{"demo": "es/TransitionsTooltips.js"}}

## Seguir el cursor

Puedes hacer que el tooltip siga el cursor estableciendo `followCursor={true}`.

{{"demo": "es/FollowCursorTooltips.js"}}

## Elemento virtual

Si necesitas implementar una colocación personalizada, puedes usar la prop `anchorEl`.
El valor de `anchorEl` puede ser una referencia a un elemento DOM virtual.
Debes crear un objeto con la forma de [`VirtualElement`](https://popper.js.org/docs/v2/virtual-elements/).

{{"demo": "es/AnchorElTooltips.js"}}

## Mostrar y ocultar

El tooltip normalmente se muestra inmediatamente cuando el cursor del usuario pasa sobre el elemento y se oculta inmediatamente cuando el cursor se aleja. Puedes agregar un retraso en la visualización u ocultamiento del tooltip mediante las props `enterDelay` y `leaveDelay`.

En dispositivos móviles, el tooltip se muestra cuando el usuario realiza una pulsación larga sobre el elemento y se oculta después de un retraso de 1500ms. Puedes desactivar esta función con la prop `disableTouchListener`.

{{"demo": "es/DelayTooltips.js"}}

## Accesibilidad

(WAI-ARIA: https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/)

Por defecto, el tooltip solo etiqueta su elemento hijo.
Esto es diferente de `title`, que puede etiquetar **o** describir el elemento hijo dependiendo de si este ya tiene una etiqueta.
Por ejemplo, en:

```html
<button title="algo más de información">Un botón</button>
```

el `title` actúa como una descripción accesible.
Si deseas que el tooltip actúe como una descripción accesible, puedes pasar la prop `describeChild`.
No debes usar `describeChild` si el tooltip proporciona la única etiqueta visual del elemento, de lo contrario, el elemento hijo no tendrá un nombre accesible y el tooltip violará el [criterio de éxito 2.5.3 de WCAG 2.1. (Inglés)](https://www.w3.org/WAI/WCAG21/Understanding/label-in-name.html).

{{"demo": "es/AccessibilityTooltips.js"}}