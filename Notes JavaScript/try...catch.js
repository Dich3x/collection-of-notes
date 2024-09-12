//ПРИМЕР
try {
    const six = 6;
    
} catch (err) {
    console.log(err.message); //выводит сообщение с ошибкой
}
console.log("Обработка кода идёт дальше"); //выполняется дальше



//try...catch - при ошибке, программа не останавливает выполнение, а сразуже прерывает блок try и кидает в блок catch
//если синтаксис try неправильный то catch не запуститься



//FINALLY

try {
    const one = 1; //создаётся константа
    one = 'string'; //oшибка из-за присвоения в const
} catch (err) {
    console.log(one); //ошибка 
} finally {
    console.log("Код отработал"); // finally выполняется всегда
}
console.log("Обработка кода идёт дальше"); //не выполняется из-за ошибки в catch