const determineArguements = require('../mockData/determineArguements');

describe('determineArguements\ test', () => { 
  let sInsert = 'insert';
  let sError = 'Error';
  let sLoading = 'Loading';
  let number = 5;
  let object = {key: 'value'};
  const newResult = determineArguements(sInsert, number, object);
  const newResults2 = determineArguements(number, object, sInsert);
  const newResults3 = determineArguements(object, sInsert, number);
  const newResults4 = determineArguements();
  const allNumbers = determineArguements(5, 6, 7);

  it('should return an object with 3 keys', () => {
    expect(newResult).toHaveProperty('num');
    expect(newResult).toHaveProperty('parmObj');
    expect(newResult).toHaveProperty('flag');
  })

  it('should return an object with the correct values no matter the order', () => {
    expect(newResult).toMatchObject({num: 5, flag: 'insert', parmObj: {key: 'value'}});
    expect(newResults2).toMatchObject({num: 5, flag: 'insert', parmObj: {key: 'value'}});
    expect(newResults3).toMatchObject({num: 5, flag: 'insert', parmObj: {key: 'value'}});
  })

  it('should return 2 keys with unknown value and num should be 1', () => {
    expect(newResults4).toEqual({num: 1, flag: undefined, parmObj: undefined});
  })

  it('should have property of num and value 7', () => {
    expect(allNumbers).toEqual({num: 7, flag: undefined, parmObj: undefined});
    expect(allNumbers.num).toEqual(7);
  })

  it('should have the property flag equal errror', () =>{
    expect(determineArguements('error')).toMatchObject({num: 1, flag: 'error', parmObj: undefined})
  })

  it('should have the property flag equal loading', () =>{
    expect(determineArguements('loading')).toMatchObject({num: 1, flag: 'loading', parmObj: undefined})
  })
});
