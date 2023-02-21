import { filterData,sortDataAZ } from '../src/data.js';

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


  it('return species Alien', () => {
    expect(filterData("Alien", infData)).toBe('Alien');
  });
});


describe('sortDataAZ', () => {
  it('is a function', () => {
    expect(typeof sortDataAZ).toBe('function');
  });

  it('debería ordenar "abcdefghi"', () => {
    expect(sortDataAZ('abcdefghi')).toBe(true);
  });
})

/*describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/
