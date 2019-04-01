// SOUNDCLOUD API

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





