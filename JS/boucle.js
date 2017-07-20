//activation du mode strict//
"use strict";

var index = 0
while (index < 10) {
  console.log("ok");
  index++;
}

//same que

for (var index = 0; index < 10; index++); {
  console.log("ok");
}




var myArray = [123, 42, 3.14, 100, 1, -2];

// boucle for avec index
for (var i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

// boucle for commençant par la fin
for (var i = myArray.length -1; i >= 0; i--) {
  console.log(myArray[i]);
}

//boucle for in (pour tous les index dans le tableau)
for (var i in myArray) {
  console.log(i);
}

//boucle for of
for (var value in myArray) {
  console.log(value);
}

//afficher les nombres supérieurs à 50
for (var i = 0; i < myArray.length; i++) {
  if (myArray[i]> 50) {
    console.log(myArray[i]);
  }
}
//afficher les nombres compris entre 0 et 50
for (var i = 0; i < myArray.length; i++) {
  if (myArray[i]> 0 && myArray[i]< 50) {
    console.log(myArray[i]);
  }
}

//afficher les nombres à virgule
for (var value of myArray){
  if (!Number.isInteger(value)){
    console.log(value);

  }
}

//méthode alternative pour virgule
for (var value of myArray){
  if (value - Math.round(value)!=0){
    console.log(value);
  }
}
