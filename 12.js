// Создаем объект "книга"
const book = {
    title: 'Название книги',
    author: 'Автор',
    year: 1900,

    // Метод для получения названия книги
    getTitle: function () {
        return this.title
    },

    // Метод для изменения названия книги
    setTitle: function (newTitle) {
        this.title = newTitle
    },

    // Метод для получения автора книги
    getAuthor: function () {
        return this.author
    },

    // Метод для изменения автора книги
    setAuthor: function (newAuthor) {
        this.author = newAuthor
    },

    // Метод для получения года издания книги
    getYear: function () {
        return this.year
    },

    // Метод для изменения года издания книги
    setYear: function (newYear) {
        this.year = newYear
    },
}

// Пример использования методов
console.log(book.getTitle()) // Выводит "Название книги"
book.setTitle('Новое название книги')
console.log(book.getTitle()) // Выводит "Новое название книги"

console.log(book.getAuthor()) // Выводит "Автор"
book.setAuthor('Новый автор')
console.log(book.getAuthor()) // Выводит "Новый автор"

console.log(book.getYear()) // Выводит 1900
book.setYear(2000)
console.log(book.getYear()) // Выводит 2000
