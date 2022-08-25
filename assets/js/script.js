var cityFormEl = document.querySelector("#form-submit");
var cityInputEl = document.querySelector("#city-input");

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
        cityInputEl.value = "";


    }else {
        alert("please enter a valid city")
    }

};

var getCityWeather = function(city) {
    
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=4fce90cadf9eba29dd340628ab5664dc"
    
    
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
    var cityName = city.name;
    var temp = city.main.feels_like;
    var humidty = city.main.humidity;
    var wind = city.wind.speed;
    var lat = city.coord.lat;
    var lon = city.coord.lon;
    var UvI = ""
    
    // This appends the basic stats to the city container
    document.getElementById("temp").innerHTML = temp;
    document.getElementById("humidity").innerHTML = humidty;
    document.getElementById("wind").innerHTML = wind;
    document.getElementById("city-searched").innerHTML = cityName;
    
       
    var apiUrl1 = "https://api.openweathermap.org/data/2.5/uvi?appid=4fce90cadf9eba29dd340628ab5664dc&lat=" + lat + "&lon=" + lon;

    fetch(apiUrl1).then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                displayUvI(data, UvI)
            });
        };
    });
    
    // this function works independantly to capture the UV index
    var displayUvI = function(UvI) {
        var UvI = UvI.value
        console.log(UvI)
        
        document.getElementById("uv-value").innerHTML = UvI
    };

    // this fetch request is for the 5 day forcast
    var apiUrl = "api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=4fce90cadf9eba29dd340628ab5664dc";

    fetch(apiUrl).then(function(response) {
        if(response.ok) {
            response.json().then(function(data) {
                display5Day(data)
            })
        }
    });
    
    var display5Day = function(data) {
        console.log(data)
    }
    
}

$(cityFormEl).on("click", formSubmitHandler)