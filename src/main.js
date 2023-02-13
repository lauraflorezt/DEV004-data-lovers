import { filterData, typeSpecies } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';
// data de interes
const dataRM = data.results;
//elementos DOM
const prueba = document.getElementById("prueba");
const episodes = document.getElementById("episodes");
const species = document.getElementById("species");
const mainGallery = document.getElementById("root");
//Presentacion total personajes

const cards = function characterGallery(data) {
  
  let elements = "";
  data.forEach(element => {
    elements = elements + `
  <div id="image">
  <img id="photo" src=${element.image}>
  <h1 id="tittle">${element.name}</h1>
  </div>
  `;
  });
  return elements;
}


//filtro de personajes por especie
species.addEventListener("change", function () {
  
  const specie = species.value;
  const resultSpecie = filterData(dataRM, specie);

  console.log("result", resultSpecie);
  mainGallery.innerHTML = cards(resultSpecie);
})

//console.log(cards(resultSpecie))
console.log(typeSpecies(dataRM));


mainGallery.innerHTML = cards(dataRM);
//console.log(example, data);

