// Initialisation des variables
// Zones d'affichages
const input = document.getElementById("input")
const inputop = document.getElementById("inputop")

// Chiffres
const bouton0 = document.getElementById("zero")
const bouton1 = document.getElementById("un")
const bouton2 = document.getElementById("deux")
const bouton3 = document.getElementById("trois")
const bouton4 = document.getElementById("quatre")
const bouton5 = document.getElementById("cinq")
const bouton6 = document.getElementById("six")
const bouton7 = document.getElementById("sept")
const bouton8 = document.getElementById("huit")
const bouton9 = document.getElementById("neuf")
const virgule = document.getElementById("virgule")

// Opérations
const egal = document.getElementById("egal")
const plus = document.getElementById("plus")
const moins = document.getElementById("moins")
const mult = document.getElementById("mult")
const div = document.getElementById("div")
const racine = document.getElementById("sqrt")
const puiss = document.getElementById("pow")
const cleaner = document.getElementById("clean")

// Chargement des événements
LoadEventListener();

// Initialisation des événements
function LoadEventListener(){
    // Chiffres
    bouton0.addEventListener('click', () => {});

    bouton1.addEventListener('click', () => {});

    bouton2.addEventListener('click', () => {});

    bouton3.addEventListener('click', () => {});

    bouton4.addEventListener('click', () => {});

    bouton5.addEventListener('click', () => {});

    bouton6.addEventListener('click', () => {});

    bouton7.addEventListener('click', () => {});

    bouton8.addEventListener('click', () => {});

    bouton9.addEventListener('click', () => {});

    virgule.addEventListener('click', () => {});

    // Opération
    plus.addEventListener('click', () => {});
    
    moins.addEventListener('click', () => {});

    mult.addEventListener('click', () => {});

    div.addEventListener('click', () => {});

    racine.addEventListener('click', () => {});

    puiss.addEventListener('click', () => {});

    cleaner.addEventListener('click', () => {});

    egal.addEventListener('click', () => {});
}