var allGreen = function() {

      var div = document.getElementsByTagName('div');
      for (i=0; i<div.length; i++) {
        div[i].style = 'background-color: green;';
      }
    }

    var redgogreen = function() {

      var div = document.getElementsByClassName('red');
      for (i=0; i<div.length; i++) {
        div[i].style = 'background-color: green;';
      }
    }

    var bluegogreen = function() {
      var div =
      document.getElementsByClassName('blue');
      for (i=0; i<div.length; i++) {
        div[i].style = 'background-color: green'
      }
    }


    var reset = function() {

      var div = document.getElementsByTagName('div');
      for (i=0; i<div.length; i++) {
        div[i].style = '';
      }
    }
