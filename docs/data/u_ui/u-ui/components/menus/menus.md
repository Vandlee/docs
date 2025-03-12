---
productId: u-ui
title: Componente Menú de React
components: Menu, MenuItem, MenuList, ClickAwayListener, Popover, Popper
githubLabel: 'component: menu'
materialDesign: https://m2.material.io/components/menus
waiAria: https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/
unstyled: /base-ui/react-menu/
githubSource: packages/mui-material/src/Menu
---

# Menú

<p class="description">Los menús muestran una lista de opciones en superficies temporales.</p>

Un menú muestra una lista de opciones en una superficie temporal. Aparece cuando el usuario interactúa con un botón u otro control.

{{"component": "@u-shii/docs/ComponentLinkHeader"}}

## Introducción

Los menús se implementan utilizando una colección de componentes relacionados:

- Menú (`Menu`): El contenedor/superficie del menú.
- Elemento del menú (`MenuItem`): Una opción para que los usuarios seleccionen del menú.
- Lista de menús (`MenuList`): Contenedor componible alternativo para los Elementos del Menú—vea [Composición con Lista de Menús](#composición-con-lista-de-menús) para más detalles.

## Menú básico

Por defecto, un menú básico se abre sobre el elemento de anclaje (esta opción se puede [cambiar](#posicionamiento-del-menú) mediante propiedades). Cuando se acerca a un borde de la pantalla, un menú básico se realinea verticalmente para asegurarse de que todos los elementos del menú sean completamente visibles.

Debe configurar el componente para que la selección de una opción la confirme inmediatamente y cierre el menú, como se muestra en la demostración siguiente.

{{"demo": "es/BasicMenu.js"}}

## Menú de iconos

En la vista de escritorio, se aumenta el relleno para dar más espacio al menú.

{{"demo": "es/IconMenu.js", "bg": true}}

## Menú denso

Para el menú que tiene una lista larga y un texto largo, puedes usar la propiedad `dense` para reducir el relleno y el tamaño del texto.

{{"demo": "es/DenseMenu.js", "bg": true}}

## Menú seleccionado

Si se utiliza para la selección de elementos, al abrirse, los menús simples colocan el foco inicial en el elemento de menú seleccionado.
El elemento de menú seleccionado se establece usando la propiedad `selected` (de [ListItem](/u_ui/u-ui/api/list-item/)).
Para utilizar un elemento de menú seleccionado sin afectar al foco inicial, establezca la propiedad `variant` en "menu".

{{"demo": "es/SimpleListMenu.js"}}

## Menú posicionado

Como el componente `Menu` utiliza el componente `Popover` para posicionarse, puedes utilizar el mismo [positioning props](/u_ui/u-ui/react-popover/#zona-de-juegos) para posicionarlo.
Por ejemplo, puedes mostrar el menú encima del ancla:

{{"demo": "es/PositionedMenu.js"}}

## Composición con MenuList

El componente Menú (`Menu`) utiliza internamente el componente Popover.
Pero es posible que desee utilizar una estrategia de posicionamiento diferente, o que prefiera no bloquear el desplazamiento, por ejemplo.

El componente Lista de menús (`MenuList`) le permite componer su propio menú para este tipo de casos de uso; su finalidad principal es gestionar el foco.
Consulte la demostración siguiente para ver un ejemplo de composición que utiliza MenuList y sustituye el Popover predeterminado del menú por un componente Popper:

{{"demo": "es/MenuListComposition.js", "bg": true}}

## Menú de cuenta

El contenido de `Menu` puede mezclarse con otros componentes como `Avatar`.

{{"demo": "es/AccountMenu.js"}}

## Personalización

Este es un ejemplo de personalización del componente.
Puedes aprender más sobre esto en la [página de documentación de overrides](/u_ui/u-ui/customization/how-to-customize/).

{{"demo": "es/CustomizedMenus.js"}}

El `MenuItem` es una envoltura alrededor de `ListItem` con algunos estilos adicionales.
Puedes usar las mismas características de composición de listas con el componente `MenuItem`:

🎨 Si buscas inspiración, puedes consultar [Ejemplos de personalización de MUI Treasury](https://mui-treasury.com/?path=/docs/menu-introduction--docs).

## Altura máxima del menú

Si la altura de un menú impide que se muestren todos sus elementos, el menú puede desplazarse internamente.

{{"demo": "es/LongMenu.js"}}

## Limitaciones

Existe [un error de flexbox (Inglés)](https://issues.chromium.org/issues/40344463) que impide que `text-overflow: ellipsis` funcione en un diseño flexbox.
Puede utilizar el componente `Typography` con `noWrap` para solucionar este problema:

{{"demo": "es/TypographyMenu.js", "bg": true}}

## Cambiar transición

Utiliza una transición diferente.

{{"demo": "es/FadeMenu.js"}}

## Menú contextual

He aquí un ejemplo de menú contextual. (Haga clic con el botón derecho para abrirlo).

{{"demo": "es/ContextMenu.js"}}

## Menú Agrupado

Mostrar categorías con el componente `ListSubheader`.

{{"demo": "es/GroupedMenu.js"}}

## Proyectos complementarios

Para casos de uso más avanzados podrías aprovechar:

### material-ui-popup-state

![stars](https://img.shields.io/github/stars/jcoreio/material-ui-popup-state?style=social&label=Star)
![npm downloads](https://img.shields.io/npm/dm/material-ui-popup-state.svg)

El paquete [`material-ui-popup-state`](https://github.com/jcoreio/material-ui-popup-state) que se encarga del estado del menú por ti en la mayoría de los casos.