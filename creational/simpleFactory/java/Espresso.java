package creational.simpleFactory.java;

public class Espresso implements Coffee {
    @Override
    public String brew() {
        return "Brewing espresso";
    }
}