var people = [
    { name: 'John', age: 25 },
    { name: 'Alice', age: 23 },
    { name: 'Bob', age: 27 },
]

people.sort(function (a, b) {
    if (a.age === b.age) {
        return a.name.localeCompare(b.name)
    } else {
        return a.age - b.age
    }
})

console.log(people)

/* 
В данном коде мы передаем функцию в качестве аргумента методу sort(). 
Эта функция принимает два аргумента, которые являются двумя объектами для сравнения. 
Внутри функции мы проверяем, равны ли возрасты двух объектов. Если возрасты равны, 
мы используем метод localeCompare() для сравнения строк полей name объектов, чтобы выполнить сортировку по алфавиту. 
Если возрасты отличаются, мы используем вычитание для выполнения сортировки по возрастанию возраста.
*/
