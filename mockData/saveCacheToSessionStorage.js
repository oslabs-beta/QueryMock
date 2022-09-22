
//INPUT -> cache: Obj
//OUTPUT: null
//description: saves the object to sessionStorage so that when page is refreshed, data will persist
function saveCacheToSessionStorage(cache){
  sessionStorage.setItem('cache', JSON.stringify(cache));
}

export default saveCacheToSessionStorage;