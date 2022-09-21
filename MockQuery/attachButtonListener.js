import dataFiles from './dataFiles';
import updateCacheWithUserInputs from './updateCacheWithUserInput';
import saveCacheToSessionStorage from './saveCacheToSessionStorage';
import insertEntriesIntoObject from './insertEntriesIntoObject';


//INPUT -> setItem: React Hook
//INPUT -> obj: Object
//INPUT -> cache: Object
//OUTPUT -> null
//description: attaches a button listener to 'mockButton' div.  When clicked the cache is updated with user inputs and saved for page reload, the inputed elements on the dom are saved to the object.  Lastly we update state with the new object.
function attachButtonListener(setItem, obj, cache, btnPrss){
  document.getElementById('mockButton').onclick = function(e){
    updateCacheWithUserInputs(cache, dataFiles);
    insertEntriesIntoObject(obj, cache)
    saveCacheToSessionStorage(cache);
    btnPrss = true;

    document.getElementById('mockPop').remove();
    setItem(obj);
    }
}


export default attachButtonListener;