import findQueryName from "./findQueryName";

//INPUT: Object
//OUTPUT: Object
//DESCRIPTION: determines whether the query search returns an array of objects or just an object and only delivers the object.
function findQueryObject(obj){
  let querySearch = findQueryName(obj);
  const theObject = obj.data[querySearch];
  let queryObject = Array.isArray(theObject) ? theObject[0] : theObject 
  return queryObject;
}

export default findQueryObject;