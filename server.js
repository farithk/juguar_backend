const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const axios = require('axios');

const app = express();

const cors = require('cors');

//middlewares
app.use(express.json());


app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


let user;

getUser();
async function getUser() {
  try {
    const response = await axios.get('https://torre.bio/api/bios/farithcomas');
    console.log(response.data);
    user = response.data;
  } catch (error) {
    console.error(error);
  }
}

app.get('/', (req, res) => {
  console.log("call from front");
  //console.log(user);
  res.send(user);
});

app.listen(3030);
