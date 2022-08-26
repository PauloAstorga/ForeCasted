const citiesUrl = 'https://countriesnow.space/api/v0.1/countries/cities';

async function getCity(country) {

    var cities = fetch(citiesUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( {country : country} )
    })
    .then(response => response.json())
    .then(data => setCities(data.data) )
    .catch(err => console.log("Err is: "+err));
}

function selector() {
    var sel = document.getElementById('countrySelect');
    var value = sel.value;
    var select = sel.options[sel.selectedIndex].text;
    getCity(select);
}

function setCities(data) {
    var selectCities = document.getElementById('citySelect');
    selectCities.options.length = 0;
    data.forEach( el => {
        let option = document.createElement('option');
        option.textContent = el;
        selectCities.appendChild(option);
    });
}