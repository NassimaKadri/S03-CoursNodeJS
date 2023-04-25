//Permet d'inporter un module maison
//Il a besoin du chemin et du .js
const boite = require("./modules/boite.js")

//Permet d'inporter un module natif (fournit de base par nodejs)
//Il n'a pas besoin du chemin absolu ou relatif et du .js
//Permet d'interagir avec l'utilisateur
const readline = require("readline")


//Configuration du canal de communication
const configuration = 
{
    input:process.stdin, //clavier //entrée standard
    output:process.stdout //console //sortie standard
}

//Creation du canal de communication
const canalDeCommunication = readline.createInterface(configuration)//Créer genre un prompt


console.log("Donne moi le numéro du jour de la semaine ?")
//Demande a l'utilisateur de saisir une ligne
//Lorsqu'il appuie sur la touche "Entrée"
//La fonction est executée
// on equivalent de addEventListener
canalDeCommunication.on('line',(saisie) => { 
    
    const numero = Number(saisie)

    switch(numero)
    {
        case 1 : console.log("Lundi"); break;
        case 2 : console.log("Mardi"); break;
        case 3 : console.log("Mercredi"); break;
        case 4 : console.log("Jeudi"); break;
        case 5 : console.log("Vendredi"); break;
        case 6 : console.log("Samedi"); break;
        case 7 : console.log("Dimanche"); break;
        default: console.log("Retente ta chance noob !"); break;
    }
})







