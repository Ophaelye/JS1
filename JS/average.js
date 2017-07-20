"use strict";

var data = [

  {
    id: 243,
    name: "George",
    scores: [76, 64, 10,67, 64]
  },
  {
    id: 123,
    name: "Billy",
    scores: [42, 100, 54,65, 32]
  },
  {
    id: 768,
    name: "Eude",
    scores: [93, 2, 56,78, 100]
  }
];

window.onload = function() {
  var html = "";
  html = "<table  class='table table-striped'> <tr><th> Nom</th> <th> Scores </th></tr>";

  for (var i = 0; i < data.length; i++) {

    html = html + "<tr><td>" + data[i].name + "</td> <td>" + data[i].scores + "</td> </tr>";

  }

  html += "</table>";

  document.querySelector("#list").innerHTML = html;
  document.querySelector("#list-average").innerHTML += "";
  document.querySelector("#list-best-scores").innerHTML += "";

}


//document.querySelector("#list-all".innerHTML) = "";
//document.querySelector("#list-all").innerHTML += "html 1";
// un objet possède lui-même une variable
// à partir de ces données:
//-afficher une table html contenant chaque les données avec une en-tête, le nom des utilisateurs et leurs scores, triés par nom d'utilisateurs
//- afficher une autre table html contenant le nom des utilisateurs et leur score moyen, triés par nom d'utilisateurs
//- afficher une table html contenant les 5 meilleurs scores et le nom de l'utilisateur, triés par ordre décroissant, puis par nom de user

// indice : pour lire le nom : user.name
// pour lire le tableau de scores : user.scores
