const objectA = {
    a: 10,
    b: true
}; //objectA - ссылка, {a: 10, b: true} - объект

const copyOfA = objectA; //copyOFA копирует ссылку на объект objectA
copyOfA.a = 20; //можно изменять значения внутри объекта
copyOfA.c = "abc"; //можно создавать несуществующие значения
 