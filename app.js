//Alerte du prenom
let prenomInput = document.querySelector("#prenom");

function btnprenom() {
// let Bprenom = document.querySelector("#prenom").value;
alert("Bonjour" + " " + prenomInput.value);
}

let Btnprenom = document.querySelector("#btnprenom");
Btnprenom.addEventListener("click", btnprenom);


//Alerte de l'age
let ageInput = document.querySelector("#age");

function btnage() {
    if (ageInput.value >= 150) {
        alert("vous êtes mort");
    }
    else if (ageInput.value <= 0) {
        alert("vous êtes pas né");
    }
    else {
        alert("vous avez" + " " + ageInput.value + " " + "ans");
    }
}

let Btnage = document.querySelector("#btnage");
Btnage.addEventListener("click", btnage);


//Alerte de la ville
let villeInput = document.querySelector("#ville");

function btnville() {
alert("vous habitez" + " " + villeInput.value);
}

let Btnville = document.querySelector("#btnville");
Btnville.addEventListener("click", btnville);


//Calcul salaire plus prime
let salaire = document.querySelector("#salaire");

let prime = document.querySelector("#prime");
let resultat = document.querySelector("#resultat");

let A = salaire;
let B = prime;
let C = resultat;
function calculRevenus() {
resultat = parseInt(salaire) + parseInt(prime);
resultat.textContent = resultat;
}

salaire.addEventListener("#salaire",calculRevenus);
prime.addEventListener("#prime",calculRevenus);


//Changement de couleur avec boutons
function changeCouleurRouge() {
document.querySelector("#textecouleur").style.color = "red";
}

let Brouge = document.querySelector("#btnrouge");
Brouge.addEventListener("click", changeCouleurRouge);



function changeCouleurVert() {
document.querySelector("#textecouleur").style.color = "green";
} 

let Bvert = document.querySelector("#btnvert");
Bvert.addEventListener("click", changeCouleurVert);



function changeCouleurBleu() {
document.querySelector("#textecouleur").style.color = "blue";
}
   
let Bbleu = document.querySelector("#btnbleu");
Bbleu.addEventListener("click", changeCouleurBleu);



//Le texte change en hello rouge
document.querySelector("#lorem").textContent = "hello";
document.querySelector("#lorem").style.color = "red";