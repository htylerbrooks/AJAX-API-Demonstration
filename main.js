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



  result.done(function(result){



    if (result== undefined ||
      result["data"] == undefined ||
      result["data"][0] == undefined ||
      result["data"][0]["description"]== undefined){
        $("#name").append("The brewerydb does not have that beverage/brewery. Please try again!");
      } else {  
          if(searchType=="beer"){
            var picture = '<img src='+result["data"][0]["labels"]["large"]+'>';
            }else{
            var picture = '<img src='+result["data"][0]["images"]["large"]+'>';
      };

      $("#name").append(result["data"][0]["name"]);
      $("#description").append(result["data"][0]["description"]);
      $(picture).appendTo("#picture");
    }
  });

  result.fail(function(){
    $("#name").append("$.get failed");
  });
}

function clearDiv(){
  $("#name").empty();
  $("#description").empty();
  $("#label").empty();
  $("#picture").empty();
}
