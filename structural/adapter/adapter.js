class Movable {
  getSpeed() {}  // returns speed in Kmph
}

class BugattiVeyron extends Movable {
  getSpeed() {
    return 268; // in Mph
  }
}

class MovableAdapter {
  getSpeed() {} // returns speed in Kmph
}

class MovableAdapterImpl extends MovableAdapter {
  constructor(car) {
    super();
    this.car = car;
  }

  getSpeed() {
    return this.convertMPHtoKMPH(this.car.getSpeed());
  }

  convertMPHtoKMPH(mph) {
    return mph * 1.60934;
  }
}

const bugattiVeyron = new BugattiVeyron();
const bugattiVeyronAdapter = new MovableAdapterImpl(bugattiVeyron);
const getBugattiVeyronSpeedInKmph = bugattiVeyronAdapter.getSpeed();
