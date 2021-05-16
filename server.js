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
  console.log("call from front");
  //console.log(user);
  res.send("testing");
});

app.post('/user', async (req, res) => {
  //console.log("call from front");
  try{
    const response = await axios.get(`https://torre.bio/api/bios/${req.body.user}`);
      res.send(response.data);
  } catch (error) {
    //console.error(error);
  }
});

app.post('/connection', async (req, res) => {
  console.log(req.body);
  try{
    const response = await axios.get(`https://torre.bio/api/bios/${req.body.user}/jobs/connections`);
      res.send(response.data);
  } catch (error) {
    console.error(error);
  }
});

app.post('/search/people', async (req, res) => {
  console.log(req.body);
  try{
    const response = await axios.post(`https://search.torre.co/people/_search/?size=3`, req.body);
      res.send(response.data);
  } catch (error) {
    console.error(error);
  }
});

app.post('/search/people/full', async (req, res) => {
  console.log(req.body);
  try{
    const response = await axios.post(`https://search.torre.co/people/_search/?size=100`, req.body);
      res.send(response.data);
  } catch (error) {
    console.error(error);
  }
});

app.post('/search/job', async (req, res) => {
  console.log(req.body);
  try{
    const response = await axios.post(`https://search.torre.co/opportunities/_search?size=3`, req.body);
      res.send(response.data);
  } catch (error) {
    console.error(error);
  }
});

app.post('/search/job/full', async (req, res) => {
  console.log(req.body);
  try{
    const response = await axios.post(`https://search.torre.co/opportunities/_search?size=100`, req.body);
      res.send(response.data);
  } catch (error) {
    console.error(error);
  }
});

app.post('/search/job/id', async (req, res) => {
  console.log(req.body);
  try{
    const response = await axios.get(`https://torre.co/api/opportunities/${req.body.id}`);
      res.send(response.data);
  } catch (error) {
    console.error(error);
  }
});

app.listen(process.env.PORT || 3030, () => {
  console.log("Server Listening on Port 3030");
});
