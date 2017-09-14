$(document).ready(function(){
  $("#user-input").submit(function(event) {
    var nameLength = parseInt($("#user-name").val().length);
    var age = parseInt($("#user-age").val());
    var height = parseInt($("#user-heigth").val());
    var gender = $("input:radio[name=options-gender]:checked").val();
    var bodypart = $("#user-bathe").val();

    console.log(nameLength);
    console.log(age);
    console.log(height);
    console.log(gender);
    console.log(bodypart);

    var output = "";
    var img = "img/alone.jpg"
    if (age < 13) {
      output = "You are too young to date!"
    } else if (height < 1) {
      output = "There's no way you're that small."
    } else if (height >= 10) {
      output = "There's no way you're that tall."
    }
    else if (gender === "female" && nameLength > 20 && height > 4 && bodypart === 7) {
      output = "You would date Jim carrey";
      img = "img/jimcarey."
    } else if (gender === "male" && nameLength <= 4 && height < 5 && bodypart === 7 ) {
      output = "You would date Amy Schumer";
      img = "img/amy.";
    } else if (gender === "female" && nameLength >= 5 && height <= 4 && bodypart === 6 || bodypart == 9)
      output = "You would date Danny Devito!";
      img = "img/danny";
    } else {
      output = "Probably none, celebreties have very specific tastes.";
    }

    event.preventDefault()
  });
});
