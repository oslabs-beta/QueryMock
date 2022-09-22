import React, { useEffect, useState } from 'react';
import attachButtonListener from './attachButtonListener';
import convertGqlargToObject from './convertGqlargToObject'
import createPopUpWindow from './createPopUpWindow';
import updateCacheFromSessionStorage from './updateCacheFromSessionStorage';
import determineArguements from './determineArguements';
import updateObjWithCache from './updateObjWithCache';



//INPUT -> gqlSearch : a graphQL search specifically for useQuery hook
//The following can be in any order
//INPUT: number: represents the number of times you want the data duplicated.  If you enter 1 or leave empty, then the results will return to you in an object {data: [querysearch]: {results}}, but if you enter a number greater than 2, it will come to you in an array {data: [querysearch]: [{result}, {results duplicated}, etc...]}
//INPUT -> String.  Entering "error" will result in an error message. Entering "loading" will result in a loading message.  Entering "insert" will result in a pop up window that will allow you to enter personalized data.
//INPUT -> Object.  We do nothing with this currently, but you are able to enter an object into the useQuery hook, so we left that in here for future updates.
//OUTPUT -> Object
//description: mockQuery replaces useQuery when you want mockData to test out the front end.  Once your backend is set up, discard and continue to use useQuery Hook.
function MockQuery(gqlSearch, arg2, arg3, arg4){
  const {num, paramObj, flag}  = determineArguements(arg2, arg3, arg4)
  let newObj = convertGqlargToObject(gqlSearch, num);
  let pageCache = updateCacheFromSessionStorage(newObj);
  updateObjWithCache(newObj, pageCache);
  
  const [userInput, setUserInput] = useState(JSON.parse(JSON.stringify(newObj)));

  
  useEffect(() => {
    if(flag === 'insert'){
    createPopUpWindow(newObj, pageCache);
    attachButtonListener(setUserInput, newObj, pageCache);
    }
    // if(!flag | flag !=='insert') document.getElementById('mockPop').remove();
  },[]);

  
  if(flag === 'error'){
    return {error: 'error from mockQuery'};

  } else if(flag === 'loading'){
    return {loading: true};
  }

  return userInput
}

export default MockQuery