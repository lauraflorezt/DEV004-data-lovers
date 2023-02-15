// Filtro por especies

export const filterData = (data, value) => {
  const filterSpecies = data.filter(data => data.species == value);
  //console.log(filterSpecies);
  return filterSpecies;
};

//Para conocer todos los tipos de especies
export const typeSpecies =  (data) => {
  let kindSpecie = data.map(data=> data.species);
  return kindSpecie;
}

//filtro por episodios
export const filterEpisode = (data, value) => {
  const kindEpisode = data.filter(data => data.episode.includes(value));
  //console.log(filterSpecies);
  return kindEpisode;
};






/*export const anotherExample = () => {
  return 'OMG';
};


 function filterData (data, condition){

 }

 function sortData (data, sortBy, sortOrder){

 }

 function computeStats(data){

 }*/
