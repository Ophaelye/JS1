//activation du mode strict//
"use strict";

//déclarations et initialisation d'un tableau vide
var myArray = [];
//déclarations et initialisation d'un tableau avec 3 éléments
var myArray2 = [123, 42, 3.14, "hello"];

//inspection des tableaux dans la console
console.log(myArray);
console.log(myArray2);

//ajout d'éléments dans un tableau
myArray.push(123);
myArray.push(42);
myArray.push("hello");
myArray.push(3.14);

//afficher le premier élément d'un tableau
if (myArray.length > 0) {
  console.log(myArray[0]);
}

//afficher la taille d'un tableau
console.log(myArray.length);

//afficher le dernier élément d'un tableau
if (myArray.length > 0) {
console.log(myArray[myArray.length - 1]);
}

//modifier le premier élément
if (myArray.length > 0) {
  myArray[0] = 1;
}

// modifier le dernier élément
if (myArray.length > 0) {
  myArray[myArray.length - 1] = "hey";
}

//supprimer le deuxième élément d'un tableau

  myArray.splice(1,1);
  console.log(myArray);


//supprimer la valeur 3.14 du tableau

  myArray.splice(1,1);
  console.log(myArray);
