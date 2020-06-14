package structural.bridge.java;

/**
 * @author cnkyrpsgl
 */
public class BridgePattern {

  public static void main(String[] args) {
    //a square with red color
    Shape square = new Square(new Red());
    System.out.println(square.draw());

    //a triangle with blue color
    Shape triangle = new Triangle(new Blue());
    System.out.println(triangle.draw());
  }
}
