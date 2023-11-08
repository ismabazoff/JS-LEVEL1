function createFunctionArray(arr) {
    return function () {
        let results = []
        for (let i = 0; i < arr.length; i++) {
            results.push(arr[i]())
        }
        return results
    }
}

// Пример использования функции
const funcArray = [
    function () {
        return 1
    },
    function () {
        return 2
    },
    function () {
        return 3
    },
]

const combinedFunc = createFunctionArray(funcArray)
const results = combinedFunc() // Вызываем новую функцию
console.log(results) // Выводим в консоль массив результатов

/*
 createFunctionArray принимает новую функция и возвращает этот массив results. 
  */
