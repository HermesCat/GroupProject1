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

}); 
}); 

//...........GREG"S CODE......................................................................//
// NEWS API KEY
// var queryURL = "https://newsapi.org/v2/top-headlines?sources=richmondtimesdispatch&apiKey=f14386004b984aab9c45f6dcf17b377f";
// var queryURL = "https://newsapi.org/v2/everything?q=+vcu+richmond&from=2019-03-00&sortBy=relevancy&apiKey=f14386004b984aab9c45f6dcf17b377f";
// API CALL WITH USER INPUT
//  var queryURL = "https://newsapi.org/v2/everything?q=+richmond+virginia" + userSearch + "&from=2019-03-00&sortBy=relevancy&apiKey=f14386004b984aab9c45f6dcf17b377f";
// console.log(queryURL);
/* $(".btn").on("click", function() {
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
  }); */

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
