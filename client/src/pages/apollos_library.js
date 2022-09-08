import { gql } from '@apollo/client';

console.log('******seesion storage******', sessionStorage); //testing


class Apollos_Library_Class{
  constructor(){

    //OBJECT: the keys in cache are scrubbed from the user's query and the value is either our mock data or user input.
    this.cache = {};

    //TESTING PURPOSES ONLY: This is what I expect to get from convertGqlToObject
    this.gqlObject ={
      data: {
        tracksForHome:[
          {
            __typename: "Track",
            id: "id01",
            title: "title_01",
            thumbnail: "thumbnail_01",
            length: "length_01",
            modulesCount: "modlesCounted_01",
            author: {
                __typename: "Author",
                name: "name_01",
                photo: "photo_01"
            }
        }
        ]
      }
    };
  } //end of constructor




  /**
   * FUNCTION: mockQuery(gql, flag)
   * @param {*} gql: a graphQL query written for useQuery react hook in the following format:
   *    gql`
   *      query Dog($breed: String!) {
   *        dog(breed: $breed) {
   *          id
   *          displayImage
   *      }
   *    `;
   * @param {*} flag (optional): a string with the following options 
   *         "p" --> allows user to personalize the data
   *         "e" --> or any other entry allows user to throw an error
   * @returns object:
   * Description: runs convertGqlToObject() -> if flag = 'p' then runs popUpWindow() else if flag ='e' returns error object
   */
  mockQuery(gql, num, flag){
    console.log('entered mockQuery');
    if(!num) num = 0;

    const newObj =  this.convertGqlToObject(gql, num);
    
    //if the sessionStorage has a cache then update this.cache and newObj sessionStorage cache values.
    if(sessionStorage.getItem('cache')) this.cache = JSON.parse(sessionStorage.getItem('cache'));    
    const resultObj = sessionStorage.getItem('cache') ? this.updateObjWithCache(newObj, this.cache) : newObj;

    if(!flag){
      console.log('entered no flag zone')
      
    } else if(flag === 'p' && sessionStorage.getItem('skip') === null){
      console.log('flag and skip null')
      this.openPopUpWindow(resultObj, this.cache);

    } else if(flag === 'p'){
      console.log('flag & skip')
      sessionStorage.removeItem('skip', false);
    
    } else {
      console.log('all else');
    }

    return resultObj
  }

  
  //   if(flag) {    
  //     if(sessionStorage.getItem('skip') === null){
  //       if(sessionStorage.getItem('cache')){
  //         this.cache = JSON.parse(sessionStorage.getItem('cache'));
  //         this.updateObjWithCache(resultObject, this.cache)
  //       }

  //       this.openPopUpWindow(resultObject, this.cache)
  //       return resultObject

  //     } else {
  //       this.cache = JSON.parse(sessionStorage.getItem('cache'));


  //       sessionStorage.removeItem('skip', false);
  //       return this.updateObjWithCache(resultObject, this.cache)
  //     }
  //   } //end Flag

  //   //else if flag is 'e' return error object write later
  //   console.log('no flag drawn');
  //   return resultObject
  // };



   /**
    * FUNCTION convertGqlToObject()
    * @param {gql} obj: a graphQL query written for useQuery react hook in the following format: 
     *   gql`
     *     query Dog($breed: String!) {
     *       dog(breed: $breed) {
     *         id
     *         displayImage
     *       }
     *     }
     *    `;
     * 
    * @returns object --> The object will have the keys from the query and either the values from the cache or newly created values.
    * Description: receives gql -> scraps query for keys -> checks if cache has property of key -> either takes value from cache or creates new property on cache -> returns object with only properties requested from the gql
    */ 
  convertGqlToObject(input, num){
    // finding the array of objects with all the Graph QL query
    console.log('entered convertGqlToObject');
    console.log(input);
    const arr = input.definitions[0].selectionSet.selections[0].selectionSet.selections;
    // declaring a empty object to use later
    const cache = {};
    function loopSelection (arr) {
      // another function to loop thru the array and populate cache
      
      for (let i = 0; i < arr.length; i++) {
        function nestedLoop (arr, arr1, i) {
          for (let j = 0; j < arr1.length; j++) {
            console.log('arr1 is', arr1);
            console.log('first element is', arr1[j].name.value);
            let val = arr1[j].name.value;
            cache[arr[i].name.value][val] = `${arr1[j].name.value}_01`;
          }
          return cache;
        }
        // if one of the object has a selectionSet which means it has its own properties, then recursively invoke loopSelection  
        if (arr[i].selectionSet) {
            console.log(arr[i].selectionSet);
            cache[arr[i].name.value] = {};
            console.log('in the for loop', cache);
            return nestedLoop(arr, arr[i].selectionSet.selections, i);
        }
        cache[arr[i].name.value] = `${arr[i].name.value}_01`;
      }
      console.log({cache})
      return cache;
  }
  loopSelection(arr);
  console.log('cache', cache);
  const key = input.definitions[0].selectionSet.selections[0].name.value;
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




  /**
   * FUNCTION: openPopUpWindow(obj)
   * @param {*} obj: received from convertGqlToObject
   * @returns : void
   * Description: recieves object -> populates popup with object key/value pairs -> offers user chance to update the values -> 
   */
  openPopUpWindow(obj, cache){
    console.log('entered openPopUpWindow')
    console.log({obj, cache})

    //Creating the dom elements and styling it.
    const body = document.getElementsByTagName('body')[0];
    const node = document.createElement('div');
    node.id = 'mockPop';
    node.style.width = '100%';
    node.style.height = '100%';
    node.style.position = 'fixed';
    node.style.top = '0px';
    node.style.left = '0px';
    node.style.backgroundColor = 'yellow';

    //Creating the elements within the dom.
    const h1 = document.createElement('h1');
    h1.innerText = 'MockData Builder'
    node.appendChild(h1);

    const p = document.createElement('p');
    p.innerText = "Hi! We have prefilled the mock data fields; however, please personalize any of the data by entering the personalized mock data in the input fields  We'll save the data so the next time you run the function, it'll run the data submitted here.  If you want to change it in the future then run the function with flagging the second parameter.  Than you"
    node.appendChild(p);

    const ul = document.createElement('ul');
    ul.id = 'mockList';
    node.appendChild(ul);

    //grabing the object within the query search                ///WILL THIS WORK WITH ALL CODE?
    let queryObject =  obj.data[Object.keys(obj.data)[0]][0]; 

    //adding an <li> to the dom with each key/value from the object
    function addElementToDom(key, value, prepend = ''){
      let li = document.createElement('li');
      li.id = `ul_${key}`
      li.innerHTML = `${prepend} ${key}: <input id=${key} placeholder="${value}"/>`;
      ul.appendChild(li);
    } 

    //adding the key/value from the object to the local cache
    function addElementToLocalCache(key, value, cache){
      cache[key] = value;
    }
    
    /**
     * FUNCTION: iterateObj(obj, callback, prepend);
     * @param {} obj -> the object with just the query fields
     * @param {*} callback -> callback runs for each element in the field
     * @param {*} prepend --> keeps track of what object we are in for nested objects
     * Description: recurssively iterates over object key/values, runs callback on each pair,
     */
    //iterating over input object to populate popup fields.
    function iterateObj(obj, callback, prepend = ''){
      for(const [key, value] of Object.entries(obj)){
        if(typeof value === 'string' ) {  //checks if it's a nested object.
          if(key[0] !== '_' && key[1] !== '_'){
            callback(key, value, prepend)
            addElementToLocalCache(key, value, cache);
          }
        } else{
          const prependText = prepend + key;
          iterateObj(value, callback, prependText)
          }
        }
      }
    console.log('here is the object', {obj});
    iterateObj(queryObject, addElementToDom);

    //adding a submit Button
    const button = document.createElement('button');
    button.innerText = 'submit';

    //adding all created elments to the page
    node.appendChild(button);
    body.appendChild(node); 

    //adding the onlick function to the button
    button.onclick = function(){
      apollos_library.closePopUpWindow(obj);
      window.location.reload();
    }

    return;
  };


  /** FUNCTION updateCacheWithUserInputs(cache)
   * 
   * @param {*} cache: the cache located at this.cache.
   * @returns {obj}: an updated cache object
   * Description: use Dom to update cache --> return updated cache 
   */
   updateCacheWithUserInput(cache){
    console.log('entered updateCacheWithUserInput');

    const newArr = document.getElementById('mockList').childNodes;  //gather all the li elements
    newArr.forEach(el => {
      const theID = el.id.slice(3)  //grabs their id
      let newVal = document.getElementById(`${theID}`).value;  //grabs the input fields
      if(newVal.length){
        cache[theID] = newVal; 
      }      
    });
    return cache;
  }

  /**
   * FUNCTION: updateObjWithCache(obj, obj)
   * @param {*} obj the current object of the query
   * @param {*} cache the current cache from this.cache
   * @returns obj 
   * Description: iterates over the imputed object -> checks if newer values are in cache, updates and then retruns the obj.
   */
  updateObjWithCache(obj, cache){
    console.log('entered updateObjWithCache')

    function iterateObj(obj, cache){
      for(const [key, value] of Object.entries(obj)){
        if(typeof value === 'string') {
          if(cache.hasOwnProperty(key)){
            obj[key] = cache[key];
          }
        } else{
          iterateObj(value, cache)
        }
      }
    }
    iterateObj(obj, cache);
    return obj; 
  };


 


  /**
   * FUNCTION ClosePopUpWindow(obj)
   * @param {*} obj the current user query object
   * @returns obj
   * Description: updates sessionStorage, sets skip to true, closes the popup window.
   */
  closePopUpWindow(obj){
    console.log('entered closePopUpWindow');

    sessionStorage.setItem('skip', true);
    this.updateCacheWithUserInput(this.cache);  
    const newObj = this.updateObjWithCache(obj, this.cache)  

    sessionStorage.setItem('cache', JSON.stringify(this.cache));
    document.getElementById('mockPop').remove();
    console.log('end', newObj);

    return newObj
  }

} //end of class

const apollos_library = new Apollos_Library_Class();

export default apollos_library;

