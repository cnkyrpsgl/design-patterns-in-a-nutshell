/**
 * Class presenting a vehicle for rent
 */

class Coffee {
  brew() {}
}

/**
 * Class presenting Cappucino
 * @extends Coffee
 */
class Cappuccino extends Coffee {
  brew() {
    console.log("Brewing cappuccino");
  }
}

/**
 * Class presenting Espresso
 * @extends Coffee
 */
class Espresso extends Coffee {
  brew() {
    console.log("Brewing espresso");
  }
}

/**
 * Class presenting Latte
 * @extends Coffee
 */
class Latte extends Coffee {
  brew() {
    console.log("Brewing latte");
  }
}

/**
 * Class presenting a simple factory
 * @class
 */
class CoffeeFactory {
  /**
   * @param {String} params - type of coffee to return
   * @return {Coffee} Coffee object
   */
  create(coffeeType) {
    switch (coffeeType) {
      case "ESPRESSO":
        return new Espresso();
      case "LATTE":
        return new Latte();
      case "CAPPUCCINO":
        return new Cappuccino();
      default:
        throw new Error("Wrong coffee type: " + coffeeType);
    }
  }
}

// Lets create our factory
coffeeFactory = new CoffeeFactory();
// Create coffee of type espresso and brew it
espresso = coffeeFactory.create("ESPRESSO");
espresso.brew();
// Create coffee of type latte and brew it
latte = coffeeFactory.create("LATTE");
latte.brew();
// Create coffee of type cappuccino and brew it
cappuccino = coffeeFactory.create("CAPPUCCINO");
cappuccino.brew();
