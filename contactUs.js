require('dotenv').config();
console.log(process.env);

const apiKey = process.env.API_KEY;

export async function handler(event) {
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`;

  const response = await fetch(url);
  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify({
      data: data
    }),
  };
}


/*
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: new google.maps.LatLng(-19.257753, 146.823688),
        zoom: 2,
        mapTypeId: 'terrain'
    });

    var georssLayer = new google.maps.KmlLayer({
      url: 'http://api.flickr.com/services/feeds/geo/?g=322338@N20&lang=en-us&format=feed-georss'
    });
    georssLayer.setMap(map);
  }


  function initMap() {

  }
*/

