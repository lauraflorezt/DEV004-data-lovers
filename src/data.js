// Filtro por episodios

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
// export const example = episodeSeason (c, e);
// // c = character , e = episode
// function episodeSeason (c, e){
//   return c.filter(c => c.episode == e)
// }






/*export const anotherExample = () => {
  return 'OMG';
};


 function filterData (data, condition){

 }

 function sortData (data, sortBy, sortOrder){

 }

 function computeStats(data){

 }*/
