function isStrangeNumber(num) {
    // Сначала найдем сумму всех делителей числа (кроме числа самого себя)
    let sum = 0
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i
        }
    }

    // Затем проверим, равна ли сумма делителей числу самому себе
    if (sum === num) {
        return true
    } else {
        return false
    }
}

console.log(isStrangeNumber(6)) // true, так как 1 + 2 + 3 = 6
console.log(isStrangeNumber(12)) // false, так как 1 + 2 + 3 + 4 + 6 = 16
console.log(isStrangeNumber(28)) // true, так как 1 + 2 + 4 + 7 + 14 = 28

/*
В этом решении мы используем цикл for, чтобы проверить все числа от 1 до num - 1 и находим сумму делителей числа num. Затем мы сравниваем эту сумму с числом num и возвращаем true или false в зависимости от результата.
*/
