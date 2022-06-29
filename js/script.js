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
