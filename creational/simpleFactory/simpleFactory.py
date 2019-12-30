class Coffee:
  def brew(self):
    pass

class Cappuccino(Coffee):
  def brew(self):
    print("Brewing cappuccino")

class Espresso(Coffee):
  def brew(self):
    print("Brewing espresso")

class Latte(Coffee):
  def brew(self):
    print("Brewing latte")

class CoffeeFactory:
  def create(self, coffeeType):
    if coffeeType == "ESPRESSO":
      coffee = Espresso()
    elif coffeeType == "LATTE":
      coffee = Latte()
    elif coffeeType == "CAPPUCCINO":
      coffee = Cappuccino()
    else:
      raise Exception("Wrong coffee type: " + coffeeType)
    return coffee

def main():
  # Lets create our factory
  coffeeFactory = CoffeeFactory()
  # Create coffee of type espresso and brew it
  espresso = coffeeFactory.create("ESPRESSO")
  espresso.brew()
  # Create coffee of type latte and brew it
  latte = coffeeFactory.create("LATTE")
  latte.brew()
  # Create coffee of type cappuccino and brew it
  cappuccino = coffeeFactory.create("CAPPUCCINO")
  cappuccino.brew()

if __name__ == "__main__":
    main()