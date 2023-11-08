function animateElement(element, newWidth, newHeight, duration) {
    // Получаем текущие размеры элемента
    var currentWidth = element.offsetWidth
    var currentHeight = element.offsetHeight

    // Рассчитываем приращение размеров элемента на каждом шаге анимации
    var widthStep = (newWidth - currentWidth) / (duration / 10) // Количество шагов задаем в зависимости от длительности анимации
    var heightStep = (newHeight - currentHeight) / (duration / 10)

    // Запускаем анимацию с помощью requestAnimationFrame
    function animate() {
        currentWidth += widthStep
        currentHeight += heightStep

        // Применяем измененные размеры элемента
        element.style.width = currentWidth + 'px'
        element.style.height = currentHeight + 'px'

        // Проверяем, достигли ли желаемого размера
        if (currentWidth !== newWidth || currentHeight !== newHeight) {
            requestAnimationFrame(animate) // Рекурсивно вызываем функцию анимации
        }
    }

    animate()
}

var element = document.getElementById('myElement') // Получаем элемент, который нужно анимировать
animateElement(element, 500, 300) // Анимируем элемент до ширины 500px и высоты 300px за 1 секунду
