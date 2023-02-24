import {  sortDataAZ, filterStatus, filterEpisode,filterData } from '../src/data.js'; //volver a colocar filterData,

describe('sortDataAZ', () => {
  const dataPrueba = [

    { "name": "Rick" },

    { "name": "Morty" },

    { "name": "Beth" }

  ]
  it('is a function', () => {
    expect(typeof sortDataAZ).toBe('function'); //compara valores primitivos
  });

  it('returns `1` si esta bien el orden', () => {
    expect(sortDataAZ([
      { "name": "a" }, { "name": "b" }])).toStrictEqual([{ "name": "a" }, { "name": "b" }]);//toStrictEqual Prueba misma estructura y tipo de los objetos
  });

  it('returns `-1` si debe intercambiar el orden', () => {
    expect(sortDataAZ([
      { "name": "c" }, { "name": "a" }])).toEqual([{ "name": "a" }, { "name": "c" }]);//toEqual compara propiedades de objetos
  });

  it('returns `0` si es igual los nombres ', () => {
    expect(sortDataAZ([
      { "name": "a" }, { "name": "a" }])).toStrictEqual([{ "name": "a" }, { "name": "a" }]);
  });

  it('retorna nombres de la A-Z', () => {
    expect(sortDataAZ(dataPrueba)).toEqual([

      { "name": "Beth" },
  
      { "name": "Morty" },
  
      { "name": "Rick" }
  
    ])
  });
});

describe('filterData', () => {
  const dataPrueba = [

    { "species": "Human", },

    { "species": "Alien" },

    { "species": "Humanoid" },
  ]
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  it('retorna Human si esta dentro del array de objetos', () => {
    
    expect(filterData(dataPrueba,"Human")).toEqual([{"species": "Human"}]);
  });
});




describe('filterEpisode', () => {
  const dataPrueba = [

    { "episode": "episode/1" },

    { "episode": "episode/1" },

    { "episode": "episode/2" },

    { "episode": "episode/3" }

  ];
  const episodePrueba = filterEpisode(dataPrueba, "episode/1")
  it('is a function', () => {
    expect(typeof filterEpisode).toBe('function');
  });
  it('returna solo episodio 1', () => {
    expect(episodePrueba).toEqual([{"episode": "episode/1"},{"episode": "episode/1"}] 
    )
  });
});

describe('filterStatus', () => {
  const dataPrueba = [

    { "status": "Alive" },

    { "status": "Dead" },

    { "status": "Unknown" }

  ]
  it('is a function', () => {
    expect(typeof filterStatus).toBe('function');
  });
  it('retorna el array que contiene el objeto Alive', () => {
    expect(filterStatus(dataPrueba, "Alive")).toEqual([{ "status": "Alive" }])
  });
  it('retorna el array vacio cuando no existe equivalencia', () => {
    expect(filterStatus(dataPrueba, "Vivo")).toEqual([])
  });
});




