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




Code Question 2
const hamburger = {
    name: "Cheese Burger",
    weight: 250,
    ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
};

const secondBurger = { ...hamburger };
secondBurger.ingredients[0] = "Salad";

console.log(hamburger.ingredients[0]); // ?
console.log(secondBurger.ingredients[0]); // ?
P.S.: Ricordati che gli Array, come gli oggetti, sono dei Reference Type(Tipi di Riferimento)!
Senza lanciare il codice, riesci a prevedere cosa viene stampato in console ?
    Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?


Viene usato lo spread operator che copia e clona tutto tranne oggetti annidati ed array e funzioni.Perciò ha modificato la proprietà ingredients su entrambi.
Essendo la proprietà ingredients un oggetto annidato. 





Code Question 3
const hamburger = {
    name: "Cheese Burger",
    weight: 250,
    maker: {
        name: "Anonymous Chef",
        restaurant: {
            name: "Hyur's Burgers",
            address: "Main Street, 123",
            isOpen: true,
        },
        age: 29
    }
};

const secondBurger = structuredClone(hamburger);
const thirdBurger = structuredClone(hamburger);
Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? 2. in tot sono 3


ogni oggetto contiene 2 oggetti annidati. 





Code Question 4
const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
}

const restaurant = {
    name: "Hyur's Burgers",
    address: {
        street: 'Main Street',
        number: 123,
    },
    openingDate: new Date(2025, 3, 11),
    isOpen: false,
};
Qual è il metodo migliore per clonare l’oggetto chef, e perché ? Lo spread operator perchè è l'unico che copia e crea funzioni.
Qual è il metodo migliore per clonare l’oggetto restaurant, e perché ? structuredClone, perchè è l'unico che copia e crea oggetti speciali come Date