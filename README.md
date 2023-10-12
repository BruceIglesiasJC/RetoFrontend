# EVISALUD Reto Frontend

Este proyecto es una Single Page Application (SPA) desarrollada como parte de un reto frontend para la empresa EVISALUD. El reto tiene como objetivo mostrar mis habilidades en la maquetación web, en el consumo de API y uso de Composables.

## Descripción

La SPA de EVISALUD es una web que se conecta a la API de EVISALUD para obtener datos en tiempo real sobre los docentes.

## Tecnologías Utilizadas

Este proyecto ha sido desarrollado utilizando las siguientes tecnologías:

- Vue.js: Framework de JavaScript.
- Vuetify: Framework para obtener componentes y mejora el diseño responsivo.
- Iconify: Para obtener iconos.
- HTML, CSS, SASS y JavaScript: Lenguajes fundamentales para la construcción de la interfaz de usuario.

## Instalación

Para probar la aplicación en tu entorno local, sigue estos pasos:

1. Clonar el repositorio.
2. Instala las dependencias con `npm install`
3. Inicia la aplicación con `npm run dev`
4. Accede a la aplicación en tu navegador en [http://localhost:8080](http://localhost:8080).

## Uso

Ruta " /styles/settings.scss "
Para modificar todos los estilos y colores ( modificar las variables del SASS)

Ruta " /router/index.js "
Para modificar que componente se traera para la ruta asignada

Ruta " /assets/fonts/Axiforma-regular.ttf "
Para verificar y cambiar la fuente si se requiere ( puedes cambiar el nombre en la ruta del SASS o solo mantener el nombre a la misma fuente)

Ruta " /composables/useFetch.js"
Para revisar el composable que extrae los datos de una API, asi como maneja los errores en pantalla, llamar el composable y usarlo como en el componente "Docentes.vue"

Ruta " /components/"
En esta parte se encuentran todos los componentes realizados, asi tambien se podra modificar directamente si es necesario, se debe tener conocimiento en CSS - VUETIFY - JS para modificarlos

Ruta " /views/Home.vue"
Al ser una SPA todo se mantiene en este componente, la estructura e importacion es importante para la vista de la SPA

Ruta [https://icon-sets.iconify.design/]
Los iconos son extraidos directamente desde link, seguir la guia que muestra para obtener los iconos

## Datos

El diseño responsive esta diseñado para medidas del iphone XR

## Informacion personal

Bruce Iglesias Alva
+51 989104346
iglesias.abr@gmail.com
