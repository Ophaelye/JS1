var makeGreen = function(div) {
  div.style = 'background-color:green;';
}
  var resetDiv = function(div) {
    div.style = '';

  }

var allGreen = function() {
  redgogreen();
  bluegogreen();
}

var redgogreen = function() {
  var divs = Array.from(document.getElementsByTagName('red'));
  divs.forEach (makeGreen);
  }

    var bluegogreen = function() {

      var divs = Array.from(document.getElementsByClassName('blue'));
      divs.forEach(makeGreen);
    }

    var bluegogreen = function() {
      var divs =
      Array.from(document.getElementsByClassName('blue'));
      divs.forEach (makeGreen);
    }


    var reset = function() {

      var divs = Array.from(document.getElementsByTagName('div'));
      divs.forEach (resetDiv);
    }
