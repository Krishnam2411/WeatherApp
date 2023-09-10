const API = '1b2ca8af213446b7b62231003230209';
const searchBar = document.getElementById('search-bar');


searchBar.addEventListener('search', ()=>{
    if(searchBar.value == "") return;
    else fetchWeather(searchBar.value);
})

const fetchWeather = async (location) => {
    const url = `https://api.weatherapi.com/v1/current.json?key=${API}&q=${location}&aqi=no`;
    try {
        const dataPromise = await fetch(url);
        const result = await dataPromise.json();
        displayData(result);
        searchBar.value == ""
    } catch (error) {
        console.log(error);
    }
}
const displayData = (data) => {
    const place = document.getElementById('place');
    const temp = document.getElementById('temp');
    const condition = document.getElementById('condition');
    const feelsLike = document.getElementById('feelsLike');
    const windSpeed = document.getElementById('wind');
    const humidity = document.getElementById('humidity');
    const visibility = document.getElementById('visibility');
    const obj = {
        place: data.location.name,
        tempC: data.current.temp_c,
        tempF: data.current.temp_f,
        feelsLikeC: data.current.feelslike_c,
        feelsLikeF: data.current.feelslike_f,
        condition: data.current.condition.text,
        wind: data.current.wind_kph,
        humidity: data.current.humidity,
        visibility: data.current.vis_km
    }
    console.log(obj);
    place.textContent = `${data.location.name}`
    temp.textContent = `${data.current.temp_c}℃`
    condition.textContent = `${data.current.condition.text}`
    feelsLike.textContent = `Feels Like: ${data.current.feelslike_c}℃`
    windSpeed.textContent = `Wind Speed: ${data.current.wind_kph}kph`
    humidity.textContent = `Humidity: ${data.current.humidity}%`
    visibility.textContent = `Visibilty: ${data.current.vis_km}km`
}