
/* Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma  */
//-------------MAKE FUNCTION----------------------
function pali(user_word) {
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
function pari_o_dispari(chois_user) {
    if (chois_user == 'pari') {
        return valid_chois = true
    } else if (chois_user == 'dispari') {
        return valid_chois = false
    } else {
        alert('scelta non valida ,controlla ciò che hai scritto!!!!!')
        chois_user = prompt('Pari o Dispari?').toLowerCase()
    }
}
function valid_chois_number_1_and_5 (number_user){
    if (number_user <= 5 && number_user >= 1) {

    } else {
        alert('Il numero che hai scelto non è compreso tra 1 e 5 o non è un numero !!!!!!!!!!!!!')
        number_user = (Number(prompt('Scegli un numero da 1 a 5')))
    }
}
//-------------END MAKE FUNCTION------------------
/* 
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

 */
/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
 Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
  Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
 */
//l'utente sceglie pario o dispari
let chois_user = prompt('Pari o Dispari?').toLowerCase()
console.log(chois_user)
pari_o_dispari(chois_user)
let result_valid_chois = pari_o_dispari(chois_user)
//l'utente sceglie un numero
const number_user = (Number(prompt('Scegli un numero da 1 a 5')))
console.log(number_user)
valid_chois_number_1_and_5 (number_user)

//la CPU sceglie un numero random
const number_cpu = Math.round((Math.random() * 4) + 1)
console.log(number_cpu)
// Somma del numero utente con quello della CPU
const total_number = number_cpu + number_user
//verificare se il risultato è pari o dispari 
let pari
if (total_number % 2 == 0) {
    pari = true
} else {
    pari = false
}

//confrontare con la scelta dell'utente
if (result_valid_chois == pari) {
    console.log(' Baravo hai vinto ')
} else {
    console.log('Hai perso ');
}