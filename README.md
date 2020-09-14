# Wonderlist - APP

## API
El API se encuentra desarrollado en NodeJS con el framework ExpressJS y el ORM es Waterline.

### Base de Datos

Este api está desarrollado para utilizar PostgreSQL, al ejecutar el API usa una base de datos llamada 'wonderlist' en el puerto 8080. Puede encontrarse mas informacion en el archivo connections.js.

### Build and Run

Primero, instalar dependencias usando npm:

```sh
npm install
```

Ejecutar el proyecto:

```sh
node server.js
```

E ir a [localhost:8080/api](http://localhost:8080/api).
 
La documentación puede ser encontrada en [localhost:8080/api/docs](http://localhost:8080/api/docs).

---

## Front End
El Front End se encuentra desarrollado como una SPA siguiendo el patron MVC utilizando el framework AngularJS.

Primero, instalar dependencias usando bower:

```sh
bower install
```
