---
productId: u-ui
title: Componentes React de progreso circular y lineal
components: CircularProgress, LinearProgress
githubLabel: 'component: progress'
materialDesign: https://m2.material.io/components/progress-indicators
githubSource: packages/u_ui-u-ui/src/LinearProgress
---

# Progreso

<p class="description">Los indicadores de progreso, comúnmente conocidos como spinners, expresan un tiempo de espera indeterminado o muestran la duración de un proceso.</p>

Los indicadores de progreso informan a los usuarios sobre el estado de los procesos en curso, como cargar una aplicación, enviar un formulario o guardar actualizaciones.

- Los indicadores **determinados** visualizan el tiempo que tardará una operación.
- Los indicadores **indeterminados** visualizan un tiempo de espera no especificado.

Las animaciones de los componentes se basan en CSS en la medida de lo posible para funcionar incluso antes de que se cargue JavaScript.

{{"component": "@u-shii/docs/ComponentLinkHeader"}}

## Circular

### Circular indeterminado

{{"demo": "es/CircularIndeterminate.js"}}

### Circular color

{{"demo": "es/CircularColor.js"}}

### Circular tamaño

{{"demo": "es/CircularSize.js"}}

### Circular determinado

{{"demo": "es/CircularDeterminate.js"}}

### Integración interactiva

{{"demo": "es/CircularIntegration.js"}}

:::info
Si deseas utilizar un indicador de carga dentro de un botón, puedes hacerlo fácilemente siguiendo nuestra [guía específica](/u_ui/u-ui/react-button/#cargando).
:::

### Circular con etiqueta

{{"demo": "es/CircularWithValueLabel.js"}}

## Rangos no estándar

Los componentes de progreso aceptan un valor en el rango 0 - 100. Esto simplifica las cosas para los usuarios de lectores de pantalla, donde estos son los valores mínimos y máximos por defecto. A veces, sin embargo, puede estar trabajando con una fuente de datos donde los valores caen fuera de este rango. A continuación se explica cómo transformar fácilmente un valor de cualquier rango en una escala de 0 - 100.

```jsx
// MIN - Valor mínimo esperado
// MAX - Valor máximo esperado
// Función para normalizar los valores (podría integrarse MIN / MAX)
const normalizar = (valor) => ((valor - MIN) * 100) / (MAX - MIN);

// Componente de ejemplo que utiliza la función `normalizar` en el punto de renderizado.
function Progreso(props) {
    return (
        <React.Fragment>
            <CircularProgress variant="determinate" value={normalizar(props.value)} />
        </React.Fragment>
    )
}
```

## Personalización

Estos son algunos ejemplos de personalización del componente.
Puedes aprender más sobre esto en la [página de documentación de overrides](/u_ui/u-ui/customization/how-to-customize/).

{{"demo": "es/CustomizedProgressBars.js", "defaultCodeOpen": false}}

## Retrasar la aparición

Hay [3 límites importantes](https://www.nngroup.com/articles/response-times-3-important-limits/) que conocer en torno al tiempo de respuesta.
El efecto ripple del componente `ButtonBase` asegura que el usuario sienta que la UI reacciona instantáneamente.
Normalmente, no es necesario ningún feedback especial durante retrasos de más de 0,1 pero menos de 1,0 segundo.
Después de 1,0 segundo, puede mostrar un cargador para mantener ininterrumpido el flujo de pensamiento del usuario.

{{"demo": "es/DelayingAppearance.js"}}

## Limitaciones

### Alta carga de CPU

Bajo mucha carga, es posible que se pierda la animación del trazo o que aparezcan anchos de anillo `CircularProgress` aleatorios.
Para no bloquear el subproceso principal de renderizado, ejecute las operaciones intensivas en un web worker o por lotes.

Cuando no sea posible, puedes utilizar la propiedad `disableShrink` para mitigar el problema. Véase [este problema (Inglés)](https://github.com/mui/material-ui/issues/10327).

{{"demo": "es/CircularUnderLoad.js"}}
