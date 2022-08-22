var forecard = document.getElementById('card-container');

forecard.style.display = 'none';

async function getWeather() {
    var city = document.getElementById('citySelect').value;
    var weather = fetch('/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( {citySelected : city} )
    })
    .then(response => response.json())
    .then(data => data.valid? showWeather(data.weatherData) : showError() )
    .catch(err => console.log("Err is: "+err));
}

