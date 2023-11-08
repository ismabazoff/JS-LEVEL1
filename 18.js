function testLocalStorageCapacity() {
    try {
        let testData = ''
        // Создаем строку с тестовыми данными
        for (let i = 0; i < 1024; i++) {
            testData += '0123456789'
        }

        let data = ''
        let totalData = ''
        let count = 0

        // Записываем тестовые данные в localStorage
        while (true) {
            try {
                data = testData + testData.slice(0, count)
                localStorage.setItem('testData', data)
                totalData = data
                count++
            } catch (e) {
                // Обнаружено исключение - место в localStorage закончилось
                break
            }
        }

        // Выводим объем доступных данных
        console.log(
            'Максимальный объем данных в localStorage: ' +
                totalData.length / 1024 +
                ' КБ'
        )
    } catch (e) {
        console.error('Ошибка: ' + e)
    }
}

testLocalStorageCapacity()
