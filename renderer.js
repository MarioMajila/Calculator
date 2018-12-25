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

let resultat = 0;

// Chargement des événements
LoadEventListener();
// ===================================================================================================================
// Initialisation des événements
// ===================================================================================================================

function LoadEventListener(){
    input.value = "0";
    // Chiffres
    bouton0.addEventListener('click', () => {
        if(input.value === "0"){
            input.value = input.value;
        }
        else{
            ajouterCaractere(bouton0.value)
        }
    });

    bouton1.addEventListener('click', () => {
        if(input.value === "0")
            input.value = "";
            
        ajouterCaractere(bouton1.value)
    });

    bouton2.addEventListener('click', () => {
        if(input.value === "0")
        input.value = ""
        
        ajouterCaractere(bouton2.value)
    });

    bouton3.addEventListener('click', () => {
        if(input.value === "0")
        input.value = ""
        
        ajouterCaractere(bouton3.value)
    });

    bouton4.addEventListener('click', () => {
        if(input.value === "0")
        input.value = ""
        
        ajouterCaractere(bouton4.value)
    });

    bouton5.addEventListener('click', () => {
        if(input.value === "0")
        input.value = ""
        
        ajouterCaractere(bouton5.value)
    });

    bouton6.addEventListener('click', () => {
        if(input.value === "0")
        input.value = ""
        
        ajouterCaractere(bouton6.value)
    });

    bouton7.addEventListener('click', () => {
        if(input.value === "0")
        input.value = ""
        
        ajouterCaractere(bouton7.value)
    });

    bouton8.addEventListener('click', () => {
        if(input.value === "0")
        input.value = ""
        
        ajouterCaractere(bouton8.value)
    });

    bouton9.addEventListener('click', () => {
        if(input.value === "0")
        input.value = ""
        
        ajouterCaractere(bouton9.value)
    });

    virgule.addEventListener('click', () => {
        if(input.value === "0"){
            input.value = input.value;
        }
        ajouterCaractere(virgule.value)
    });

    // Opération
    plus.addEventListener('click', () => {

        inputop.value = ("0")? "":input.value;
        ajouterOperation(input.value, plus.value)
    });
    
    moins.addEventListener('click', () => {
        
        inputop.value = ("0")? "":input.value;
        ajouterOperation(input.value, moins.value)
    });

    mult.addEventListener('click', () => {
        
        inputop.value = ("0")? "":input.value;
        ajouterOperation(input.value, mult.value)
    });

    div.addEventListener('click', () => {
        
        inputop.value = ("0")? "":input.value;
        ajouterOperation(input.value, div.value)
    });

    racine.addEventListener('click', () => {});

    puiss.addEventListener('click', () => {});

    cleaner.addEventListener('click', () => {
        clean()
    });

    egal.addEventListener('click', () => {
        ajouterOperation(input.value, "");
        resultat = calcul();
        input.value = resultat;
    });
}
// ===================================================================================================================
// Initialisation des fonctions
// ===================================================================================================================

// Ajouter un caractère à l'input des caractères
function ajouterCaractere(caractere){
    input.value += caractere;
}

// Ajouter une chaine représentant une opération au champ des opérations
function ajouterOperation(entree, operation){
    inputop.value += parseFloat(entree) + operation;
    input.value = 0;
}

function calcul(){
    let result = eval(inputop.value);
    return result;
}

// Reinitialisation des champs des sorties
function clean(){
    input.value = "0";
    inputop.value = "0";
}