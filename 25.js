function createAndStyleElement() {
    // Создаем новый элемент
    var element = document.createElement('div')

    // Добавляем элемент в DOM
    document.body.appendChild(element)

    // Устанавливаем стили с помощью CSS
    element.style.width = '200px'
    element.style.height = '200px'
    element.style.backgroundColor = 'red'
    element.style.color = 'white'
    element.style.fontFamily = 'Arial'
    element.style.fontSize = '20px'
    element.style.textAlign = 'center'

    // Возвращаем созданный элемент
    return element
}

// Вызываем функцию для создания и стилизации элемента
var newElement = createAndStyleElement()
