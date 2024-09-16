// ФУНКЦИИ



// ОБЪЯВЛЕНИЕ ФУНКЦИИ 

// Синтаксис
function nameFunction() {
    // тело функции
}
//в начале идёт function, затем имя функции, затем параметры (не обязательны) и тело функции



// ВЫЗОВ ФУНКЦИИ
nameFunction()
// для вызова фунции указываем её имя



// ЛОКАЛЬНЫЕ, ВНЕШНИЕ И ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ

// Локальные переменные
function nameFunction() {
    let message = "hello";
    console.log(message);
}
nameFunction() // hello
console.log(message) // error
// переменные объявленные внутри функции, работают только внутри функции

// Внешние переменные
let message = "hello";
function nameFunction() {
    let message = "hi";
    console.log(message);
}
nameFunction(); // hi
console.log(message); // hello
// внешние переменные не изменяются если, объявлять их внутри функции

// Глобальные переменные
let message = "hello";
function nameFunction() {
    message = "hi";
    console.log(message)
}
nameFunction(); // hi
console.log(message); // hi
// глобальные переменные объявляются снаружи функции и могут переприсваивать значения внутри функции если их не объявлять



// ПАРАМЕТРЫ

function nameFunction(from, text) {
    console.log(from + ": " + text);
}
nameFunction("Игорь", "Привет"); // Игорь: Привет
// при вызове функции мы указываем параметры "Игорь", "Привет", затем они передаются в функию в виде аргументов и используются в ней



// ЗНАЧЕНИЯ ПО УМОЛЧАНИЮ
function nameFunction(from, text) {
    console.log(from + ": " + text);
}
nameFunction("Игорь"); // Игорь: undefined
// если не указан параметр, то он по умолчанию становится undefined
function nameFunction(from, text = "Привет") {
    console.log(from + ": " + text);
}
nameFunction("Игорь"); // Игорь: Привет
// в параметрах фунции можно зать параметр по умолчанию