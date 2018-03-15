// Il programma deve scegliere una parola a caso da una lista di parole e comunicare da
// quante lettere è formata.
// L'utente a questo punto può deve inserire una parola in un prompt, cercando di indovinarla.
// L'utente ha a disposizione 7 tentativi per indovinare.
// Parte Bonus: ogni due tentativi falliti dall'utente,
// il computer deve svelare una lettera (a caso) che compone la parola

var words = ["ciao", "hello", "hola", "hallo", "bog", "hej", "czesc", "ahoj", "shalom", "merhaba" ];
var tentativi = 7;

var index = Math.floor( (Math.random() * words.length) );
console.log(words[index]);

alert("Devi indovinare una parola di " + words[index].length + " lettere");

// Il ciclo viene eseguito finchè la parola non corrisponde a quella da indovinare, e finchè
// ci sono ancora tentativi disponibili
do {

   // Viene verificato il numero di tentativi rimasti.
   // al 3°, al 5° e al 7° tentativo viene svelata una lettera
   if ( (tentativi < 7) && ( (tentativi % 2) != 0)) {
      alert("INDIZIO:\nLa parola contiene questa lettera: " + svelaLettera( words[index] ) );
   }

   var userWord = prompt("\nTentativi rimasti: " + tentativi + "\n\nInserisci la parola: ");

   if ( userWord == words[index] ) {
      alert("Esatto hai indovinato la parola");
   } else {
      alert("Sbagliato! non è la parola giusta. RIPROVA!");
      tentativi--;
   }

   if(tentativi == 0){
      alert("GAME OVER: Hai finito i tentativi!");
   }

} while ( (userWord != words[index]) && (tentativi != 0) );

// Funzione che riceve una stringa in ingresso e restituisce un suo carattere casuale
function svelaLettera(parola) {
   var index = Math.floor( (Math.random() * parola.length) );
   return parola.charAt(index);
}
