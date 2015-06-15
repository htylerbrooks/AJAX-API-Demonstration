$(document).ready(function(){
  console.log("Lets go!");

  $('form#search input[type=submit]').on("mouseover", clearDiv);
  $('form#search input[type=submit]').on("click", searchOpenBeerDB);
  $('form#search input[type=submit]').on("click",clearDiv);
});



function searchOpenBeerDB(event){

  event.preventDefault();

  var term = $("#search-term").val();
  var searchType = $("#search-type").val();
  var url = 'http://api.brewerydb.com/v2/search?q='+term+'&type='+searchType+'&key=aae5c8039d40d4cad7ada705c75745d2';

  var result =  $.ajax({
    url: url,
    method:"get",
    dataType: "json"
  });

  // if (result===undefined){
  //   container.append("The openbeerDB does not have that brewski. Please try again!");
  // } else {
  //   console.log("Searching openbeerDB");
  // }

  //  {
  //   container.append(result["data"][1]["description"]);
  // });


  result.done(function(result){

    if (result== undefined ||
      result["data"] == undefined ||
      result["data"][0] == undefined ||
      result["data"][0]["description"]== undefined){
        $("#name").append("The brewerydb does not have that beverage/brewery. Please try again!");
      } else {
        $("#name").append(result["data"][0]["name"]);
        $("#description").append(result["data"][0]["description"]);
      }

      // if (result!==undefined){
      //   container.append(result["data"][1]["description"]);
      // } else if(result==undefined || result["data"]==undefined)  {
      //   container.append("The openbeerDB does not have that beverage. Please try again!");
      // }
      // else (console.log("What is going on?!"));
    });




    result.fail(function(){
      $("#name").append("$.get failed");
    });



  }

  function clearDiv(){
    $("#name").empty();
    $("#description").empty();
    $("#label").empty();
  }

  // function resultsDisplay (result) {
  //   var container = $("#results");
  //   container.append(results.name + " Description: " + results.description)
  // }
