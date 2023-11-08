function createAndAddElement() {
    // Создание нового элемента
    const newElement = document.createElement('div')

    // Настройка нового элемента
    newElement.textContent = 'Новый элемент добавлен с помощью шаблона!'
    newElement.style.backgroundColor = 'blue'

    // Добавление нового элемента в DOM
    document.body.appendChild(newElement)
}

// Вызов функции для создания и добавления элемента
createAndAddElement()
