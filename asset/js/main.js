
/* Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma  */
/* function pali(user_word) {
    //scomporre la strinca in un arrei
    const user_word_split = user_word.split('')
    console.log(user_word_split)
    //invertire l'orndine di lettura dell'array
    const invers_user_word_split = user_word_split.reverse('')
    console.log(invers_user_word_split)
    const invers_user_word = invers_user_word_split.join('')
    console.log(invers_user_word);
    console.log(user_word);
    // confrontarla con la parola inserita  se è uguale allora è un palindromo
    if (user_word == invers_user_word) {
        return result = true;
    } else if (user_word != invers_user_word) {
        return result = false;
    }
}
//-------------END MAKE FUNCTION------------------
let next = true
//inserimento parola da parte dell'utente
while (next) {
    const user_word = prompt('scegli una parola !')
pali(user_word)
console.log(pali.value)
if (result) {
    console.log('é un palindromo');
} else {
    console.log('non è un palindromo');
}
next = confirm('vuoi continuare?')
}
//-------------MAKE FUNCTION----------------------
 */
/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
 Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
  Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
 */
//l'utente sceglie pario o dispari
let chois_user = prompt('Pari o Dispari?').toLowerCase()
console.log(chois_user)
let valid_chois
if(chois_user == 'pari'){
    valid_chois = true
}else if(chois_user == 'dispari'){
    valid_chois = false
}else{
    alert('scelta non valida ,controlla ciò che hai scritto!!!!!')
    chois_user = prompt('Pari o Dispari?').toLowerCase()
}
//l'utente sceglie un numero
const number_user = (Number(prompt('Scegli un numero da 1 a 5')))
console.log(number_user)
let valid_number
if(number_user<= 5 && number_user >= 1){
    valid_number = true
}else{
    valid_number = false
    alert('Il numero che hai scelto non è compreso tra 1 e 5 o non è un numero !!!!!!!!!!!!!')
    number_user = (Number(prompt('Scegli un numero da 1 a 5')))
}

//la CPU sceglie un numero random

// Somma del numero utente con quello della CPU
//verificare se il risultato è pari o dispari 
//confrontare con la scelta dell'utente