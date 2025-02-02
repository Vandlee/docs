# Usage

<p class="description">Aprende los conceptos básicos para trabajar con componentes Yushii UI.</p>

## Guía rápida

Despues de la [instalación](/ui/getting-started/installation/), puedes importar cualquier componente de Yushii UI y empezar a jugar.
Por ejemplo, prueba a cambiar la `variant` del [Button](/ui/react-button/) a `outlined` para ver cómo cambia el estilo:

{{"demo": "ButtonUsage.js", "defaultCodeOpen": true, "bg": "outlined" }}

## Globales

Dado que los componentes de Yushii UI están diseñados para funcionar de forma aislada, no requieren ningún tipo de estilos globales.
Para una mejor experiencia de usuario y de desarrollador, recomendamos añadir los siguientes globals a tu aplicación.

### Responsive meta tag

Yushii UI es una biblioteca de componentes _mobile-first_, es decir, primero escribimos el código para dispositivos móviles y luego ampliamos los componentes según sea necesario mediante consultas de medios CSS.

Para garantizar una representación correcta y un zoom táctil en todos los dispositivos, añade la metaetiqueta de vista adaptable a tu elemento `<head>`:

```html
<meta name="viewport" content="initial-scale=1, width=device-width" />
```

### CssBaseline

Yushii UI proporciona un componente opcional [CssBaseline](/ui/react-css-baseline/). Corrige algunas inconsistencias entre navegadores y dispositivos a la vez que proporciona reinicios que se adaptan mejor a Yushii UI que las hojas de estilo globales alternativas como [normalize.css](https://github.com/necolas/normalize.css/).