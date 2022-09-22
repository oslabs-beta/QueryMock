//INPUT -> input: gql search for useQuery hook
//INPUT -> num: Number;
//description: accepts a useQuery search and returns an object and mock data for that request.  If num is greater than 1, it will return it in an array inside data.[query search name]; otherwise it will return as a single object
function convertGqlargToObject(input, num, arg){
  // finding the array of objects with all the Graph QL query
  const arr = input.definitions[0].selectionSet.selections[0].selectionSet.selections;
  // declaring a empty object to use later
  const cache = {};
  function loopSelection (arr) {
    // another function to loop thru the array and populate cache
    
    for (let i = 0; i < arr.length; i++) {
      function nestedLoop (arr, arr1, i) {
        for (let j = 0; j < arr1.length; j++) {
          let val = arr1[j].name.value;
          cache[arr[i].name.value][val] = `${arr1[j].name.value}_01`;
          
        }
        return cache;
      }
      // if one of the object has a selectionSet which means it has its own properties, then recursively invoke loopSelection  
      if (arr[i].selectionSet) {
          cache[arr[i].name.value] = {};
          nestedLoop(arr, arr[i].selectionSet.selections, i);
      }
      else cache[arr[i].name.value] = `${arr[i].name.value}_01`;
    }
    return cache;
  }
  loopSelection(arr);
  const key = input.definitions[0].selectionSet.selections[0].name.value;
  if (num === 1 || num === 0) {
    const ncache = {
      data: {
        [key]: cache
      }
    }
    return ncache;
  }
  if (num > 1) {
    let narr = [];
    for (let i = 0; i < num; i++) {
      narr.push(cache);
    }
    const ncache = { data: 
      {
        [key]: narr
        }
      }
    return ncache;
  }
}

export default convertGqlargToObject;