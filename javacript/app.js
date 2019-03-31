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
// var req = new Request(queryURL);
// fetch(req).then(function(response) {
//         console.log(response.json());
//     }); 


