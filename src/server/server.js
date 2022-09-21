const express = require('express');
const app = express();
const PORT = 4000;
const path = require('path');
const fs = require('fs');


app.use(express.json());
// app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static('public'));


app.get('/', (req, res) => {  
  console.log('someone came to our page again');
  console.log(path.join(__dirname, '../../dist/index.html'));
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, '../../dist/index.html'));
});


app.use((req, res) => res.status(404).send('404 Error'));

//global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: {err: 'An error occurred'},
  };
  const errorObj = Object.assign({}, defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
});


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
