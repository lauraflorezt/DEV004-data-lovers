import {  sortDataAZ, filterStatus, filterEpisode,filterData, mapGender, suma, mapStatus, mapSpecies } from '../src/data.js'; 

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
  it('retorna solo episodio 1', () => {
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

describe('mapGender', () => {
  const dataPrueba = [

    { "gender": "Female" },

    { "gender": "Male"},

    { "gender": "unknown" }

  ] 
  it('is a function', () => {
    expect(typeof mapGender).toBe('function');
  });
  it('retorna el array que contiene los elementos de gender', () => {
    expect(mapGender(dataPrueba, "Male")).toEqual(["Female", "Male", "unknown"])
  });
});

describe('suma', () => {
  const dataPrueba = [
    "Female", "Female", "Female", "Female", "Male", "Male", "unknown"
  ]
  it('is a function', () => {
    expect(typeof suma).toBe('function');
  });
  it('retorna arrays nombreData y sumaData', () => {
    expect(suma(dataPrueba)).toEqual({"nombreData":["Female", "Male", "unknown"], "sumaData":[4, 2, 1]})
  });
});

describe('mapStatus', () => {
  const dataPrueba = [

    { "status": "Alive" },

    { "status": "unknown"},

    { "status": "Dead" }

  ];
  it('retorna el array que contiene los elementos de Status', () => {
    expect(mapStatus(dataPrueba, "Dead")).toEqual(["Alive", "unknown", "Dead"])
  });
});

describe('mapSpecies', () => {
  const dataPrueba = [

    { "species": "Human" },

    { "species": "Humanoid"},

    { "species": "Animal" }

  ];
  it('retorna el array que contiene los elementos de Species', () => {
    expect(mapSpecies(dataPrueba, "Human")).toEqual(["Human", "Humanoid", "Animal"])
  });
});