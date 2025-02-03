# Plataformas soportadas

<p class="description">Conoce las plataformas, desde las más modernas a las más antiguas, que son compatibles con Yushii UI.</p>

## Navegadores

Yushii UI es compatible con las últimas versiones estables de los principales navegadores y plataformas.
No es necesario proporcionar ningún polyfill de JavaScript, ya que gestiona internamente y de forma aislada las funciones de navegador no compatibles.

<!-- #stable snapshot -->

| Edge   | Firefox | Chrome | Safari (macOS) | Safari (iOS) |
| :----- | :------ | :----- | :------------- | :----------- |
| >= 121 | >= 115  | >= 109 | >= 15.4        | >= 15.4      |

<!-- #default-branch-switch -->

Puedes encontrar una extensa lista en nuestro [.browserlistrc](https://github.com/yugashiki/yushii/blob/-/.browserslistrc#L12-L27) (comprueba la entrada `stable`).

Dado que Googlebot utiliza un servicio de renderizado web (WRS) para indexar el contenido de la página, es fundamental que Yushii UI lo soporte.
[WRS actualiza regularmente el motor de renderizado que utiliza](https://webmasters.googleblog.com/2019/05/the-new-evergreen-googlebot.html).
Puedes esperar que los componentes de Yushii UI se rendericen sin mayores problemas.

## Server

<!-- #stable-snapshot -->

Yushii UI soporta [Node.js](https://github.com/nodejs/node) a partir de la versión 14.0 para el renderizado del lado del servidor.
El objetivo es soportar Node.js hasta la [última versión en modo de mantenimiento](https://github.com/nodejs/Release#release-schedule).

## React

<!-- #react-peer-version -->

Yushii UI es compatible con las versiones más recientes de React, empezando por ^17.0.0 (la que tiene delegación de eventos en la raíz de React).
Echa un vistazo a las [versiones] anteriores (https://yushii.yugashiki.com/versions/) para compatibilidad con versiones anteriores.

## TypeScript

Yushii UI requiere una versión mínima de TypeScript 4.7.
Esto pretende coincidir con la política de [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped), con el soporte de las versiones de TypeScript que tienen menos de dos años.

## webpack

La versión mínima requerida de webpack para empaquetar aplicaciones que utilicen Yushii UI es v5. webpack <= v4 no puede empaquetar Yushii UI sin transpilar ya que utiliza características como el [operador null coalscing (`??`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) y [encadenamiento opcional (`?.`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining).
