package structural.adapter.java;

/**
 * @author cnkyrpsgl
 */
public class AdapterPattern {

  Movable bugattiVeyron = new BugattiVeyron();

  MovableAdapter bugattiVeyronAdapter = new MovableAdapterImpl(bugattiVeyron);

  public double getBugattiVeyronSpeedInKmph() {
    return bugattiVeyronAdapter.getSpeed();
  }
}
