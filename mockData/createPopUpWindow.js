import findQueryObject from './findQueryObject';



//INPUT -> obj: Object
//INPUT -> cache: Object
//Description: recieves object -> populates popup with object key/value pairs of Object unless Cache has a different value for the same key

 function createPopUpWindow(obj, cache){

  //Creating the dom elements and styling it.
  const body = document.getElementsByTagName('body')[0];
  const mockPop = document.createElement('div');
  mockPop.id = 'mockPop';
  mockPop.setAttribute("style", "width: 100%; height: 100%; position: fixed; top: 0px; left: 0px; background-color: rgba(248, 220, 242); display: grid; grid-template-rows: 2% 1fr 2%;")
  
  //Creating the elements within the dom.
  const popUp = document.createElement('div');
  popUp.id = 'popUp';
  popUp.setAttribute("style", "background-color: white; width: 60%; max-width: 650px; margin: 1% auto 0 auto; border: solid; border-color: black; border-radius: 5%; border-width: thin; box-shadow: 10px 10px 25px rgb(216, 211, 211); min-width: 600px; grid-row: 2; overflow: scroll;");
  mockPop.appendChild(popUp);

  //add image for popup
  const img = document.createElement('img');
  img.setAttribute('src', 'https://lh3.googleusercontent.com/pw/AL9nZEUQDLLDUjHxpJBZ9HWnZ9X_oMCCj59rMUgvSwFmGOkwAfpBw0TZOIKUfA9_E7Q8j82aXA4e0ncrP8SNgtg6CMQY96eGOey6VhF8DxCH5yFajSKL99wmIVZ6FgOwei2C9YYIWE2OUp9yw5sA4QVPkHIn=w1840-h674-no?authuser=0');
  img.setAttribute('style', "width: 100%; max-width: 550px padding: 5% 10% 0 10%;");
  popUp.appendChild(img);

  //Create description paragraph
  const p = document.createElement('p');
  p.innerHTML = "Hi!  Thanks for using Apollo's Library mockQuery! <br>We have prefilled the mock data fields with text. <br>Replace any of the prefilled input boxes with your personalized mock data  <br>and then click submit. <br> <br>You can re-run the mockQuery function without the 'P' tag  <br>and your information will be retained. <br>If you have any questions, please check out our docs.  Query on!"
  p.setAttribute('style', "padding-left: 10%; padding-right: 10%; text-align: center; font-size: 1em; color:rgb(49, 49, 49);")
  popUp.appendChild(p);

  //Create ul
  const ul = document.createElement('ul');
  ul.id = 'mockList';
  ul.setAttribute('style', "list-style-type: none; margin: 0; padding: 4% 10% 1% 10%; font-size: 1.25em;");
  popUp.appendChild(ul);

  //grabing the object within the query search. checks if it is in an array.
  let queryObject = findQueryObject(obj);
  

  //adding an <li> to the dom with each key/value from the object
  function addElementToDom(key, value, prepend = ''){
    let li = document.createElement('li');
    li.id = `ul_${key}`
    li.setAttribute('style', 'width: 100%; display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; margin-bottom: 2%;');

    const mockDiv = document.createElement('div');
    mockDiv.id = 'mockDiv'
    mockDiv.innerText = `${prepend} ${key}: `;
    mockDiv.setAttribute('style', "grid-column: 1 / 2; text-align: right; padding-right: 5%; color: rgb(65, 28, 65); text-shadow: 2px 2px 3px rgb(156, 156, 156);")
    li.appendChild(mockDiv);

    const mockInput = document.createElement('input');
    mockInput.setAttribute('style', 'grid-column: 2 / 5; width: 96%; margin-left: 1%; border-radius: 5px; margin-top: -5px; line-height: 2em; border-color:rgb(65, 28, 65); box-shadow: 2px 2px 5px rgb(156, 156, 156);')
    mockInput.id = key;
    mockInput.setAttribute('placeholder', `${value}`);
    li.appendChild(mockInput);

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
      if(typeof value === 'string' || typeof value === 'number') {  //checks if it's a nested object.
        if(key[0] !== '_' && key[1] !== '_'){
          if(cache[key]){
            callback(key, cache[key], prepend)
            // addElementToLocalCache(key, value, cache);
          } else{
            callback(key, value, prepend)
            // addElementToLocalCache(key, value, cache);
          }
        }
      } else{
        const prependText = prepend + key;
        iterateObj(value, callback, prependText)
        }
      }
    }
  iterateObj(queryObject, addElementToDom);

  //adding a submit Button
  const addHover = document.createElement('style');
  addHover.appendChild(document.createTextNode("#mockButtonDiv:hover{box-shadow: 2px 2px 5px rgb(156, 156, 156);}"));
  addHover.appendChild(document.createTextNode("#mockButton:hover{color: white; backgroundColor: rgb(65, 28, 65); background-color: rgb(65, 28, 65);}"));
  document.querySelector('head').appendChild(addHover);


  const buttonDiv = document.createElement('div');
  buttonDiv.id = "mockButtonDiv"
  buttonDiv.setAttribute('style', "margin: 5% auto 5% auto; width: 12%;")
  popUp.appendChild(buttonDiv);

  const button = document.createElement('button');
  button.id = 'mockButton'
  button.innerText = 'submit';
  button.setAttribute('style', "width: 100%; text-align: center; padding-top: 8%; padding-bottom: 8%; box-shadow: 2px 2px 5px rgb(156, 156, 156); border-color: rgb(65, 28, 65); border-width: thin; border-radius: 5px; background-color: rgba(248, 220, 242)")
  buttonDiv.appendChild(button);

  //adding all created elments to the page
    
  body.appendChild(mockPop);

  //adding the onlick function to the button
  // button.onclick = function(e){

  // apollos_library.closePopUpWindow(obj);


  // }

  return;
};




export default createPopUpWindow;