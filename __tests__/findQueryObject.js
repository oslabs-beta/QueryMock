const findQueryObject = require('../mockData/findQueryObject');

describe('findQueryObject / test', () =>{

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

  it('should return an object', () => {
    expect(typeof findQueryObject(newObj)).toBe('object');
    expect(typeof findQueryObject(newObjNoArray)).toBe('object');
  })

  it('should contain the exact same key/value pairs', () => {
    expect(findQueryObject(newObj)).toMatchObject({
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
    });
    expect(findQueryObject(newObjNoArray)).toMatchObject({
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
    })
  })


})