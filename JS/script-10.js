var addition = function() {


  var i1 =document.getElementById('one').value;
  var i2 =document.getElementById('two').value;

  var total = parseInt(i1) + parseInt(i2);
  var resultat = document.getElementById('resultat');
  resultat.innerHTML= total;
}

/* parseInt transforme une chaine de caractères en nombre*/
