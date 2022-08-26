var express = require('express');
var router = express.Router();
const https = require('https');
const axios = require('axios').default;

var city = "";
var weatherUrl = "https://api.openweathermap.org/data/2.5/weather";
const countryUrl = 'https://countriesnow.space/api/v0.1/countries/';

/* GET home page. */
router.get('/', function(req, res, next) {

  axios({
    method: 'GET',
    header: {},
    url: countryUrl,
    data: {}
  })
  .then( (resp) => {
    var responseData = resp.data.data;

    var countryData = responseData.map(item=> item.country);
    var flagData = responseData.map(item => item.iso2);
    
    country = countryData;
    
    res.render('index', {title: 'ForeCasted', countries: country, flags : flagData});
  })
  .catch( (err) => {
    console.log(err);
  })
});

router.post('/', function(req, res, next){
 
  city = (req.body.citySelected);
  flag = (req.body.countryFlag);

  console.log("CitySelected is :"+city);
  console.log('Country flag is: "+flag');

  if (city) {
    axios({
      method: 'GET',
      header: {},
      url: weatherUrl+"?q="+city+","+flag+"&appid="+process.env.API_KEY,
      data: {}
    })
    .then( (resp) => {
      var responseData = resp.data;
  
      console.log(responseData);
      
      res.send({ valid : true, weatherData : responseData });
    })
    .catch( (err) => {
      console.log(err);
    })
  }

  else res.send( { valid : false });

});

module.exports = router;
