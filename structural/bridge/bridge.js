class Color {
  fill() {}
}

class Blue extends Color {
  fill() {
    return "Color is Blue";
  }
}

class Red extends Color {
  fill() {
    return "Color is Red";
  }
}

class Shape {
  constructor(color) {
    this.color = color;
  }

  draw() {}
}

class Square extends Shape {
  constructor(color) {
    super(color);
  }

  draw() {
    return "Square drawn. " + this.color.fill();
  }
}

class Triangle extends Shape {
  constructor(color) {
    super(color);
  }

  draw() {
    return "Triangle drawn. " + this.color.fill();
  }
}

//a square with red color
const square = new Square(new Red());
console.log(square.draw());

//a triangle with blue color
const triangle = new Triangle(new Blue());
console.log(triangle.draw());
