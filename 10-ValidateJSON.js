function convertStringToJson(inputString) {
    try {
        // Проверяем, является ли входная строка валидным JSON
        JSON.parse(inputString)

        // Если строка валидна, возвращаем JSON объект
        return JSON.parse(inputString)
    } catch (error) {
        // Если возникла ошибка при парсинге, выводим сообщение об ошибке
        console.error(' конвертации строки в JSON:', error)
        return null
    }
}

// Пример использования функции
const input = '{"name": "John", "age": 30}'
const jsonObject = convertStringToJson(input)
if (jsonObject) {
    console.log('Конвертация прошла успешно:', jsonObject)
} else {
    console.log('Ошибка при конвертации строки в JSON.')
}

/* 
 Эта функция использует метод JSON.parse() для проверки и парсинга строки в JSON. Если строка в JSON, функция возвращает JSON объект. Если возникает ошибка при парсинге, функция выводит сообщение об ошибке и возвращает null.
  */
