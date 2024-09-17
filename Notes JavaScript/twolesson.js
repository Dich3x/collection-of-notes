let fruts = [];
function fruits(arg, arg2) {
    try {
        if (arg === "pop" || arg === "push" || arg === "shift" || arg === "unshift") { // проверяет первый аргумент
        if (arg === "pop") { // удаляет последний элемент массива
            fruts.pop(`${arg2}`);
        } else if (arg === "push") { // добовляет последний элемент массива
            fruts.push(`${arg2}`);
        } else if (arg === "shift") { // удаляет первый элемент массива 
            fruts.shift(`${arg2}`);
        } else if (arg === "unshift") { // добовляет первый элемент массива
            fruts.unshift(`${arg2}`);
        } else {throw error = new Error("Ошибка во второй переменной")} // создаёт ошибку если второй аргумент неправильный
        console.log(fruts)
        } else {
            throw error = new Error("Неправильная первая переменная! В переменной должны быть: pop, push, shift, unshift"); // создаёт ошибку если первый элемент неверный
        }
    } catch (e) {
        console.log(e.message) // выводит ошибку, если она есть
    }
}
fruits("hehe", "test");
fruits("unshift", "test"); 
fruits("push", "test2");
fruits("push", "test3");
fruits("pop", "test");
fruits("shift", "test");