---
productId: ui
title: Componente React Button
components: Button, IconButton, ButtonBase
materialDesign: https://m2.material.io/components/buttons
githubLabel: 'component: button'
waiAria: https://www.w3.org/WAI/ARIA/apg/patterns/button/
unstyled: /base-ui/react-button/
githubSource: packages/u-ui/src/Button
---

# Botón

<p class="description">Los botones permiten a los usuarios realizar acciones y tomar decisiones con un solo toque.</p>

Los botones comunican acciones que los usuarios pueden realizar. Suelen colocarse en toda la interfaz de usuario, en lugares como:

- Ventanas modales
- Formularios
- Tarjetas
- Barras de herramientas

{{"component": "@yushii/docs/ComponentLinkHeader"}}

## Botón básico

El `Button` viene con tres variantes: text (por defecto), contained, and outlined.

{{"demo": "BasicButtons.js", "bg": "outlined"}}

### Botón de texto

[Botones de texto](https://m2.material.io/components/buttons#text-button)
se utilizan normalmente para acciones menos pronunciadas, incluidas las situadas: en diálogos, en tarjetas.
En las tarjetas, los botones de texto ayudan a mantener el énfasis en el contenido de la tarjeta.

{{"demo": "TextButtons.js", "bg": "outlined"}}

### Botón contenido

[Botones contenidos](https://m2.material.io/components/buttons#contained-button)
son de alto énfasis, distinguidos por su uso de elevación y relleno.
Contienen acciones que son primarias para su aplicación.

{{"demo": "ContainedButtons.js", "bg": "outlined"}}

Puedes eliminar la elevación con la prop `disableElevation`.

{{"demo": "DisableElevation.js", "bg": "outlined"}}

### Botón contorneado

Los [botones contorneados](https://m2.material.io/components/buttons#outlined-button) son botones de énfasis medio.
Contienen acciones que son importantes pero no son la acción principal de una aplicación.

Los botones contorneados son también una alternativa de menor énfasis a los botones contenidos,
o una alternativa de mayor énfasis a los botones de texto.

{{"demo": "OutlinedButtons.js", "bg": "outlined"}}

***

## Manejo de clics

Todos los componentes aceptan un manejador `onClick` que se aplica al elemento DOM raíz.

```jsx
<Button
  onClick={() => {
    alert('clicked');
  }}
>
  Click me
</Button>
```

Ten en cuenta que la documentación [evita](/ui/guides/api/#native-properties) mencionar props nativos (hay muchos) en la sección API de los componentes.

## Color

{{"demo": "ColorButtons.js", "bg": "outlined"}}

Además de usar los colores por defecto de los botones, puedes añadir colores personalizados, o desactivar los que no necesites. Vea los ejemplos de [Añadir nuevos colores](/ui/customization/palette/#custom-colors) para más información.

## Tamaños

Para botones más grandes o más pequeños, utiliza la propiedad `size`.

{{"demo": "ButtonSizes.js", "bg": "outlined"}}

## Botones con iconos y etiqueta

A veces es posible que desee tener iconos para ciertos botones para mejorar la UX de la aplicación, ya que reconocemos los logotipos más fácilmente que el texto plano. Por ejemplo, si tienes un botón de borrar puedes etiquetarlo con un icono de cubo de basura.

{{"demo": "IconLabelButtons.js", "bg": "outlined"}}

## Cargando

A partir de la versión 6.4.0, utiliza la propiedad `loading` para poner los botones en estado de carga y desactivar las interacciones.

{{"demo": "LoadingButtons.js", "bg": "outlined"}}

:::warning
Cuando la propiedad `loading` tiene el valor `boolean`, la envoltura de carga está siempre presente en el DOM para evitar un [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).

El valor de `loading` debería ser siempre `null` o `boolean`. El siguiente patrón no es recomendable, ya que puede provocar el bloqueo de la traducción de Google:

```jsx
<Button {...(isFetching && { loading: true })}> // ❌ No hagas esto
```

:::

## Botón de icono

Los botones con iconos suelen encontrarse en barras de aplicaciones y barras de herramientas.

Los iconos también son apropiados para los botones de alternancia que permiten seleccionar o deseleccionar una única opción, como añadir o quitar una estrella a un elemento.
como añadir o quitar una estrella a un elemento.

{{"demo": "IconButtons.js", "bg": "outlined"}}

### Tamaños

Para botones con iconos más grandes o más pequeños, utilice la propiedad `size`.

{{"demo": "IconButtonSizes.js", "bg": "outlined"}}

### Colores

Use `color` prop para aplicar la paleta de colores del tema al componente.

{{"demo": "IconButtonColors.js", "bg": "outlined"}}

### Carga

A partir de v6.4.0, utilice `loading` prop para establecer botones de icono en un estado de carga y desactivar las interacciones.

{{"demo": "LoadingIconButton.js", "bg": "outlined"}}

### Insignia

Puedes usar el componente [`Badge`](/ui/react-badge/) para añadir una insignia a un `IconButton`.

{{"demo": "IconButtonWithBadge.js", "bg": "outlined"}}

## Subir fichero

Para crear un botón de carga de archivos, convierta el botón en una etiqueta utilizando `component=«label»` y, a continuación, cree una entrada oculta visualmente con el tipo `file`.

{{"demo": "InputFileUpload.js", "bg": "outlined"}}