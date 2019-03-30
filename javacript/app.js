console.log("stuff");

var queryGoogleAPI = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBbAzKEh32TMIZ6uGIP3SA4RWlCT5V2T7A&callback=initMap"

$.ajax({
    url: queryGoogleAPI,
    method: "GET",
    dataType: 'jsonp',
    cache: false
}).then(function (response) {
    console.log(response);
});



