/*Založte si nový JavaScriptový program a na jeho začátek vložte následující seznam čísel. Budeme jej používat ve všech následujících úlohách.

const numbers = [
  -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
];

    Vypište do stránky všechna čísla.
    Vypište do stránky druhé mocniny všech čísel.
    Vypište do stránky pouze záporná čísla.
    Vypište do stránky absolutní hodnotu všech čísel.
    Vypište do stránky pouze sudá čísla.
    Vypište do stránky pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi.
    Vypište do stránky jak daleko je každé číslo v seznamu od čísla 5.
    Vypište do stránky druhé mocnicny vzdáleností všech čísel od čísla 5.
    Spočítejte, kolik je v seznamu záporných čísel.
    Spočítejte součet všech čísel v poli.
    Spočítejte průměr všech čísel v poli.
    Spočítejte součet všech kladných čísel v poli.*/


const numbers = [
    -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
]

//Všechna čísla
document.body.innerHTML += `<h2>Všechna čísla</h2>`
numbers.forEach((num) => {
    document.body.innerHTML += `<p>${num}</p>`
})

//Mocniny všech čísel
document.body.innerHTML += `<h2>Mocniny všech čísel</h2>`
numbers.forEach((num) => {
    document.body.innerHTML += `<p>${num * num}</p>`
})

//Záporná čísla
document.body.innerHTML += `<h2>Záporná čísla</h2>`
numbers.forEach((num) => {
    if (num < 0)
        document.body.innerHTML += `<p>${num}</p>`
})

//Absolutní hodnota všech čísel
document.body.innerHTML += `<h2>Absolutní hodnota všech čísel</h2>`
numbers.forEach((num) => {
    document.body.innerHTML += `<p>${Math.abs(num)}</p>`
})

//Vypište do stránky pouze sudá čísla.
document.body.innerHTML += `<h2>Sudá čísla</h2>`
numbers.forEach((num) => {
    if (num % 2 === 0)
        document.body.innerHTML += `<p>${num}</p>`
})

//Vypište do stránky pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi.
document.body.innerHTML += `<h2>Čísla, jejichž absolutní hodnota je dělitelná třemi</h2>`
numbers.forEach((num) => {
    if (Math.abs(num) % 3 === 0)
        document.body.innerHTML += `<p>${num}</p>`
})

// Vypište do stránky jak daleko je každé číslo v seznamu od čísla 5.
document.body.innerHTML += `<h2>Jak daleko je každé číslo daleko od čísla pět</h2>`
numbers.forEach((num) => {
    document.body.innerHTML += `<p>${Math.abs(num - 5)}</p>`
})

//Vypište do stránky druhé mocnicny vzdáleností všech čísel od čísla 5.
document.body.innerHTML += `<h2>Druhé mocniny vzdálenosti všech čísel od čísla 5</h2>`
numbers.forEach((num) => {
    document.body.innerHTML += `<p>${(num - 5) * (num - 5)}</p>`;
})

//Spočítejte, kolik je v seznamu záporných čísel.
let count = 0;
numbers.forEach(num => {
    if (num < 0) {
        count++;
    }
})
document.body.innerHTML += `<h2>Počet záporných čísel v seznamu: </h2>${count}`

//Spočítejte součet všech čísel v poli.
let total = 0

numbers.forEach(num => {
    total += num;
})
document.body.innerHTML += `<h2>Součet všech čísel je: </h2> ${total}`

//Spočítejte průměr všech čísel v poli.
const average = total / numbers.length
numbers.forEach(num => {
    total += num;
})
document.body.innerHTML += `<h2>Průměr všech čísel v poli je: </h2>  ${average}`

//Spočítejte součet všech kladných čísel v poli
let positiveSum = 0
numbers.forEach(num => {
    if (num > 0) {
        positiveSum += num;
    }
});
document.body.innerHTML += `<h2>Součet všech kladných čísel v poli je: </h2> ${positiveSum}`