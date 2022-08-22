
function showError() {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!'
      });
}

function showWeather(weatherData) {
    var cardicard = document.getElementById('card-container');
    document.getElementById('temperature').textContent = (weatherData.main.temp - 273.15).toFixed(2) + ' °C';
    //changeWeather(weatherData.weather[0].main);
    document.getElementById('summary').textContent = weatherData.weather[0].main;
    var dateCard = document.getElementById('date');
    const date = new Date();
    dateCard.textContent = date.toISOString().substring(0, 10);
    cardicard.style.display = 'revert';
}