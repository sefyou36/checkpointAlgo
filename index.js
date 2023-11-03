let longueurphrase = 0;
let nombremots = 0;
let nombrevoyels = 0;

let phrase = "shortA sentence delivers a powerful message with concise and effective language.  short sentence is a shanghai-based womenswear brand founded in 2015. the brand pays homage to modern women through a collection of comfortable and timeless essentials. commonplace and banal elements in everyday life inspire short sentence to design understated yet evocative pieces  and pursue life-affirming fashion.";


    for(let i = 0;i < phrase.length; i++){
        if(phrase[i] !==' ' )
        longueurphrase++;
         }
    for(let i = 0;i < phrase.length; i++){     
        if (phrase[i] === ' ') {
            nombremots++;
             }
        }


   for (let i = 0; i < phrase.length; i++) {
            if(phrase[i] ===  'a'|| phrase[i] === 'e'|| phrase[i] === 'y' || phrase[i] === 'u' || phrase[i] === 'i'|| phrase[i] === 'o' ){
                nombrevoyels++;
            }

   }
  
  

console.log("nombre de voyelles de la phrase:",nombrevoyels);
console.log("nombre de mots de la phrase:",nombremots);
console.log("longeure de la phrase:",longueurphrase);


// let perfectParentieses  = "(((((((((((((())()))(()()()))))))))))))("

// let open = 0;
// let close = 0;

// for(let i=0; i < perfectParentieses.length; i++){
     
   
//     if(perfectParentieses[i] === "("){
//         open++;
//     }    else if (perfectParentieses[i] === ")"){
//         close++;
//     }
// }
// console.log("open",open);
// console.log("close",close);