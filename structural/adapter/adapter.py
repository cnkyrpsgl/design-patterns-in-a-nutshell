class Movable:
    def get_speed(self):
        pass


class BugattiVeyron(Movable):
    def get_speed(self):
        return 268  # // in Mph


class MovableAdapter:
    def get_speed(self):
        pass


def convert_mph_to_kmph(mph):
    return mph * 1.60934


class MovableAdapterImpl(MovableAdapter):
    def __init__(self, car):
        super().__init__()
        self.car = car

    def get_speed(self):
        return convert_mph_to_kmph(self.car.get_speed())


bugattiVeyron = BugattiVeyron()
bugattiVeyronAdapter = MovableAdapterImpl(bugattiVeyron)
getBugattiVeyronSpeedInKmph = bugattiVeyronAdapter.get_speed()