"use strict";

function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

var stock = getRandomArbitrary(0, 150);
console.log(stock);
// afficher dans la console
// "stock indisponible" si stock le stock est a 0
 // "stock en faible quantité" si le stock est inferieur a 50
 // "stock disponible" si le stock est suprerieur a 50

 if (stock > 50) {
   document.write('<div>Stock Disponible</div>');
 }  else if (stock < 50 && stock > 0) {
   document.write('<div>Stock en faible quantité</div>');
 }  else {
   document.write('<div>Stock indisponible</div>');
}

// afficher dans la commande
// "commande en cours" si hasValidAddress et hasValidAgrement sont vrais
// "vous devez renseigner une adresse" si hasValidAddress est faux
// "vous devez cochez la case condition de vente" si hasValidAgrement est faux
// "vous devez renseigner un adresse et vous devez cochez la case de condition de vente" si hasValidAgrement et hasValidAddress sont faux

function getRandomArbitrary2(min, max) {
  return Math.round(Math.random());
}

var hasValidAddress = getRandomArbitrary2(0, 1);
var hasValidAgrement = getRandomArbitrary2(0, 1);
console.log(hasValidAgrement);
console.log(hasValidAddress);

if (hasValidAgrement == false && hasValidAddress == false) {
  document.write('<div>Vous devez renseigner une adresse et vous devez cochez la case condition de vente</div>');
} else if (hasValidAddress == false) {
  document.write('<div>Vous devez renseigner une adresse</div>');
} else if (hasValidAgrement == false) {
  document.write('<div>Vous devez cocher la case condition general de vente</div>');
} else {
  document.write('<div>Commande en cours</div>');
}

//exo soutien

var hasCreditCard = false;
var accountBalance = 5;
var itemCost = 100;

// vérifier que l'utilisateur possède un cb ou que son compte perso est suffisamment approvisionné
// s'il possède une cb et un compte interne, on privilégie le compte interne
// les messages : "vous n'avez pas de moyen de paiement" s'il n'y a pas de carte et que le compte perso est à 0
//"votre compte perso n'est pas assez approvisionné, il vous manque x" si le compte n'est pas approvisionné et qu'il n'y a pas de cb
//"votre compte perso a été débité de x, le nouveau solde est de Y" si le compte perso est suffisamment approvisionné
//"vous allez être redirigé sur la page de paiement de votre banque" si le compte perso n'est pas suffisamment approvisionné et qu'il y a cb

/*if (!hasCreditCard && !accountBalance) {
  document.write('<div> Vous n\'avez pas de moyen de paiement</div>');
}

else if (hasCreditCard && accountBalance) {
  document.write('<div> Carte bancaire et compte interne ok</div>');

}

else if (hasCreditCard && !accountBalance) {
  document.write('<div> Vous allez être redirigé vers votre banque</div>');
}

else if (itemCost> accountBalance) {
  document.write('votre compte n\'est pas assez approvisionné il vous manque' + (accountBalance - itemCost));
}

else if(!accountBalance) {
  document.write('Votre compte perso n\'est pas assez approvisionné, il vous manque' + (accountBalance - itemCost));
}

else {
  document.write( 'Votre compte a été débité de' + (itemCost), 'le nouveau solde est de' + (itemCost - accountBalance));
}
*/

//correction

if (!hasCreditCard && accountBalance == 0) {
  console.log("vous n'avez pas de moyen de paiement");
} else if (accountBalance >= itemCost) {
  console.log("votre compte perso a été débité de" + itemCost +", le nouveau solde est" + (accountBalance - itemCost));
} else if (!hasCreditCard && accountBalance < itemCost) {
  console.log("votre compte perso n'est pas assez approvisionné, il vous manque" + (itemCost - accountBalance));
} else if (hasCreditCard && accountBalance > itemCost) {
  console.log("vous allez être redirigé vers votre banque");
}

var authenticatedWithCreditEmail = false;
var authenticatedWithCreditPhone = true;

if (authenticatedWithCreditEmail || authenticatedWithCreditPhone) {
  console.log("vous êtes authentifié");
}

else {
  console.log("vous n'êtes pas authentifié");
}

// sur un site de e-commerce, user doit fournir au moins un mail ou un num de tel pour confirmer la commande
// vérifier s'il peut, sinon "vous devez fournir au moins une des deux infos"

var hasEmail = false;
var hasPhone = false;

if (hasEmail || hasPhone) {
  console.log("Commande confirmée");
}

else {
  console.log("Vous devez fournir au moins une des deux informations demandées");
}
