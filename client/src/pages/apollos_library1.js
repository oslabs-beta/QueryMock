import { useQuery, gql } from '@apollo/client';
// console.log(useQuery);

console.log('******seesion storage******', sessionStorage); //testing


class Apollos_Library_Class{
  constructor(){

    //OBJECT: the keys in cache are scrubbed from the user's query and the value is either our mock data or user input.
    this.cache = {tester: 'jacob'};

    //TESTING PURPOSES ONLY
    this.wait = false;


    //TESTING PURPOSES ONLY: This is what I expect to get from ZQ
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
   * Description: runs zqFunction() -> if flag = 'p' then runs popUpWindow() else if flag ='e' returns error object
   */
  mockQuery(gql, flag){
    console.log('entered mockQuery');
    const resultObject =  this.zqFunction(gql);  //returns cache2
  
    if(flag) {    
      console.log('skip', sessionStorage.getItem('skip')) 
      if(sessionStorage.getItem('skip') === null){
        if(sessionStorage.getItem('cache')){
          this.cache = JSON.parse(sessionStorage.getItem('cache'));
          this.updateObjWithCache(resultObject, this.cache)
        }
        console.log('this should be the updated cache', this.cache);

        this.openPopUpWindow(resultObject, this.cache)
        return resultObject

      } else {
        console.log('check the sessionStorage');
        this.cache = JSON.parse(sessionStorage.getItem('cache'));
        // for(const [key, value] of Object.entries(this.cache)){
        //   console.log('please have true ', key, sessionStorage.getItem(key))
        //   if(sessionStorage.getItem(key)){
        //     console.log('the key has value ', key)
        //     this.cache[key] = sessionStorage.getItem(key);
        //     console.log('updated ', key, ' is ', this.cache[key]);
        //   }
        // }

        sessionStorage.removeItem('skip', false);
        return this.updateObjWithCache(resultObject, this.cache)
      }
    } //end Flag

    //else if flag is 'e' return error object write later
    console.log('no flag drawn');
    return resultObject
  };



   /**
    * FUNCTION zqFunction
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
  zqFunction(obj){
    console.log('enter zqFunction');
    return this.gqlObject;
  };




  /**
   * FUNCTION: openPopUpWindow(obj)
   * @param {*} obj: received from zqFunction
   * @returns : void
   * Description: recieves object -> populates popup with object key/value pairs -> offers user chance to update the values -> 
   */
  openPopUpWindow(obj, cache){
    console.log('entered openPopUpWindow')

    //Creates the dom elements and styles it.
    const body = document.getElementsByTagName('body')[0];
    const node = document.createElement('div');
    node.id = 'mockPop';
    node.style.width = '100%';
    node.style.height = '100%';
    node.style.position = 'fixed';
    node.style.top = '0px';
    node.style.left = '0px';
    node.style.backgroundColor = 'yellow';

    //Creates the elements within the dom.
    const h1 = document.createElement('h1');
    h1.innerText = 'MockData Builder'
    node.appendChild(h1);

    const p = document.createElement('p');
    p.innerText = "Hi! We have prefilled the mock data fields; however, please personalize any of the data by entering the personalized mock data in the input fields  We'll save the data so the next time you run the function, it'll run the data submitted here.  If you want to change it in the future then run the function with flagging the second parameter.  Than you"
    node.appendChild(p);

    const ul = document.createElement('ul');
    ul.id = 'mockList';
    node.appendChild(ul);

    //grabs the object within the query search
    let queryObject =  this.gqlObject.data[Object.keys(this.gqlObject.data)[0]][0];  

    //adds an <li> to the dom
    function addElementToDom(key, value){
      let li = document.createElement('li');
      li.id = `ul_${key}`
      li.innerHTML = `${key}_li: <input id=${key} placeholder="${value}"/>`;
      ul.appendChild(li);
    } 

    function addElementToLocalCache(key, value, cache){
      console.log({cache});
      console.log('what is undefined', key, value);
      cache[key] = value;
    }
    
    //iterates over input object to populate popup fields.
    function iterateObj(obj, callback){
      for(const [key, value] of Object.entries(obj)){
        console.log(key[0], key[1], value,);
        if(typeof value === 'string' ) {
          if(key[0] !== '_' && key[1] !== '_'){
            callback(key, value)
            addElementToLocalCache(key, value, cache);
          }
        } else{
          iterateObj(value, callback)
          }
        }
      }
    iterateObj(queryObject, addElementToDom);

    //adds a submit Button
    const button = document.createElement('button');
    button.innerText = 'submit';

    //adds all created elments to the page
    node.appendChild(button);
    body.appendChild(node); 

    //adds the onlick function to the button
    button.onclick = function(){
      apollos_library.closePopUpWindow(obj);
      window.location.reload();
    }

    console.log('local cache', cache);
    return;
  };




  /** UPDATE UPDATE UPDATE
   * 
   * @param {*} obj: the object recieved from zqFunction
   * @param {*} cache: the cache located at this.cache.
   * @returns Object: a new object is updated from the user submissions
   * Description: use Dom to update cache --> Use cache to update input object. --> Return updated object. 
   */
   updateCacheWithUserInput(cache){
    console.log('entered updateCacheWithUserInput');

    //update the cache with the new inputed values
    const newArr = document.getElementById('mockList').childNodes;  //gather all the li elements
    newArr.forEach(el => {
      console.log('entered for each')
      const theID = el.id.slice(3)  //grabs their id
      console.log({theID})
      let newVal = document.getElementById(`${theID}`).value;  //grabs the input fields
      console.log({newVal});
      console.log('newval length');
      if(newVal.length){
        console.log('newVal length', newVal);
        cache[theID] = newVal; 
        console.log('try to set storage with ', theID, newVal);
        // sessionStorage.setItem(theID, newVal);
      }
      // sessionStorage.setItem(cache, JSON.stringify(cache));
      // console.log(sessionStorage.getItem(cache));      
    });
    return cache;
  }

  updateObjWithCache(obj, cache){
    console.log('entered updateObjWithCache')
    //iterate over inputed object and update the value if it is different than cache
    function iterateObj(obj, cache){
      console.log('entered iterateObj');
      for(const [key, value] of Object.entries(obj)){
        if(typeof value === 'string') {
          console.log(key, value);
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
   * description: just closes the popup window.
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
