const fs = require('fs');
const express = require('express');
const app = express();
const port = 3000;

var cors = require('cors');
app.use(cors());

let apiList = [
  {
    src: 'https://www.lions-pride.com/assets/product_images/3894.jpg',
    name: 'Penn State College of IST T-Shirt',
    price: '20.00'
  },
  {
    src: 'https://images.nittanyweb.com/scs/images/products/15/larger/penn_state_t_shirt_arching_over_lion_head_navy_nittany_lions_psu_003psu_p3814.jpg',
    name: 'Penn State T-Shirt Arching Over Lion Head Navy',
    price: '10.79'
  },
  {
    src: 'https://pbs.twimg.com/profile_images/573584373556998144/1dQ7CT8z.png',
    name: 'Framed Portrait of Professor Jeffrey Rimland',
    price: '599.79'
  },
  {
    src: 'https://ih0.redbubble.net/image.935569611.8303/sss,small,wide_portrait,750x1000.u1.jpg',
    name: `we're Sticker`,
    price: '2.04'
  }
];

fs.writeFile('server.json', JSON.stringify(apiList), err => {
  if (err) throw err;
  console.log('Saved file');
});

app.get('/getAll', (req, res) => {
  let apiData = fs.readFileSync("server.json");
  let apiInfo = JSON.parse(apiData);

  res.send(apiInfo);
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}!`);
});
