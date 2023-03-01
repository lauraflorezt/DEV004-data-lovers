# Rick and Morty 
![Rick_and_Morty svg (1)](https://user-images.githubusercontent.com/121992038/221997942-3cef4190-96a9-47a3-a235-c2a3374c2b67.png)


## Índice


## Índice

* [1. Definicion del producto](#1-definicion-del-producto)
* [2. Historias de usuario](#2-historias-de-usuario)
* [3. Prototipo de baja fidelidad](#3-prototipo-de-baja-fidelidad)
* [4. Prototipo de alta fidelidad](#4-prototipo-de-alta-fidelidad)
* [5. Pruebas de usabilidad](#5-pruebas-de-usabilidad)
* [6. Diseño final de proyecto](#6-diseño-final-de-proyecto)
* [7. Pruebas unitarias](#7-pruebas-unitarias)
* [8. checklist](#8-checklist)


***

## 1. Definicion del producto

Esta página web le permitirá a los fans de Rick y Morty, conocer datos de sus personajes favoritos, logrando visualizar el total de personajes de la serie hasta el episodio 31, cada uno presentado en una tarjeta con su nombre, imagen, origen y ubicación , puedes filtrarlos por episodios, género y especies, ordenarlos de forma ascendente por el nombre con la opción sort A-Z, encontrar información sobre la cantidad de personajes que hay por tipo de género, especies y estado mostrados en tablas con la opción stats y resetear la página con la opción reset .

## 2. Historias de usuario

En este proyecto utilizamos la data de
* [Rick and Morty](src/data/rickandmorty/rickandmorty.json).
  Este set nos proporciona la lista de los personajes de la serie Rick and
  Morty.
  - [Investigación con seguidores de Rick and Morty](src/data/rickandmorty/README.md)
  Esto nos permitió tener un primer acercamiento de lo que querian nuestros usuarios de la página.
  
![Historias de usuario Figma](https://user-images.githubusercontent.com/121992038/221998543-864748b7-92ab-460d-a590-37f3e54eae39.JPG)


## 3. Prototipo de baja fidelidad

En un inicio se ideó la página web con un logo que cubra la parte superior central de la página y tres opciones de filtro, presentación de los personajes en tarjetas cada una con información como imagen, nombre, genero, especie, ubicación, estado y episodios, al hacer las pruebas vimos que no podíamos incluir toda la información ya que aumentaba el tamaño de la tarjeta, por lo cual se decidió en dejarlo solo como nombre, imagen, origen y ubicación; para los filtros decidimos tres opciones: por episodio, por especie y por estado, además en la parte superior dejamos el logo en la parte izquierda y aprovechamos el espacio para incluir las opciones de resetear, ordenar A-Z y estadística, esta última entrega tres tablas con la suma de personajes por género, estado y especies.

![Prototipo Baja Fidelidad](https://user-images.githubusercontent.com/121992038/222008162-019beab0-bf6e-46f3-ba29-0e5811891071.jpg)

![Prototipo baja Fidelidad Tarjeta](https://user-images.githubusercontent.com/121992038/221999444-32c9e5fe-f7e2-4a3e-8b35-772ddaf485bb.JPG)


## 4. Prototipo de alta fidelidad

Para obtener una mejor imagen más clara de lo que esperábamos de nuestra página web utilizamos la herramienta Figma.

![Prototipo Alta Fidelidad](https://user-images.githubusercontent.com/121992038/221999934-149f1c8a-5a2e-46c3-9888-fe2f3ce7bc38.JPG)
![Prototipo de Alta fidelidad Tarjeta](https://user-images.githubusercontent.com/121992038/221999976-bbc31fa3-f6a2-4574-b880-cebdef27bd21.JPG)


## 5. Pruebas de usabilidad

Realizamos pruebas de usabilidad con compañeras y usuarios en los cuales obtuvimos los siguientes resultados:

* Nos dieron recomendaciones sobre el prototipo que teniamos al inicio, el cual se modifica porque el fondo no se veía bien por lo saturada que se ve la imagen.
* Organizar los datos por nombre de personaje alfabéticamente hace que tenga mucho sentido la información.
* los elementos mas comunes como los filtros accesos directos a reset, sort a-z y stats se pueden encontrar fácilmente por el usuario.
* En la parte de stats podría quitarse los filtros, ya que puede darse a entender que se pueden usar para los resultados de la tabla que está en la parte de abajo.
* Se sugiere que el titulo de RICK AND MORTY sea mas vsible ya que no es entendible.

## 6. Diseño final de proyecto

  ![PaginaWeb](https://user-images.githubusercontent.com/121992038/222002278-b45f7d8e-b769-4dc3-8971-6bd2b297ec10.JPG)
  ![Sort A-Z](https://user-images.githubusercontent.com/121992038/222018076-b321c9b0-0b75-4429-9e74-a2c0c748e9ee.jpg)


IMPLEMENTACIÓN DE LA INTERFAZ DE USUARIO (HTML/CSS/JS)
Cumplimos con los requerimientos minimos de la interfaz de usuario como:
Mostrar la data en una interfaz:
* Card 
* Tabla

Ser responsive, es decir, debe visualizarse sin problemas desde distintos tamaños de pantallas: 
* móviles 
* tablets  
* desktops

Que la interfaz siga los fundamentos de visual design.




## 7. Pruebas unitarias

![test](https://user-images.githubusercontent.com/121992038/222003185-3fba7fc3-0ff6-4500-8316-673effa93b0c.JPG)


## 8. checklist

* [ ] Usa VanillaJS.
* [ ] Pasa linter (`npm run pretest`)
* [ ] Pasa tests (`npm test`)
* [ ] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [ ] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [ ] Incluye historias de usuario en `README.md`.
* [ ] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [ ] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [ ] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [ ] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [ ] UI: Permite ordenar data por uno o más campos (asc y desc).
* [ ] UI: Permite filtrar data en base a una condición.
* [ ] UI: Es _responsive_.







