import { useQuery, gql } from '@apollo/client';

const apollos_library = {
  
    
  //OBJECT: the keys in cache are scrubbed from the user's query and the value is either our mock data or user input.
  cache: {
    label: 'label_01',
    name: 'name_01',
    id: 'id_01'
  }, 


  //TESTING PURPOSES ONLY: This is what I expect to get from ZQ. 
  gqlObject:{
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
  },



  /** MockQuery Function
   *  INPUT gql: a graphQL query written for useQuery react hook in the following format:
   *    gql`
   *      query Dog($breed: String!) {
   *        dog(breed: $breed) {
   *          id
   *          displayImage
   *      }
   *    `;
   *  
   *  INPUT #2 flag (optional): a string with the following options 
   *         "p" --> allows user to personalize the data
   *         "e" --> or any other entry allows user to throw an error
   *  
   *  OUTPUT: Object --> Specifically, it will return the object with only the key/value pairs requested,
   *  Description: runs zqFunction() -> if flag = 'p' then runs popUpWindow() else if flag ='e' returns error object
  */ 
  mockQuery: (gql, flag) => {
    //run logic for creating mock data
    const resultObject = apollos_library.zqFunction(gql);  //returns cache2
    
    
    

    //if flag is 'p' then run openPopUpWindow();
        // this.popUpWindow();
    if(flag) {
      return apollos_library.openPopUpWindow(resultObject)  //
    }


    
    //else if flag is 'e' return error object
    console.log(resultObject);
    return resultObject
    },


    /** zqFunction Function
     * INPUT gql: a graphQL query written for useQuery react hook in the following format: 
     *   gql`
     *     query Dog($breed: String!) {
     *       dog(breed: $breed) {
     *         id
     *         displayImage
     *       }
     *     }
     *    `;
     * 
     * OUTPUT: object --> The object will have the keys from the query and either the values from the cache or newly created values.
     * Description: receives gql -> scraps query for keys -> checks if cache has property of key -> either takes value from cache or creates new property on cache -> returns object with only properties requested from the gql
    */
    zqFunction(obj){
      console.log('enter zqFunction');
      return apollos_library.gqlObject;
    },


    /** OpenPopuUpWindow Function
     * INPUT: Object --> received from zqFunction
     * OUTPUT: Object --> the same object 
     * Description: recieves object -> populates popup with object key/value pairs -> offers user chance to update the values -> user submits -> this.cache is updated -> returns new object
    */
    openPopUpWindow : (obj) =>{

      //TESTING SETUP
      // const gql = {};
      // gql.data = {};
      // gql.data.tracksForHome = [];
      // const track1 = {};
      // track1.title = 'title_01';
      // track1.id = 'id_01';
      // track1.thumbnail = 'thumbnail_01';
      // track1.length = 'length_01';
      // track1.modulesCount = 'modulesCount_01';
      // track1.author = {};
      // track1.author.name = 'name_01';
      // track1.author.photo = "photo_09"
      // gql.data.tracksForHome.push(track1);
      // const ogCache = {};
      //END OF TESTING SETUP


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
      let queryObject =  apollos_library.gqlObject.data[Object.keys(apollos_library.gqlObject.data)[0]][0];  //change gql

      //adds an <li> to the dom
      function addElementToDom(key, value){
        let li = document.createElement('li');
        li.id = `ul_${key}`
        li.innerHTML = `${key}_li: <input id=${key} placeholder="${value}"/>`;
        ul.appendChild(li);
      } 
      
      //iterates over input object to populate popup rows.
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

      //add Button
      const button = document.createElement('button');
      button.innerText = 'submit';
  
      node.appendChild(button);
      body.appendChild(node); 

      // button.onclick = closePopUpWindow(node, gql, ogCache);
      return apollos_library.gqlObject
    },

  //****Working on this section*****  CURRENTLY NOT WORKING
  closePopUpWindow: (obj, cache) => {
    const node = document.getElementById('mockPop');
    //update the cache with the new inputed values
    const newArr = document.getElementById('mockList').childNodes;  //gather all the li elements
    console.log(newArr)
    newArr.forEach(el => {
      const theID = el.id.slice(3)  //grabs their id
      console.log(theID)
      let newVal = document.getElementById(`${theID}`).value;  //grabs the input fields
      if(newVal.length) cache[theID] = newVal;           
    });

    //close popup
    node.remove();

    //iterate over inputed object and update the value if it is different than cache
    //****THIS IS CURRENTLY NOT WORKING******
    function iterateObj(obj, callback, cache){
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

    const fakeObj = {
      data: {
        tracksForHome:[
          {
            __typename: "Track",
            id: "id01",
            title: "This is my fake title",
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

    //comment this out while not working and return fakeObj
    //iterateObj(obj, compareObjectValues);
      
    console.log(obj);
    return fakeObj;
  }
}




  export default apollos_library;
