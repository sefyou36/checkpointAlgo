let longueurphrase = 0;
let nombremots = 0;
let nombrevoyels = 0;

let phrase = "c'est une longue phrase qui fini par un point test plus de mots .";


    for(let i = 0;i < phrase.length; i++){
        longueurphrase++;
        
        if (phrase[i] === ' ') {
            nombremots++;

        }
        else if('aeyuio'.includes(phrase[i])){
            nombrevoyels++
        }
    } 
  

console.log("nombre de voyelles de la phrase:",nombrevoyels);
console.log("nombre de mots de la phrase:",nombremots);
console.log("longeure de la phrase:",longueurphrase);
