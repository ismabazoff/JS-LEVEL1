const moment = require('moment')

exports.getCurrentDate = () => {
    return moment().format('YYYY-MM-DD')
}
/* 
Эта функция использует метод moment() из библиотеки Moment.js для создания нового объекта даты. Метод format() используется для форматирования даты в виде строки. В данном примере, дата будет отформатирована в формате "YYYY-MM-DD".
*/
