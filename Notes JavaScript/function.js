//Функции

//Объявление функции
// function namefunction (arg) {parameter} //создание функции
// namefunction(arg) //вызов функции / arg >> parameter / если arg не указан, то он заменяется на undefiend
//var name = (parameter = parameterFuncrion()) // если не указан parameter, то вызывается функция

//Локальные и внешние переменные
// let massage = "external"; function namefunction (parameter) {let massage = "local"; console.log(massage)} //в функции можно объявлять внешнии и внутрении переменные, приоритет внутренней переменной всегда выше
//function namefunction (parameter1, parameter2) {parameter1 = parameter1 + ":"; console.log(parameter1 + parameter2)}//внутрь функции можно передавать любые аргументы и изменять их




// function namefunction (parameter) {console.log(parameter)} //funtion declaration statement
// var name = function (parameter) {return console.log(typeof(parameter))} //funtion definition expression
// var name = (parameter) => {return console.log(typeof(parameter))}//function namefunction (parameter1, parameter2) {parameter2 = parameter2 || "неизвестно"; console.log(parameter)} //с помощью оператора || можно заменить undefind
