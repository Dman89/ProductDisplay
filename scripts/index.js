$(document).ready(function() {
  $("#xOutOfScreen").on("click", function() {
    $("#popUpScreenForProducts").addClass('hidden');
  })
  $(".imgBackground").on("click", function() {
    $("#popUpScreenForProducts").removeClass('hidden');
  })
  $("#infoOne").on("click", function(e) {
        e.preventDefault();
    if ($("#one").hasClass('flipR') == 1) {
    $("#one").removeClass('flipR');
    }
    $("#one").addClass('flip');
  })
  $("#infoTwo").on("click", function(e) {
        e.preventDefault();
    if ($("#two").hasClass('flipR') == 1) {
    $("#two").removeClass('flipR');
    }
    $("#two").addClass('flip');
  })
  $("#infoThree").on("click", function(e) {
        e.preventDefault();
    if ($("#three").hasClass('flipR') == 1) {
    $("#three").removeClass('flipR');
    }
    $("#three").addClass('flip');
  })
  $("#infoFour").on("click", function(e) {
        e.preventDefault();
    if ($("#four").hasClass('flipR') == 1) {
    $("#four").removeClass('flipR');
    }
    $("#four").addClass('flip');
  })
  $("#backThree").on("click", function(e) {
        e.preventDefault();
    $("#three").addClass('flipR');
    setTimeout(function() {
    $("#three").removeClass('flip');
//     CHANGE THE DURATION TO MATCH FLIP ANIMATION!!!!!
    }, 1100);
//     CHANGE THE DURATION TO MATCH FLIP ANIMATION!!!!!
  })
  $("#backOne").on("click", function(e) {
        e.preventDefault();
    $("#one").addClass('flipR');
    setTimeout(function() {
    $("#one").removeClass('flip');
//     CHANGE THE DURATION TO MATCH FLIP ANIMATION!!!!!
    }, 1100);
//     CHANGE THE DURATION TO MATCH FLIP ANIMATION!!!!!
  })
  $("#backTwo").on("click", function(e) {
        e.preventDefault();
    $("#two").addClass('flipR');
    setTimeout(function() {
    $("#two").removeClass('flip');
//     CHANGE THE DURATION TO MATCH FLIP ANIMATION!!!!!
    }, 1100);
//     CHANGE THE DURATION TO MATCH FLIP ANIMATION!!!!!
  })
  $("#backFour").on("click", function(e) {
        e.preventDefault();
    $("#four").addClass('flipR');
    setTimeout(function() {
    $("#four").removeClass('flip');
//     CHANGE THE DURATION TO MATCH FLIP ANIMATION!!!!!
    }, 1100);
//     CHANGE THE DURATION TO MATCH FLIP ANIMATION!!!!!
  })
})
