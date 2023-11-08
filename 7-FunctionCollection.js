function runFunctionsInOrder(functions) {
    let currentIndex = 0

    function runNextFunction() {
        if (currentIndex < functions.length) {
            const currentFunction = functions[currentIndex]
            currentIndex++
            currentFunction()
        }
    }

    runNextFunction()
}

// Пример использования:

function firstFunction() {
    console.log('Вызвана первая функция')
}

function secondFunction() {
    console.log('Вызвана вторая функция')
}

function thirdFunction() {
    console.log('Вызвана третья функция')
}

const functions = [firstFunction, secondFunction, thirdFunction]

runFunctionsInOrder(functions)

/*
 В этом примере, при запуске функции runFunctionsInOrder с массивом функций [firstFunction, secondFunction, thirdFunction], будет последовательно вызваны функции firstFunction, secondFunction, thirdFunction, и на каждом шаге будет выведен соответствующий порядковый номер. 
  */
