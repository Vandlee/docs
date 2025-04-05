---
title: Atributo download
---

# Atributo `download`

<p class="description">Indica al navegador que trate el enlace como una descarga en lugar de abrirlo normalmente.</p>

El atributo `download` se utiliza en el elemento [`<a>` - Enlace](/u-docs/html/element-a/) para sugerir que el recurso enlazado debe descargarse. Puede usarse con o sin un valor:

- **Sin valor**: el navegador intentará generar un nombre de archivo adecuado a partir de diferentes fuentes:
  - La cabecera HTTP `Content-Disposition`
  - El último segmento de la URL
  - El tipo de medio (extraído de `Content-Type`, una URL `data:`, o `Blob.type` en el caso de una URL `blob:`)

- **Con valor**: se puede proporcionar un nombre de archivo personalizado. En este caso:
  - Los caracteres `/` y `\` se reemplazan por guiones bajos (`_`)
  - Otros caracteres inválidos para el sistema de archivos pueden ser modificados automáticamente por el navegador

{{"demo": "es/Download.html" }}

:::info
- El atributo `download` solo funciona con URLs del mismo origen, o con los esquemas `blob:` y `data:`.
- El comportamiento exacto puede variar según el navegador, la configuración del usuario y el tipo de archivo:
  - Algunos navegadores pueden pedir confirmación antes de descargar
  - Otros pueden descargar automáticamente o incluso abrir el archivo en una aplicación externa o en el propio navegador
- Si la cabecera HTTP `Content-Disposition` entra en conflicto con el atributo `download`, el resultado puede variar:
  - Si la cabecera especifica un nombre de archivo, este tiene prioridad sobre el valor del atributo
  - Si la cabecera indica una visualización en línea (`inline`), Chrome y Firefox suelen dar prioridad al atributo `download` y forzar la descarga
  - Las versiones antiguas de Firefox (anteriores a la 82) daban prioridad a la cabecera y mostraban el contenido en línea
:::
