var cityFormEl = document.querySelector("#form-submit");
var cityInputEl = document.querySelector("#city-input");
// var weatherContainer = document.querySelector("#display-city");
var cityTempContainer = document.querySelector(".temp")
var spanUv = document.querySelector("#uv-value")

var formSubmitHandler = function(event){
    // event.preventDefault stops the page from being refreshed
    event.preventDefault();
    // console.log(cityInputEl.value)

    // this variable collects the users input in the search bar
    var city = cityInputEl.value.trim();
    
    // This conditional statemtent is 
    if (city) {
        getCityWeather(city);

        // this clears the old content
        cityTempContainer.textContent = "";
        cityInputEl.value = "";
    }else {
        alert("please enter a valid city")
    }
};

var getCityWeather = function(city) {

    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=4fce90cadf9eba29dd340628ab5664dc"
    
    //Here is the request to the API
    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                displayWeather(data, city);
            });
        }else {
            alert("Please enter a valid location.")
        }
    })
    .catch(function(error) {
        alert("Unable to search for city requested.")
    })
}



var displayWeather = function(city) {
    var temp = city.main.feels_like;
    var humidty = city.main.humidity;
    var windSpeed = city.wind.speed;
    var lat = city.coord.lat;
    var lon = city.coord.lon;
    var UvI = ""

    // console.log(lat, lon)   
   
    var apiUrl = "https://api.openweathermap.org/data/2.5/uvi?appid=4fce90cadf9eba29dd340628ab5664dc&lat=" + lat + "&lon=" + lon

    fetch(apiUrl).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                displayUvI(data, UvI)
            });
        };
    });
    
    var displayUvI = function(UvI) {
        var UvI = UvI.value
        console.log(UvI)
        
        spanUv.innerHTML(UvI)
        
    }

    
}

$(cityFormEl).on("click", formSubmitHandler)