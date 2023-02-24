import { filterData, filterEpisode, sortDataAZ,filterStatus, obtenerTopDiezUbicacion,typelocation } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

// data de interes
const dataRM = data.results;

//elementos DOM
//const prueba = document.getElementById("prueba");
const episodes = document.getElementById("episodes");
const species = document.getElementById("species");
const mainGallery = document.getElementById("root");
const status = document.getElementById("status")
const topDiez = document.getElementById("TopDiezUbicacion")

//Presentacion total personajes
const cards = function characterGallery(data) {
  let elements = "";
  data.forEach(element => {
    elements = elements + `
  <div id="image">
  <div id="card">
  <h1 id="tittle">${element.name}</h1>
  <img id="photo" src=${element.image}>  
  <p><b>Gender:</b> ${element.gender}</p>
  <p><b>Origin:</b> ${element.origin.name}</p>
  <p><b>Location:</b> ${element.location.name}</p>
  </div>
  </div>
  `;
  });
  return elements;
}

//filtro de personajes por especie
species.addEventListener("change", function () {
  const specie = species.value;
  const resultSpecie = filterData(dataRM, specie);
  //console.log("result", resultSpecie);
  mainGallery.innerHTML = cards(resultSpecie);
})

//console.log(cards(resultSpecie));
//console.log(typeSpecies(dataRM));

mainGallery.innerHTML = cards(dataRM);


//filtro de personajes por episodios
episodes.addEventListener("change", function () {
  const episode = episodes.value;
  const resultEpisode = filterEpisode(dataRM, episode);
  console.log("result", resultEpisode);
  mainGallery.innerHTML = cards(resultEpisode);
})

//filtro de personajes por estado 
status.addEventListener("change", function () {
  const statu = status.value;
  const resultStatus = filterStatus(dataRM, statu);
  console.log("result", resultStatus);
  mainGallery.innerHTML = cards(resultStatus);
})

//console.log(cards(resultStatus))
//console.log(typeStatus(dataRM));

//Ordenas tarjetas de la A-Z
const ordenar = document.getElementById("orden");
ordenar.addEventListener("click", function () {
  const ordenartarjetas = sortDataAZ(dataRM);
  mainGallery.innerHTML = cards(ordenartarjetas);
});
console.log(sortDataAZ(dataRM))

//Recargar Pagina Principal
const recargar = document.getElementById('recargar');
recargar.addEventListener('click', function () {
  location.reload();
})

//Presentacion estadistica tabla
/*const tableBody =document.getElementById(tableBody)
const table = function charactertable(data)  {
  let elements = "";
  data.forEach(element => {
    elements = elements + `
  <tr>
  <td>${element.name}</td> 
  <td> ${element.gender}</td>
  <td> ${element.origin.name}</td>
  <td> ${element.location.name}</td>
  <tr>
  `;
tableBody.innerHtml = table(data);
  });
  
}*/ 

topDiez.addEventListener("click", () => {
  /*const table = function charactertable(data)  {
    `<table class="principal">
<thead>
      <tr>
    <th>female</th> 
    <th>male</th>
    <th>genderless</th> 
    <th>unknown</th> 
  </tr>
</thead>`
  
  }*/
  const obtenerTopDiez = obtenerTopDiezUbicacion(dataRM);
  mainGallery.innerHTML = cards(obtenerTopDiez);


}
);
console.log(typelocation(dataRM));