
//INPUT -> obj: Object
//OUTPUT: object
//description: creates an object from the sessionStorage.  It can be an empty cache.
function updateCacheFromSessionStorage(obj){
  let newCache = {};
  if(sessionStorage.getItem('cache')){
    newCache = JSON.parse(sessionStorage.getItem('cache'));
  }

  return newCache
} 



export default updateCacheFromSessionStorage;
