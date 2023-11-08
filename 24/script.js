// Загрузка данных при загрузке страницы
window.onload = function () {
    const url =
        'http://www.filltext.com/?rows=1000&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true'
    fetch(url)
        .then(response => response.json())
        .then(data => {
            createTable(data)
            console.log(data)
        })
        .catch(error => {
            console.error('Error:', error)
        })
}

// Создание таблицы
function createTable(data) {
    let tableBody = document.querySelector('#data-table tbody')
    tableBody.innerHTML = ''

    data.forEach(row => {
        let newRow = document.createElement('tr')
        newRow.innerHTML += `
            <td>${row.fname}</td>
            <td>${row.lname}</td>
            <td>${row.tel}</td>
            <td>${row.address}</td>
            <td>${row.city}</td>
            <td>${row.state}</td>
            <td>${row.zip}</td>
        `
        tableBody.appendChild(newRow)
    })
}

// Сортировка таблицы
function sortTable(columnIndex) {
    let table, rows, switching, i, x, y, shouldSwitch
    table = document.getElementById('data-table')
    switching = true

    while (switching) {
        switching = false
        rows = table.getElementsByTagName('tr')

        for (i = 0; rows.length - 1; i++) {
            shouldSwitch = false
            x = rows[i].getElementsByTagName('td')[columnIndex]
            y = rows[i + 1].getElementsByTagName('td')[columnIndex]

            if (x.innerHTML.toLowerCase()) {
                shouldSwitch = true
                break
            }
        }

        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i])
            switching = true
        }
    }
}

var currentPage = 1
var totalPages = 20

function goToPage(page) {
    currentPage = page
    renderPagination()
    // Здесь можно добавить логику для загрузки данных соответствующей страницы или выполнения других действий
}

function renderPagination() {
    var paginationElement = document.getElementById('pagination')
    paginationElement.innerHTML = ''

    for (var i = 1; i <= totalPages; i++) {
        var button = document.createElement('button')
        button.innerText = i

        if (i === currentPage) {
            button.classList.add('active')
        }

        ;(function (page) {
            button.addEventListener('click', () => goToPage(page))
        })(i)

        paginationElement.appendChild(button)
    }
}

renderPagination()
