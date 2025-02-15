# Instalación

<p class="description">Instala U-Ui.</p>

## Instalación por defecto

Ejecute uno de los siguientes comandos para añadir U-Ui a su proyecto:

<!-- #default-branch-switch -->

<codeblock storageKey="package-manager">

```bash npm
npm install @u_ui/u-ui @emotion/react @emotion/styled
```

```bash pnpm
pnpm add @u_ui/u-ui @emotion/react @emotion/styled
```

```bash yarn
yarn add @u_ui/u-ui @emotion/react @emotion/styled
```

</codeblock>

### Peer dependencies 

<!-- #react-peer-version -->

Ten en cuenta que [react](https://www.npmjs.com/package/react) y [react-dom](https://www.npmjs.com/package/react-dom) son [peer dependencies](https://nodejs.org/en/blog/npm/peer-dependencies), lo que significa que debes asegurarte de que están instaladas antes de instalar U-Ui.

```json
"peerDependencies": {
  "react": "^17.0.0 || ^18.0.0 || ^19.0.0",
  "react-dom": "^17.0.0 || ^18.0.0 || ^19.0.0"
},
```

### Fuentes web de Google

Para instalar la fuente Material Icons en tu proyecto utilizando el CDN de Google Web Fonts, añade el siguiente fragmento de código dentro de la etiqueta `<head />` de tu proyecto:

Para utilizar el componente font `Icon`, primero debes añadir la fuente [Material Icons](https://fonts.google.com/icons?icon.set=Material+Icons). Aquí tienes [algunas instrucciones](/u-ui/icons/#icon-font-icons) sobre cómo hacerlo. Por ejemplo, a través de Google Web Fonts:

```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
```