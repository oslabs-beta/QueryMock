const findQueryName = require('../mockData/findQueryName');


describe('findQueryName\ test', () => { 
  const newObj ={
        "data": {
            "locations": [
                {
                    "id": "id_01",
                    "title": "title_01",
                    "picture": "picture_01",
                    "name": "name_01",
                    "description": "description_01",
                    "address": "address_01",
                    "phone": "phone_01",
                    "poster": {
                        "username": "username_01",
                        "age": "age_01",
                        "thumbnail": "thumbnail_01"
                    }
                }
            ]
        }
  }

  const newObjNoArray ={
    "data": {
        "locations":
        {
            "id": "id_01",
            "title": "title_01",
            "picture": "picture_01",
            "name": "name_01",
            "description": "description_01",
            "address": "address_01",
            "phone": "phone_01",
            "poster": {
                "username": "username_01",
                "age": "age_01",
                "thumbnail": "thumbnail_01"
            }
        }
    }
 }
 

  it('should return a string', () => {
    expect(findQueryName(newObj)).toEqual('locations');
  })

  it('should return a string whether it contains an object or an array', () => {
    expect(findQueryName(newObj)).toBe('locations');
    expect(findQueryName(newObjNoArray)).toBe('locations');
  })

});



