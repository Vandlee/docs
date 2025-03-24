---
productId: u-ui
title: Componente Barra de aplicaciones de React
components: AppBar, Toolbar, Menu
githubLabel: 'component: app bar'
materialDesign: https://m2.material.io/components/app-bars-top
githubSource: packages/u_ui-u-ui/src/AppBar
---

# Barra de aplicaciones

<p class="description">La Barra de aplicaciones muestra información y acciones relacionadas con la pantalla actual.</p>

La barra de aplicación superior proporciona contenido y acciones relacionadas con la pantalla actual. Se utiliza para la marca, los títulos de pantalla, la navegación y las acciones.

Puede transformarse en una barra de acción contextual o utilizarse como barra de navegación.

{{"component": "@vandlee/docs/ComponentLinkHeader"}}

## Barra de aplicación básica

{{"demo": "es/ButtonAppBar.js", "bg": true}}

## Barra de aplicación con menu

{{"demo": "es/MenuAppBar.js", "bg": true}}

## Barra de aplicación con menu responsivo

{{"demo": "es/ResponsiveAppBar.js", "bg": true}}

## Barra de aplicación con campo de búsqueda

Una barra de búsqueda lateral.

{{"demo": "es/SearchAppBar.js", "bg": true}}

## Barra de aplicación responsiva con cajón

{{"demo": "es/DrawerAppBar.js", "bg": true, "iframe": true}}

## Barra de aplicación con un campo de búsqueda principal

Un campo de búsqueda principal.

{{"demo": "es/PrimarySearchAppBar.js", "bg": true}}

## Denso (sólo para escritorio)

{{"demo": "es/DenseAppBar.js", "bg": true}}

## Prominente

Una barra de aplicaciones prominente.

{{"demo": "es/ProminentAppBar.js", "bg": true}}

## Barra de acción inferior

{{"demo": "es/BottomAppBar.js", "iframe": true, "maxWidth": 400}}

## Colocación fija

Cuando la posición de la barra de aplicaciones es fija, la dimensión del elemento no afecta al resto de la página. Esto puede causar que alguna parte de tu contenido sea invisible detrás de la barra de aplicaciones. Aquí tienes 3 posibles soluciones:

1. Puedes usar `position="sticky"` en lugar de fijo.
2. Puedes renderizar un segundo componente `<Toolbar />`:

```jsx
function App() {
  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar>{/* contenido */}</Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}
```

3. Puedes utilizar `theme.mixins.toolbar` CSS:

```jsx
const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

function App() {
  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar>{/* contenido */}</Toolbar>
      </AppBar>
      <Offset />
    </React.Fragment>
  );
}
```

## Desplazamiento

Puedes utilizar el hook `useScrollTrigger()` para responder a las acciones de desplazamiento del usuario.

### Ocultar la barra de aplicación

La barra de aplicaciones se oculta al desplazarse hacia abajo para dejar más espacio para la lectura.

{{"demo": "es/HideAppBar.js", "iframe": true, "disableLiveEdit": true}}

### Barra de aplicación elevada

La barra de aplicaciones se eleva al desplazarse para comunicar que el usuario no se encuentra en la parte superior de la página.

{{"demo": "es/ElevateAppBar.js", "iframe": true, "disableLiveEdit": true}}

### `useScrollTrigger([options]) => trigger`

#### Argumentos

1. `options` (_object_ [opcional]):

    - `options.disableHysteresis` (_bool_ [opcional]): Por defecto es `false`. Desactiva la histéresis. Ignora la dirección de desplazamiento al determinar el valor del `trigger`.
    - `options.target` (_Node_ [opcional]): Por defecto es `window`.
    - `options.threshold` (_number_ [opcional]): Por defecto es `100`. Cambia el valor del `trigger` cuando el scroll vertical cruza estrictamente este umbral (exclusivo).

#### Devuelve

`trigger`: ¿La posición de desplazamiento coincide con los criterios?

#### Ejemplos

```jsx
import useScrollTrigger from '@u_ui/u-ui/useScrollTrigger';

function HideOnScroll(props) {
  const trigger = useScrollTrigger();
  return (
    <Slide in={!trigger}>
      <div>Hola</div>
    </Slide>
  );
}
```

## Activar color en modo oscuro

Siguiendo las [Material Design guidelines](https://m2.material.io/design/color/dark-theme.html), la propiedad `color` no tiene efecto en la apariencia de la barra de aplicaciones en modo oscuro. Puedes anular este comportamiento estableciendo la propeidad `enableColorOnDark` a `true`.

{{"demo": "es/EnableColorOnDarkAppBar.js", "bg": true}}