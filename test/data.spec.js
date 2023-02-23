import { filterData,sortDataAZ,filterStatus,filterEpisode } from '../src/data.js';

describe('sortDataAZ', () => {
  it('is a function', () => {
    expect(typeof sortDataAZ).toBe('function'); //compara valores primitivos
  });

  it('returns `1` si esta bien el orden', () => {
    expect(sortDataAZ([
      {"name":"a"},{"name":"b"}])).toStrictEqual([{"name":"a"},{"name":"b"}]);//toStrictEqual Prueba misma estructura y tipo de los objetos
  });

  it('returns `-1` si debe intercambiar el orden', () => {
    expect(sortDataAZ([
      {"name":"c"},{"name":"a"}])).toEqual([{"name":"a"},{"name":"c"}]);//toEqual compara propiedades de objetos
  });

  it('returns `0` si es igual los nombres ', () => {
    expect(sortDataAZ([
      {"name":"a"},{"name":"a"}])).toStrictEqual([{"name":"a"},{"name":"a"}]); 
  });
})

const infData = [
  {
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "episode": [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2",
      "https://rickandmortyapi.com/api/episode/3",
      "https://rickandmortyapi.com/api/episode/4",
      "https://rickandmortyapi.com/api/episode/5",
      "https://rickandmortyapi.com/api/episode/6",
      "https://rickandmortyapi.com/api/episode/7",
    ]}
  ,{
    "name": "Abadango Cluster Princess",
    "status": "Alive",
    "species": "Alien",
    "type": "",
    "gender": "Female",
    "episode": [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2",
      "https://rickandmortyapi.com/api/episode/3",
      "https://rickandmortyapi.com/api/episode/4",
      "https://rickandmortyapi.com/api/episode/5",
      "https://rickandmortyapi.com/api/episode/6",
      "https://rickandmortyapi.com/api/episode/7",
    ]} 
]

describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });


  it('returns `filterSpecies`', () => {
    expect(filterData(infData, 'Human')).toEqual(
      {
        "species": "Human",
      }
      ,{
        "species": "Alien",
      } 
    )
  });
});

describe('filterEpisode', () => {
  it('is a function', () => {
    expect(typeof filterEpisode).toBe('function'); 
  });
  it('returns `kindEpisode`', () => {
    expect(filterEpisode(infData)).toEqual(
      {
        "name": "Rick Sanchez",
      }
      ,{
        "name": "Abadango Cluster Princess",
      } 
    )
  });
});

describe('filterStatus', () => {
  it('is a function', () => {
    expect(typeof filterStatus).toBe('function');
  });
  it('returns `kindStatus`', () => {
    expect(filterStatus(infData)).toEqual(
      {
        "status": "Alive",
      }
      
    )
  });
});


  

