console.log('Log, ANESRIF');
console.error('erreur, ANESRIF');
console.warn('warning, ANESRIF');


const n="mouh";
const age=27;

console.log("his name is " +n + "and age is "+age);
const ar2 = ["a1","a2"];
ar2.push("a6");
console.log(ar2);
ar2.unshift("aaabb");
console.log(ar2);

const article=[
    {
        id:1,
        nom:"momo",
        prenom:"mimo"
    },
    {
        id:2,
        nom:"lolo",
        prenom:"lilo"
    },

];
console.log(article)

// To parse this data:
//
//   const Convert = require("./file");
//
//   const welcome = Convert.toWelcome(json);

// Converts JSON strings to/from your types
function toWelcome(json) {
    return JSON.parse(json);
}

function welcomeToJson(value) {
    return JSON.stringify(value);
}

const artjason = welcomeToJson(article);
console.log(artjason);

console.log(JSON.stringify(article));

for (let i = 0;  i< 5; i++) {
    console.log(i);
    
}
