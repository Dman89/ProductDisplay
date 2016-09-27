
function pushOut(card) {
  if (card == 1) {
    var card = one;
  }
  else if (card == 2) {
      var card = two;
  }
  else if (card == 3) {
        var card = three;
  }
  $("#"+photoCards).addClass("out");
}
function pushIn(card) {
  if (card == 1) {
    var card = one;
  }
  else if (card == 2) {
      var card = two;
  }
  else if (card == 3) {
        var card = three;
  }
  $("#"+photoCards).removeClass("out");
}
var cardShuffle = function(card) {
  if (card == 1) {
    if ($('#bio #onea').hasClass('move')) {
      $('#bio #onea').removeClass('move');
      $('#bio #onea').addClass('out');
    } else if ($('#bio #onea').hasClass('out')) {
      $('#bio #onea').removeClass('out');
      $('#bio #onea').addClass('move');
    } else {
      $('#bio #onea').addClass('move');
    }
  }
  else if (card == 2) {
        if ($('#bio #twoa').hasClass('move')) {
          $('#bio #twoa').removeClass('move');
          $('#bio #twoa').addClass('out');
        } else if ($('#bio #twoa').hasClass('out')) {
          $('#bio #twoa').removeClass('out');
          $('#bio #twoa').addClass('move');
        } else {
          $('#bio #twoa').addClass('move');
        }
      }
  else if (card == 3) {
            if ($('#bio #threea').hasClass('move')) {
              $('#bio #threea').removeClass('move');
              $('#bio #threea').addClass('out');
            } else if ($('#bio #threea').hasClass('out')) {
              $('#bio #threea').removeClass('out');
              $('#bio #threea').addClass('move');
            } else {
              $('#bio #threea').addClass('move');
            }
          }
}
var oneIndex = 1,
  twoIndex = 2,
  threeIndex = 3;
var zIndexFunction = function(card) {
  var zIndex = "";
  if (card == 1) {
    if (!$("#onea").hasClass("zIndex4")) {
          var tempNum = oneIndex;
          setTimeout(function() {
              $("#onea").addClass("out");
              $("#onea").css( "zIndex", tempNum );
          }, 1)
          if (oneIndex > twoIndex && oneIndex > threeIndex) {
            if (twoIndex < threeIndex) {
              twoIndex = 3,
              threeIndex = 4;
              zIndex = "zIndex" + twoIndex;
              document.getElementById("two").className = "card-container " + zIndex;
              zIndex = "zIndex" + threeIndex;
              document.getElementById("three").className = "card-container " + zIndex;
            }
            else {
              twoIndex = 4,
              threeIndex = 3;
              zIndex = "zIndex" + twoIndex;
              document.getElementById("two").className = "card-container " + zIndex;
              zIndex = "zIndex" + threeIndex;
              document.getElementById("three").className = "card-container " + zIndex;
            }
            oneIndex = 1;
            zIndex = "zIndex" + oneIndex;
            document.getElementById("one").className = "card-container " + zIndex;
            }
      else {
        if (twoIndex < threeIndex) {
          twoIndex = 2,
          threeIndex = 3;
          zIndex = "zIndex" + twoIndex;
          document.getElementById("two").className = "card-container " + zIndex;
          zIndex = "zIndex" + threeIndex;
          document.getElementById("three").className = "card-container " + zIndex;
        }
      else {
          twoIndex = 3,
          threeIndex = 2;
          zIndex = "zIndex" + twoIndex;
          document.getElementById("two").className = "card-container " + zIndex;
          zIndex = "zIndex" + threeIndex;
          document.getElementById("three").className = "card-container " + zIndex;
          }
        oneIndex = 4;
        zIndex = "zIndex" + oneIndex;
        document.getElementById("one").className = "card-container " + zIndex;
        }
      setTimeout(function() {
          $("#onea").css( "zIndex", oneIndex );
          $("#twoa").css( "zIndex", twoIndex );
          $("#threea").css( "zIndex", threeIndex );
      }, 601);
      setTimeout(function pushIn() {
        $("#onea").removeClass("out");
        $("#onea").css( "zIndex", oneIndex );
      }, 1000);
    }
    else if ($("#onea").hasClass("zIndex4")) {
        if (twoIndex < threeIndex) {
          twoIndex = 3,
          threeIndex = 4;
          zIndex = "zIndex" + threeIndex;
          document.getElementById("three").className = "card-container " + zIndex;
          zIndex = "zIndex" + twoIndex;
          document.getElementById("two").className = "card-container " + zIndex;
        }
        else {
          twoIndex = 4,
          threeIndex = 3;
          zIndex = "zIndex" + threeIndex;
          document.getElementById("three").className = "card-container " + zIndex;
          zIndex = "zIndex" + twoIndex;
          document.getElementById("two").className = "card-container " + zIndex;
        }
        oneIndex = 1;
        setTimeout(function pushOut() {
          $("#onea").addClass("out");
            $("#onea").css( "zIndex", 4 );
        }, 1);
        setTimeout(function() {
            $("#onea").css( "zIndex", 1 );
            $("#twoa").css( "zIndex", twoIndex );
            $("#threea").css( "zIndex", threeIndex );
        }, 601);
        setTimeout(function pushIn() {
          $("#onea").removeClass("out");
            $("#onea").removeClass("zIndex4");
            $("#onea").addClass("zIndex1");
        }, 1001);
        }
    }

  else if (card == 2) {
      if (!$("#twoa").hasClass("zIndex4")) {
          var tempNum = twoIndex;
          setTimeout(function() {
              $("#twoa").addClass("out");
              $("#twoa").css( "zIndex", tempNum );
          }, 1)
          if (twoIndex > oneIndex && twoIndex > threeIndex) {
          twoIndex = 1;
              if (oneIndex < threeIndex) {
                oneIndex = 3,
                threeIndex = 4;
              } else {
                oneIndex = 4,
                threeIndex = 3;
              }
              zIndex = "zIndex" + oneIndex;
              document.getElementById("one").className = "card-container " + zIndex;
              zIndex = "zIndex" + twoIndex;
              document.getElementById("two").className = "card-container " + zIndex;
              zIndex = "zIndex" + threeIndex;
              document.getElementById("three").className = "card-container " + zIndex;
        } else {
          twoIndex = 4;
              if (oneIndex < threeIndex) {
                oneIndex = 2,
                threeIndex = 3;
              } else {
                oneIndex = 3,
                threeIndex = 2;
              }
              zIndex = "zIndex" + oneIndex;
              document.getElementById("one").className = "card-container " + zIndex;
              zIndex = "zIndex" + twoIndex;
              document.getElementById("two").className = "card-container " + zIndex;
              zIndex = "zIndex" + threeIndex;
              document.getElementById("three").className = "card-container " + zIndex;
        }
        setTimeout(function() {
            $("#twoa").css( "zIndex", twoIndex );
            $("#onea").css( "zIndex", oneIndex );
            $("#threea").css( "zIndex", threeIndex );
        }, 500);
        setTimeout(function pushIn() {
          $("#twoa").removeClass("out");
            $("#twoa").css( "zIndex", twoIndex );
        }, 1000);
        }
    else if ($("#twoa").hasClass("zIndex4")) {
        if (oneIndex < threeIndex) {
          oneIndex = 3,
          threeIndex = 4;
          zIndex = "zIndex" + oneIndex;
          document.getElementById("one").className = "card-container " + zIndex;
          zIndex = "zIndex" + threeIndex;
          document.getElementById("three").className = "card-container " + zIndex;
        }
        else {
          oneIndex = 4,
          threeIndex = 3;
          zIndex = "zIndex" + oneIndex;
          document.getElementById("one").className = "card-container " + zIndex;
          zIndex = "zIndex" + twoIndex;
          document.getElementById("two").className = "card-container " + zIndex;
        }
      twoIndex = 1;
      setTimeout(function pushOut() {
        $("#twoa").addClass("out");
          $("#twoa").css( "zIndex", 4 );
      }, 1);
      setTimeout(function() {
          $("#twoa").css( "zIndex", 1 );
          $("#onea").css( "zIndex", oneIndex );
          $("#threea").css( "zIndex", threeIndex );
      }, 501);
      setTimeout(function pushIn() {
        $("#twoa").removeClass("out");
          $("#twoa").removeClass("zIndex4");
          $("#twoa").addClass("zIndex1");
      }, 1001);
      }
    }

  else if (card == 3) {
      if (!$("#threea").hasClass("zIndex4")) {
            var tempNum = threeIndex;
            setTimeout(function() {
                $("#threea").addClass("out");
                $("#threea").css( "zIndex", tempNum );
            }, 1)
            if (threeIndex > twoIndex && threeIndex > oneIndex) {
              threeIndex = 1;
                  if (oneIndex < twoIndex) {
                    oneIndex = 3,
                    twoIndex = 4;
                    document.getElementById("two").className = "card-container " + zIndex;
                    zIndex = "zIndex" + threeIndex;
                    document.getElementById("three").className = "card-container " + zIndex;
                  } else {
                    oneIndex = 4,
                    twoIndex = 3;
                    document.getElementById("two").className = "card-container " + zIndex;
                    zIndex = "zIndex" + threeIndex;
                    document.getElementById("three").className = "card-container " + zIndex;
                  }
                  zIndex = "zIndex" + oneIndex;
                  document.getElementById("one").className = "card-container " + zIndex;
                  zIndex = "zIndex" + twoIndex;
          }
          else {
            threeIndex = 4;
                  if (oneIndex < twoIndex) {
                    oneIndex = 2,
                    twoIndex = 3;
                    zIndex = "zIndex" + oneIndex;
                    document.getElementById("one").className = "card-container " + zIndex;
                    zIndex = "zIndex" + twoIndex;
                    document.getElementById("two").className = "card-container " + zIndex;
                  } else {
                    oneIndex = 3,
                    twoIndex = 2;
                    zIndex = "zIndex" + oneIndex;
                    document.getElementById("one").className = "card-container " + zIndex;
                    zIndex = "zIndex" + twoIndex;
                    document.getElementById("two").className = "card-container " + zIndex;
                  }
                  zIndex = "zIndex" + threeIndex;
                  document.getElementById("three").className = "card-container " + zIndex;
          }
          setTimeout(function() {
              $("#threea").css( "zIndex", threeIndex );
              $("#onea").css( "zIndex", oneIndex );
              $("#twoa").css( "zIndex", twoIndex );
          }, 601);
          setTimeout(function pushIn() {
            $("#threea").removeClass("out");
              $("#threea").css( "zIndex", threeIndex );
          }, 1000);
        }
      else if ($("#threea").hasClass("zIndex4")) {
          if (oneIndex < twoIndex) {
            oneIndex = 3,
            twoIndex = 4;
            zIndex = "zIndex" + oneIndex;
            document.getElementById("one").className = "card-container " + zIndex;
            zIndex = "zIndex" + twoIndex;
            document.getElementById("two").className = "card-container " + zIndex;
          }
          else {
            oneIndex = 4,
            twoIndex = 3;
            zIndex = "zIndex" + oneIndex;
            document.getElementById("one").className = "card-container " + zIndex;
            zIndex = "zIndex" + twoIndex;
            document.getElementById("two").className = "card-container " + zIndex;
          }
          threeIndex = 1;
        setTimeout(function pushOut() {
          $("#threea").addClass("out");
            $("#threea").css( "zIndex", 4 );
        }, 1);
        setTimeout(function() {
            $("#threea").css( "zIndex", 1 );
            $("#onea").css( "zIndex", oneIndex );
            $("#twoa").css( "zIndex", twoIndex );
        }, 601);
        setTimeout(function pushIn() {
          $("#threea").removeClass("out");
            $("#threea").removeClass("zIndex4");
            $("#threea").addClass("zIndex1");
        }, 1001);
        }
      }
}
