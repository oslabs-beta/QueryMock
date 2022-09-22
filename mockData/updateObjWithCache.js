//INPUT -> obj: Object
//INPUT -> cache: Object
//OUTPUT: null
//Description: iterates over the inputed object -> checks if newer values are in cache, updates and then retruns the obj.
 function updateObjWithCache(obj, cache){
  
  if(JSON.stringify(cache) === '{}'){
    return obj;
  }else{
    iterateObj(obj, cache);
  }

  function iterateObj(obj, cache){
    for(const [key, value] of Object.entries(obj)){

      if(Array.isArray(value)){
        iterateObj(value[0], cache);
        
      }else if(typeof value === 'string' || typeof value === 'number') {
        if(cache[key]){
          obj[key] = cache[key];

        }else{
          obj[key] = obj[key];
        }
      } else{
        iterateObj(value, cache)
      }
    }
  }
};

export default updateObjWithCache;


// let newObj = {
//   "data": {
//       "locations": [
//           {
//               "id": "id_01",
//               "title": "title_01",
//               "photo": "photo_01",
//               "name": "name_01",
//               "description": "description_01",
//               "address": "address_01",
//               "phone": "phone_01",
//               "poster": {
//                   "person": "person_01",
//                   "age": "age_01",
//                   "thumbail": "thumbail_01"
//               }
//           },
//           {
//               "id": "id_01",
//               "title": "title_01",
//               "photo": "photo_01",
//               "name": "name_01",
//               "description": "description_01",
//               "address": "address_01",
//               "phone": "phone_01",
//               "poster": {
//                   "person": "person_01",
//                   "age": "age_01",
//                   "thumbail": "thumbail_01"
//               }
//           },
//           {
//               "id": "id_01",
//               "title": "title_01",
//               "photo": "photo_01",
//               "name": "name_01",
//               "description": "description_01",
//               "address": "address_01",
//               "phone": "phone_01",
//               "poster": {
//                   "person": "person_01",
//                   "age": "age_01",
//                   "thumbail": "thumbail_01"
//               }
//           },
//           {
//               "id": "id_01",
//               "title": "title_01",
//               "photo": "photo_01",
//               "name": "name_01",
//               "description": "description_01",
//               "address": "address_01",
//               "phone": "phone_01",
//               "poster": {
//                   "person": "person_01",
//                   "age": "age_01",
//                   "thumbail": "thumbail_01"
//               }
//           }
//       ]
//   }
// }

// let newCache = {
//   "name": "Tim",
//   "title": "The best Title Ever",
//   "photo": "https://upload.wikimedia.org/wikipedia/commons/3/36/Vassily_Kandinsky%2C_1912_-_Improvisation_27%2C_Garden_of_Love_II.jpg",
//   "description": "One dollar and eighty-seven cents.",
//   "address": "2300 Oracle Way Austin, TX 78741",
//   "phone": "(737)867-1000",
//   "person": "Baker99",
//   "age": 128,
//   "thumbail": "https://upload.wikimedia.org/wikipedia/commons/6/63/Robert_Delaunay%2C_1913%2C_Premier_Disque%2C_134_cm%2C_52.7_inches%2C_Private_collection.jpg"
// }

// updateObjWithCache(newObj, newCache)