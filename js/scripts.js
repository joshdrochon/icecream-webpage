$(document).ready(function(){

  $("#iceCream").submit(function(event){

    event.preventDefault();

    var flavors = ["flavorI", "flavorII", "flavorIII", "flavorIV", "flavorV"];

    flavors.forEach(function(flavor){
      var input = $("input#" + flavor).val();
      $("." + flavor).text(input);

      $("#summary").show();
    });
  });
});
