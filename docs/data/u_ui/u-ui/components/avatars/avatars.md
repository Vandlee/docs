---
productId: u-ui
title: Componente Avatar de React
components: Avatar, AvatarGroup, Badge
githubLabel: 'component: avatar'
githubSource: packages/u_ui-u-ui/src/Avatar
---

# Avatar

<p class="description">Los avatares están presentes en todo el material design, desde las tablas hasta los menús de diálogo.</p>

{{"component": "@u-shii/docs/ComponentLinkHeader"}}

## Avatares de imagen

Los avatares de imagen se pueden crear pasando los props estándar `img` `src` o `srcSet` al componente.

{{"demo": "es/ImageAvatars.js"}}

## Avatares de letras

Se pueden crear avatares que contengan caracteres simples pasando una cadena de texto como `children`.

{{"demo": "es/LetterAvatars.js"}}

Puede utilizar diferentes colores de fondo para el avatar.
La siguiente demo genera el color basándose en el nombre de la persona.

{{"demo": "es/BackgroundLetterAvatars.js"}}

## Tamaños

Puedes cambiar el tamaño del avatar con las propiedades CSS `height` y `width`.

{{"demo": "es/SizeAvatars.js"}}

## Iconos avatares

Los avatares icono se crean pasando un icono como `children`.

{{"demo": "es/IconAvatars.js"}}

## Variantes

Si necesitas avatares cuadrados o redondeados, usa la prop `variant`.

{{"demo": "es/VariantAvatars.js"}}

## Fallbacks

Si se produce un error al cargar la imagen del avatar, el componente recurre a una alternativa en el siguiente orden:

- los hijos proporcionados
- la primera letra del texto `alt`
- un icono de avatar genérico

{{"demo": "es/FallbackAvatars.js"}}

## Agrupados

`AvatarGroup` muestra a sus hijos como una pila. Usa la propiedad `max` para limitar el número de avatares.

{{"demo": "es/GroupAvatars.js"}}

### Total de avatares

Si necesitas controlar el número total de avatares no mostrados, puedes usar la prop `total`.

{{"demo": "es/TotalAvatars.js"}}

### Excedente personalizado

Establece la prop `renderSurplus` como callback para personalizar el avatar excedente. El callback recibirá el número de excedente como argumento basado en los hijos y la prop `max`, y debería devolver un `React.ReactNode`.

La prop `renderSurplus` es útil cuando necesitas renderizar el excedente basándote en los datos enviados desde el servidor.

{{"demo": "es/CustomSurplusAvatars.js"}}

### Espaciado

Puedes cambiar el espaciado entre avatares usando la propiedad `spacing`. Puedes usar uno de los preajustes (`"medium"`, el predeterminado, o `"small"`) o establecer un valor numérico personalizado.

{{"demo": "es/Spacing.js"}}

***

## Con insignia

{{"demo": "es/BadgeAvatars.js"}}