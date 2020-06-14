class Color:
    def fill(self):
        pass


class Blue(Color):
    def fill(self):
        return "Color is Blue"


class Red(Color):
    def fill(self):
        return "Color is Red"


class Shape:
    def __init__(self, color):
        self.color = color

    def draw(self):
        pass


class Square(Shape):
    def __init__(self, color):
        super().__init__(color)

    def draw(self):
        return "Square drawn. " + self.color.fill()


class Triangle(Shape):
    def __init__(self, color):
        super().__init__(color)

    def draw(self):
        return "Triangle drawn. " + self.color.fill()


# a square with red color
square = Square(Red())
print(square.draw())

# a triangle with blue color
triangle = Triangle(Blue())
print(triangle.draw())
