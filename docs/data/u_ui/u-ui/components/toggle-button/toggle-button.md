---
productId: u-ui
title: Componente Botón de alternancia de React
components: ToggleButton, ToggleButtonGroup
githubLabel: 'component: toggle button'
materialDesign: https://m2.material.io/components/buttons#toggle-button
githubSource: packages/u-shii-ui/src/ToggleButton
---

# Botón de alternancia

<p class="description">Se puede utilizar un Botón de alternancia para agrupar opciones relacionadas.</p>

Para resaltar grupos de botones de alternancia relacionados,
un grupo debe compartir un contenedor común.
El `ToggleButtonGroup` controla el estado seleccionado de sus botones hijos cuando se le da su propio prop `value`.

{{"component": "@u-shii/docs/ComponentLinkHeader"}}

## Selección exclusiva

Con la selección exclusiva, al seleccionar una opción se anula la selección de cualquier otra.

En este ejemplo, los botones de alternancia de justificación de texto presentan opciones para texto justificado a la izquierda, al centro, a la derecha y totalmente justificado (desactivado), con sólo un elemento disponible para la selección a la vez.

**Nota**: La selección exclusiva no obliga a que un botón esté activo. Para ello, consulte [forzar conjunto de valores](#enforce-value-set).

{{"demo": "es/ToggleButtons.js"}}

## Selección múltiple

La selección múltiple permite seleccionar varias opciones agrupadas lógicamente, como negrita, cursiva y subrayado.

{{"demo": "es/ToggleButtonsMultiple.js"}}

## Tamaño

Para botones más grandes o más pequeños, utilice la propiedad `size`.

{{"demo": "es/ToggleButtonSizes.js"}}

## Color

{{"demo": "es/ColorToggleButton.js"}}

## Botones verticales

Los botones se pueden apilar verticalmente con la propiedad `orientation` establecida en "vertical".

{{"demo": "es/VerticalToggleButtons.js"}}

## Forzar el conjunto de valores

Si quieres imponer que al menos un botón debe estar activo, puedes adaptar tu función `handleChange`.

```jsx
const handleAlignment = (event, newAlignment) => {
  if (newAlignment !== null) {
    setAlignment(newAlignment);
  }
};

const handleDevices = (event, newDevices) => {
  if (newDevices.length) {
    setDevices(newDevices);
  }
};
```

{{"demo": "es/ToggleButtonNotEmpty.js"}}

## Botón de alternancia independiente

{{"demo": "es/StandaloneToggleButton.js"}}

## Personalización

Este es un ejemplo de personalización del componente.
Puedes aprender más sobre esto en la [página de documentación de overrides](/u-ui/customization/how-to-customize/).

{{"demo": "es/CustomizedDividers.js", "bg": true}}

## Accesibilidad

### ARIA

- ToggleButtonGroup tiene `role="group"`. Debe proporcionar una etiqueta accesible con `aria-label="label"`, `aria-labelledby="id"` o `<label>`.
- ToggleButton establece `aria-pressed="<bool>"` según el estado del botón. Debes etiquetar cada botón con `aria-label`.

### Teclado

Actualmente, los botones de alternancia están en orden DOM. Navegue entre ellos con la tecla tabulador. El comportamiento de los botones sigue la semántica estándar del teclado.