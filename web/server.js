const url = window.location.href;
let baseUrl = "";

if (url.split(":")[0] === 'http') {
    baseUrl = 'http://localhost:5001';
}else{
    baseUrl = 'https://rich-blue-ostrich-cape.cyclic.app/';
}

let getWeather = () => {

    // let cityName = document.querySelector("#cityName").value

    axios.get(`${baseUrl}/weather`)
        .then(function (response) {
            // handle success
            console.log("response is success");
            console.log(response.data);

            document.querySelector("#result").innerHTML =
                `<h1>${response.data.cityName}</h1>
                 <h3> temp: ${response.data.temperature}°C </h3>
                 <h3> Humidity: ${response.data.humidity}°C </h3>
                 <h3> Min/Max temp: ${response.data.minTemp}°C - ${response.data.maxTemp}°C </h3>`
                
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })

}

