<<<<<<< HEAD
// NEWS API KEY
// var queryURL = "https://newsapi.org/v2/top-headlines?sources=richmondtimesdispatch&apiKey=f14386004b984aab9c45f6dcf17b377f";
// var queryURL = "https://newsapi.org/v2/everything?q=+vcu+richmond&from=2019-03-00&sortBy=relevancy&apiKey=f14386004b984aab9c45f6dcf17b377f";

// API CALL WITH USER INPUT
//  var queryURL = "https://newsapi.org/v2/everything?q=+richmond+virginia" + userSearch + "&from=2019-03-00&sortBy=relevancy&apiKey=f14386004b984aab9c45f6dcf17b377f";
// console.log(queryURL);

$(".btn").on("click", function() {
  event.preventDefault();
// STORE USER INPUT
  var userSearch = $(".form-control").val().trim();
  var queryURL = "https://newsapi.org/v2/everything?q=+richmond+virginia+" + userSearch + "&from=2019-03-00&sortBy=relevancy&apiKey=f14386004b984aab9c45f6dcf17b377f";
  console.log(userSearch);
// API CALL
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
  $(".lead").append(` <h3> ${response.articles[1].title} </h3> `);
  $(".lead").append(` <p> ${response.articles[1].content} </p> `);
  $(".lead").append(` <a href="${response.articles[1].url}"> LINK </a> `);
  $(".lead").append(` <img src="${response.articles[1].urlToImage}"> `);
=======
var config = {
    apiKey: "AIzaSyDf9lm-48TNjjiyNxZWLuQsPm2m7qHIkHw",
    authDomain: "gproject-5eab9.firebaseapp.com",
    databaseURL: "https://gproject-5eab9.firebaseio.com",
    projectId: "gproject-5eab9",
    storageBucket: "gproject-5eab9.appspot.com",
    messagingSenderId: "879051528853"
};

firebase.initializeApp(config);

var database = firebase.database();



$("#register").on("click", function (event) {
    event.preventDefault();

    // Grabs the input fields, not working at the moment, except for retypePassword
    var email = $("#signUpModal #emailInput").val().trim();
    var password = $("#signUpModal #Password1").val().trim();
    var retypePassword = $("#signUpModal #Password2").val().trim();
    console.log(email);
    console.log(password)
    console.log(retypePassword);

    // Set for local storage
    // var newUser = {
    //     email: email,
    //     password: password
    // }    

    // validates that the passwords match upon registration
    // if (Password1 === Password2){
    //     database.ref().push(newUser);
    // } else {
    //     alert("Those Passwords do not match, try again.")
    // }
});


// API KEY
// var queryURL = "https://newsapi.org/v2/top-headlines?sources=richmondtimesdispatch&apiKey=f14386004b984aab9c45f6dcf17b377f";
var search = $("#search").val().trim();
var queryURL = `https://newsapi.org/v2/everything?q=${search}&from=2019-03-00&sortBy=relevancy&apiKey=f14386004b984aab9c45f6dcf17b377f`;
console.log(queryURL);

$("#btn_search").on("click", function () {
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response.articles[3]);

    });
    $("#test").prepend(queryURL.articles[3]);
});

// API CALL

>>>>>>> b0ec809d85cb5adb755fd1a6706e30d57aef2062

}); 
}); 
// var req = new Request(queryURL);
// fetch(req).then(function(response) {
//         console.log(response.json());
//     }); 
<<<<<<< HEAD
=======
console.log("stuff");

// var placeSearch = "richmond";
// var searchResult = `<iframe width="95%" height="200" frameborder="0" style="border:0"
// src="https://www.google.com/maps/embed/v1/place?q=${placeSearch}&key=AIzaSyBac2HUKDso4kbbD1NbvLWvtfeWvpdVuWA" allowfullscreen></iframe>`


function appendMap() {
    $("#map").append(searchResult);
}

appendMap();
>>>>>>> b0ec809d85cb5adb755fd1a6706e30d57aef2062





//...........GREG"S CODE......................................................................//
// NEWS API KEY
// var queryURL = "https://newsapi.org/v2/top-headlines?sources=richmondtimesdispatch&apiKey=f14386004b984aab9c45f6dcf17b377f";
// var queryURL = "https://newsapi.org/v2/everything?q=+vcu+richmond&from=2019-03-00&sortBy=relevancy&apiKey=f14386004b984aab9c45f6dcf17b377f";
// API CALL WITH USER INPUT
//  var queryURL = "https://newsapi.org/v2/everything?q=+richmond+virginia" + userSearch + "&from=2019-03-00&sortBy=relevancy&apiKey=f14386004b984aab9c45f6dcf17b377f";
// console.log(queryURL);
$(".btn").on("click", function() {
    event.preventDefault();
  // STORE USER INPUT
    var userSearch = $(".form-control").val().trim();
    var queryURL = "https://newsapi.org/v2/everything?q=+richmond+virginia+" + userSearch + "&from=2019-03-00&sortBy=relevancy&apiKey=f14386004b984aab9c45f6dcf17b377f";
   // var recentURL = "https://newsapi.org/v2/everything?q=" "&from=2019-03-00&sortBy=relevancy&apiKey=f14386004b984aab9c45f6dcf17b377f";
    console.log(userSearch);
  // API CALL
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    for (i = 0; i < 10; i++) {
    $(".lead").append(` <h3> ${response.articles[i].title} </h3> `);
    $(".lead").append(` <p> ${response.articles[i].content} </p> `);
    $(".lead").append(` <a href="${response.articles[i].url}" LINK </a> `);
    $(".lead").append(` <img src="${response.articles[i].urlToImage}"> `);
    };
    $("#search").val("");
  }); 
  }); 
  // TOP BUTTON API CALL
  $(".btn").on("click", function() {
    event.preventDefault();
    var topURL = "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=f14386004b984aab9c45f6dcf17b377f";
    $.ajax({
      url: topURL,
      method: "GET"
    }).then(function(response) {
      $(".lead").append(` <h3> ${response.articles[0].title} </h3> `);
      $(".lead").append(` <p> ${response.articles[0].content} </p> `);
      $(".lead").append( ` <a href="${response.articles[0].url}"> LINK </a> `);  
      $(".lead").append(` <img src="${response.articles[0].urlToImage}"> `);
      console.log(response);
    });
  });
  // var req = new Request(queryURL);
  // fetch(req).then(function(response) {
  //         console.log(response.json());
  //     }); 