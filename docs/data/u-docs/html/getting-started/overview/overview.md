---
title: Introducción 
---

# HTML - Introducción

<p class="description">HTML (Lenguaje de Marcas de Hipertexto, del inglés HyperText Markup Language) es el lenguaje de marcado estándar para crear páginas Web.</p>

## ¿Qué es HTML?

- HTML son las siglas de Hyper Text Markup Language (lenguaje de marcado de hipertexto).
- HTML es el lenguaje de marcado estándar para crear páginas we.
- HTML describe la estructura de una página web.
- HTML consta de una serie de elmentos.
- Los elementos HTML indican al navegador cómo mostrar el contenido.
- Los elementos HTML etiquetan partes del contenido como «esto es un título», «esto es un párrafo», «esto es un enlace», etc.

## Un documento HTML simple

{{"demo": "es/SimpleDocument.html", "defaultCodeOpen": true}}

### Ejemplo explicado

- La declaración `<!DOCTYPE html>` define que este documento es un documento HTML5.
- El elemento `<html>` es el elemento raíz de una página HTML.
- El elemento `<head>` contiene metainformación sobre la página HTML.
- El elemento `<title>` especifica un título para la página HTML (que se muestra en la barra de título del navegador o en la pestaña de la página),
- El elemento `<body>` define el cuerpo del documento y es un contenedor para todos los contenidos visibles, como títulos, párrafos, imágenes, hipervínculos, tablas, listas, etc.
- El elemento `<h1>` define un título grande.
- El elemento `<p>` define un párrafo.

### Navegadores web

El propósito de un navegador web (Chrome, Edge, Firefox, Safari) es leer documentos HTML y mostrarlos correctamente.

Un navegador no muestra las etiquetas HTML, sino que las utiliza para determinar cómo mostrar el documento.

## ¿Qué es un elemento HTML?

Un elemento HTML está definido por una etiqueta inicial, un contenido y una etiqueta final:

```html
<tagname>El contenido va aquí</tagname>
```

El elemento HTML es todo lo que va desde la etiqueta inicial hasta la etiqueta final:

```html
<h1>Mi primer encabezado</h1>
```

```html
<p>Mi primer párrafo.</p>
```

| Etiqueta de apertura | Contenido del elemento | Etiqueta de cierre |
| :------------------- | :--------------------- | :----------------- |
| `<h1>`               | Mi primer encabezado   | `</h1>`            |
| `<p>`                | Mi primer párrafo.     | `</p>`             |
| `<br>`               | Ninguno                | Ninguno            |

:::info
Algunos elementos HTML no tienen contenido (como el elemento `<br>`). Estos elementos se denominan elementos vacíos. Los elementos vacíos no tienen etiqueta de fin.
:::

## Estructura de la página HTML

A continuación se muestra una visualización de la estructura de una página HTML:

{{"demo": "es/PageStructure.js", "hideToolbar": true, "bg": "outlined", "noPadding": true }}

:::info
El contenido de la sección `<body>` se mostrará en un navegador. El contenido dentro del elemento `<title>` se mostrará en la barra de título del navegador o en la pestaña de la página.
:::