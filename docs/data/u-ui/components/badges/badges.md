---
productId: u-ui
title: Componente Insignia de React
components: Badge
githubLabel: 'component: badge'
unstyled: /u-base/react-badge/
githubSource: packages/yushii-ui/src/Badge
---

# Insignia

<p class="description">Insignia genera una pequeña insignia en la parte superior derecha de su(s) hijo(s).</p>

{{"component": "@yushii/docs/ComponentLinkHeader"}}

## Insignia básica

Ejemplos de insignias que contienen texto, utilizando colores primarios, secundarios, acento y neutrales. La insignia se aplica a sus hijos.

{{"demo": "es/SimpleBadge.js"}}

## Color

Utilice la propiedad `color` para aplicar la paleta de temas al componente.

{{"demo": "es/ColorBadge.js"}}

## Personalización

Este es un ejemplo de personalización del componente.
Puedes aprender más sobre esto en la [página de documentación de overrides](/u-ui/customization/how-to-customize/).

{{"demo": "es/CustomizedBadges.js"}}

## Visibilidad de las insignias

La visibilidad de las insignias puede controlarse mediante la propiedad `invisible`.

{{"demo": "es/BadgeVisibility.js"}}

La insignia se oculta automáticamente cuando `badgeContent` es cero. Puede anular esta opción con la propiedad `showZero`.

{{"demo": "es/ShowZeroBadge.js"}}

## Valor máximo

Puede utilizar la propiedad `max` para limitar el valor del contenido de la insignia.

{{"demo": "es/BadgeMax.js"}}

## Insignia de punto

La prop `dot` cambia una insignia en un pequeño punto. Puede usarse como notificación de que algo ha cambiado sin dar una cuenta.

{{"demo": "es/DotBadge.js"}}

## Solapamiento de la insignia

Puede utilizar la propiedad `overlap` para colocar la insignia en relación con la esquina del elemento envuelto.

{{"demo": "es/BadgeOverlap.js"}}

## Alineación de la insignia

Puedes usar la propiedad `anchorOrigin` para mover la insignia a cualquier esquina del elemento envuelto.

{{"demo": "es/BadgeAlignment.js", "hideToolbar": true}}

## Accesibilidad

No puede confiar en que el contenido de la insignia se anuncie correctamente.
Debe proporcionar una descripción completa, por ejemplo, con `aria-label`:

{{"demo": "es/AccessibleBadges.js"}}