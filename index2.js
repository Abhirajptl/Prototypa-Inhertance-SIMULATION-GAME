function Vehicle(brand, model, speed, fuelType){
    this.brand = brand;
    this.model = model;
    this.speed = speed;
    this.fuelType = fuelType;
}

Vehicle.prototype.accelerate = function(){
    this.speed = this.speed + 10;
    console.log(this.speed);
}
Vehicle.prototype.brake = function(){
    this.speed = this.speed - 5;
    console.log(this.speed);
}
Vehicle.prototype.refuel = function(){
    console.log('The vehicle is refueling');
}


function Car(brand, model, speed, fuelType,numberOfWheels){
    Vehicle.call(this,brand, model, speed, fuelType);
    this.numberOfWheels = numberOfWheels;
}

Car.prototype.honk = function(){
    console.log('honking sound');
}

Object.setPrototypeOf(Car.prototype,Vehicle.prototype);


function Airplane(brand, model, speed, fuelType, numOfEngine, hasLandingGear){
    Vehicle.call(this,brand, model, speed, fuelType);
    this.numOfEngines = numOfEngine;
    this.hasLandingGear = hasLandingGear;
}
Airplane.prototype.takeOff = function(){
    console.log('TakeOff');
}

Object.setPrototypeOf(Airplane.prototype,Vehicle.prototype)


let car1 = new Car("Toyota", "Camry", 0, "Gasoline", 4);
let aeroplane1 = new Airplane("Boeing", "747", 0, "Jet fuel", 4, true);

car1.accelerate();
car1.brake();
car1.refuel();
car1.honk();

aeroplane1.accelerate();
aeroplane1.brake();
aeroplane1.refuel();
aeroplane1.takeOff()
