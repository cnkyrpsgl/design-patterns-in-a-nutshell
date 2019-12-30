package creational.simpleFactory.java;

public class CoffeeFactory {
    public Coffee create(final String coffeeType) {
        switch (coffeeType) {
            case "ESPRESSO":
                return new Espresso();
            case "LATTE":
                return new Latte();
            case "CAPPUCCINO":
                return new Cappuccino();
            default:
                throw new IllegalArgumentException(
                        "Wrong coffee type: " + coffeeType
                );
        }
    }
}