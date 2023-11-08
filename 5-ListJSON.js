function jsonToList(json) {
    let list = JSON.parse(json)
    return list
}

/* 
 Эта функция принимает JSON в качестве входного параметра и использует функцию JSON.parse() для преобразования JSON в список объектов. Затем она возвращает этот список. 
  */

function createLinkedList(list) {
    let currentNode = null
    let head = null

    for (let i = 0; i < list.length; i++) {
        let node = {
            value: list[i],
            next: null,
        }

        if (currentNode === null) {
            currentNode = node
            head = node
        } else {
            currentNode.next = node
            currentNode = node
        }
    }

    return head
}

/*
 Эта функция принимает список объектов в качестве входного параметра и создает связный список из этих объектов. Она проходит по списку объектов и создает новый узел для каждого объекта. В начале цикла, когда currentNode равно null, она присваивает currentNode и head значение нового узла. Далее, для каждого последующего объекта из списка, она устанавливает ссылку next предыдущего узла на новый узел и обновляет currentNode на новый узел. В конце функция возвращает head, который указывает на первый узел связного списка.
 */

var json = '[{"value": 1}, {"value": 2}, {"value": 3}]'

var list = jsonToList(json)

var linkedList = createLinkedList(list)

console.log(linkedList)

/*
Этот код создаст список объектов из JSON, а затем преобразует его в связный список. Связный список будет выведен в консоль.
*/
