// Filtro por especies
export const filterData = (data, value) => {
  const filterSpecies = data.filter(data => data.species === value);
  //console.log(filterSpecies);
  return filterSpecies;
};

//Para conocer todos los tipos de especies
/*export const typeSpecies =  (data) => {
  const kindSpecie = data.map(data=> data.species);
  return kindSpecie;
}*/

//filtro por Estado
export const filterStatus = (data, value) =>{
  const kindStatus = data.filter(data => data.status === value);
  return kindStatus;
}

//Para conocer todos los tipos de Estado
/*export const typeStatus =  (data) => {
  const dataStatus = data.map(data=> data.status);
  //console.log(typeStatus)
  return dataStatus;
}*/

//filtro por episodios
export const filterEpisode = (data, value) => {
  const kindEpisode = data.filter(data => data.episode.includes(value));
  //console.log(filterEpisode);
  return kindEpisode;
};

//Ordena de la A-Z
export const sortDataAZ = (data) => {
  data.sort((a, b) => {
    
    if (a.name < b.name) {
      return -1; //Intercambia
    }
    if (a.name > b.name) {
      return 1; //Esta bien el orden
    }
    return 0; // no intercambiar, esta bien el orden 
  });
  
  return data;
}



//FUNCION CALCULO 

/*export const compute = (data) => {
  const personajesG = data.results
  const gender = personajesG.filter(element => element.death)
  return gender.length * 100 / 493
}*/
//Esta función se encarga de mostrar el TOP 10 por ubicación
export const typelocation =  (data) => {
  const datalocations = data.map(data=> data.location.name);
 
  return datalocations;
}

export const obtenerTopDiezUbicacion = (todaslasUbicaciones) => {
  return todaslasUbicaciones.sort(function (a, b) {
    if (a.species > b.species) {
      return 1;
    }
    if (a.species < b.species) {
      return -1;
    }
    return 0;

  }).slice(0, 5);
};
