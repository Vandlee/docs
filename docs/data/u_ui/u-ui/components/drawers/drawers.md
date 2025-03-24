---
productId: u-ui
title: Componente de cajón de React
components: Drawer, SwipeableDrawer
githubLabel: 'component: drawer'
materialDesign: https://m2.material.io/components/navigation-drawer
githubSource: packages/u_ui-u-ui/src/Drawer
---

# Cajón

<p class="description">Los cajones de navegación (o "barras laterales") proporcionan un acceso ergonómico a los destinos de un sitio o a las funciones de una aplicación, como cambiar de cuenta.</p>

Un cajón de navegación puede estar permanentemente en pantalla o controlarse mediante un icono de menú o navegación.

Las [hojas laterales (Inglés)](https://m2.material.io/components/sheets-side) son superficies suplementarias que se utilizan principalmente en tabletas y ordenadores de sobremesa.

{{"component": "@vandlee/docs/ComponentLinkHeader"}}

## Cajón temporal

Los cajones de navegación temporales pueden estar abiertos o cerrados. Cerrado por defecto, el cajón se abre temporalmente por encima de todos los demás contenidos hasta que se selecciona una sección.

El cajón puede cancelarse haciendo clic en la superposición o pulsando la tecla <kbd class="key">Esc</kbd>.
Se cierra cuando se selecciona un elemento, lo que se consigue controlando la opción `open`.

{{"demo": "es/TemporaryDrawer.js"}}

### Ancla

Utilice la propiedad `anchor` para especificar desde qué lado de la pantalla debe originarse el cajón.

El valor por defecto es `left`.

{{"demo": "es/AnchorTemporaryDrawer.js"}}

### Deslizable

Puede hacer que el cajón sea deslizable con el componente `SwipeableDrawer`.

Este componente viene con una sobrecarga de 2 kB gzipped.
Algunos dispositivos móviles de gama baja no serán capaces de seguir los dedos a 60 FPS.
Puedes usar el prop `disableBackdropTransition` para ayudar.

{{"demo": "es/SwipeableTemporaryDrawer.js"}}

Las siguientes propiedades se utilizan en este sitio web de documentación para una óptima usabilidad del componente:

- iOS está alojado en dispositivos de gama alta.
  La transición del backdrop puede activarse sin pérdida de fotogramas.
  El rendimiento será suficientemente bueno.
- iOS tiene una función de "deslizar para volver atrás" que interfiere
  con la función de descubrimiento, por lo que el descubrimiento tiene que ser desactivado.

```jsx
const iOS =
  typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

<SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} />;
```

### Borde deslizable

Puedes configurar el `SwipeableDrawer` para que tenga un borde visible cuando esté cerrado.

Si está en un ordenador de sobremesa, puede activar el cajón con el botón "ABRIR".
Si está en un móvil, puede abrir la demo en CodeSandbox (icono "editar") y deslizar.

{{"demo": "es/SwipeableEdgeDrawer.js", "iframe": true, "disableLiveEdit": true, "height": 400, "maxWidth": 300}}

### Mantener montado

El Modal utilizado internamente por el Cajón Deslizable tiene la propiedad `keepMounted` activada por defecto.
Esto significa que el contenido del cajón está siempre presente en el DOM.

Puede cambiar este comportamiento por defecto con la propiedad `ModalProps`, pero puede encontrar problemas con `keepMounted: false` en React 18.

```jsx
<Drawer 
    variant="temporary"
    ModalProps={{
        keepMounted: false,
    }}
/>
```

## Cajón responsivo

Puede utilizar la variante `temporary` para mostrar un cajón para pantallas pequeñas y `permanent` para un cajón para pantallas más anchas.

{{"demo": "es/ResponsiveDrawer.js", "iframe": true, "disableLiveEdit": true}}

## Cajón persistente

Los cajones de navegación persistentes pueden abrirse o cerrarse.
El cajón se sitúa en la misma elevación de superficie que el contenido.
Está cerrado por defecto y se abre seleccionando el icono del menú, y permanece abierto hasta que el usuario lo cierra.
El estado del cajón se recuerda de una acción a otra y de una sesión a otra.

Cuando el cajón está fuera de la rejilla de la página y se abre, obliga al resto del contenido a cambiar de tamaño y adaptarse a la ventana más pequeña.

Los cajones de navegación persistentes son aceptables para todos los tamaños superiores al móvil.
No se recomiendan para aplicaciones con varios niveles jerárquicos que requieran el uso de una flecha hacia arriba para la navegación.

{{"demo": "es/PersistentDrawerLeft.js", "iframe": true}}

{{"demo": "es/PersistentDrawerRight.js", "iframe": true}}

## Mini variante cajón

En esta variante, el cajón de navegación persistente cambia de anchura.
Su estado de reposo es el de un minicajón a la misma altura que el contenido, recortado por la barra de la aplicación.
Cuando se expande, aparece como el cajón de navegación persistente estándar.

La variante mini se recomienda para las secciones de las aplicaciones que necesitan un acceso rápido a la selección junto al contenido.

{{"demo": "es/MiniDrawer.js", "iframe": true}}

## Cajón permanente

Los cajones de navegación permanentes están siempre visible y fijados al borde izquierdo, a la misma altura que el contenido o el fondo. No pueden cerrarse.

Los cajones de navegación permanentes son el **por defecto recomendado para escritorio**.

### Navegación a toda altura

Aplicaciones centradas en el consumo de información que utilizan una jerarquía de izquierda a derecha.

{{"demo": "es/PermanentDrawerLeft.js", "iframe": true}}

{{"demo": "es/PermanentDrawerRight.js", "iframe": true}}

### Recortada bajo la barra de aplicaciones

Aplicaciones centradas en la productividad que requieren equilibrio en toda la pantalla.

{{"demo": "es/ClippedDrawer.js", "iframe": true}}