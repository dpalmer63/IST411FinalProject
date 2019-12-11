const fs = require('fs');
const express = require('express');
const app = express();
const port = 3000;

//var cors = require('cors');
//app.use(cors());

let apiList = [
  {
    src: 'https://www.lions-pride.com/assets/product_images/3894.jpg',
    name: 'Penn State College of IST T-Shirt',
    price: '20.00'
  },
  {
    src: 'https://images.nittanyweb.com/scs/images/products/15/origintermal/penn_state_university_smeal_college_of_business_t_shirt_nittany_lions_psu_p9118.jpg',
    name: 'Penn State University Smeal College of Business T-Shirt',
    price: '13.49'
  }
];

fs.writeFile('server.json', JSON.stringify(apiList), err => {
  if (err) throw err;
  console.log('Saved file');
});

app.get('/getImg', (req, res) => {
  let apiData = fs.readFileSync("server.json");
  let apiInfo = JSON.parse(apiData);

  res.send("test");
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}!`);
});
