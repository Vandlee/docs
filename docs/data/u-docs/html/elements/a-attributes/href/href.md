---
title: Atributo href
---

# Atributo `href`

<p class="description">Define la dirección a la que apunta un hipervínculo. También permite usar enlaces con diferentes esquemas de URL, incluyendo aquellos que desencadenan descargas o acciones específicas.</p>

El atributo `href` especifica la URL de destino de un enlace. No se limita únicamente a direcciones web estándar (HTTP o HTTPS), sino que también puede utilizar otros esquemas soportados por los navegadores o definidos por el propio sitio web.

Entre los esquemas más comunes se incluyen:

- `tel:` para números de teléfono
- `mailto:` para direcciones de correo electrónico
- `sms:` para enviar mensajes de texto
- `javascript:` para ejecutar código JavaScript (uso desaconsejado por motivos de seguridad)
- Otros esquemas personalizados registrados mediante `registerProtocolHandler()`

{{"demo": "../../a/es/Href.html"}}

Además, las URL pueden incluir fragmentos que permiten dirigir al usuario a partes específicas de un recurso:

- Fragmentos de documento para secciones dentro de una página (`#seccion`)
- Fragmentos de texto para resaltar contenido específico
- Fragmentos multimedia para reproducir desde un punto concreto de un audio o video

## Enlace a una URL absoluta

{{"demo": "es/AbsoluteURL.html"}}

## Enlaces a URL relativas

{{"demo": "es/RelativeURL.html"}}

### URL relativa al esquema

`//example.com`

- Esta forma omite el esquema (`http:` o `https:`), y el navegador lo añade automáticamente según el esquema actual de la página.
- Útil para evitar problemas mixtos de contenido entre HTTP y HTTPS.

Por ejemplo, si estás en `https://miweb.com`, esto apunta a `https://example.com`.

### URL relativa al origen

`/u-docs/html`

- Comienza con una `/`, por lo tanto, es relativa al origen (host + puerto).
- Ignora el directorio actual del documento y parte desde la raíz del sitio.

Por ejemplo, desde cualquier parte del sitio, apunta a `https://miweb.com/u-docs/html`.

### URL relativa al directorio actual

`p`

- No comienza con `/`, por lo tanto, es relativa al directorio donde se encuentra el archivo actual.
- Es el tipo más básico de URL relativa.

Por ejemplo, si estás en `https://miweb.com/blog/index.html`, apunta a `https://miweb.com/blog/p`.

`./p`

- El prefijo `./` indica explícitamente que la ruta es relativa al directorio actual.
- Es funcionalmente equivalente a `"p"`, pero más claro semánticamente en rutas complejas.

Por ejemplo, si estás en `https://miweb.com/blog/`, apunta a `https://miweb.com/blog/p`.

### URL relativa al directorio padre

`../p`

- El prefijo `../` sube un nivel en la jerarquía de carpetas.
- Se puede usar varias veces para subir múltiples niveles.

Por ejemplo, si estás en `https://miweb.com/blog/articulos/`, apunta a `https://miweb.com/blog/p`.

## Enlace a un elemento de la misma página

{{"demo": "es/ElementOnSamePage.html"}}

:::info
Puedes usar `href="#top"` o el fragmento vacío (`href="#"`) para enlazar con la parte superior de la página actual, tal y como se define en la especificación HTML.
:::

## Enlace a una dirección de correo electrónico

Para crear enlaces que se abran en el programa de correo electrónico del usuario y le permitan enviar un nuevo mensaje, utilice el esquema `mailto:`:

{{"demo": "es/MailTo.html"}}

Para obtener más información sobre las URL `mailto:`, como la inclusión de un asunto o cuerpo, consulte [Email links (Inglés)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Creating_links#email_links) o [RFC 6068 (Inglés)](https://datatracker.ietf.org/doc/html/rfc6068)

## Enlace a números de teléfono

{{"demo": "es/Tel.html"}}

`tel:` el comportamiento del enlace varía en función de las capacidades del dispositivo:

- Los dispositivos móviles marcan automáticamente el número.
- La mayoría de los sistemas operativos tienen programas que pueden hacer llamadas, como Skype o FaceTime.
- Los sitios web pueden realizar llamadas telefónicas con `registerProtocolHandler`, como `web.skype.com`.
- Otros comportamientos incluyen guardar el número en los contactos o enviar el número a otro dispositivo.

Consulte el [RFC 3966 (Inglés)](https://datatracker.ietf.org/doc/html/rfc3966) para conocer la sintaxis, características adicionales y otros detalles sobre el esquema tel: URL.