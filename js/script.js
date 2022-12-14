console.log('JS OK');

// Data una lista della spesa, stampare in pagina gli elementi della lista individualmente 
// con un ciclo while.


// Creo array lista spesa

const shoppingList = ['pane', 'olio evo', 'parmigiano', 'zucca', 'rosmarino'];

console.log(shoppingList);


//Prendo elemento dalla pagina

const list = document.getElementById('list');


// Inizializzo il contatore

let i = 0;


// Creo ul + stampa con while

let ul = "<ul>";

while (i < shoppingList.length) {
    console.log(shoppingList[i]);

    ul += "<li>" + shoppingList[i] + "</li>"

    i++;

}

ul += "</ul>";


// Stampo in pagina 

list.innerHTML += ul;

