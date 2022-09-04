const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');

const mocks = {
  Query: () => ({
    tracksForHome: () => [...new Array(9)],
  }),
  Track: () => ({
    id: () => 'track_01',
    title: () => 'Astro Kitty, Space Explorer',
    author: () => {
      return {
        name: 'Grumpy Cat',
        photo:
          'https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg',
      };
    },
    thumbnail: () =>
      'https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg',
    length: () => 1210,
    modulesCount: () => 6,
  }),
};

const myMocks = {
  Query: () => ({
    tracksForHome: () => [...new Array(20)],
  }),
  Track: () => ({
    id: () => 'id01',
    title: () => 'title_01',
    author: () => {
      return {
        name: 'name_01',
        photo: 'photo_01'
          // 'https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg',
      };
    },
    thumbnail: () => 'thumbnail_01',
      // 'https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg',
    length: () => '02', //1210,
    modulesCount: () => '03' //6,
  }),
};


const server = new ApolloServer({
  typeDefs,
  mocks: myMocks,
});

server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at http://localhost:4000
`);
});
