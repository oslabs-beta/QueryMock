



// async function saveFileInDocumentsFolder(data) {
//   const path = __dirname + '/mockData.js';
//   RNFS.writeFile(path, data, 'uft8')
//     .then(() => console.log('filewritten'))
//     .catch(err => console.error(err.message));
// }

const content = {
    first: 'one',
    second: 'two',
    third: 'three',
    fourth: 'four'
}

console.log(`${__dirname}/mockData.js`);

// function shareMessage() {
//   const path = `${__dirname}/mockData.js`;
//   RNFS.writeFile(path, content, 'utf8')
//     .then(success => {
//       console.log('it was made', success)
//       })
//     .catch(err => console.error(err.message));
// }


// export default shareMessage

console.log('it ran');