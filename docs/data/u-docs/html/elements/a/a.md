---
title: Enlace
---

# Enlace HTML

<p class="description">El elemento <code>&lt;a&gt;</code>, conocido como Enlace o Anchor en HTML, se usa para crear vínculos a otras páginas, secciones del mismo documento, archivos, correos electrónicos y más.</p>


El elemento _HTML_ `Anchor` `<a>` crea un enlace a otras páginas de internet, archivos o ubicaciones dentro de la misma página, direcciones de correo, o cualquier otra URL.

## Pruebalo

{{"demo": "es/Example.html" }}

| Nombre                           | Descripción        |
| :------------------------------- | :----------------- |
| Categorías de contenido          | Contenido de flujo, contenido de párrafo, contenido interactivo, contenido palpable |
| Contenido permitido              | Transparente, que contiene contenido de flujo (excluyendo contenido interactivo) o contenido de párrafo. |
| Omisión de etiquetas             | Ninguna, tanto la etiqueta inicial como la final son obligatorias. |
| Elementos principales permitidos | Cualquier elemento que acepte contenido de párrafo o cualquier elemento que acepte contenido de flujo, sin embargo simpre excluyendo los elementos `<a>` (de acuerdo con el principio lógico de simetría, si una etiqueta `<a>` como padre, no puede contener contenido interactivo, entonces el mismo contenido de `<a>` no puede tener una etiqueta `<a>` como su padre). |
| Roles ARIA permitidos	           | button, checkbox, menuitem, menuitemcheckbox, menuitemradio, option, radio, switch, tab, treeitem |
| Interfaz DOM		               | HTMLAnchorElement |

## Atributos

Este elemento incluye los atributos globales.

### `attributionsrc` {experimental}

Especifica que desea que el navegador envíe una cabecera `Attribution-Reporting-Eligible`. En el lado del servidor, esto se utiliza para activar el envío de una cabecera `Attribution-Reporting-Register-Source` en la respuesta, para registrar una fuente de atribución basada en la navegación.

El navegador almacena los datos de origen asociados a la fuente de atribución basada en la navegación (como se indica en la cabecera de respuesta `Attribution-Reporting-Register-Source`) cuando el usuario hace clic en el enlace. Consulte la API de informes de atribución para obtener más información.

Hay dos versiones de este atributo que puedes configurar:

- Booleano, es decir, sólo el nombre `attributionsrc`. Especifica que desea que la cabecera `Attribution-Reporting-Eligible` se envíe al mismo servidor al que apunta el atributo `href`. Esto está bien cuando se gestiona el registro de la fuente de atribución en el mismo servidor.
- Valor que contiene una o varias URL, por ejemplo: 
```html
attributionsrc="https://a.example/register-source
https://b.example/register-source"
```
Esto es útil en los casos en que el recurso solicitado no se encuentra en un servidor que usted controla, o simplemente desea gestionar el registro de la fuente de atribución en un servidor diferente. En este caso, puede especificar una o varias URL como valor de `attributionsrc`. Cuando se produzca la solicitud del recurso, la cabecera `Attribution-Reporting-Eligible` se enviará a la(s) URL(s) especificada(s) en `attributionsrc` además del origen del recurso. A continuación, estas URL pueden responder con `Attribution-Reporting-Register-Source` para completar el registro.

:::info
Especificar varias URL significa que se pueden registrar varias fuentes de atribución en la misma función. Por ejemplo, puede tener diferentes campañas cuyo éxito desea medir, lo que implica generar diferentes informes sobre diferentes datos.
:::

Los elementos `<a>` no pueden utilizarse como activadores de atribución, sólo las fuentes.

### `download`

Hace que el navegador trate la URL enlazada como una descarga.

Visita [atributo `download`](/u-docs/html/element-a-attributes/download/) para más información.

{{"demo": "../a-attributes/download/es/Download.html" }}

### `href`

La URL a la que apunta el hipervínculo. Los enlaces no están restrigidos a URL basadas en HTTP, pueden utilizar cualquier esquema de URL soportado por los navegadores.

Visita [atributo `href`](/u-docs/html/element-a-attributes/href/) para más información.

{{"demo": "es/Href.html"}}

### `hreflang`

Indica el lenguaje humano de la URL enlazada. No tiene funcionalidad integrada. Los valores permitidos son los mismos que los del atributo global `lang`.

### `ping`

Una lista de URLs separadas por espacios. Cuando se sigue el enlace, el navegador enviará peticiones `POST` con el cuerpo `PING` a las URLs. Típicamente para rastreo.

### `referrerpolicy`

Cuánto del referente enviar al seguir el enlace.

- `no-referrer`: No se enviará la cabecera `Referer`.
- `no-referrer-when-downgrade`: La cabecera `Referer` no se enviará a orígenes sin TLS (HTTPS).
- `origin`: El `Referer` enviado se limitará al origen de la página de referencia: su esquema, host y puerto.
- `origin-when-cross-origin`: El referrer enviado a otros orígenes se limitará al esquema, el host y el puerto. Las navegeaciones en el mismo origen seguirán incluyendo la ruta.
- `same-origin`: Se enviará un referrer para el mismo origen, pero las peticiones cross-origin no contendrán información del referrer.
- `strict-origin`: Soló envía el origen del documento como referrer cuando el nivel de seguridad del protocolo permanece igual a (HTTPS→HTTPS), pero no lo envía a un destino menos seguro (HTTPS→HTTP).
- `strict-origin-when-cross-origin (por defecto)`: Envía una URL completa cuando se realiza una petición con el mismo origen, sólo envía el origen cuando el nivel de seguridad del protocolo se mantiene igual (HTTPS→HTTPS), y no envía ninguna cabecera a un destino menos seguro (HTTPS→HTTP).
- `unsafe-url`: El referrer incluirá el origen y la ruta (pero no el fragmento, la contraseña o el nombre de usuario). Este valor es inseguro, porque filtra orígenes y rutas de recrusos protegidos port TLS a orígenes inseguros.

### `rel`

La relación de la URL enlazada como tipos de enlace separados por espacios.

### `target`

Dónde mostrar la URL enlazada, como nombre para un _contexto de navegación_ (una pestaña, ventana o `<iframe>`). Las siguientes palabras clave tienen significados especiales para dónde cargar la URL:

- `_self`: El contexto de navegación actual. (Predeterminado)
- `_blank`: Suele ser una pestaña nueva, pero los usuarios pueden configurar los navegadores para que abran una ventana nueva en su lugar.
- `_parent`: El contexto de navegación padre del actual. Si no tiene padre, se comporta como `_self`.
- `_top`: El contexto de navegación más alto. Para ser específicos, esto significa el contexto «más alto» que es un antepasado del actual. Si no hay ancestros, se comporta como `_self`.
- `_unfencedTop`: Permite a los marcos cercados incrustados navegar por el marco de nivel superior (es decir, atravesar más allá de la raíz del marco cercado, a diferencia de otros destinos reservados). Ten en cuenta que la navegación seguirá teniendo éxito si se utiliza fuera del contexto de un marco vallado, pero no actuará como una palabra clave reservada.

:::info
Establecer `target="_blank"` en elementos `<a>` proporciona implícitamente el mismo comportamiento `rel` que establecer `rel="noopener"`, que no establece `window.open`.
:::

### `type`

Sugiere el formato de la URL enlazada con un tipo MIME. No tiene funcionalidad integrada.

## Atributos obsoletos {deprecated}

Obsoleto. No debe utilizarse en sitios web nuevos.

### `charset` {deprecated}

Indica la codificación de caracteres de la URL enlazada.

:::info
Este atributo está obsoleto y **no debe ser utilizado por los autores**. Utilice el encabezado HTTP `Content-Type` en la URL enlazada.
:::

### `coords` {deprecated}

Usado con [el atributo `shape`](#shape). Una lista de coordenadas separadas por comas.

### `name` {deprecated}

Era necesario para definir una posible ubicación de destino en una página. En HTML 4.01, tanto id como name podían utilizarse en `<a>`, siempre que tuvieran valores idénticos.

:::info
Usa el atributo global `id` en su lugar.
:::

### `rev` {deprecated}

Especifica un enlace inverso; lo contrario del atributo rel. Desaprobado por ser muy confuso.

### `shape` {deprecated}

La forma de la región del hipervínculo en un mapa de imagen.

:::info
Utilice en su lugar el elemento `<area>` para los mapas de imágenes.
:::

## Accesibilidad

### Texto de enlace fuerte

El contenido de un enlace debe indicar a dónde va, incluso fuera de contexto.

#### Texto inaccesible, enlace débil

Un error tristemente común es enlazar únicamente las palabras «haga clic aquí» o «aquí»:

{{"demo": "es/Weak.js", "bg": "error", "hideToolbar": true}}

#### Texto de enlace fuerte

Por suerte, esto es fácil de arreglar y, de hecho, es más corto que la versión inaccesible.

{{"demo": "es/Strong.js", "bg": "success", "hideToolbar": true}}

El software de apoyo dispone de atajos para listar todos los enlaces de una página. Sin embargo, un texto de enlace fuerte beneficia a todos los usuarios: el atajo «listar todos los enlaces» emula la forma en que los usuarios videntes escanean rápidamente las páginas.

## Eventos onclick

A menudo se abusa de los elementos de anclaje (enlaces) como falsos botones estableciendo su `href` a `#` o `javascript:void(0)` para eviter que la página se actualice, y luego escuchando sus eventos de clic.

Estos valores `href` falsos provocan comportamientos inesperados al copiar/arrastrar enlaces, abrir enlaces en una nueva pestaña/ventana, marcar como favoritos o cuando JavaScript se está cargando, tiene errores o está desactivado. También transmiten una semántica incorrecta a las tecnologías de asistencia, como los lectores de pantalla.

En su lugar, utilice `<button> (Botón)`. En general, sólo debe utilizar un hipervínculo para navegar a una URL real.

## Enlaces externos y enlaces a recursos no HTML

Los enlaces que se abren en una nueva pestaña/ventana mediante `target="_blank"`, o los que apuntan a un archivo de descarga deben indicar qué ocurrirá cuando se siga el enlace.

Las personas con problemas de visión, que navegan con la ayuda de la tecnología de lectura de pantalla o con problemas cognitivos pueden sentirse confusas cuando se abre inesperadamente una nueva pestaña, ventana o aplicación. Es posible que el software de lectura de pantalla más antiguo ni siquiera anuncie el comportamiento.

### Enlace que abre una nueva pestaña/ventana

{{"demo": "es/NewTab.html"}}

## Seguridad y Privacidad

Los elementos `<a>` pueden tener consecuencias para la seguridad y la privacidad de los usuarios. Para más información, consulte [Referer header: privacy and security concerns (Inglés)](https://developer.mozilla.org/en-US/docs/Web/Security/Referer_header:_privacy_and_security_concerns).

El uso de `target="_blank"` sin `rel="noreferrer"` y `rel="noopener"` hace que el sitio web sea vulnerable a ataques de explotación de la API window.opener, aunque tenga en cuenta que, en las versiones más recientes del navegador, establecer `target="_blank"` proporciona implícitamente la misma protección que establecer `rel="noopener"`. Consulte la compatibilidad de navegadores para obtener más información.