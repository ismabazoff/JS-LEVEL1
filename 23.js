function evaluatePassword(password) {
    let strength = 0 // переменная для оценки сложности пароля
    const minLength = 8 // минимальна пароля

    // проверка длины пароля
    if (password.length >= minLength) {
        strength += 1
    } else {
        return (
            'Пароль слишком короткий. Убедитесь, что пароль состоит не менее чем из ' +
            minLength +
            ' символов.'
        )
    }

    // проверка наличия различных символов
    const uppercaseRegex = /[A-Z]/
    const lowercaseRegex = /[a-z]/
    const numberRegex = /[0-9]/
    const specialCharRegex = /[!@#$%^&*()?]/

    // проверка наличия символов в разных категориях
    if (
        uppercaseRegex.test(password) &&
        lowercaseRegex.test(password) &&
        numberRegex.test(password) &&
        specialCharRegex.test(password)
    ) {
        strength += 1
    } else {
        return 'Пароль должен содержать по крайней мере одну заглавную букву, одну строчную букву, одну цифру и один специальный символ.'
    }

    // возврат оценки сложности пароля
    switch (strength) {
        case 1:
            return 'Слабый пароль.'
        case 2:
            return 'Средний пароль.'
        case 3:
            return 'Сильный пароль.'
        default:
            return 'Не удалось оценить сложность пароля.'
    }
}

// пример использования функции
const password = 'Password123!'
console.log(evaluatePassword(password))
