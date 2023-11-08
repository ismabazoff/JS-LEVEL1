// Базовый класс Shape (фигура)
class Shape {
    constructor() {
        // По умолчанию площадь и периметр будут равны 0
        this.area = 0
        this.perimeter = 0
    }

    // Метод для расчета площади фигуры (должен быть переопределен в подклассах)
    calculateArea() {
        // Этот метод будет переопределен в подклассах
    }

    // Метод для расчета периметра фигуры (должен быть переопределен в подклассах)
    calculatePerimeter() {
        // Этот метод будет переопределен в подклассах
    }
}

// Подкласс Rectangle (прямоугольник), наследуется от класса Shape
class Rectangle extends Shape {
    constructor(width, height) {
        super() // Вызов конструктора родительского класса
        this.width = width
        this.height = height
    }

    // Переопределение метода для расчета площади прямоугольника
    calculateArea() {
        this.area = this.width * this.height
    }

    // Переопределение метода для расчета периметра прямоугольника
    calculatePerimeter() {
        this.perimeter = 2 * (this.width + this.height)
    }
}

// Подкласс Circle (круг), наследуется от класса Shape
class Circle extends Shape {
    constructor(radius) {
        super() // Вызов конструктора родительского класса
        this.radius = radius
    }

    // Переопределение метода для расчета площади круга
    calculateArea() {
        this.area = Math.PI * this.radius * this.radius
    }

    // Переопределение метода для расчета периметра круга
    calculatePerimeter() {
        this.perimeter = 2 * Math.PI * this.radius
    }
}

// Подкласс Triangle (треугольник), наследуется от класса Shape
class Triangle extends Shape {
    constructor(side1, side2, side3) {
        super() // Вызов конструктора родительского класса
        this.side1 = side1
        this.side2 = side2
        this.side3 = side3
    }

    // Переопределение метода для расчета площади треугольника
    calculateArea() {
        // Используем формулу Герона для расчета площади треугольника
        const s = (this.side1 + this.side2 + this.side3) / 2
        this.area = Math.sqrt(
            s * (s - this.side1) * (s - this.side2) * (s - this.side3)
        )
    }

    // Переопределение метода для расчета периметра треугольника
    calculatePerimeter() {
        this.perimeter = this.side1 + this.side2 + this.side3
    }
}

// Пример использования классов и методов для расчета площадей и периметров фигур
const rectangle = new Rectangle(5, 7)
rectangle.calculateArea()
rectangle.calculatePerimeter()
console.log(rectangle.area) // 35
console.log(rectangle.perimeter) // 24

const circle = new Circle(3)
circle.calculateArea()
circle.calculatePerimeter()
console.log(circle.area) // 28.274333882308138
console.log(circle.perimeter) // 18.84955592153876

const triangle = new Triangle(3, 4, 5)
triangle.calculateArea()
triangle.calculatePerimeter()
console.log(triangle.area) // 6
console.log(triangle.perimeter) // 12

/* 
 В данном решении определен базовый класс Shape, содержащий методы для расчета площади и периметра. Затем определены подклассы Rectangle, Circle и Triangle, которые наследуются от класса Shape и переопределяют методы для 
  */
