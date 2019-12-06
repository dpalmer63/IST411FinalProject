const fs = require('fs');
const express = require('express');
const app = express();
const port = 3000;

//var cors = require('cors');
//app.use(cors());

let resList = [
  {
    image: 'product1',
    name: 'Penn State College of IST T-Shirt',
    price: '20.00'
  },
  {
    image: 'product2',
    name: 'Penn State University Smeal College of Business T-Shirt',
    price: '13.49'
  }
];
fs.writeFile('server.json', JSON.stringify(resList), err => {
  if (err) throw err;
  console.log('Saved file');
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}!`);
});
