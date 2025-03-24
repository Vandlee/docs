---
productId: u-ui
title: Componente de Alerta de React
components: Alert, AlertTitle
githubLabel: 'component: alert'
waiAria: https://www.w3.org/WAI/ARIA/apg/patterns/alert/
githubSource: packages/u_ui-u-ui/src/Alert
---

# Alerta

<p class="description">Las alertas muestran mensajes breves al usuario sin interrumpir su uso de la aplicación.</p>

{{"component": "@vandlee/docs/ComponentLinkHeader"}}

## Introducción

Las alertas proporcionan a los usuarios información breve y potencialmente sensible al tiempo de forma discreta.

El componente Alerta de U-Ui incluye varios accesorios para personalizar rápidamente sus estilos y proporcionar señales visuales inmediatas sobre su contenido.

{{"demo": "es/SimpleAlert.js"}}

:::info
Este componente ya no está documentado en las [Material Design guidelines](https://m2.material.io/), pero U-Ui seguirá siendo compatible con él.
:::

### Uso

Una característica clave del patrón de alerta es que [no debe interrumpir la experiencia del usuario (Inglés)](https://www.w3.org/WAI/ARIA/apg/patterns/alert/) de la aplicación.
Las alertas no deben confundirse con los _diálogos_ de alerta ([ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog/)), que _están_ pensados para interrumpir al usuario para obtener una respuesta.
Utilice el componente U-Ui [Dialog](/u_ui/u-ui/react-dialog/) si necesita este comportamiento.

## Conceptos básicos

```jsx
import Alert from '@u_ui/u-ui/Alert';
```

El componente Alerta envuelve su contenido y se estira para llenar el contenedor que lo rodea.

### Severidad

La propiedad `severity` acepta cuatro valores que representan diferentes estados—`success` (por defecto), `info`, `warning` y `error` —con las correspondientes combinaciones de iconos y colores para cada uno:

{{"demo": "es/BasicAlerts.js"}}

### Variantes

El componente Alerta viene con dos opciones de estilo alternativas—`relleno` y `contorno` —que puede definir utilizando la propiedad `variant`.

#### Relleno

{{"demo": "es/FilledAlerts.js"}}

#### Delineado

{{"demo": "es/OutlinedAlerts.js"}}

:::warning
Cuando se utiliza una Alerta perfilada con el componente [Snackbar](/u_ui/u-ui/react-snackbar/), el contenido de fondo será visible y traspasará la Alerta por defecto.
Puede evitarlo añadiendo `bgcolor: 'background.paper'` a [la propiedad `sx`](/u_ui/u-ui/customization/how-to-customize/#the-sx-prop) en el componente Alerta (`Alert`):

```jsx
<Alert sx={{ bgcolor: 'background.paper' }} />
```

Consulta el documento [Snackbar—personalización](/u_ui/u-ui/react-snackbar/#personalización) para ver un ejemplo de cómo utilizar estos dos componentes juntos.
:::

### Color

Utilice la propiedad `color` para anular el color predeterminado para la [`severity`](#severidad) especificada; por ejemplo, para aplicar colores de `advertencia` a una alerta `success`:

{{"demo": "es/ColorAlerts.js"}}

### Acciones

Añade una acción a tu alerta con la propiedad `action`.
Esto le permite insertar cualquier elemento—una etiqueta HTML, un icono SVG o un componente React como un botón U-Ui—después del mensaje de la alerta, justificado a la derecha.

Si proporciona una llamada de retorno `onClose` a la alerta sin establecer la propiedad `action`, el componente mostrará un icono de cierre (&#x2715;) por defecto.

{{"demo": "es/ActionAlerts.js"}}

### Iconos

Utiliza la propiedad `icon` para reemplazar el icono de una alerta.
Al igual que con la propiedad [`action`](#acciones), el icono puede ser un elemento HTML, un icono SVG o un componente React.
Establece esta prop a `false` para eliminar el icono por completo.

Si necesitas anular todas las instancias de un icono para una determinada [`severity`](#severidad), puedes utilizar la propiedad `iconMapping`.
Puedes definir esta prop globalmente personalizando el tema de tu aplicación. Ver [Theme components-Default props](/u_ui/u-ui/customization/theme-components/#theme-default-props) para más detalles.

{{"demo": "es/IconAlerts.js"}}

## Personalización

### Transiciones

Puedes utilizar [Transition components](/u_ui/u-ui/transitions/) como [Collapse](/u_ui/u-ui/transitions/#collapse) para añadir movimiento a la entrada y salida de una Alerta.

{{"demo": "es/TransitionAlerts.js"}}


## Accesibilidad

Estos son algunos factores a tener en cuenta para garantizar que tu Alerta sea accesible:

- Dado que las alertas no están pensadas para interferir en el uso de la aplicación, tu componente Alerta no debería _nunca_ afectar al foco del teclado.
- Si una alerta contiene una acción, esa acción debe tener un `tabindex` de `0` para que pueda ser alcanzada por usuarios que sólo utilizan el teclado.
- Las alertas esenciales no deben desaparecer automáticamente: las [interacciones temporizadas (Inglés)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-no-exceptions.html) pueden hacer que tu aplicación resulte inaccesible para los usuarios que necesiten más tiempo para comprender o localizar la alerta.
- Las alertas que se producen con demasiada frecuencia pueden [inhibir la usabilidad (Inglés)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-postponed.html) de tu aplicación.
- Las alertas generadas dinámicamente son anunciadas por los lectores de pantalla; las alertas que ya están presentes en la página cuando ésta se carga _no_ son anunciadas.
- El color no aporta significado a la interfaz de usuario para los usuarios que necesitan tecnología de asistencia. Debes asegurarte de que cualquier información transmitida a través del color se indique también de otras formas, como en el propio texto de la alerta o con texto oculto adicional que puedan leer los lectores de pantalla.

## Anatomía

El componente Alerta está compuesto por un componente raíz [Paper](/u_ui/u-ui/react-paper) (que se representa como un `<div>`) que contiene un icono, un mensaje y una [acción](#acciones) opcional.

```html
<div class="uiPaper-root VandleeAlert-root" role="alert">
  <div class="uiAlert-icon">
    <!-- icono svg aquí -->
  </div>
  <div class="uiAlert-message">Esto es como una Alerta se renderiza en el DOM.</div>
  <div class="uiAlert-action">
    <!-- Elemento de acción opcional aquí -->
  </div>
</div>
```