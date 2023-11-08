function outerFunction() {
    var outerVariable = 'Значение из внешней функции'

    function innerFunction() {
        console.log('Значение переменной из внешней функции:', outerVariable)
    }

    return innerFunction
}

var inner = outerFunction() // вызываем внешнюю функцию и сохраняем возвращаемую внутреннюю функцию

inner() // вызываем внутреннюю функцию

/* 
 В этом примере, функция outerFunction возвращает функцию innerFunction. Внутри outerFunction мы создаем переменную outerVariable и определяем innerFunction, которая имеет доступ к переменной outerVariable. В конце outerFunction возвращается innerFunction.

При вызове outerFunction и сохранении возвращаемой функции в переменной inner, мы создаем замыкание. Это означает, что функция inner сохраняет доступ к переменной outerVariable, даже после завершения выполнения outerFunction. Поэтому, когда мы вызываем inner(), она все равно имеет доступ к outerVariable и выводит его значение. 
  */
