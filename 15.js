function asyncOperation1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Result 1')
        }, 1000)
    })
}

function asyncOperation2(result) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Result 2: ' + result)
        }, 1000)
    })
}

async function asyncFunction() {
    try {
        // Асинхронная операция, которая возвращает промис
        const result1 = await asyncOperation1()

        // Асинхронная операция, которая возвращает промис
        const result2 = await asyncOperation2(result1)

        // Возвращаем результат выполнения
        return result2
    } catch (error) {
        // Обрабатываем ошибки
        console.error('Error:', error)
        throw error
    }
}

asyncFunction()
    .then(result => {
        console.log(result) // Выводит "Result 2: Result 1"
    })
    .catch(error => {
        console.error('Error:', error)
    })

/* 
функции asyncOperation1 и asyncOperation2 имитируют асинхронные операции с помощью setTimeout. Каждая функция возвращает промис, который будет разрешен через 1 секунду с определенным результатом.

мы вызываем asyncFunction, ожидаем результат выполнения и затем выводим его в консоль. Если произойдет ошибка, мы ее перехватываем и выводим в консоль.
*/
