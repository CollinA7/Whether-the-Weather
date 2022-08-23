var cityFormEl = document.querySelector("#form-submit");
var cityInputEl = document.querySelector("#city-input");
var weatherContainer = document.querySelector("#display-city");

var formSubmitHandler = function(event){
    event.preventDefault();
    console.log(cityInputEl.value)

    // this variable collects the users input in the search bar
    var city = cityInputEl.value.trim();
    
    // This conditional statemtent is 
    if (city) {
        getCityWeather(city);

        // this clears the old content
        // weatherContainer.textContent = "";
        cityInputEl.value = "";
    }else {
        alert("please enter a valid city")
    }
};

var getCityWeather = function(city) {

    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInputEl + "&appid=4fce90cadf9eba29dd340628ab5664dc"
        
    fetch(apiUrl).then((response) => response.json()).then((data) => console.log(data));
}

$(cityFormEl).on("click", formSubmitHandler)