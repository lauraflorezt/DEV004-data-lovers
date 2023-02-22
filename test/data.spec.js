import { filterData,sortDataAZ,filterStatus,filterEpisode } from '../src/data.js';

describe('sortDataAZ', () => {
  it('is a function', () => {
    expect(typeof sortDataAZ).toBe('function');
  });

  //it('retorna true si "Rick Sanchez" esta ordenado correctamente', () => {
    
  //expect(sortDataAZ('Rick Sanchez')).toBe(true);
  //});
})

const infData = [
  {
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",}

  ,{
    "name": "Abadango Cluster Princess",
    "status": "Alive",
    "species": "Alien",
    "type": "",
    "gender": "Female",} 
]

describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });


  it('returns `filterSpecies`', () => {
    expect(filterData(infData)).toEqual[
      {
        "name": "Rick Sanchez",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male",}
    
      ,{
        "name": "Abadango Cluster Princess",
        "status": "Alive",
        "species": "Alien",
        "type": "",
        "gender": "Female",} 
    ]
  });
});

describe('filterStatus', () => {
  it('is a function', () => {
    expect(typeof filterStatus).toBe('function');
  });

  
});

describe('filterEpisode', () => {
  it('is a function', () => {
    expect(typeof filterEpisode).toBe('function'); //toBe compara 
  });

  
});
/*describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/
