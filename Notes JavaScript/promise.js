// PROMISE

// Что такое Promise?
// Promise - это специальный объект, который содержит своё состояние.
// Состояния: pending - ожидание; fulfilled - выполнен успешно; rejected - выполнено с ошибкой



// СИНТАКСИС PROMISE

let promise = new Promise(function(resolve, reject) {
    //тело функции
});

// в ней можно делать любые асинхронные операции
// при завершеннии, нужно вызвать resolve или reject (колбэки)
// resolve - при успешном выполнении выдаёт результат
// reject - при ошибке выдаёт ошибку



// СИНТАКСИС ПОТРЕБИТЕЛЕЙ: THEN, CATCH

// Then
promise.then(
    function(result) {/* обработает успешное выполнение*/},
    function(error) {/* обработает ошибку */}
);

// Catch
let promise = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("Ошибка")), 1000);
});
promise.catch(console.log)



// ПРИМЕР

let promise = new Promise(function(resolve, reject) { // создаём объект promise
    setTimeout(() => resolve("result"), 1000); // переводит промис в состояние fulfilled с результатом "result"
});
promise.then( // promise.then навешивает обработчики на успешный результат или ошибку
    result => console.log("Fulfiled: " + result), // result - аргумент resolve 
    error => console.log("Rejected: " + error.message) // error - аргумент reject
);
// в итоге выведется fulfilled: result



// ВЫЗОВ RESOLVE/REJECT СРАЗУ
let promise = new Promise(function(resolve, reject) {
    resolve(123); // мгновенно выдаст результат
})



// PROMISE ПОСЛЕ REJECT/RESOLVE - НЕИЗМЕННЫ
let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("result"), 2000); // через 2 секунды будет проигнорирован
  setTimeout(() => reject(new Error("ignored")), 1000); // через 1 секунду будет результат: result
});
promise.then(
    result => alert("Fulfilled: " + result), // не сработает
    error => alert("Rejected: " + error) // сработает
);
//  при вызове одного из состояний второе состояние игнорируется



// УНИВЕРСАЛЬНЫЙ МЕТОД ДЛЯ НАВЕШИВАНИЯ ОБРАБОТЧИКОВ

promise.then(onFulfilled, onRejected)
// onFulfilled - функция при resolve
// onRejected - функция при reject

// Один обработчик
promise.then(onFulfilled) // успешное выполнение
promise.then(null, onRejected) // ошибка
promise.catch(onRejected) // ошбка / catch(onRejected) алтернатива then(null, onRejected)

// Синхронный throw
let p = new Promise((resolve, reject) => {
    throw new Error("Ошибка!"); // throw то же самое, что reject
})




// ПРОМИСИФИКАЦИЯ (НЕТ ИНФОРМАЦИИ)
// ЦЕПОЧКИ ПРОМИСОВ (НЕ ИЗУЧЕНО)