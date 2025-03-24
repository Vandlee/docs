# Preguntas frecuentes

<p class="description">¿Algún problema en particular? Consulta primero algunos de estos problemas comunes en las FAQ.</p>

## ¿Por qué se desplazan los elementos posicionados fijos (fixed) cuando se abre un modal?

El desplazamiento se bloquea en cuanto se abre un modal.
Esto impide interactuar con el fondo cuando el modal debería ser el único contenido interactivo. Sin embargo, eliminar la barra de desplazamiento puede hacer que tus **elementos posicionados fijos** se muevan.
En esta situación, puedes aplicar un nombre de clase global `.vandlee-fixed` para decirle a U-Ui que maneje esos elementos.