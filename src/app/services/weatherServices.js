import axios from 'axios'

export const getWeatherByCityAndScale = (cityName, scale, setResults) => {
  var options = {
    method: 'GET',
    url: 'https://yahoo-weather5.p.rapidapi.com/weather',
    params: {location: cityName, format: 'json', u: scale},
    headers: {
      'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com',
      'x-rapidapi-key': 'df0f5b2c93msh1f671afc9d236a3p1ae317jsn61ee516f721e'
    }
  }
  return axios.request(options).then((response) => {
    setResults(response.data)
    console.log(response.data)
  }).catch((error) => {
    console.error(error)
  })
}