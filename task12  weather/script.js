// 
// 

document.getElementById("search").addEventListener("click", async function () {

    let city = document.getElementById("city").value;

    let data = await mockAPI.getWeather();

    let result = data.find(function (item) {
        return item.city.toLowerCase() === city.toLowerCase();
    });

    if (result) {
        document.getElementById("cityName").innerText = result.city;
        document.getElementById("temp").innerText = result.temperature + "°C";
        document.getElementById("condition").innerText = result.condition;
        document.getElementById("humidity").innerText = "Humidity: " + result.humidity + "%";
        document.getElementById("wind").innerText = "Wind: " + result.wind + " km/h";
    } 
    else {
        alert("City not found!");
    }

});


