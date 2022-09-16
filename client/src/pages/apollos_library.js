import { gql } from '@apollo/client';


console.log('******seesion storage******', sessionStorage); //testing


class Apollos_Library_Class{
  constructor(){

    //OBJECT: the keys in cache are scrubbed from the user's query and the value is either our mock data or user input.
    this.cache = {};

    this.dataFiles = {
      int: 127,
      float: parseFloat(127.27).toFixed(2),
      boolean: true,
      photo: {
        item: ['https://upload.wikimedia.org/wikipedia/commons/3/36/Vassily_Kandinsky%2C_1912_-_Improvisation_27%2C_Garden_of_Love_II.jpg', 'https://upload.wikimedia.org/wikipedia/commons/6/63/Robert_Delaunay%2C_1913%2C_Premier_Disque%2C_134_cm%2C_52.7_inches%2C_Private_collection.jpg', 'https://upload.wikimedia.org/wikipedia/en/2/2f/Franti%C5%A1ek_Kupka%2C_1912%2C_Amorpha%2C_fugue_en_deux_couleurs_%28Fugue_in_Two_Colors%29%2C_210_x_200_cm%2C_Narodni_Galerie%2C_Prague.jpg', 'https://upload.wikimedia.org/wikipedia/commons/f/fc/DasUndbild.jpg', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Carlsund_Rapid_%281930%29.jpg'], 
        index: 0
      },
      address: {
      item:['2300 Oracle Way Austin, TX 78741', '4348 Fountain Ave, Los Angeles, CA 90029', '1000 5th Ave, New York, NY 10028', '2800 E Observatory Rd, Los Angeles, CA 90027', '125 La Salle St, New York, NY 10027'],
        index: 0
      },
      phone: {
      item: ['(737)867-1000', '(213) 473-0800', '202-456-1111', '+353 1 679 6644', '(310) 325-6767', '(212) 932-3500'],
      index: 0
      },
      text: {
      item: [`One dollar and eighty-seven cents. That was all. And sixty cents of it
      was in pennies. Pennies saved one and two at a time by bulldozing the
      grocer and the vegetable man and the butcher until one’s cheeks burned
      with the silent imputation of parsimony that such close dealing
      implied. Three times Della counted it. One dollar and eighty-seven
      cents. And the next day would be Christmas.
      
      There was clearly nothing to do but flop down on the shabby little
      couch and howl. So Della did it. Which instigates the moral reflection
      that life is made up of sobs, sniffles, and smiles, with sniffles
      predominating.
      
      While the mistress of the home is gradually subsiding from the first
      stage to the second, take a look at the home. A furnished flat at $8
      per week. It did not exactly beggar description, but it certainly had
      that word on the lookout for the mendicancy squad.
      
      In the vestibule below was a letter-box into which no letter would go,
      and an electric button from which no mortal finger could coax a ring.
      Also appertaining thereunto was a card bearing the name “Mr. James
      Dillingham Young.”
      
      The “Dillingham” had been flung to the breeze during a former period of
      prosperity when its possessor was being paid $30 per week. Now, when
      the income was shrunk to $20, though, they were thinking seriously of
      contracting to a modest and unassuming D. But whenever Mr. James
      Dillingham Young came home and reached his flat above he was called
      “Jim” and greatly hugged by Mrs. James Dillingham Young, already
      introduced to you as Della. Which is all very good.
      
      Della finished her cry and attended to her cheeks with the powder rag.
      She stood by the window and looked out dully at a gray cat walking a
      gray fence in a gray backyard. Tomorrow would be Christmas Day, and she
      had only $1.87 with which to buy Jim a present. She had been saving
      every penny she could for months, with this result. Twenty dollars a
      week doesn’t go far. Expenses had been greater than she had calculated.
      They always are. Only $1.87 to buy a present for Jim. Her Jim. Many a
      happy hour she had spent planning for something nice for him. Something
      fine and rare and sterling—something just a little bit near to being
      worthy of the honor of being owned by Jim.
      
      There was a pier glass between the windows of the room. Perhaps you
      have seen a pier glass in an $8 flat. A very thin and very agile person
      may, by observing his reflection in a rapid sequence of longitudinal
      strips, obtain a fairly accurate conception of his looks. Della, being
      slender, had mastered the art.
      
      Suddenly she whirled from the window and stood before the glass. Her
      eyes were shining brilliantly, but her face had lost its color within
      twenty seconds. Rapidly she pulled down her hair and let it fall to its
      full length.
      
      Now, there were two possessions of the James Dillingham Youngs in which
      they both took a mighty pride. One was Jim’s gold watch that had been
      his father’s and his grandfather’s. The other was Della’s hair. Had the
      queen of Sheba lived in the flat across the airshaft, Della would have
      let her hair hang out the window some day to dry just to depreciate Her
      Majesty’s jewels and gifts. Had King Solomon been the janitor, with all
      his treasures piled up in the basement, Jim would have pulled out his
      watch every time he passed, just to see him pluck at his beard from
      envy.
      
      So now Della’s beautiful hair fell about her rippling and shining like
      a cascade of brown waters. It reached below her knee and made itself
      almost a garment for her. And then she did it up again nervously and
      quickly. Once she faltered for a minute and stood still while a tear or
      two splashed on the worn red carpet.
      
      On went her old brown jacket; on went her old brown hat. With a whirl
      of skirts and with the brilliant sparkle still in her eyes, she
      fluttered out the door and down the stairs to the street.
      
      Where she stopped the sign read: “Mme. Sofronie. Hair Goods of All
      Kinds.” One flight up Della ran, and collected herself, panting.
      Madame, large, too white, chilly, hardly looked the “Sofronie.”
      
      “Will you buy my hair?” asked Della.
      
      “I buy hair,” said Madame. “Take yer hat off and let’s have a sight at
      the looks of it.”
      
      Down rippled the brown cascade.
      
      “Twenty dollars,” said Madame, lifting the mass with a practised hand.
      
      “Give it to me quick,” said Della.
      
      Oh, and the next two hours tripped by on rosy wings. Forget the hashed
      metaphor. She was ransacking the stores for Jim’s present.
      
      She found it at last. It surely had been made for Jim and no one else.
      There was no other like it in any of the stores, and she had turned all
      of them inside out. It was a platinum fob chain simple and chaste in
      design, properly proclaiming its value by substance alone and not by
      meretricious ornamentation—as all good things should do. It was even
      worthy of The Watch. As soon as she saw it she knew that it must be
      Jim’s. It was like him. Quietness and value—the description applied to
      both. Twenty-one dollars they took from her for it, and she hurried
      home with the 87 cents. With that chain on his watch Jim might be
      properly anxious about the time in any company. Grand as the watch was,
      he sometimes looked at it on the sly on account of the old leather
      strap that he used in place of a chain.
      
      When Della reached home her intoxication gave way a little to prudence
      and reason. She got out her curling irons and lighted the gas and went
      to work repairing the ravages made by generosity added to love. Which
      is always a tremendous task, dear friends—a mammoth task.
      
      Within forty minutes her head was covered with tiny, close-lying curls
      that made her look wonderfully like a truant schoolboy. She looked at
      her reflection in the mirror long, carefully, and critically.
      
      “If Jim doesn’t kill me,” she said to herself, “before he takes a
      second look at me, he’ll say I look like a Coney Island chorus girl.
      But what could I do—oh! what could I do with a dollar and eighty-seven
      cents?”
      
      At 7 o’clock the coffee was made and the frying-pan was on the back of
      the stove hot and ready to cook the chops.
      
      Jim was never late. Della doubled the fob chain in her hand and sat on
      the corner of the table near the door that he always entered. Then she
      heard his step on the stair away down on the first flight, and she
      turned white for just a moment. She had a habit of saying a little
      silent prayer about the simplest everyday things, and now she
      whispered: “Please God, make him think I am still pretty.”
      
      The door opened and Jim stepped in and closed it. He looked thin and
      very serious. Poor fellow, he was only twenty-two—and to be burdened
      with a family! He needed a new overcoat and he was without gloves.
      
      Jim stopped inside the door, as immovable as a setter at the scent of
      quail. His eyes were fixed upon Della, and there was an expression in
      them that she could not read, and it terrified her. It was not anger,
      nor surprise, nor disapproval, nor horror, nor any of the sentiments
      that she had been prepared for. He simply stared at her fixedly with
      that peculiar expression on his face.
      
      Della wriggled off the table and went for him.
      
      “Jim, darling,” she cried, “don’t look at me that way. I had my hair
      cut off and sold because I couldn’t have lived through Christmas
      without giving you a present. It’ll grow out again—you won’t mind, will
      you? I just had to do it. My hair grows awfully fast. Say ‘Merry
      Christmas!’ Jim, and let’s be happy. You don’t know what a nice—what a
      beautiful, nice gift I’ve got for you.”
      
      “You’ve cut off your hair?” asked Jim, laboriously, as if he had not
      arrived at that patent fact yet even after the hardest mental labor.
      
      “Cut it off and sold it,” said Della. “Don’t you like me just as well,
      anyhow? I’m me without my hair, ain’t I?”
      
      Jim looked about the room curiously.
      
      “You say your hair is gone?” he said, with an air almost of idiocy.
      
      “You needn’t look for it,” said Della. “It’s sold, I tell you—sold and
      gone, too. It’s Christmas Eve, boy. Be good to me, for it went for you.
      Maybe the hairs of my head were numbered,” she went on with sudden
      serious sweetness, “but nobody could ever count my love for you. Shall
      I put the chops on, Jim?”
      
      Out of his trance Jim seemed quickly to wake. He enfolded his Della.
      For ten seconds let us regard with discreet scrutiny some
      inconsequential object in the other direction. Eight dollars a week or
      a million a year—what is the difference? A mathematician or a wit would
      give you the wrong answer. The magi brought valuable gifts, but that
      was not among them. This dark assertion will be illuminated later on.
      
      Jim drew a package from his overcoat pocket and threw it upon the
      table.
      
      “Don’t make any mistake, Dell,” he said, “about me. I don’t think
      there’s anything in the way of a haircut or a shave or a shampoo that
      could make me like my girl any less. But if you’ll unwrap that package
      you may see why you had me going a while at first.”
      
      White fingers and nimble tore at the string and paper. And then an
      ecstatic scream of joy; and then, alas! a quick feminine change to
      hysterical tears and wails, necessitating the immediate employment of
      all the comforting powers of the lord of the flat.
      
      For there lay The Combs—the set of combs, side and back, that Della had
      worshipped long in a Broadway window. Beautiful combs, pure tortoise
      shell, with jewelled rims—just the shade to wear in the beautiful
      vanished hair. They were expensive combs, she knew, and her heart had
      simply craved and yearned over them without the least hope of
      possession. And now, they were hers, but the tresses that should have
      adorned the coveted adornments were gone.
      
      But she hugged them to her bosom, and at length she was able to look up
      with dim eyes and a smile and say: “My hair grows so fast, Jim!”
      
      And then Della leaped up like a little singed cat and cried, “Oh, oh!”
      
      Jim had not yet seen his beautiful present. She held it out to him
      eagerly upon her open palm. The dull precious metal seemed to flash
      with a reflection of her bright and ardent spirit.
      
      “Isn’t it a dandy, Jim? I hunted all over town to find it. You’ll have
      to look at the time a hundred times a day now. Give me your watch. I
      want to see how it looks on it.”
      
      Instead of obeying, Jim tumbled down on the couch and put his hands
      under the back of his head and smiled.
      
      “Dell,” said he, “let’s put our Christmas presents away and keep ’em a
      while. They’re too nice to use just at present. I sold the watch to get
      the money to buy your combs. And now suppose you put the chops on.”
      
      The magi, as you know, were wise men—wonderfully wise men—who brought
      gifts to the Babe in the manger. They invented the art of giving
      Christmas presents. Being wise, their gifts were no doubt wise ones,
      possibly bearing the privilege of exchange in case of duplication. And
      here I have lamely related to you the uneventful chronicle of two
      foolish children in a flat who most unwisely sacrificed for each other
      the greatest treasures of their house. But in a last word to the wise
      of these days let it be said that of all who give gifts these two were
      the wisest. Of all who give and receive gifts, such as they are wisest.
      Everywhere they are wisest. They are the magi.`]
      },
    }

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
  mockQuery(gql, arg2, arg3, arg4){
    let { num, parmObj, flag } = organizeArguements(arg2, arg3, arg4);
    console.log('entered mockQuery');
    console.log(num, parmObj, flag);
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
    
    } else if(flag === 'error'){
      return {error: 'Response not successful: Received status code 400 (sent by mockQuery)'}
    }

    return resultObj

    //INPUT: 3 arguements
    //RETURNS: and object with the 3 arguements
    function organizeArguements(arg2, arg3, arg4){
      const allArgs = [];
      if(arg2) allArgs.push(arg2);
      if(arg3) allArgs.push(arg3);
      if(arg4) allArgs.push(arg4);
  
      const result = {parmObj: undefined, num: undefined, flag: undefined};
      allArgs.forEach(el => {
        if(!el) return;
        if(typeof el === 'object') result.parmObj = el;
        if(typeof el === 'number') result.num = el;
        if(typeof el === 'string') result.flag = el
      })
      if (result.num === undefined) result.num = 1;
      return result;
    }

  }

  

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
    const mockPop = document.createElement('div');
    mockPop.id = 'mockPop';
    mockPop.setAttribute("style", "width: 100%; height: 100%; position: fixed; top: 0px; left: 0px; background-color: rgba(248, 220, 242); display: grid; grid-template-rows: 2% 1fr 2%;")
    
    //Creating the elements within the dom.
    const popUp = document.createElement('div');
    popUp.id = 'popUp';
    popUp.setAttribute("style", "background-color: white; width: 60%; max-width: 650px; margin: 1% auto 0 auto; border: solid; border-color: black; border-radius: 5%; border-width: thin; box-shadow: 10px 10px 25px rgb(216, 211, 211); min-width: 600px; grid-row: 2; overflow: scroll;");
    mockPop.appendChild(popUp);

    const img = document.createElement('img');
    img.setAttribute('src', 'https://lh3.googleusercontent.com/pw/AL9nZEUkLCUpyvHYfImxG2AUJNgUq9oWBXGTAAeEfIYfrPr-PzxBIsLZHZNvm73sAgI5CvuE1asivtTsbbtNsJl3JgCKEsc7mHeqT3hyK8Okd4YC6y0zfVR1ILSs5lXLDKDcLZ2e5TIXUKzd2psWl_XPr0x5=w1522-h403-no');
    img.setAttribute('style', "width: 100%; padding: 5% 10% 0 10%;");
    popUp.appendChild(img);

    const p = document.createElement('p');
    p.innerHTML = "Hi!  Thanks for using Apollo's Library mockQuery! <br>We have prefilled the mock data fields with text. <br>Replace any of the prefilled input boxes with your personalized mock data  <br>and then click submit. <br> <br>You can re-run the mockQuery function without the 'P' tag  <br>and your information will be retained. <br>If you have any questions, please check out our docs.  Query on!"
    p.setAttribute('style', "padding-left: 10%; padding-right: 10%; text-align: center; font-size: 1em; color:rgb(49, 49, 49);")
    popUp.appendChild(p);

    const ul = document.createElement('ul');
    ul.id = 'mockList';
    ul.setAttribute('style', "list-style-type: none; margin: 0; padding: 4% 10% 1% 10%; font-size: 1.25em;");
    popUp.appendChild(ul);

    //grabing the object within the query search                ///WILL THIS WORK WITH ALL CODE?
    let queryObject =  obj.data[Object.keys(obj.data)[0]][0]; 

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
   updateCacheWithUserInput(cache, files){
    console.log('entered updateCacheWithUserInput');
    console.log({cache});

    const newArr = document.getElementById('mockList').childNodes;  //gather all the li elements
    newArr.forEach(el => {
      const theID = el.id.slice(3)  //grabs their id
      let newVal = document.getElementById(`${theID}`).value;  //grabs the input fields
      console.log({newVal})
      if(newVal.length){
        console.log(newVal.slice(1));
        if(newVal[0] === "~") newVal = grabUserInputAndUpdateCache(newVal.slice(1))
        console.log({newVal})
        cache[theID] = newVal || cache[theID] 
        console.log(cache);
      }      
    });
    return cache;

    function grabUserInputAndUpdateCache(entry){
      console.log('entered grabUserInputAndUpdateCache');
      const e = entry.toLowerCase();
      let results;

      if(['int', 'integer', 'num', 'number'].includes(e)) results = grabAndUpdateDataFiles('int', files);
      else if(e === 'float') results = grabAndUpdateDataFiles('float', files);
      else if(e === 'boolean') results = grabAndUpdateDataFiles('boolean', files);
      else if(e.slice(0, 4) === 'text') results = grabAndUpdateDataFiles(parseInt(e.slice(4).replace(/\s+/g, '')), files);
      else if(e === 'address') results = grabAndUpdateDataFiles('address', files);
      else if(['phone', 'cell', 'telephone'].includes(e)) results = grabAndUpdateDataFiles('phone', files);
      else if (['photo', 'picture', 'pic', 'thumbnail', 'image', 'img'].includes(e)) results = grabAndUpdateDataFiles('photo', files);
      console.log({results});
      return results
    }

    function grabAndUpdateDataFiles(input, files){
      console.log('entered grabAndUpdateDateFiles', input);
      if(input === 'float' || input === 'int'){
        console.log('entered number section', cache, files);
        console.log('what is this', files[`${input}`])
        files[`${input}`] += 1;
        return files[`${input}`]

      } else if(typeof input === 'number'){
        console.log(input);
        const newString = files.text.item[0].slice(0, input);
        console.log({newString});
        return newString;
      
      } else if(input === 'boolean'){
        return !files.boolean
      
      } else {
        const currObj = files[`${input}`]
        // currObj.index = (currObj.index === currObj.item.length) ? 0 : currObj.index + 1;
        // console.log('result is this photo', input, files[`${input}`].item[currObj.index], currObj.index)
        return files[`${input}`].item[currObj.index++];
      }
    }
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
    this.updateCacheWithUserInput(this.cache, this.dataFiles);  
    const newObj = this.updateObjWithCache(obj, this.cache)  

    sessionStorage.setItem('cache', JSON.stringify(this.cache));
    document.getElementById('mockPop').remove();
    console.log('end', newObj);

    return newObj
  }

} //end of class

const al = new Apollos_Library_Class();
export default al;

