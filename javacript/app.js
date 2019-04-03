// NEWS API KEY
$(document).ready();

// Initialize Firebase
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
var user = null;

firebase.auth().onAuthStateChanged(function (currentUser) {
    if (currentUser) {
        user = {
            email: currentUser.email,
            id: currentUser.uid,
            displayName: currentUser.displayName
        }
        return;
    }
    user = null;
});

$("#register").on("click", function (event) {
    event.preventDefault();

    var email = $("#signUpModal #emailInput").val().trim();
    var password = $("#signUpModal #password1").val().trim();
    // var name = $("#signUpModal #userName").val().trim();

    firebase.auth().createUserWithEmailAndPassword(email, password).then(function (newUser) {
        return newUser.updateProfile({
            // displayName: name
        });
    })
        .then(function (user) {
            console.log(user);
            // we should update global user here
        }).catch(function () {
            // Handle Errors here.

            // ...
        });
});

$("#login").on("click", function (e) {
    e.preventDefault();

    var email = $("#loginModal #emailInputLogin").val().trim();
    var password = $("#loginModal #passwordLogin").val().trim();

    firebase.auth().signInWithEmailAndPassword(email, password).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        // Handle Errors here.

        // ...
    });
    // Show Hide
    // $("#welcome").append(`Welcome ${email}`);
    $("#logOff").show();
    $("#loginButton").hide();
    $("#signUpButton").hide();
});

$("#logOff").on("click", function () {
    firebase.auth().signOut().then(function () {
    }).catch(function (error) {
        // An error happened.
    });
    // Show Hide    
    $("#logOff").hide()
    $("#loginButton").show()
    $("#signUpButton").show()
    
});

  // TOP BUTTON API CALL: WORKING AS OF 04/02/2019
  $("#topArticle").on("click", function(event) {
    // API CALL
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
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
$(".btn").on("click", function () {
    event.preventDefault();
    var topStories = "https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=f14386004b984aab9c45f6dcf17b377f";
    $.ajax({
      url: topStories,
      method: "GET"
    }).then(function(response) {
     for (i = 0; i < 10; i++) {
       $("#articleAppendBox").append(` 
       <div class="media">
        <img src="${response.articles[i].urlToImage}" height="150" width="150" class=align-self-start mr-3" alt="...">
        <div class="media-body">
          <h5 class=mt-0"> ${response.articles[i].title} </h5>
          <p> ${response.articles[i].content} </p>
        </div>
      </div>
      <hr>
       `);
      console.log(response);
    };
    });
  });

  // MOST RECENT BUTTON API CALL
   $("#mostRecent").on("click", function(event) {
    event.preventDefault();
    var todayDate = moment().format("YYYY-MM-DD");
    console.log(todayDate);
    var recentStories = `"https://newsapi.org/v2/everything?&from=${todayDate}&sortBy=popularity&apiKey=f14386004b984aab9c45f6dcf17b377f"`;
    console.log(recentStories);
    $.ajax({
      url: recentStories,
      method: "GET",
    }).then(function(response) {
    for (i = 0; i < 10; i++) {
        $("#articleAppendBox").append(`
        <div class="media">
        <img src="${response.articles[i].urlToImage}" height="150" width="150" class=align-self-start mr-3" alt="...">
        <div class="media-body">
          <h5 class=mt-0"> ${response.articles[i].title} </h5>
          <p> ${response.articles[i].description} </p>
        </div>
      </div>
      <hr>
        `) 
      };
    });
  }); 

  // DYNAMIC BUTTON API CALLS
$("body").on("click", "button", function(event) { 
  event.preventDefault();

// DYNAMIC BUTTON CREATION
  var userSearch = $("#search").val().trim();
  var b = $("<button>")
  b.addClass("button")
  b.attr("button-click")
  b.text(userSearch)
  $(".userButton").append(b);
console.log(userSearch);
var userLocation = $("#location").val().trim();
console.log(userLocation);
//var comboFilters = `"${userSearch}and${userLocation}"`;
var comboFilters = `${userSearch}`;
console.log(comboFilters);
$(".form-control").val("");

// API CALL
 var userStories = `https://newsapi.org/v2/everything?q=${comboFilters}&apiKey=f14386004b984aab9c45f6dcf17b377f`;

console.log(userStories);

$.ajax({
  url: userStories,
  method: "GET",
}).then(function(search) {
  for (i = 0; i < 10; i++) {
  $("#articleAppendBox").append(`
  <div class="media">
  <img src="${search.articles[i].urlToImage}" height="150" width="150" class=align-self-start mr-3" alt="...">
  <div class="media-body">
    <h5 class=mt-0"> ${search.articles[i].title} </h5>
    <p> ${search.articles[i].description} </p>
  </div>
</div>
<hr>
  `);
  }
  console.log(search);
});

});
        url: topURL,
        method: "GET"
    }).then(function (response) {
        $(".lead").append(` <h3> ${response.articles[0].title} </h3> `);
        $(".lead").append(` <p> ${response.articles[0].content} </p> `);
        $(".lead").append(` <a href="${response.articles[0].url}"> LINK </a> `);
        $(".lead").append(` <img src="${response.articles[0].urlToImage}"> `);
        console.log(response);
    });
});

