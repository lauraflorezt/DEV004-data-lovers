import { example } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';
const mainGallery = characterGallery ();
function characterGallery () {
//declaro e inicializo elementos para ingresar nombre y foto personaje
let elements="";
// examino solo results que contiene a los personajes
//templates en cada elemento de results que sea img y nombre
data.results.forEach(element => {
  elements = elements + `
  <div id="image">
  <img id="photo" src=${element.image}>
  <h1 id="tittle">${element.name}</h1>
  </div>
  `;
});
return elements;
}
//se obtiene el elemento id y con inner se presenta en document el resultado
document.getElementById("root").innerHTML= mainGallery;
console.log(example, data);

