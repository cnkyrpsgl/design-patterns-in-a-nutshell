const vehiclePrototype = {

  init: (carModel) => this.model = carModel,

  getModel: () => console.log("The model of this vehicle is.." + this.model)
};

function vehicle( model ) {

  const F = () => {};
  F.prototype = vehiclePrototype;

  const f = new F();

  f.init( model );
  return f;

}

const car = vehicle("Ford Escort");
car.getModel();