var MathX = (function () {
    function fibonacciNth(n) {
        if (n <= 0) {
            return 'n должно быть положительным числом'
        } else if (n === 1) {
            return 0
        } else if (n === 2) {
            return 1
        } else {
            let prev = 0
            let curr = 1
            for (let i = 3; i <= n; i++) {
                let next = prev + curr
                prev = curr
                curr = next
            }
            return curr
        }
    }

    function fibonacciNumbers(n) {
        if (n <= 0) {
            return 'n должно быть положительным числом'
        } else if (n === 1) {
            return [0]
        } else if (n === 2) {
            return [0, 1]
        } else {
            let result = [0, 1]
            for (let i = 3; i <= n; i++) {
                result.push(
                    result[result.length - 2] + result[result.length - 1]
                )
            }
            return result
        }
    }

    function isPrime(num) {
        if (num <= 1) {
            return false
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false
            }
        }
        return true
    }

    function primeNth(n) {
        if (n <= 0) {
            return 'n должно быть положительным числом'
        }
        var count = 0
        var num = 2
        while (count < n) {
            if (isPrime(num)) {
                count++
            }
            num++
        }
        return num - 1
    }

    function primeNumbers(n) {
        if (n <= 0) {
            return 'n должно быть положительным числом'
        }
        var result = []
        var count = 0
        var num = 2
        while (count < n) {
            if (isPrime(num)) {
                result.push(num)
                count++
            }
            num++
        }
        return result
    }

    return {
        fibonacciNth: fibonacciNth,
        fibonacciNumbers: fibonacciNumbers,
        primeNth: primeNth,
        primeNumbers: primeNumbers,
    }
})()

console.log(MathX.fibonacciNth(6)) // 5
console.log(MathX.fibonacciNumbers(6)) // [0, 1, 1, 2, 3, 5]
console.log(MathX.primeNth(6)) // 13
console.log(MathX.primeNumbers(6)) // [2, 3, 5, 7, 11, 13]

/*
В данной реализации библиотеки MathX используется замыкание, чтобы создать пространство имен для функций fibonacciNth, fibonacciNumbers, primeNth и primeNumbers. Все эти функции являются приватными внутри замыкания.
Функции fibonacciNth и fibonacciNumbers вычисляют N-е число и все числа в ряду Фибоначчи до числа N соответственно. Они оба используют цикл для построения ряда Фибоначчи.
Функции isPrime и primeNth используются для проверки, является ли число простым, а затем вычисления N-го простого числа. Функция primeNumbers возвращает все простые числа до числа N.
Функции fibonacciNth, fibonacciNumbers, primeNth и primeNumbers экспортируются как публичные методы объекта, возвращаемого замыканием. Это позволяет использовать их из внешнего кода, как показано в последних четырех строчках кода.
*/
