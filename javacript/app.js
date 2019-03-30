console.log("stuff");

var placeSearch = "richmond";
var searchResult = `<iframe width="200" height="200" frameborder="0" style="border:0"
src="https://www.google.com/maps/embed/v1/place?q=${placeSearch}&key=AIzaSyBac2HUKDso4kbbD1NbvLWvtfeWvpdVuWA" allowfullscreen></iframe>`


function appendMap() {
    $("#map").append(searchResult);
}

appendMap();
