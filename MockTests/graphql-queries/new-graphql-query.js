const { gql } = require('apollo-graphql');

const dndChar = gql `
  query class {
    name:
    classes {
      name
      hit_die
      spellcasting {
        spellcasting_ability {
          name
        }
      }
    }
  }
`

module.exports = dndChar;






