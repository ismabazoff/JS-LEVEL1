function traverseDOM(node) {
    // Проверяем, что переданный узел действительный
    if (node !== null) {
        // Выводим информацию о теге в консоль (можно заменить на другое действие)
        console.log(node.tagName)

        // Рекурсивно вызываем функцию для дочерних элементов
        for (let i = 0; i < node.childNodes.length; i++) {
            traverseDOM(node.childNodes[i])
        }
    }
}

// Пример использования функции
const startingElement = document.getElementById('exampleElement')
traverseDOM(startingElement)

/* 
В данном примере функция traverseDOM принимает в качестве аргумента элемент DOM (например, полученный с помощью метода getElementById). Она выводит информацию о теге каждого узла в консоль. Затем она рекурсивноает себя для каждого дочернего элемента данного узла.
*/
