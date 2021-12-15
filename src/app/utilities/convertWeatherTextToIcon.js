export default function convertTextToIcon (text) {
  if(text.includes('Sunny')) {
    return 'fal fa-sun'
  }
  else if(text.includes('Mostly Cloudy')) {
    return 'fad fa-clouds'
  }
  else if(text.includes('Partly Cloudy')) {
    return 'fad fa-sun-cloud'
  }
  else if(text.includes('Rain and Snow')) {
    return 'fad fa-cloud-hail-mixed'
  }
  else if(text.includes('Scattered Showers')) {
    return 'fad fa-cloud-showers'
  }
  else if(text.includes('Showers')) {
    return 'fad fa-cloud-rain'
  }
  else if(text.includes('Snow')) {
    return 'fad fa-cloud-snow'
  }
  else if(text.includes('Thunderstorms')) {
    return 'fad fa-thunderstorm'
  }
  else if(text.includes('Snow Showers')) {
    return 'fad fa-cloud-hail-mixed'
  }
  else if(text.includes('Mostly Sunny')) {
    return 'fad fa-cloud-sun'
  }
  else if(text.includes('Breezy')) {
    return 'fad fa-wind'
  }
  else {
    return 'fad fa-cloud'
  }
}