function loadImage(url) {
    return new Promise((resolve, reject) => {
        const image = new Image()

        image.onload = function () {
            resolve({
                src: url,
                width: image.width,
                height: image.height,
            })
        }

        image.onerror = function () {
            reject(new Error('Failed to load image'))
        }

        image.src = url
    })
}

const imageUrl = 'https://example.com/image.jpg'
loadImage(imageUrl)
    .then(data => {
        console.log('Image loaded:', data)
    })
    .catch(error => {
        console.error('Failed to load image:', error)
    })

/* 
мы создаем новый экземпляр объекта Image и назначаем обработчики событий onload и onerror. Внутри обработчика onload мы вызываем метод resolve промиса, передавая в него объект с данными об изображении, включая URL, ширину и высоту.

В случае ошибки загрузки изображения, вызывается обработчик onerror, который вызывает метод reject промиса, передавая в него новый объект Error.
*/
