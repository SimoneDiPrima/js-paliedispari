/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/

function palWord(sentence){
    let result = ``;
    for(let i = sentence.length-1;i>= 0; i--){
    result += sentence[i];
    }
    
console.log(sentence);
console.log(result);
if(sentence === result){
    console.log(`la parola è palindroma`);
}
else{
    console.log(`la parola non è palindroma`);
}
    return result;
}

const palword = palWord(prompt(`scrivi una parola e io ti diro se questa è palindroma o no:`));

// esercizio 2:
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

let numberUser = parseInt(prompt(`scegli un numero da 1 a 5:`));
console.log(numberUser);

if(numberUser % 2 == 0){
    console.log(`ok hai scelto pari!`)
}
else{
    console.log(`ok hai scelto dispari!`);
}
function randomCpunumber(min=1 , max=5){
    const randomNumber = Math.floor(Math.random()*(max+1 - min)+min);
    return randomNumber;
}
const cpuNumber = randomCpunumber();
console.log(`il numero scelto per il computer sara:`+ cpuNumber);

const sum = numberUser + cpuNumber;
console.log(sum);

function isEven(){
    let total = false;
    if(sum % 2 === 0){
        total = true;
        console.log(`la somma dei due numeri e pari!`)
    }
    else{console.log(`la somma dei numeri è dispari!`)}
    return total;
}
    const somma = isEven();

    if(cpuNumber > numberUser){
        console.log(`Ha vinto il computer!`);
    }
    else if(cpuNumber === numberUser){
        console.log(`incredibile pareggio!!`)
    }
    else{
        console.log(`bravo hai vinto!!`);
    }


