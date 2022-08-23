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

    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=4fce90cadf9eba29dd340628ab5664dc"
        
    fetch(apiUrl).then((response) => response.json()).then((data) => console.log(data)); // comment out this section and add a displayWeather function to display the fetched data
    // fetch(apiUrl).then(function(response) {
    //     if (response.ok) {
    //         console.log(response);
    //         response.json().then(function(data) {
    //             console.log(data);
    //             displayWeather(data, city);
    //         });
    //     }else {
    //         alert("Please enter a valid location.")
    //     }
    // })
    // .catch(function(error) {
    //     alert("Unable to search for city requested.")
    // })
}

$(cityFormEl).on("click", formSubmitHandler)