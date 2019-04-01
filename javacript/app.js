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
    var email = $("#emailInput").val().trim();
    var password = $("#Password1").val().trim();
    var retypePassword = $("#Password2").val().trim();
    console.log(email);
    console.log(password)
    console.log(retypePassword);

    // Set for local storage
    var newUser = {
        email: email,
        password: password
    }    

    // validates that the passwords match upon registration
    if (Password1 === Password2){
        database.ref().push(newUser);
    } else {
        alert("Those Passwords do not match, try again.")
    }
})


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
