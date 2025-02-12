---
productId: u-ui
title: Componente de Valoración de React
components: Rating
githubLabel: 'component: rating'
waiAria: https://www.w3.org/WAI/tutorials/forms/custom-controls/#a-star-rating
githubSource: packages/yushii-ui/src/Rating
---

# Valoración

<p class="description">Las valoraciones proporcionan información sobre las opiniones y experiencias de los demás, y pueden permitir al usuario enviar su propia valoración.</p>

{{"component": "@yushii/docs/ComponentLinkHeader"}}

## Valoración básica

{{"demo": "es/BasicRating.js"}}

## Precisión de la valoración

La valoración puede mostrar cualquier número flotante con la propiedad `value`.
Utilice la propiedad `precision` para definir el mínimo cambio de valor incremental permitido.

{{"demo": "es/HalfRating.js"}}

## Comentarios al pasar el ratón

Puede mostrar una etiqueta al pasar el ratón por encima para ayudar al usuario a elegir el valor correcto.
La demo utiliza la propiedad `onChangeActive`.

{{"demo": "es/HoverRating.js"}}

## Tamaños

Para clasificaciones mayores o menores utilice el accesorio `size`.

{{"demo": "es/RatingSize.js"}}

## Personalización

Estos son algunos ejemplos de personalización del componente.
Puedes aprender más sobre esto en la [página de documentación de overrides](/u-ui/customization/how-to-customize/).

{{"demo": "es/CustomizedRating.js"}}

## Grupo de opciones

La calificación se implementa con un grupo de opciones, establezca `highlightSelectedOnly` para restaurar el comportamiento natural.

{{"demo": "es/RadioGroupRating.js"}}

## Accesibilidad

([Tutorial WAI (inglés)](https://www.w3.org/WAI/tutorials/forms/custom-controls/#a-star-rating))

La accesibilidad de este componente se basa en:

- Un grupo de opciones con sus campos ocultos visualmente.
  Contiene seis botones de radio, uno para cada estrella, y otro para 0 estrellas que está marcado por defecto. Asegúrese de proporcionar un valor para la propiedad `name` que sea único para el formulario principal.
- Etiquetas (labels) para los botones de radio que contengan texto real ("1 Estrella", "2 Estrellas", ...).
  Asegúrese de proporcionar una función adecuada a la propiedad `getLabelText` cuando la página esté en un idioma distinto del español. Puedes usar los [idiomas incluidos](/u-ui/guides/localization/), o proporciona tus propios idiomas.
- Una apariencia visualmente distinta para los iconos de valoración.
  Por defecto, el componente de valoración utiliza tanto una diferencia de color como de forma (iconos rellenos y vacíos) para indicar el valor. En caso de que utilice el color como único medio para indicar el valor, la información también debe mostrarse como texto, como en esta demostración. Esto es importante para cumplir el [criterio de éxito 1.4.1 (inglés)](https://www.w3.org/TR/WCAG21/#use-of-color) de WCAG2.1.

{{"demo": "es/TextRating.js"}}

### ARIA

La valoración de sólo lectura tiene un rol de "img", y un aria-label que describe la calificación mostrada.

### Teclado

Dado que el componente de calificación utiliza botones de radio, la interacción con el teclado sigue el comportamiento nativo del navegador. El tabulador enfocará la calificación actual, y las teclas de cursor (`←`, `↑`, `→`, `↓`) controlan la calificación seleccionada.

La valoración de sólo lectura no es enfocable. 