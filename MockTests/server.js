const express = require('express');
const app = express();
const PORT = 2022;
const path = require('path');

const createNewSchema = require('./graphql-queries/graphql-query.js')

app.use(express.json());

app.post('/createNewSchema', createNewSchema.createdSchema, (req, res) => {
  console.log('hi there');
  console.log('what is in our locals :', res.locals.query);
  return res.status(200).send(res.locals.query);
});

app.get('/', function(req, res) {
    return res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
