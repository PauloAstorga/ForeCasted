var express = require('express');
var router = express.Router();
const https = require('https');
const axios = require('axios').default;

const url = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid="+process.env.API_KEY;
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
    
    country = countryData;
    
    res.render('index', {title: 'ForecastVIP', countries: country});
  })
  .catch( (err) => {
    console.log(err);
  })
});

router.post('/', function(req, res, next){
 


});

module.exports = router;
