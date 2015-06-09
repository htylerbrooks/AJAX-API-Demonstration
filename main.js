$(document).ready(function(){
  console.log("Lets go!");

  $('form#search input[type=submit]').on("mouseover", clearDiv);
  $('form#search input[type=submit]').on("click", searchOpenBeerDB);
});



function searchOpenBeerDB(event){

  event.preventDefault();

  var term = $("#search-term").val();
  var url = 'http://api.brewerydb.com/v2/search?q='+term+'&type=beer&key=aae5c8039d40d4cad7ada705c75745d2';
  var container = $("#results");

  $.ajax({
    url: url,
    method:"get",
    dataType: "json"
  }).done(function(result) {
    container.append(result["data"][1]["description"]);

    // resultsDisplay(result);
  });

}

function clearDiv(){
  $("#results").empty();
}

// function resultsDisplay (result) {
//   var container = $("#results");
//   container.append(results.name + " Description: " + results.description)
// }
