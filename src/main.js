import { example } from './data.js';



// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
//importo la data de rik y morty para trabajar
import data from './data/rickandmorty/rickandmorty.js';
//declaro e inicializo elementos para ingresar nombre y foto personaje
let elementos="";
// con la data examino solo results que contiene a los personajes
//se ingresa en elementos cada elemento de results que sea img y nombre que se almacena en example
const ejemplo = data.results.forEach(elemento => {
  elementos = elementos + `
  <div id="image">
  <img id="photo" src=${elemento.image}>
  <h1 id="tittle">${elemento.name}</h1>
  </div>
  `;
});
//se obtiene el elemento id y con inner se presenta en document el resultado
document.getElementById("root").innerHTML= elementos;
console.log(example, data);

