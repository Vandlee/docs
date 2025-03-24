---
productId: u-ui
title: Componente de Lista de React
components: Collapse, Divider, List, ListItem, ListItemButton, ListItemAvatar, ListItemIcon, ListItemSecondaryAction, ListItemText, ListItemSubheader
githubLabel: 'component: list'
materialDesign: https://m2.material.io/components/lists
githubSource: packages/u_ui-u-ui/src/List
---

# Listas

<p class="description">Las listas son índices verticales continuos de texto o imágenes.</p>

Las listas son un conjunto continuo de texto o imágenes. Se componen de elementos que contienen acciones primarias y complementarias, que se representan mediante iconos y texto.

{{"component": "@vandlee/docs/ComponentLinkHeader"}}

## Introducción

Las listas presentan información en un formato conciso y fácil de seguir mediante un índice vertical continuo de texto o imágenes.

Las listas de U-Ui se implementan mediante una colección de componentes relacionados:

- **Lista (List):** una envoltura para los elementos de lista. Por defecto se muestra como un `<ul>`.
- **Elemento de lista (ListItem):** un elemento de lsita común. Por defecto se muestra como un `<li>`.
- **Botón de elemento de lista (ListItemButton):** elemento de acción que se utiliza dentro de un elemento de lista.
- **Icono de elemento de lista (ListItemIcon):** icono que se utiliza dentro de un elemento de lista.
- **Avatar de elemento de lista (ListItemAvatar):** un avatar que se utilizará dentro de un elemento de lista.
- **Texto de elemento de lista (ListItemText):** un contenedor dentro de un elemento de lista, utilizado para mostrar contenido de texto.
- **Separador de lista (ListDivider):** separador entre los elementos de la lista.
- **Subencabezado (ListSubheader):** una etiqueta para una lista anidada.

{{"demo": "es/BasicList.js", "bg": true}}

El último elemento de la demostración anterior muestra cómo se puede renderizar un enlace:

```jsx
<ListItemButton component="a" href="#simple-list">
  <ListItemText primary="Spam" />
</ListItemButton>
```

## Fundamentos

```jsx
import List from '@u_ui/u-ui/List';
import ListItem from '@u_ui/u-ui/ListItem';
```

## Lista anidada

{{"demo": "es/NestedList.js", "bg": true}}

## Lista de carpetas

{{"demo": "es/FolderList.js", "bg": true}}

## Elemento de lista seleccionado

{{"demo": "es/SelectedListItem.js", "bg": true}}

## Alinear elementos de la lista

Cuando se muestran tres líneas o más, el avatar no se alinea en la parte superior.
Debe establecer la propiedad `alignItems="flex-start"` para alinear el avatar en la parte superior, siguiendo las directrices de Material Design:

{{"demo": "es/AlignItemsList.js", "bg": true}}

## Subencabezado pegajoso

Al desplazarse, los subencabezados permanecen fijados en la parte superior de la pantalla hasta que son desplazados por el siguiente subencabezado.
Esta función se basa en el posicionamiento fijo de CSS.

{{"demo": "es/PinnedSubheaderList.js", "bg": true}}

## Inserción de elementos en la lista

La propiedad `inset` permite que un elemento de la lista que no tiene un icono o avatar principal se alinee correctamente con los elementos que sí lo tienen.

{{"demo": "es/InsetList.js", "bg": true}}

## Lista sin márgenes

Cuando se representa una lista dentro de un componente que define sus propios márgenes, se pueden desactivar los márgenes de `ListItem` con `disableGutters`.

{{"demo": "es/GutterlessList.js", "bg": true}}

## Lista virtualizada

En el siguiente ejemplo, demostramos cómo utilizar [react-window](https://github.com/bvaughn/react-window) con el componente `List`.
Renderiza 200 filas y puede manejar fácilmente más.
La virtualización ayuda con los problemas de rendimiento.

{{"demo": "es/VirtualizedList.js", "bg": true}}

Se recomienda el uso de [react-window](https://github.com/bvaughn/react-window) siempre que sea posible.
Si esta biblioteca no cubre tu caso de uso, deberías considerar el uso de alternativas como [react-virtuoso](https://github.com/petyosi/react-virtuoso).

## Personalización

Estos son algunos ejemplos de personalización del componente.
Puedes aprender más sobre esto en la [página de documentación de overrides](/u-ui/customization/how-to-customize/).

{{"demo": "es/CustomizedList.js"}}
