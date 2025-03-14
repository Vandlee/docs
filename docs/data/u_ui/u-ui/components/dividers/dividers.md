---
productId: u-ui
title: Componente Separador de React
components: Divider
githubLabel: 'component: divider'
materialDesign: https://m2.material.io/components/dividers
githubSource: packages/u_ui-u-ui/src/Divider
---

# Separador

<p class="description">El componente Separador proporciona una línea fina y discreta para agrupar elementos y reforzar la jerarquía visual.</p>

{{"component": "@u-shii/docs/ComponentLinkHeader"}}

## Introducción

El componente Separador se representa como un `<hr>` gris oscuro por defecto, y cuenta con varios accesorios útiles para realizar ajustes de estilo rápidos.

{{"demo": "es/IntroDivider.js", "bg": true}}

## Conceptos básicos

```jsx
import Divider from '@u_ui/u-ui/Divider';
```

### Variantes

El componente Separador admite tres variantes: `fullWidth` (por defecto), `inset` y `middle`.

{{"demo": "es/DividerVariants.js", "bg": true}}

### Orientación

Usa el prop `orientation` para cambiar el Separador de horizontal a vertical. Cuando se utiliza la orientación vertical, el separador muestra un `<div>` con los atributos de accesibilidad correspondientes en lugar de `<hr>` para cumplir la [especificación WAI-ARIA (Inglés)](https://www.w3.org/TR/wai-aria-1.2/#separator).

{{"demo": "es/VerticalDividers.js", "bg": true}}

### Flex item

Utilice la propiedad `flexItem` para mostrar el divisor cuando se utilice en un contenedor flexible.

{{"demo": "es/FlexDivider.js", "bg": true}}

### Con hijos

Utilice la propiedad `textAlign` para alinear los elementos envueltos por el divisor.

{{"demo": "es/DividerText.js", "bg": true}}

***

## Personalización

### Uso con una lista

Cuando utilice el divisor para separar elementos en una lista, utilice la propiedad `component` para mostrarlo como un `<li>`, de lo contrario no será un elemento HTML válido.

{{"demo": "es/ListDividers.js", "bg": true}}

### Agrupación de iconos

La siguiente demostración muestra cómo combinar los accesorios `variant="middle"` y `orientation="vertical"`.

{{"demo": "es/VerticalDividerMiddle.js", "bg": true}}

***

## Accesibilidad

Debido a su papel implícito de `separador`, el Separador, que es un elemento `<hr>`, será anunciado por los lectores de pantalla como un "Divisor Horziontal" (o vertical, si está utilizando la propiedad `orientation`).

Si lo está utilizando como un elemento puramente estilístico, le recomendamos que configure `aria-hidden="true"` para que los lectores de pantalla lo omitan.

```js
<Divider aria-hidden="true" />
```

Si utilizas el separador para envolver otros elementos, como texto o [chips](/u_ui/u-ui/react-chip), te recomendamos que cambies su elemento renderizado por un simple `<div>` utilizando la propiedad `component` y estableciendo `role="presentation"`.
Esto asegura que no sea anunciado por los lectores de pantalla mientras se preserva la semántica de los elementos dentro de él.

```js
<Divider component="div" role="presentation">
  <Typography>Elemento de texto</Typography>
</Divider>
```


## Anatomía

El componente Separador está compuesto por una raíz `<hr>`.

```html
<hr class="uiDivider-root">
  <!-- El hijo del separador va aquí -->
</hr>
```
