//Définition du module
const boite = 
{
    nom : "Boite à bordel",
    couleur: "Noire",
    longueur: 11,
    largeur: 7,
    profondeur: 6,
    getBruitDeLaBoite:()=>{console.log("Boom")},
    getDescription:()=> `nom : ${boite.nom} couleur : ${boite.couleur} ....`
}
//On rend le module exportable
module.exports = boite