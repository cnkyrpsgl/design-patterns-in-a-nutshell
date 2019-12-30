package creational.simpleFactory.java;

/**
 * SimpleFactory
 */
public class SimpleFactory {

    public static void main(String[] args) {
        // Lets create our factory
        CoffeeFactory coffeeFactory = new CoffeeFactory();
        // Create coffee of type espresso and brew it
        Coffee espresso = coffeeFactory.create("ESPRESSO");
        System.out.println(espresso.brew());
        // Create coffee of type latte and brew it
        Coffee latte = coffeeFactory.create("LATTE");
        System.out.println(latte.brew());
        // Create coffee of type cappuccino and brew it
        Coffee cappuccino = coffeeFactory.create("CAPPUCCINO");
        System.out.println(cappuccino.brew());
    }
}