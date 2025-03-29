---
title: Conceptos básicos
---

# HTML - Conceptos básicos

<p class="description">Introducción a los conceptos fundamentales de HTML, su estructura y uso.</p>

## Documentos HTML

Todos los documentos HTML deben comenzar con una declaración de tipo de documento: `<!DOCTYPE html>`.

El documento HTML propiamente dicho comienza con `<html>` y termina con `</html>`.

La parte visible del documento HTML se encuentra entre `<body>` y `</body>`.

```html
<!DOCTYPE html>
<html>
<body>

    <h1>Mi primer encabezado</h1>
    <p>Mi primer párrafo.</p>

</body>
</html>
```

## La declaración <!DOCTYPE>

La declaración `<!DOCTYPE>` representa al tipo de documento y ayuda a los navegadores a mostrar correctamente las páginas web.

Sólo debe aparecer una vez, en la parte superior de la página (antes de cualquier etiqueta HTML).

La declaración `<!DOCTYPE>` no distingue entre mayúsculas o minúsculas.

La declaración `<!DOCTYPE>` para HTML5 es:

```html
<!DOCTYPE html>
```

## Encabezados HTML

Los encabezados HTML se definen con las etiquetas `<h1>` a `<h6>`.

`<h1>` define el encabezamiento más importante. `<h6>` define el encabezamiento menos importante:

```html
<h1>Este es el encabezado 1</h1>
<h2>Este es el encabezado 2</h2>
<h3>Este es el encabezado 3</h3>
```

## Párrafos HTML

Los párrafos HTML se definen con la etiqueta `<p>`:

```html
<p>Este es un párrafo.</p>
<p>Este es otro párrafo.</p>
```

## Enlaces HTML

Los enlaces HTML se definen con la etiqueta `<a>`:

```html
<a href="https://docs.vandlee.com">Este es un enlace</a>
```

El destino del enlace se especifica en el atributo `href`.

Los atributos se utilizan para proporcionar información adicional sobre los elementos HTML.

Aprenderá más sobre los atributos más adelante.

## Imágenes HTML

Las imágenes HTML se definen con la etiqueta `<img>`.

El archivo de origen (`src`), el texto alternativo (`alt`), la anchura (`width`) y la altura (`height`) se proporcionan como atributos:

```html
<img src="vandlee.jpg" alt="docs.vandlee.com" width="104" height="142">
```

## ¿Cómo ver el código fuente HTML?

Alguna vez has visto una página web y te has preguntado «¡Eh! ¿Cómo han hecho eso?».

### Ver el código fuente HTML

Presione <kbd class="key">CTRL</kbd> + <kbd class="key">U</kbd> en una página HTML, o haz clic con el botón derecho del ratón en la página y selecciona «Ver código fuente de la página». Se abrirá una nueva pestaña con el código fuente HTML de la página.

### Inspeccionar un elemento HTML

Haz clic con el botón derecho en un elemento (o en un área en blanco) y selecciona «Inspeccionar» para ver de qué elementos está compuesto (verás tanto el HTML como el CSS). También puedes editar el HTML o CSS sobre la marcha en el panel «Elementos» o «Estilos» que se abre.