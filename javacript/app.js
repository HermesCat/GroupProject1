// SOUNDCLOUD API

// API KEY
// var queryURL = "https://newsapi.org/v2/top-headlines?sources=richmondtimesdispatch&apiKey=f14386004b984aab9c45f6dcf17b377f";
 var queryURL = "https://newsapi.org/v2/everything?q=+vcu+richmond&from=2019-03-00&sortBy=relevancy&apiKey=f14386004b984aab9c45f6dcf17b377f";
console.log(queryURL);


// API CALL
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
}); 

// var req = new Request(queryURL);
// fetch(req).then(function(response) {
//         console.log(response.json());
//     }); 
console.log("stuff");

var placeSearch = "richmond";
var searchResult = `<iframe width="95%" height="200" frameborder="0" style="border:0"
src="https://www.google.com/maps/embed/v1/place?q=${placeSearch}&key=AIzaSyBac2HUKDso4kbbD1NbvLWvtfeWvpdVuWA" allowfullscreen></iframe>`


function appendMap() {
$("#map").append(searchResult);
  }

appendMap();
