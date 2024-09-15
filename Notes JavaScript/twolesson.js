function a2b2(num1, num2) {
    try {
        if (typeof(num1) !== "number" || typeof(num2) !== "number") {
            throw error = new Error("Оба значения должны быть числами")
        } else {console.log(`${num1}^2 + ${num2}^2 = ${num1**2 + num2**2}`)}
    }catch (e) {
        console.log("Error: " + e.message)
    }
}
a2b2(65, "сторока") 