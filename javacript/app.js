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
            // displayName: currentUser.displayName
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
    logIn()
});

$("#logOff").on("click", function () {
    firebase.auth().signOut().then(function () {
    }).catch(function (error) {
        // An error happened.
    });
    // Show Hide    
    logOff()

});

function logIn () {
    $("#logOff").show();
    $("#loginButton").hide();
    $("#signUpButton").hide();
}

function logOff () {
    $("#logOff").hide()
    $("#loginButton").show()
    $("#signUpButton").show()
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
  $("#topArticle").on("click", function(event) {
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
          <a href="${response.articles[i].url}"> ${response.articles[i].title} </a>
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

// // DYNAMIC BUTTON CREATION
//   var userSearch = $("#search").val().trim();
//   var b = $("<button>")
//   b.addClass("button")
//   b.attr("button-click")
//   b.text(userSearch)
//   $(".userButton").append(b);
// console.log(userSearch);
// var userLocation = $("#location").val().trim();
// console.log(userLocation);
// //var comboFilters = `"${userSearch}and${userLocation}"`;
// var comboFilters = `${userSearch}`;
// console.log(comboFilters);
// $(".form-control").val(""); 

// // API CALL
//  var userStories = `https://newsapi.org/v2/everything?q=${comboFilters}&apiKey=f14386004b984aab9c45f6dcf17b377f`;
// console.log(userStories);

// $.ajax({
//   url: userStories,
//   method: "GET",
// }).then(function(search) {
//   for (i = 0; i < 10; i++) {
//   $("#articleAppendBox").append(`
//   <div class="media">
//   <img src="${search.articles[i].urlToImage}" height="150" width="150" class=align-self-start mr-3" alt="...">
//   <div class="media-body">
//     <h5 class=mt-0"> ${search.articles[i].title} </h5>
//     <p> ${search.articles[i].description} </p>
//     <a href="${search.articles[i].url}"> ${search.articles[i].title} </a>
//   </div>
// </div>
// <hr>
//   `);
//   }
//   console.log(search);
// }); 

// });
       
 

// API CALLS FOR PRE-MADE BUTTONS
// $("#businessBtn").on("click", function(event) {
//   event.preventDefault();
//   var politicsURL = "https://newsapi.org/v2/everything?q=business&sortBy=popularity&apiKey=f14386004b984aab9c45f6dcf17b377f";
//   $.ajax({
//     url: politicsURL,
//     method: "GET",
//   }).then(function(business) {
//       for (i= 0; i < 10; i++) {
//         $("#articleAppendBox").append(`
//         <div class="media">
//         <img src="${business.articles[i].urlToImage}" height="150" width="150" class=align-self-start mr-3" alt="...">
//         <div class="media-body">
//           <h5 class=mt-0"> ${business.articles[i].title} </h5>
//           <p> ${business.articles[i].description} </p>
//           <a href="${business.articles[i].url}"> ${business.articles[i].title} </a>
//         </div>
//       </div>
//       <hr>
//         `);
//       }
//     });
//     });

//     $("#scienceBtn").on("click", function(event) {
//       event.preventDefault();
//       var scienceURL = "https://newsapi.org/v2/everything?q=science&sortBy=popularity&apiKey=f14386004b984aab9c45f6dcf17b377f";
//       $.ajax({
//         url: scienceURL,
//         method: "GET",
//       }).then(function(science) {
//           for (i= 0; i < 10; i++) {
//             $("#articleAppendBox").append(`
//             <div class="media">
//             <img src="${science.articles[i].urlToImage}" height="150" width="150" class=align-self-start mr-3" alt="...">
//             <div class="media-body">
//               <h5 class=mt-0"> ${science.articles[i].title} </h5>
//               <p> ${science.articles[i].description} </p>
//               <a href="${science.articles[i].url}"> ${science.articles[i].title} </a>
//             </div>
//           </div>
//           <hr>
//             `);
//           }
//         });
//         });


