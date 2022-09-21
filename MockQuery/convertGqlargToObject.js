//INPUT -> input: gql search for useQuery hook
//INPUT -> num: Number;
//description: accepts a useQuery search and returns an object and mock data for that request.  If num is greater than 1, it will return it in an array inside data.[query search name]; otherwise it will return as a single object
function convertGqlargToObject(input, num) {
  // finding the array of objects with all the Graph QL query
  
  const arr = input.definitions[0].selectionSet.selections[0].selectionSet.selections;
  
  // declaring a empty object to use later
  const cache = {};
  
  loopSelection(arr);
  

  const key = input.definitions[0].selectionSet.selections[0].name.value;

  let narr = [];
  if(num > 1){
    for (let i = 0; i < num; i++) {
      narr.push(cache);
    }

  } else narr = cache;



  const ncache = { data: 
    {
      [key]: narr
      }
    }
  return ncache;


  function loopSelection (arr) {
    // another function to loop thru the array and populate cache
    for (let i = 0; i < arr.length; i++) {
      // if one of the object has a selectionSet which means it has its own properties, then recursively invoke loopSelection  
      if (arr[i].selectionSet) {
        cache[arr[i].name.value] = {};
        return nestedLoop(arr, arr[i].selectionSet.selections, i);
      }
      cache[arr[i].name.value] = `${arr[i].name.value}_01`;
    }
  }
  
  function nestedLoop (arr, arr1, i) {
    for (let j = 0; j < arr1.length; j++) {
      let val = arr1[j].name.value;
      cache[arr[i].name.value][val] = `${arr1[j].name.value}_01`;
    }
    return cache;
  }

};




export default convertGqlargToObject;