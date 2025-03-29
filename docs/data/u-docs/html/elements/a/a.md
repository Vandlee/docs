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

### `download`

Hace que el navegador trate la URL enlazada como una descarga. Puede utilizarse con o sin un valor de nombre de archiv:

- Sin un valor, el navegador sugerirá un nombre de archivo/extensión, generado a partir de diversas fuentes:
    - La cabecera HTTP `Content-Disposition`
    - El segmento final de la ruta URL
    - El tipo de medio (de la cabecera `Content-Type`, el inicio de una `data:` URL, o Blob.type para una `blob:` URL)
- `filename`: la definición de un valor lo sugiere como nombre de archivo. Los caracteres `/` y `\` se convierten en guiones bajos (`_`). Los sistemas de archivos pueden prohibir otros caracteres en los nombres de archivo, por lo que los navegadores ajustarán el nombre sugerido si es necesario.


:::info
- `download` sólo funciona para URLs del mismo origen, o los esquemas `blob:` y `data:`.
- La forma en que los navegadores tratan las descargas varía según el navegador, la configuración del usuario y otros factores. Es posible que se pregunte al usuario antes de iniciar una descarga, que el archivo se guarde automáticamente o que se abra automáticamente, ya sea en una aplicación externa o en el propio navegador.
- Si la cabecera `Content-Disposition` tiene información diferente del atributo `download`, el comportamiento resultante puede diferir:
    - Si la cabecera especifica un nombre de archivo, tiene prioridad sobre un nombre de archivo especificado en el atributo `download`.
    - Si la cabecera especifica una disposición de en línea (`inline`), Chrome y Firefox dan prioridad al atributo y lo tratan como una descarga. Las versiones antiguas de Firefox (anteriores a la 82) dan prioridad a la cabecera y mostrarán el contenido en línea.
:::

### `href`

Contiene una URL o un fragmento de URL al cual apunta el enlace. Un fragmento de URL es un nombre (_name_) precedido por el símbolo de número (`#`), que especifica una ubicación dentro del mismo documento (como el ID de un elemento HTML).

Las URLs no están limitadas sólo a documentos de internet basados en HTTP, sino que pueden utilizar cualquier protocolo soportado por el navegador. Por ejemplo `file:`, `ftp:` y `mailto:` funcionan en la mayoría de los navegadores. 

A partir de HTML5, este atributo puede omitirse para crear un enlace de marcador de posición. Este tipo de enlace se parece a un enlace tradicional, pero no dirige a ninguna parte.

:::info
Puede ser utilizado `href="#top"` o un fragmento vacío (`href="#"`) para enlazar a la parte superior de la página actual.

[Este comportamiento está especificado en HTML5](https://www.w3.org/TR/html5/single-page.html#scroll-to-fragid).
:::

### `hreflang`

Este atributo indica el lenguaje humano del recurso al que se enlaza.
Este es únicamente informativo, sin ninguna funcionalidad incorporada. Los valores permitidos están determinados por [BCP47](https://www.ietf.org/rfc/bcp/bcp47.txt)

### `referrerpolicy`

Indica que referencia (_referer_) enviar cuando la URL es recuperada.

- `'no-referrer'` significa `Referer:` el encabezado no será enviado.
- `'no-referrer-when-downgrade'` significa sin `Referer:` el encabezado será enviado cuando se navega a un origen (`origin`) sin HTTPS. Este es un comportamiento por defecto.
- `'origin'` significaque