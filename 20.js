function addToLocalStorage(key, value) {
    // Добавляем данные в хранилище
    localStorage.setItem(key, value)

    // Вызываем функцию для подсчета объема занимаемой памяти
    calculateLocalStorageSize(key)
}

// Пример использования функции
addToLocalStorage('myData', 'Hello, World!')

function calculateLocalStorageSize(key) {
    // Получаем значение по ключу
    const value = localStorage.getItem(key)

    // Получаем размер значения в строковом формате
    const stringSize = (value.length * 2).toLocaleString() + ' bytes'

    // Получаем информацию о размере ключа и значения с помощью JSON.stringify
    const totalSize = JSON.stringify({ key, value }).length * 2
    const prettyTotalSize = totalSize.toLocaleString() + ' bytes'

    // Получаем максимальный размер хранилища в байтах
    const quota = (
        localStorage.getItem(key).__proto__.constructor.prototype.valueOf
            .length * 2
    ).toLocaleString()
    const prettyQuota = quota + ' bytes'

    // Выводим информацию в консоль
    console.log(`Size of '${key}' value: ${stringSize}`)
    console.log(`Total size of '${key}' in LocalStorage: ${prettyTotalSize}`)
    console.log(`LocalStorage quota: ${prettyQuota}`)
}
