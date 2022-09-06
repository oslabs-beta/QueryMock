import { useQuery, gql } from '@apollo/client';
import * as fs from 'fs';


class Apollos_Library_Class{
  constructor(){

    //OBJECT: the keys in cache are scrubbed from the user's query and the value is either our mock data or user input.
    this.cache = {
      label: 'label_01',
      name: 'name_01',
      id: 'id_01'
    };


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
  }




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
    const resultObject =  this.zqFunction(gql);  //returns cache2
  
    if(flag) {
      this.wait = true;  //TESTING PURPOSES ONLY
      this.openPopUpWindow(resultObject)
      // while(this.wait){} //TESTING PURPOSES ONLY
      return this.gatherUserInput(resultObject, this.cache);
    }

    //else if flag is 'e' return error object
    console.log(resultObject);
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
   * 
   * @param {*} obj: received from zqFunction
   * @returns : void
   * Description: recieves object -> populates popup with object key/value pairs -> offers user chance to update the values -> 
   */
  openPopUpWindow(obj){
    console.log('entered openPopUpWindow')
    const body = document.getElementsByTagName('body')[0];
    const node = document.createElement('div');
    node.id = 'mockPop';
    node.style.width = '100%';
    node.style.height = '100%';
    node.style.position = 'fixed';
    node.style.top = '0px';
    node.style.left = '0px';
    node.style.backgroundColor = 'yellow';

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
    let queryObject =  this.gqlObject.data[Object.keys(this.gqlObject.data)[0]][0];  //change gql

    //adds an <li> to the dom
    function addElementToDom(key, value){
      let li = document.createElement('li');
      li.id = `ul_${key}`
      li.innerHTML = `${key}_li: <input id=${key} placeholder="${value}"/>`;
      ul.appendChild(li);
    } 
    
    //iterates over input object to populate popup fields.
    function iterateObj(obj, callback){
      for(const [key, value] of Object.entries(obj)){
        console.log('type of', key, typeof value);
        if(typeof value === 'string') {
          callback(key, value)
        } else{
          iterateObj(value, callback)
          }
        }
      }
    iterateObj(queryObject, addElementToDom);

    //adds a submit Button
    const button = document.createElement('button');
    button.innerText = 'submit';

    node.appendChild(button);
    body.appendChild(node); 


    
    button.onclick = function(){
      document.getElementById('mockPop').remove();
    }
  };


  /**
   * FUNCTION gatherUserInput(obj, cache)
   * @param {*} obj: the object recieved from zqFunction
   * @param {*} cache: the cache located at this.cache.
   * @returns Object: a new object is updated from the user submissions
   * Description: this.cache is updated by user submissions -> original object is updated from this.cache and returned
   */
   gatherUserInput(obj, cache){
    console.log('entered gatherUserInput');
    //update the cache with the new inputed values
    const newArr = document.getElementById('mockList').childNodes;  //gather all the li elements
    console.log(newArr)
    newArr.forEach(el => {
      const theID = el.id.slice(3)  //grabs their id
      console.log(theID)
      let newVal = document.getElementById(`${theID}`).value;  //grabs the input fields
      if(newVal.length) cache[theID] = newVal;           
    });

    //iterate over inputed object and update the value if it is different than cache
    function iterateObj(obj, cache){
      console.log('entered iterateObj');
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
   * description: just closes the popup window.
   */
  closePopUpWindow(){
    const node = document.getElementById('mockPop');
    node.remove();

    this.wait = false; //TESTING PURPOSES 
  }

}

const apollos_library = new Apollos_Library_Class();

export default apollos_library;
