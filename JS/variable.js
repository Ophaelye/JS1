//activation du mode strict//
"use strict";

//déclarations de variables//
var number = 42;
var number2 = 3.14;
var boolean = true;
var boolean2 = false;
var text = "hello world !";
var myArray = [number, number2, boolean, boolean2, text];


//syntaxe alternative pour définir un tableau -> var myArray2 = new Array(number, number2, boolean, boolean2, text);//

document.write(number + "<br/>")
document.write(number2 + "<br/>")
document.write(text + "<br/>")

//document.write rajoute du code dans le body//

//structure de contrôle//

if (boolean == true) {
  document.write('<div id ="boolean-value"> boolean est égal à true <br/>');
}

if (boolean2 != true) {
  document.write("boolean2 est différent de true <br/>");

}


for (var i =0; i < myArray.length; i++){
  if (myArray[i] != false && myArray[i] != true){
      document.write(myArray [i] + "<br/>");
  }

}

//js lit la var i=0, si i est plus petit que la taille du tableau, il passe direct au code entre {}, au premier tour i = 0, ensuite i égal 1 etc
