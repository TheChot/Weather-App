getLocation();
//var x = document.getElementById("Temp").textContent;
var Temp = document.getElementById("Temp");
var City = document.getElementById("City");
var Sky = document.getElementById("Sky");
var Checkbox = document.getElementById("TempChanger");
var lat;
var lon;
var weatherCollect;
var DegreeC;
var DegreeF;
var Celsius;
var Fahrenheit;

//console.log(x);

// document.addEventListener('DOMContentLoaded', function ()
// {
//   var checkbox = document.querySelector('input[type="checkbox"]');
//   // if (checkbox.checked)
//   // {
//   //   Temp.innerHTML = ((Temp * 9)/5) + 32;
//   // } else
//   // {
//   //   Temp.innerHTML = ((Temp - 32) * 5)/9;
//   // }
//
//   checkbox.addEventListener('change', function ()
//   {
//     if (checkbox.checked)
//     {
//       var z = ((Temp * 9)/5) + 32;
//       Temp.innerHTML = z;
//       console.log(z);
//       console.log('Checked');
//     } else
//     {
//       var y = ((Temp - 32) * 5)/9;
//       Temp.innerHTML = y;
//       console.log(y);
//       console.log('Not checked');
//     }
//   });
// });
function getLocation()
{
    if (navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else
    {
        City.innerHTML = "not supported";
    }
}
function showPosition(position)
{
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    console.log(lat, lon);
}

function getWeather()
{
    var Kelvins;
    var wConditions = document.getElementById("Condition");
    //gets weather data from api based on there position
    console.log("jquery loaded");
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=afe95526ff604e223ab6b2ef98541b66",function(json){
        var weatherData = JSON.stringify(json);
        weatherCollect = JSON.parse(weatherData);
        //replaces text in the item
        City.innerHTML = weatherCollect.name;
        Sky.innerHTML = weatherCollect.weather[0].description;
        Kelvins = weatherCollect.main.temp;
        Celsius = Kelvins - 273.15;
        Fahrenheit = Kelvins - 459.67;
        if (Checkbox.checked == true)
        {
          Temp.innerHTML = Math.round(Celsius) + " C";
        } else
        {
          Temp.innerHTML = Math.round(Fahrenheit) + " F";
        }
        switch (weatherCollect.weather[0].description)
        {
          case "clear sky":
            wConditions.src = "http://openweathermap.org/img/w/01d.png"
            console.log('clear sky')
            break;
          case "few clouds":
            wConditions.src = "http://openweathermap.org/img/w/02d.png"
            console.log('few clouds')
            break;
          case "scattered clouds":
            wConditions.src = "http://openweathermap.org/img/w/03d.png"
            console.log('scattered clouds')
            break;
          case "broken clouds":
            wConditions.src = "http://openweathermap.org/img/w/04d.png"
            console.log('broken clouds')
            break;
          case "shower rain":
            wConditions.src = "http://openweathermap.org/img/w/09d.png"
            console.log('shower rain')
            break;
          case "rain":
            wConditions.src = "http://openweathermap.org/img/w/10d.png"
            console.log('rain')
            break;
          case "thunderstorm":
            wConditions.src = "http://openweathermap.org/img/w/11d.png"
            console.log('thunderstorm')
            break;
          case "snow":
            wConditions = "http://openweathermap.org/img/w/13d.png"
            console.log('snow')
            break;
          case "mist":
            wConditions = "http://openweathermap.org/img/w/50d.png"
            console.log('mist')
            break;

          default:
            console.log("no conditions available")

        }

        // Temp.innerHTML = Kelvins;
        // Temp.innerHTML = Math.round(weatherCollect.main.temp - 273.15) + " C";
        // console.log(i);
        console.log(weatherData);
        console.log(weatherCollect);
        //City.innerHTML = weatherData.sys.name;
        //console.log(JSON.stringify(json));
    });
    // console.log(Fahrenheit);
    // console.log(Celsius);
    // City.innerHTML = weatherCollect.name;
}

Checkbox.addEventListener('change', function()
{
  if (Temp.innerHTML != 'Temp')
  {
    if (Checkbox.checked)
    {
      Temp.innerHTML = Math.round(Celsius) + " C";
      console.log(Fahrenheit);
    }else
    {
      Temp.innerHTML = Math.round(Fahrenheit) + " F";
      console.log(Celsius);
    }
  }
})
