//TRY...CATCH

// Синтаксис
try {
  // код
} catch {
  // обработка ошибки
}
// try...catch - при ошибке, вся программа не останавливает выполнение, а сразу-же прерывает блок try и отрабатывает блок catch
// try - блок в котором мы вополняем наш код
// catch - блок который отрабатывает при ошибке в try

// Пример
try {
    const six = 6; // задаём переменную
    six = 10; // появляется ошибка
    console.log(six); // не отрабатывает
} catch (err) {
    console.log("Произошла ошибка"); // выводит сообщение с ошибкой
}
console.log("Обработка кода идёт дальше"); // выполняется дальше



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
// finally выполняется вне зависимости try или catch



// ОШИБКИ ПАРСИНГА

try {
    }}}}}
} catch(err) {
    console.log(err)
}
// блок catch не будет отрабатываеть если ошибка в синтаксисе



// ОБЪЕКТ ОШИБКИ

try {

} catch(err) {

}
// err - объект ошибки которому присваивать любое имя, является необязательным в новых версиях

// Cвойства объекта ошибки
try {
    nn;
} catch(err) {
    console.log(err); // ReferenceError: nn is not defind at (...стек вызовов)
    console.log(err.name); // ReferenceError 
    console.log(err.message); // nn is not defined
}
// name - имя ошибки
// message - детали ошибки

// Блок catch без переменной
try {
    nn;
} catch {

};
// try...catch отработает, но не отработает ошибку



// ОПЕРАТОР throw
try {
    a = 20;
    throw Error; // throw создаёт ошибку, для try...catch можно использовать любые встроенные конструкторы для ошибок
} catch (e) {
    console.log(e);
}

//Переименование message
try {
    a = 20;
    throw new Error("Новое сообщение"); //с помощью new можно изменять message
} catch (e) {
    console.log(e.message); // Новое собщение
}

//Проброс ошибок
function nameFunction() {
    try {
        const a = 10;
        a = 10;
    } catch (e) {
        if (e.name != "ReferenceError") {
            throw e; //проброс ошибки
        } else {
            console.log("Поймал внутренюю ошибку")
        }
    }
}
try {
    nameFunction();
} catch (e) {
    console.log("Поймал внешнюю ошибку") // Отработает проброшенную ошибку
}
// первый try...catch знает только как оброботать ReferenceErro, тогда как второй try...catch знает как обработать всё



// СИНХРОННАЯ РАБОТА

try {
  setTimeout(function() {
    noSuchVariable; // скрипт упадёт тут
  }, 1000);
} catch (err) {
  console.log( "не сработает" );
}
// setTmeout не отработает потому, что функия выполняется когда движок уже покинул конструкцию try...catch

setTimeout(function() {
  try {
    noSuchVariable; // try..catch обрабатывает ошибку!
  } catch {
    console.log( "ошибка поймана!" );
  }
}, 1000);
// setTimeout отработает только если try...catch будет находится внутри самой функции