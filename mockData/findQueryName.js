//INPUT -> obj: Object
//OUTPUT: null
//description: Grabs the name of the query from the object that was converted from gql.
function findQueryName(obj){
  //grabing the object within the query search. checks if it is in an array.
  let querySearch = Object.keys(obj.data);
  return Array.isArray(querySearch) ? querySearch[0] : querySearch;
}


export default findQueryName;