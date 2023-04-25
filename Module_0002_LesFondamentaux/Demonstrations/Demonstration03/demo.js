//Permet d'importer le module boite
//Le module boite est un module 'maison'
//C'est la raison pour laquelle j'indique son chemin
const boite = require("./boite.js")
//Permet d'importer le module example
const example = require("./example.js")

//Utilisation des modules :

console.log(boite.getDescription())

example.criDeGuerre()

