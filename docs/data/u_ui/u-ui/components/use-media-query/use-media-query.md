---
productId: u-ui
title: Media queries en React para diseño responsive
githubLabel: 'hook: useMediaQuery'
githubSource: packages/mui-material/src/useMediaQuery
---

# useMediaQuery

<p class="description">Este hook de React busca coincidencias con una consulta de medios CSS. Permite la representación de componentes en función de si la consulta coincide o no.</p>

Algunas de las características clave:

- ⚛️ Tiene una API React idiomática.
- 🚀 Es performant, observa el documento para detectar cuando cambian sus media queries, en lugar de sondear los valores periódicamente.
- 🤖 Soporta renderizado del lado del servidor.

{{"component": "@vandlee/docs/ComponentLinkHeader", "design": false}}

## Media query básica

Debes proporcionar una media query al primer argumento del hook.
La cadena media query puede ser cualquier media query CSS válida, por ejemplo [`'(prefers-color-scheme: dark)'`](/u_ui/u-ui/customization/dark-mode/#system-preference).

{{"demo": "es/SimpleMediaQuery.js", "defaultCodeOpen": true}}

⚠️ No puede utilizar `'print'` por limitación del navegador, por ejemplo [Firefox](https://bugzilla.mozilla.org/show_bug.cgi?id=774398).

## Uso de los helpers de breakpoints

Puedes utilizar los [breakpoint helpers](/u_ui/u-ui/customization/breakpoints/) de U-Ui  de la siguiente manera:

```jsx
import { useTheme } from '@u_ui/u-ui/styles';
import useMediaQuery from '@u_ui/u-ui/useMediaQuery';

function MyComponent() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return <span>{`theme.breakpoints.up('sm') matches: ${matches}`}</span>;
}
```

{{"demo": "es/ThemeHelper.js", "defaultCodeOpen": false}}

Alternativamente, puede utilizar una función de devolución de llamada, aceptando el tema como primer argumento:

```jsx
import useMediaQuery from '@u_ui/u-ui/useMediaQuery';

function MiComponent() {
  const matches = useMediaQuery((theme) => theme.breakpoints.up('sm'));

  return <span>{`theme.breakpoints.up('sm') matches: ${matches}`}</span>;
}
```

⚠️ No hay **soporte de temas por defecto**, tienes que inyectarlo en un proveedor de temas padre.

## Uso de la sintaxis JavaScript

Puede utilizar [json2mq](https://github.com/akiran/json2mq) para generar cadenas de consulta de medios a partir de un objeto JavaScript.

{{"demo": "es/JavaScriptMedia.js", "defaultCodeOpen": true}}

## Pruebas

Necesita una implementación de [matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) en su entorno de pruebas.

Por ejemplo, [jsdom no lo soporta todavía (Inglés)](https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom). Deberías hacer un polyfill.
Se recomienda utilizar [css-mediaquery](https://github.com/ericf/css-mediaquery) para emularlo.

```js
import mediaQuery from 'css-mediaquery';

function createMatchMedia(width) {
  return (query) => ({
    matches: mediaQuery.match(query, {
      width,
    }),
    addEventListener: () => {},
    removeEventListener: () => {},
  });
}

describe('MisPruebas', () => {
  beforeAll(() => {
    window.matchMedia = createMatchMedia(window.innerWidth);
  });
});
```

## Renderizado sólo del lado del cliente

Para realizar la hidratación del lado del servidor, el hook necesita renderizar dos veces.
Una primera vez con `defaultMatches`, el valor del servidor, y una segunda vez con el valor resuelto.
Este ciclo de renderizado de doble pasada tiene un inconveniente: es más lento.
Puede establecer la opción `noSsr` a `true` si utiliza el valor devuelto **sólo** del lado del cliente.

```js
const matches = useMediaQuery('(min-width:600px)', { noSsr: true });
```

o puede activarlo globalmente con el tema:

```js
const theme = createTheme({
  components: {
    uiUseMediaQuery: {
      defaultProps: {
        noSsr: true,
      },
    },
  },
});
```

:::info
Ten en cuenta que `noSsr` no tiene efectos cuando se utiliza la API `createRoot()` (la API sólo del lado del cliente introducida en React 18).
:::

## Renderizado del lado del servidor

:::warning
El renderizado del lado del servidor y las media queries del lado del cliente están fundamentalmente reñidos.
Hay que ser consciente de ello. La compatibilidad sólo puede ser parcial.
:::

Intente utilizar primero las consultas de medios CSS del lado del cliente.
Por ejemplo, puede utilizar:

- [`themes.breakpoints.up(x)`](/u_ui-u-ui/customization/breakpoints/#css-media-queries)

Si ninguna de las alternativas anteriores es una opción, puede continuar leyendo esta sección de la documentación.

Primero, necesitas adivinar las características de la petición del cliente, desde el servidor.
Puede elegir entre utilizar

- **Agente de usuario**. Analiza la cadena de agente de usuario del cliente para extraer información. Se recomienda utilizar [ua-parser-js](https://github.com/faisalman/ua-parser-js) para analizar el agente de usuario.
- **Pistas del cliente**. Lee las sugerencias que el cliente envía al servidor. Tenga en cuenta que esta función [no está soportada en todas partes (Inglés)](https://caniuse.com/#search=client%20hint).

Por último, necesita proporcionar una implementación de [matchMedia (Inglés)](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) a la `useMediaQuery` con las características adivinadas anteriormente.
Se recomienda utilizar [css-mediaquery](https://github.com/ericf/css-mediaquery) para emular matchMedia.

Por ejemplo, en el lado del servidor:

```js
import * as ReactDOMServer from 'react-dom/server';
import parser from 'ua-parser-js';
import mediaQuery from 'css-mediaquery';
import { createTheme, ThemeProvider } from '@u_ui/u-ui/styles';

function handleRender(req, res) {
  const deviceType = parser(req.headers['user-agent']).device.type || 'desktop';
  const ssrMatchMedia = (query) => ({
    matches: mediaQuery.match(query, {
      // La anchura CSS estimada del navegador.
      width: deviceType === 'mobile' ? '0px' : '1024px',
    }),
  });

  const theme = createTheme({
    components: {
      // Cambiar las opciones por defecto de useMediaQuery
      uiUseMediaQuery: {
        defaultProps: {
          ssrMatchMedia,
        },
      },
    },
  });

  const html = ReactDOMServer.renderToString(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>,
  );

  // …
}
```

{{"demo": "es/ServerSide.js", "defaultCodeOpen": false}}

Asegúrese de proporcionar la misma implementación de medios de coincidencia personalizados al lado del cliente para garantizar una coincidencia de hidratación.

## Migración desde `withWidth()`

El componente de orden superior `withWidth()` inyecta el ancho de pantalla de la página.
Puedes reproducir el mismo comportamiento con un hook `useWidth`:

{{"demo": "es/UseWidth.js"}}

## API

### `useMediaQuery(query, [options]) => matches`

#### Argumentos

1. `query` (_string_ | _func_): Una cadena que representa la consulta de medios a manejar o una función de devolución de llamada que acepta el tema (en el contexto) que devuelve una cadena.
2. `options` (_object_ [optional]):

- `options.defaultMatches` (_bool_ [opcional]):
  Como `window.matchMedia()` no está disponible en el servidor,
  devuelve una coincidencia por defecto durante el primer montaje. El valor por defecto es `false`.
- `options.matchMedia` (_func_ [opcional]): Puede proporcionar su propia implementación de _matchMedia_. Puede utilizarse para manejar una ventana de contenido iframe.
- `options.noSsr` (_bool_ [opcional]): Por defecto es `false`.
  Para realizar la hidratación del lado del servidor, el hook necesita renderizarse dos veces.
  Una primera vez con `defaultMatches`, el valor del servidor, y una segunda vez con el valor resuelto.
  Este ciclo de renderizado de doble pasada tiene un inconveniente: es más lento.
  Puede establecer esta opción a `true` si utiliza el valor devuelto **sólo** del lado del cliente.
- `options.ssrMatchMedia` (_func_ [opcional]): Puedes proporcionar tu propia implementación de _matchMedia_, se usa cuando se renderiza del lado del servidor.

Nota: Puedes cambiar las opciones por defecto usando la función [`default props`](/u_ui/u-ui/customization/theme-components/#propiedades-por-defecto) del tema con la clave `uiUseMediaQuery`.

#### Devuelve

coincidencias: Matches es `true` si el documento coincide con la media query y `false` si no coincide.

#### Ejemplos

```jsx
import * as React from 'react';
import useMediaQuery from '@u_ui/u-ui/useMediaQuery';

export default function SimpleMediaQuery() {
  const matches = useMediaQuery('(min-width:600px)');

  return <span>{`(min-width:600px) matches: ${matches}`}</span>;
}
```
