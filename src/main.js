import { filterData, filterEpisode, sortDataAZ, filterStatus, mapGender, suma, mapStatus, mapSpecies } from './data.js';//ver suma
import data from './data/rickandmorty/rickandmorty.js';

// data de interes
const dataRM = data.results;
//copia auxiliar datos para filtro sort
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


mainGallery.innerHTML = cards(dataRM);


//filtro de personajes por episodios
episodes.addEventListener("change", function () {
  const episode = episodes.value;
  const resultEpisode = filterEpisode(dataRM, episode);
  //console.log("result", resultEpisode);
  mainGallery.innerHTML = cards(resultEpisode);
});


//filtro de personajes por estado 
status.addEventListener("change", function () {
  const statu = status.value;
  const resultStatus = filterStatus(dataRM, statu);
  //console.log("result", resultStatus);
  mainGallery.innerHTML = cards(resultStatus);
});


//Ordenas tarjetas de la A-Z
const ordenar = document.getElementById("orden");
ordenar.addEventListener("click", function () {
  const ordenartarjetas = sortDataAZ(dataRM);
  mainGallery.innerHTML = cards(ordenartarjetas);
});


//Recargar Pagina Principal
const recargar = document.getElementById('recargar');
recargar.addEventListener('click', function () {
  location.reload();
})


//Presentar tabla estadistica
const estadistica = document.getElementById('stats');
estadistica.addEventListener('click', tablas); 
function tablas (e) {
  //se ordena los datos mapeados 
  const arrayMap = mapGender(copiadata).sort();
  //guardamos la suma de cada elemento repetido y nombre elemento
  const sumaD = suma(arrayMap);
  //Presentacion estadisticas tabla genero
  const tableA = `
  <div id="principalTable">
  <table id="secondary">
  <caption>Number of Characters by Gender</caption>
  <thead>  
  <tr>
  <th>${sumaD.nombreData[0]}</th>
  <th>${sumaD.nombreData[1]}</th>
  <th>${sumaD.nombreData[2]}</th>
  <th>${sumaD.nombreData[3]}</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td>${sumaD.sumaData[0]}</td>
  <td>${sumaD.sumaData[1]}</td>  
  <td>${sumaD.sumaData[2]}</td>
  <td>${sumaD.sumaData[3]}</td>
  </tr>
  </tbody>
  </table>
  </div>
  <br>
  `

  const arrayStatus = mapStatus(copiadata).sort();
  //console.log(arrayStatus);
  //guardamos la suma de cada elemento repetido y nombre elemento
  const sumaS = suma(arrayStatus);
  //console.log(sumaS)
  //Presentacion estadisticas tabla genero
  const tableB = `
  <div id="principalTable">
  <table id="secondary">
  <caption>Number of Characters by Status</caption>
  <thead>  
  <tr>
  <th>${sumaS.nombreData[0]}</th>
  <th>${sumaS.nombreData[1]}</th>
  <th>${sumaS.nombreData[2]}</th>
  
  </tr>
  </thead>
  <tbody>
  <tr>
  <td>${sumaS.sumaData[0]}</td>
  <td>${sumaS.sumaData[1]}</td>  
  <td>${sumaS.sumaData[2]}</td>
  
  </tr>
  </tbody>
  </table>
  </div>
  <br>
  `

  //se ordena los datos mapeados 
  const arraySpecies = mapSpecies(copiadata).sort();   
  //guardamos la suma de cada elemento repetido y nombre elemento
  const sumaSp = suma(arraySpecies);
  //console.log(sumaSp);
  //Presentacion estadisticas tabla genero
  const tableC = `
   <div id="principalTable">
   <table id="secondary">
   <caption>Number of Characters by Species</caption>
   <thead>  
   <tr>
   <th>Specie</th>
   <th>Number of Characters</th>
   
   </tr>
   </thead>
   <tbody>
   <tr>
   <td>${sumaSp.nombreData[0]}</td>
   <td>${sumaSp.sumaData[0]}</td>
   </tr>
   <tr>
   <td>${sumaSp.nombreData[1]}</td>
   <td>${sumaSp.sumaData[1]}</td>
   </tr>
   <tr>
   <td>${sumaSp.nombreData[2]}</td>
   <td>${sumaSp.sumaData[2]}</td>
   </tr>
   <tr>
   <td>${sumaSp.nombreData[3]}</td>
   <td>${sumaSp.sumaData[3]}</td>
   </tr>
   <tr>
   <td>${sumaSp.nombreData[4]}</td>
   <td>${sumaSp.sumaData[4]}</td>
   </tr>
   <tr>
   <td>${sumaSp.nombreData[5]}</td>
   <td>${sumaSp.sumaData[5]}</td>
   </tr>
   <tr>
   <td>${sumaSp.nombreData[6]}</td>
   <td>${sumaSp.sumaData[6]}</td>
   </tr>
   <tr>
   <td>${sumaSp.nombreData[7]}</td>
   <td>${sumaSp.sumaData[7]}</td>
   </tr>
   <tr>
   <td>${sumaSp.nombreData[8]}</td>
   <td>${sumaSp.sumaData[8]}</td>
   </tr>
   <tr>
   <td>${sumaSp.nombreData[9]}</td>
   <td>${sumaSp.sumaData[9]}</td>
   </tr>
   <tr>
   <td>${sumaSp.nombreData[10]}</td>
   <td>${sumaSp.sumaData[10]}</td>
   </tr>
   <tr>
   <td>${sumaSp.nombreData[11]}</td>
   <td>${sumaSp.sumaData[11]}</td>
   </tr>
   </tbody>
   </table>
   </div>
   <br>
   `
  prueba.innerHTML = tableA + tableB + tableC;
  mainGallery.innerHTML = "";
  e.target.removeEventListener(e.type, tablas);
  const oculto = document.querySelector(".filter-elements");
  if (oculto.style.display === "none") {
    oculto.style.display = "block";
} else {
    oculto.style.display = "none";
    
}

};
