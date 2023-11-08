let CasesModule = (function () {
    // Приватная функция для определения окончания слова в зависимости от числа
    function getWordEnding(number, endings) {
        var wordEnding = ''

        // Проверяем число на частные случаи
        if (number % 100 >= 11 && number % 100 <= 14) {
            wordEnding = endings[2]
        } else {
            // Определяем окончание слова в зависимости от последней цифры числа
            let lastDigit = number % 10

            switch (lastDigit) {
                case 1:
                    wordEnding = endings[0]
                    break
                case 2:
                case 3:
                case 4:
                    wordEnding = endings[1]
                    break
                default:
                    wordEnding = endings[2]
                    break
            }
        }

        return wordEnding
    }

    // Публичный метод для изменения окончания слова в зависимости от падежа
    function changeEnding(number, cases) {
        let casesArray = cases.split(',') // Разделяем список окончаний на массив

        // Проверка правильности входных данных
        if (
            number < 0 ||
            !Array.isArray(casesArray) ||
            casesArray.length !== 3
        ) {
            throw new Error(
                'Неправильные входные данные. Ожидается положительное число и строка с 3-мя окончаниями, разделёнными запятыми.'
            )
        }

        // Определение окончания слова
        let wordEnding = getWordEnding(number, casesArray)

        // Склонение числа и окончания
        let result = number + ' ' + wordEnding

        return result
    }

    // Возвращаем публичные методы модуля
    return {
        changeEnding: changeEnding,
    }
})()

// Пример использования модуля
console.log(CasesModule.changeEnding(112, 'сообщение, сообщения, сообщений')) // Вывод: 112 сообщений
console.log(CasesModule.changeEnding(12, 'сообщение, сообщения, сообщений')) // Вывод: 12 сообщений
console.log(CasesModule.changeEnding(1, 'сообщение, сообщения, сообщений')) // Вывод: 1 сообщение
console.log(
    CasesModule.changeEnding(1024, 'пользователь, пользователей, пользователей')
) // Вывод: 1024 пользователя
console.log(
    CasesModule.changeEnding(1026, 'пользователь, пользователей, пользователей')
) // Вывод: 1026 пользователей
console.log(
    CasesModule.changeEnding(121, 'пользователь, пользователей, пользователей')
) // Вывод: 121 пользователь

/* 
 В модуле используется приватная функция getWordEnding, 
 которая определяет окончание слова в зависимости от числа, 
 и публичная функция changeEnding, которая принимает число и строку с тремя окончаниями, 
 разделёнными запятыми, и возвращает изменённое окончание слова в зависимости от падежа. 
  */
