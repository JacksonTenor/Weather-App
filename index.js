//var url = "api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&APPID=54ab261619009004f75dc94d6467427b";
var celc = false;
var latitude = 0;
var longitude = 0;
var weatherdata;
$(document).ready(function() {
  $.getJSON("http://ip-api.com/json", function(data) {
    console.log(data);
    console.log(data.zip);
    document.getElementById("location").innerHTML = data.city + ", " + data.region;
    var location = [data.lat, data.lon];
    console.log(location);
    var url = 'http://api.wunderground.com/api/328c30f1c447f6a1/conditions/q/' + location[0] + ',' + location[1] + '.json';
    console.log(url);
    $.getJSON(url, function(data){
      document.getElementById("temp").innerHTML = data.current_observation.temp_f + " F";
      document.getElementById("weathericon").setAttribute ("src", data.current_observation.icon_url);  
 weatherdata = data;
      document.getElementById("weathertype").innerHTML = data.current_observation.weather;
      console.log(data);
    });
    
  });
});

function FCChange(){
  if(celc){
    celc = false;
    document.getElementById("temp").innerHTML = weatherdata.current_observation.temp_f + " F";   
  }else{
    celc = true;
    document.getElementById("temp").innerHTML = weatherdata.current_observation.temp_c + " C";
  }
}