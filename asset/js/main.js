
/* Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma  */

//inserimento parola da parte dell'utente
const user_word = prompt('scegli una parola !')
//scomporre la strinca in un arrei
const user_word_split = user_word.split('')
console.log(user_word_split)
//invertire l'orndine di lettura dell'array
const invers_user_word_split = user_word_split.reverse('')
console.log(invers_user_word_split)
const invers_user_word = invers_user_word_split.join('')

// confrontarla con la parola inserita  se è uguale allora è un palindromo
if(invers_user_word == user_word){
    console.log('è un palindromo')
}else{
    console.log('non è un palindromo')
}

/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
 Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
  Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
 */