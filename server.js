const express = require('express');
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


app.get('/', (req, res) => {
  //console.log("call from front");
  //console.log(user);
  res.send("testing");
});

app.get('/countries', async (req, res) => {
  console.log(req.body);
  try{
    const response = await axios.get(`https://restcountries.eu/rest/v2/all`);
      res.send(response.data);
  } catch (error) {
    console.error(error);
  }
});

app.post('/countries', async (req, res) => {
  console.log(req.body);
  try{
    const response = await axios.get(`https://restcountries.eu/rest/v2/name/${req.body.name}`);
      res.send(response.data);
  } catch (error) {
    console.error(error);
  }
});

app.listen(process.env.PORT || 3030, () => {
  console.log("Server Listening on Port 3030");
});
