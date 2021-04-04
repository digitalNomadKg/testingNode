
// //internal
// const fs = require('fs');
// fs.copyFileSync("text.txt", "text2.txt");

//external
let superheroes = require('superheroes');
let mySuperHeroall = superheroes.all;
// console.log(mySuperHeroall);
//=> ['3-D Man', 'A-Bomb', …]
let mySuperheroName = superheroes.random();
console.log("Superheros name is: "+mySuperheroName);
//=> 'Spider-Ham'


//supervillains
const supervillains = require('supervillains');
let mySupervillainsAll = supervillains.all;
// console.log(mySupervillainsAll);
//=> ['Abattoir', 'Able Crown', …]

let mySuperVillains = supervillains.random();
console.log("Supervillains name is: " + mySuperVillains);