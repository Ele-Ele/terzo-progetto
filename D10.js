/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log("----Esercizio a----");
let n1 = 10;
let n2 = 20;
const sum = n1 + n2;
console.log(sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
console.log("----Esercizio b----");
const random = Math.floor(Math.random() * 21);
console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
console.log("----Esercizio c----");
const oggetto = {
  nome: "Eleonora",
  cognome: "Proietti",
  age: "24",
};
const me = oggetto;
console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
console.log("----Esercizio d----");
delete oggetto.age;
console.log(oggetto);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
console.log("----Esercizio e----");
const skills = ["Javascript", "Java"];
oggetto.linguaggiProgrammazione = skills;
console.log(oggetto);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log("----Esercizio f----");
skills.push("Python");
console.log(oggetto);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.log("----Esercizio g----");
skills.pop();
console.log(oggetto);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log("----Esercizio 1----");
function dice(min, max) {
  return Math.ceil(Math.random() * (max - min));
}
console.log(dice(1, 6));

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log("----Esercizio 2----");
function whoIsBigger(x, y) {
  if (x > y) {
    return x;
  } else if (y > x) {
    return y;
  }
}
console.log(whoIsBigger(14, 32));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log("----Esercizio 3----");
function splitMe(st) {
  const array = st.split(" ");
  return array;
}
console.log(splitMe("ciao a tutti"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
console.log("----Esercizio 4----");

function deleteOne(str, bool) {
  if (bool === true) {
    return str.slice(1);
  } else if (bool === false) {
    return str.slice(0, -1);
  }
}
console.log(deleteOne("ciao", true));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
console.log("----Esercizio 5----");

function onlyLetters(st) {
  let stRemoveNumber = /3/.exec(st);
  let newSt = stRemoveNumber;
  return newSt;
}

console.log(onlyLetters("Io ho 3 cani"));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
console.log("----Esercizio 6----");

function isThisAnEmail(string) {
  let regexEmailValida =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regexEmailValida.test(string);
}

console.log(isThisAnEmail("eleonora98proietti@gmail.com"));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log("----Esercizio 7----");

const whatDayIsIt = new Date("December 15, 2022");
let giornoSettimana = whatDayIsIt.getDay();

console.log(giornoSettimana);

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log("----Esercizio 8----");

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
console.log("----Esercizio 9----");

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
console.log("----Esercizio 10----");

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
console.log("----Esercizio 11----");

const persona = {
  nome: "Mario",
  cognome: "Rossi",
};

function deleteProp(st, persona) {
  if (persona.nome === st) {
    delete persona.nome;
  } else if (persona.cognome === st) {
    delete persona.cognome;
  }
  return persona;
}

console.log(deleteProp("Mario", persona));

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
console.log("----Esercizio 12----");

function newestMovie(array) {
  let filmPiùRecente = array[0];

  array.forEach((element) => {
    if (parseInt(filmPiùRecente.Year) < parseInt(element.Year))
      filmPiùRecente = element;
  });
  return filmPiùRecente;
}

console.log(newestMovie(movies));

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
console.log("----Esercizio 13----");

const countMovies = (array) => {
  return array.length;
};
console.log(countMovies(movies));

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
console.log("----Esercizio 14----");

const onlyTheYears = (array) => {
  return array.map((element) => element.Year);
};

console.log(onlyTheYears(movies));

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
console.log("----Esercizio 15----");

function onlyInLastMillennium(array) {
  let film = [];
  for (let i = 0; i < array.length; i++) {
    if (parseInt(array[i].Year) < 2000) {
      film.push(array[i]);
    }
  }
  return film;
}
console.log(onlyInLastMillennium(movies));

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
console.log("----Esercizio 16----");

const sumAllTheYears = movies.reduce((acc, cur) => {
  if (!isNaN(parseInt(cur.Year))) {
    return acc + parseInt(cur.Year);
  }
}, 0);

console.log(sumAllTheYears);

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
console.log("----Esercizio 17----");

/*function searchByTitle(string) {
  let filmIncludesString = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.includes(string)) {
      filmIncludesString.push(movies[i]);
    }
  }
  return filmIncludesString;
}

console.log(searchByTitle("avengers"));*/ //ERRORE

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
console.log("----Esercizio 18----");

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
console.log("----Esercizio 19----");

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
console.log("----Esercizio 20----");

const container = document.getElementById("container");

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
console.log("----Esercizio 21----");

const table = document.getElementsByTagName("td");

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
console.log("----Esercizio 22----");

const tuttiTd = document.querySelectorAll("td");

tuttiTd.forEach((td) => console.log(td.innerText));

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
console.log("----Esercizio 23----");

const tuttiLink = document.getElementsByTagName("link");

const tuttiLinkArray = Array.from(tuttiLink);

tuttiLinkArray.forEach((link) => link.add(".redBackround"));

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
console.log("----Esercizio 24----");

const newLi = document.createElement("li");
newLi.classList.add("myList");
document.getElementById("myList").appendChild(newLi);

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
console.log("----Esercizio 25----");

document.getElementById("myList").value = "";

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
console.log("----Esercizio 26----");

const tuttiTr = document.getElementsByTagName("tr");

const tuttiTrArray = Array.from(tuttiTr);

tuttiTrArray.forEach((tr) => tr.add(".test"));

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
console.log("----Esercizio 27----");
/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
console.log("----Esercizio 28----");
/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
console.log("----Esercizio 29----");

/*function isItPrime(n) {
  if (n % 1 === 0 && n % n === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isItPrime());*/ //SBAGLIATO

/* Questo array viene usato per gli esercizi. Non modificarlo. */
