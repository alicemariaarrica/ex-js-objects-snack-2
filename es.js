Code Question 1
const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = 'Double Cheese Burger';
secondBurger.weight = 500;

console.log(hamburger.name); // ?
console.log(secondBurger.name); // ?
Senza lanciare il codice, riesci a prevedere cosa viene stampato in console ?
    Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?


visto che viene usata una copia di riferimento, ogni modifica fatta varrà per entrambi gli oggetti. 
Datocbe l'ultima modifica è questa: 

secondBurger.name = 'Double Cheese Burger';
secondBurger.weight = 500; 

entrambi gli oggetti avranno come proprietà name = Double Cheese Burger

