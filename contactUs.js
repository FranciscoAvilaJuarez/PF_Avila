//import { resolve } from 'path';
require('dotenv').config({ path: './.env' });
//console.log(process.env);

apiKey = process.env.API_KEY;

catchApiKey(apiKey).catch( error => {
  console.log('error!'); 
  console.log(error); 
}); 

async function catchApiKey(){
  const response = await fetch (apiKey); 
  const blob = await response.blob(); 
  document.getElementById(apiKey).src = URL.createObjectURL(blob); 
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

