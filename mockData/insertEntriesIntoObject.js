//INPUT -> obj: Object
//INPUT -> cache: Object
//Description: recursively goes through the obj and if the Cache has the same key as the obj then the obj is updated
function insertEntriesIntoObject(obj, cache){
  let queryName;
  for(const [key, value] of Object.entries(obj)){
    if(Array.isArray(value)){
      queryName = key;
      insertEntriesIntoObject(value[0], cache)
    } else if(typeof value === 'object'){
      insertEntriesIntoObject(value, cache)
    } else if(typeof value === 'string' || typeof value === 'number'){
      if (cache[key]){
        obj[key] = cache[key];
      }
    }
  }

  return obj;
}

export default insertEntriesIntoObject;
