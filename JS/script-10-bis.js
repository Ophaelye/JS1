var POI = function(){
  var i1 = document.getElementById('one').value;
  var total = parseInt(i1)
  var result = document.getElementById('result');
  result.innerHTML = total;


if(one%2 == 0) {
  console.log("la valeur est paire");
}

else {
  console.log("la valeur est impaire")
}
}
/*c'est ici que ça doit merder obviously*/



/* si rien avant le if, il va être executé sans valeur, donc faux, donc le else va être affiché*/













/*var addition = function() {


  var i1 =document.getElementById('one').value;
  var i2 =document.getElementById('two').value;

  var total = parseInt(i1) + parseInt(i2);
  var resultat = document.getElementById('resultat');
  resultat.innerHTML= total;
}
*/
/* parseInt transforme une chaine de caractères en nombre*/
