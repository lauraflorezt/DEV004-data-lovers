// Filtro por especies
export const filterData = (data, value) => {
  const filterSpecies = data.filter(data => data.species === value);
  //console.log(filterSpecies);
  return filterSpecies;
};

//Para conocer todos los tipos de genero aux calculo
export const mapGender = (data) => {
  return data.map(data => data.gender);

}

//preguntar porque no funciona
/*export const suma = (data) => {
  let sumaData = [];
  let contador = 1;
  let nombreData = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i] === data[i + 1]) {      
      contador++;
    } else {
      nombreData.push(data[i]);
      sumaData.push(contador);
      contador = 1;
    }
  }
}*/

//filtro por Estado
export const filterStatus = (data, value) => {
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
