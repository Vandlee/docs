---
productId: material-ui
title: React Container component
components: Container, PigmentContainer
githubLabel: 'component: Container'
githubSource: packages/u_ui-u-ui/src/Container
---

# Contenedor

<p class="description">El contenedor centra el contenido horizontalmente. Es el elemento de diseño más básico.</p>

Aunque los contenedores pueden anidarse, la mayoría de los diseños no requieren un contenedor anidado.

{{"component": "@u-shii/docs/ComponentLinkHeader", "design": false}}

## Fluido

La anchura de un contenedor fluido está limitada por el valor `maxWidth` prop.

{{"demo": "es/SimpleContainer.js", "iframe": true, "defaultCodeOpen": false}}

```jsx
<Container maxWidth="sm">
```

## Fijo

Si prefieres diseñar para un conjunto fijo de tamaños en lugar de intentar acomodarte a una ventana gráfica completamente fluida, puedes establecer la propiedad `fixed`.
La anchura máxima coincide con la anchura mínima del punto de interrupción actual.

{{"demo": "es/FixedContainer.js", "iframe": true, "defaultCodeOpen": false}}

```jsx
<Container fixed>
```