
//INPUT -> cache: object
//INPUT -> files: object
//OUTPUT -> object
//description: grabs the input from the dom, updates the cache and returns updated cache 
 function updateCacheWithUserInput(cache, files){

  const newArr = document.getElementById('mockList').childNodes;  //gather all the li elements
  newArr.forEach(el => {
    const theID = el.id.slice(3)  //grabs their id
    let newVal = document.getElementById(`${theID}`).value;  //grabs the input fields
    if(newVal.length){
      if(newVal[0] === "~") newVal = convertEntryWithDataTemplate(newVal.slice(1))
      cache[theID] = newVal || cache[theID] 
    }     
  });
  return cache;

  function convertEntryWithDataTemplate(entry){
    const e = entry.toLowerCase();
    let results;

    if(['int', 'integer', 'num', 'number'].includes(e)) results = converterLogic('int', files);
    else if(e === 'float') results = converterLogic('float', files);
    else if(e === 'boolean') results = converterLogic('boolean', files);
    else if(e.slice(0, 4) === 'text') results = converterLogic(parseInt(e.slice(4).replace(/\s+/g, '')), files);
    else if(e === 'address') results = converterLogic('address', files);
    else if(['phone', 'cell', 'telephone'].includes(e)) results = converterLogic('phone', files);
    else if (['photo', 'picture', 'pic', 'thumbnail', 'image', 'img'].includes(e)) results = converterLogic('photo', files);
    return results
  }

  function converterLogic(input, files){
    if(input === 'float' || input === 'int'){
      files[`${input}`] += 1;
      return files[`${input}`]

    } else if(typeof input === 'number'){
      const newString = files.text.item[0].slice(0, input);
      return newString;
    
    } else if(input === 'boolean'){
      return !files.boolean
    
    } else {
      const currObj = files[`${input}`]
      return files[`${input}`].item[currObj.index++];
    }
  }
}


export default updateCacheWithUserInput;