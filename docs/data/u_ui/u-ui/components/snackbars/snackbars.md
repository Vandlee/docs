---
productId: u-ui
title: Componente Snackbar de React
components: Snackbar, SnackbarContent
githubLabel: 'component: snackbar'
materialDesign: https://m2.material.io/components/snackbars
waiAria: https://www.w3.org/TR/wai-aria-1.1/#alert
githubSource: packages/u_ui-u-ui/src/Snackbar
---

# Snackbar

<p class="description">Las snackbars (también conocdas como toasts) se utilizan para notificar brevemente los procesos que se han realizado o se van a realizar.</p>

{{"component": "@u-shii/docs/ComponentLinkHeader"}}

## Introducción

El componente Snackbar aparece temporalmente y flota sobre la interfaz de usuario para proporcionar a los usuarios actualizaciones (no críticas) sobre los procesos de una aplicación.
La siguiente demo, inspirada en Google Keep, muestra un Snackbar básica con un elemento de texto y dos acciones:

{{"demo": "es/SimpleSnackbar.js"}}

### Uso

Las Snackbars se diferencian de las [Alertas (`Alert`)](/u_ui/u-ui/react-alert/) en que las Snackbars tienen una posición fija y un z-index alto, por lo que están pensadas para salirse del flujo del documento; las Alertas, en cambio, suelen formar parte del flujo, excepto cuando se usan como [hijos de una Snackbar](#uso-con-alertas).

## Conceptos básicos

### Importar

```jsx
import Snackbar from '@u_ui/u-ui/Snackbar';
```

### Posición

Usa la prop `anchorOrigin` para controlar la posición del Snackbar en la pantalla.

{{"demo": "es/PositionedSnackbar.js"}}

### Contenido

```jsx
import SnackbarContent from '@u_ui/u-ui/SnackbarContent';
```

Usa el componente SnackbarContent para añadir texto y acciones al Snackbar.

{{"demo": "es/LongTextSnackbar.js"}}

### Cierre automático

Utilice la propiedad `autoHideDuration` para activar automáticamente la función `onClose` de la Snackbar tras un periodo de tiempo determinado (en milisegundos).

Asegúrese de [proporcionar tiempo suficiente](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits.html) para que el usuario procese la información mostrada en ella.

{{"demo": "es/AutohideSnackbar.js"}}

### Transiciones

Puede usar la propiedad `TransitionComponent` para cambiar la transición de la Snackbar de [Grow](/u_ui/u-ui/transitions/#grow) (por defecto) a otras como [Slide](/u_ui/u-ui/transitions/#slide).

{{"demo": "es/TransitionsSnackbar.js"}}

## Personalización

### Uso con Alertas

Utilice una Alerta dentro de una Snackbar para los mensajes que comunican una determinada gravedad.

{{"demo": "es/CustomizedSnackbars.js"}}

## Ejemplos comunes

### Snackbars consecutivos

Esta demo muestra cómo mostrar varias Snackbars sin apilarlas utilizando una animación consecutiva.

{{"demo": "es/ConsecutiveSnackbars.js"}}

## Componentes suplementarios

### notistack

![stars](https://img.shields.io/github/stars/iamhosseindhv/notistack.svg?style=social&label=Star)
![npm downloads](https://img.shields.io/npm/dm/notistack.svg)

Con una API imperativa, [notistack](https://github.com/iamhosseindhv/notistack) te permite apilar verticalmente múltiples Snackbars sin tener que manejar sus estados de apertura y cierre.
Aunque las directrices de Material Design lo desaconsejan, sigue siendo un patrón habitual.

{{"demo": "es/IntegrationNotistack.js", "defaultCodeOpen": false}}

:::warning
Tenga en cuenta que notistack impide que las Snackbars se [cierren pulsando <kbd class="key">Escape</kbd>](#accesibilidad).
:::

## Accesibilidad

El usuario debería poder descartar las Snackbars pulsando <kbd class="key">Escape</kbd>. Si aparecen varias instancias al mismo tiempo y quieres que <kbd class="key">Escape</kbd> sólo descarte la más antigua que esté abierta en ese momento, llama a `event.preventDefault` en la propiedad `onClose`.

```jsx
export default function MyComponent() {
  const [open, setOpen] = React.useState(true);

  return (
    <React.Fragment>
      <Snackbar
        open={open}
        onClose={(event, reason) => {
          // `reason === 'escapeKeyDown'` si se pulsó `Escape`
          setOpen(false);
          // llama a `event.preventDefault` para cerrar sólo una Snackbar a la vez.
        }}
      />
      <Snackbar open={open} onClose={() => setOpen(false)} />
    </React.Fragment>
  );
}
```

## Anatomía

El componente Snackbar se compone de una raíz `<div>` que alberga elementos interiores como el `SnackbarContent` y otros componentes opcionales (como botones o decoradores).

```html
<div role="presentation" class="uiSnackbar-root">
  <div class="uiPaper-root uiSnackbarContent-root" role="alert">
    <div class="uiSnackbarContent-message">
      <!-- El contenido de la Snackbar va aquí -->
    </div>
  </div>
</div>
```