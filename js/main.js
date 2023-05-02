const getData = async (city, country) =>{
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=dfebb5985975be34d560a4c41fb77968`)
    console.log(response)
    console.log(response.data)
    seeWeather(response.data)
    return response.data
}



    

 
const section =  document.getElementsByTagName("weather-list")
function seeWeather(data){
    const high = data.main.temp_max
    const low = data.main.temp_min
    const forecast = data.weather[0].main
    const humidity = data.main.humidity
    const icon= data.weather[0].icon
    console.log(icon)
    console.log(high)
    console.log(low)
    console.log(forecast)
    console.log(humidity)
   
    document.getElementById("high").innerHTML=high+ ' &#176;F'
    document.getElementById("low").innerHTML=low+ ' &#176;F'
    document.getElementById("forecast").innerHTML=forecast
    document.getElementById("humidity").innerHTML=humidity+ "%"
} 

 
const form = document.getElementById("myform")
form.addEventListener("submit", (event)=>{
    console.log(" here")
    event.preventDefault();
    let city = document.getElementById("city")
    let country = document.getElementById("country")
    console.log(city.value, country.value)
    getData(city.value, country.value)
})


