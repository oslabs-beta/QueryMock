const insertEntriesIntoObject = require('../mockData/insertEntriesIntoObject');

describe('insertEntriesIntoObject / test', () => {
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
  const result = insertEntriesIntoObject(newObj, {title: 'a'});


  it('updates an entry that already exists', () => {
    expect(insertEntriesIntoObject({a:'b'}, {a:'a'})).toMatchObject({a:'a'});
  })

  it('updates entery that is deeply nexted.', () => {
    expect(result.data.locations[0].title).toEqual('a');
  })

  it('does not enter an entry that doesn not already exist', () => {
    expect(insertEntriesIntoObject({a:'a'}, {b:'b'})).toBe({a:'a'});
  })

})