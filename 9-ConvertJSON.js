function jsonToString(json) {
    try {
        return JSON.stringify(json)
    } catch (error) {
        console.error('Ошибка при конвертации JSON в строку:', error)
        return null
    }
}

/* 
В этом примере мы используем конструкцию try-catch, чтобы обработать возможную ошибку при конвертации. Если произойдет ошибка, она будет выведена в консоль, и функция вернет null. Если конвертация прошла успешно, функция вернет строковое представление JSON.
*/

var json = { name: 'John', age: 30, city: 'New York' }
var jsonString = jsonToString(json)
console.log(jsonString) // Выведет: {"name":"John","age":30,"city":"New York"}
