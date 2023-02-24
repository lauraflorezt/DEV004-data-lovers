import { filterData, filterEpisode, sortDataAZ, filterStatus, mapGender} from './data.js';//ver suma
import data from './data/rickandmorty/rickandmorty.js';

// data de interes
const dataRM = data.results;
const copiadata = dataRM;
//elementos DOM
const prueba = document.getElementById("prueba");
const episodes = document.getElementById("episodes");
const species = document.getElementById("species");
const mainGallery = document.getElementById("root");
const status = document.getElementById("status")

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
  //console.log("result", resultEpisode);
  mainGallery.innerHTML = cards(resultEpisode);
})

//filtro de personajes por estado 
status.addEventListener("change", function () {
  const statu = status.value;
  const resultStatus = filterStatus(dataRM, statu);
  //console.log("result", resultStatus);
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
//console.log(sortDataAZ(dataRM))

//Recargar Pagina Principal
const recargar = document.getElementById('recargar');
recargar.addEventListener('click', function () {
  location.reload();
})



//Presentar tabla
const estadistica = document.getElementById('stats');
estadistica.addEventListener('click', function () {
//Presentacion estadisticas tabla genero
const tableA = `
  <div id="principalTable">
  <table id="secondary">
  <caption>Number of Characters by Gender</caption>
  <thead>  
  <tr>
  <th>Female</th>
  <th>Genderless</th>
  <th>Male</th>
  <th>Unknown</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td>${sumaGenero[0]}</td>
  <td>${sumaGenero[1]}</td>  
  <td>${sumaGenero[2]}</td>
  <td>${sumaGenero[3]}</td>
  </tr>
  </tbody>
  </table>
  </div>
  `
  prueba.innerHTML = tableA;
});

//filtrar genero y ordenar 
console.log(mapGender(copiadata).sort())
// considerar para ingresar dentro de una f() aux
const arrayMap = mapGender(copiadata).sort();
//console.log(suma(arrayMap)) //no funca
//sumar por cada genero 
let sumaGenero = [];//[73, 6, 372, 42]
let contador = 1;
let nombreGenero = [];//['Female', 'Genderless', 'Male', 'unknown']
for (let i = 0; i < arrayMap.length; i++) {
  if (arrayMap[i] === arrayMap[i + 1]) {
    console.log(arrayMap[i]);
    contador++;
    
  } else {
    nombreGenero.push(arrayMap[i]);
    sumaGenero.push(contador);
    contador = 1;
  }
}

/*console.log(sumaGenero) //[73, 6, 372, 42]
console.log(nombreGenero) //['Female', 'Genderless', 'Male', 'unknown']
console.log(typeof sumaGenero);
console.log(typeof nombreGenero);

const female = sumaGenero[0];
const genderless = sumaGenero[1];
const male = sumaGenero[2];
const unknown = sumaGenero[3];
/*let dataGenero = [];
for(let j=0 ; j < nombreGenero.length ; j++){
    dataGenero = nombreGenero[j] + ":" + sumaGenero[j];
        console.log(dataGenero)
        console.log(typeof dataGenero);
}*/
