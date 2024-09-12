function stringCheck(string1, string2) {
    try {
        if (typeof(string1) === "string" && typeof(string2) === "string") {
            console.log(string1 + " " + string2);
        } else throw new Error('Один из элементов не строка')
    } catch (err) {
        console.log(err.message + " - нужно передать строки")
    } finally {
        console.log("Функция завершила работу")
    }
}

stringCheck("strin1", 3)

// try {
//     if(1 === 2) {
//         console.log('s')
//     } else {
//         throw new Error('sss')
//     }
// } catch(e) {
//     console.log(e.message)
// };