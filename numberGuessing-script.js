// Il programma deve scegliere un numero a caso da 1 a 100 e
// l'utente deve indovinarlo.
// L'operazione si ripete fino a quando il giocatore indovina,
// ad ogni errore del giocatore, il computer deve dire se la cifra
// inserita è più alta o più basse di quella da indovinare.

var randomNumber = Math.floor( (Math.random() * 100) + 1 );
console.log(randomNumber);
var userNumber = 0;

   while ( userNumber != randomNumber ) {

      do {
         userNumber = parseInt( prompt("Inserisci un numero tra 1 e 100: ") );
         console.log(userNumber);
         if( (userNumber < 1) || (userNumber > 100) ) {
            alert("ERRORE: Devi inserire un numero 1 <= n <= 100 Riprova!");
         }
      } while ( (userNumber < 1) || (userNumber > 100) );


      if ( userNumber == randomNumber) {
          alert("ESATTO! Hai indovinato il numero");
      }  else if ( userNumber < randomNumber ){
          alert("SBAGLIATO! Hai inserito un numero minore di quello corretto. RIPROVA!");
      } else {
          alert("SBAGLIATO! Hai inserito un numero maggiore di quello corretto. RIPROVA!");
      }

   }
