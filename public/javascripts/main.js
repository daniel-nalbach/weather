$(document).ready(function() {
  var tempC = Weather.main.temp - 273.15;
  var tempF = Math.floor((tempC * (9/5)) + 32);
  $('header h1').text(Weather.name);
  $('header h3').text(Weather.sys.country);
  $('main .current .status').text(Weather.weather[0].main);
  $('main .current .temp').text(tempF + "°");
  $('main .current .humidity').text(Weather.main.humidity + "%");
  $('main .current .windSpeed').text(Weather.wind.speed);
  $('main .current .windDirection').text(Weather.wind.deg);

  if (Weather.weather[0].main === "Clear") {
    $('main .current .card').addClass('clear');
  }
});
