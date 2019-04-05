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
    }
    return;
  }
  user = null;
});

$("#register").on("click", function (event) {
  event.preventDefault();

  var email = $("#signUpModal #emailInput").val().trim();
  var password = $("#signUpModal #password1").val().trim();

  firebase.auth().createUserWithEmailAndPassword(email, password).then(function (newUser) {
    logIn()
    return newUser.updateProfile({

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
    logIn()
  }).catch(function (error) {
    // Handle Errors here.

    // ...
  });
  // Show Hide
  // $("#welcome").append(`Welcome ${email}`);  Need more work here!!!!

});

$("#logOff").on("click", function () {
  firebase.auth().signOut().then(function () {
    logOff()
  }).catch(function (error) {
    // An error happened.
  });
  // Show Hide    


});

function logIn() {
  $("#logOff").show();
  $("#loginButton").hide();
  $("#signUpButton").hide();
}

function logOff() {
  $("#logOff").hide();
  $("#loginButton").show();
  $("#signUpButton").show();
  $(".userButton").empty("");
}

function userCheck() {
  if (user === true) {
    $("#logOff").hide()
    $("#loginButton").show()
    $("#signUpButton").show()
  } else {
    $("#logOff").show();
    $("#loginButton").hide();
    $("#signUpButton").hide();
  }
}

// ---------------- William Wood ------------------

// TOP BUTTON API CALL: WORKING AS OF 04/02/2019

var userKeywords = [];

// THIS IS THE SEARCH CLICK EVENT
$("#masterSearch").on("click", function (search) {
  search.preventDefault();

  if ($("#storeKeywords").is(":checked") === true) {
    var newButton = $("#searchTerm").val().trim();
    userKeywords.push(newButton);
    renderButton();
    displayArticles($("#searchTerm").val().trim());
    $("#searchTerm").val("");
    storedData();
  } else {
    displayArticles($("#searchTerm").val().trim());
    $("searchTerm").val("");
  }
});
// CREATES BUTTONS BASED UPON THE ARRAY
function renderButton() {
  $(".userButton").empty();
  for (i = 0; i < userKeywords.length; i++) {
    var userSearch = $(".form-control").val().trim();
    var b = $("<button>")
    b.addClass("articles")
    b.attr("data-button", userKeywords[i])
    b.text(userKeywords[i])
    b.on("click", displayArticles);
    $(".userButton").append(b);
  }
}
// API CALL FOR NEWS ARTICLES BASED UPON INPUT FIELD VALUE
function displayArticles(event) {
  $("#articleAppendBox").empty();
  var articles;
  if (typeof event === "string") {
    articles = event;
  } else {
    articles = $(this).attr("data-button");
  }

  console.log(articles);
  var userSearch = $("#searchTerm").val().trim();
  var userStories = `https://newsapi.org/v2/everything?q=${articles}&apiKey=f14386004b984aab9c45f6dcf17b377f`;
  var searchStories = `https://newsapi.org/v2/everything?q=${userSearch}&apiKey=f14386004b984aab9c45f6dcf17b377f`;
  console.log(userStories);
  $.ajax({
    url: userStories,
    method: "GET",
  }).then(function (search) {
    for (i = 0; i < 10; i++) {
      $("#articleAppendBox").append(`
    <div class="media">
    <img src="${search.articles[i].urlToImage}" height="150" width="150" class=align-self-start mr-3" alt="...">
    <div class="media-body">
      <h5 class=mt-0"> ${search.articles[i].title} </h5>
      <p> ${search.articles[i].description} </p>
      <a href="${search.articles[i].url}"> ${search.articles[i].title} </a>
    </div>
  </div>
  <hr>
    `);
    };
  });
};

function storedData() {
  
  var dataUp = {
    search: userKeywords,
  }
  database.ref().push(dataUp);
}

// $(".userButton").on("click", ".articles", displayArticles);