//Prototypal inheritance and prototypal chain (__proto__)
//use in object
//Ex1:
const person = {
    alive: true
}
const musician = {
    playInstrument: true
}
// musician.__proto__ = person; //It's the same as inheritance in OOP
// console.log(musician.alive); //true
// console.log(musician);
console.log(Object.getPrototypeOf(person));
Object.setPrototypeOf(musician, person);
console.log(Object.getPrototypeOf(musician));
console.log(musician.playInstrument);

const guitarist = {
    __proto__: musician,
    playGuitar: true
}
console.log("Guitarist: ", guitarist);
console.log("Guitarist can play instrument: " + guitarist.playInstrument);
console.log("Guitarist alive: " + guitarist.alive);
//Ex2:
const car = {
    doors: 2,
    seats: 'vinyl',
    get seatMaterial() {
        return this.seats;
    },
    set seatMaterial(material) {
        this.seats = material; 
    }
}

var luxuryCar = {};
Object.setPrototypeOf(luxuryCar, car);
luxuryCar.seatMaterial = "leather";
console.log(luxuryCar.seatMaterial);
console.log(luxuryCar.doors);
console.log(luxuryCar.valueOf());


//Extend in JS
class Vehicle {
    constructor() {
        this.wheels = 4;
        this.motorized = true
    }
    ready() {
        return "ready to go!"
    }
}

class Motorcycle extends Vehicle {
    constructor() {
        super();
        this.wheels = 2;
        this.hasMirror = true;
    }
    wheelie() {
        return "on one wheel now!"
    }
}

const myMortorCycle = new Motorcycle();
console.log("Wheels: ", myMortorCycle.wheels);
console.log("Has mirror: ", myMortorCycle.hasMirror);
console.log("My mortorbike is", myMortorCycle.ready());
console.log("My mortorbike is", myMortorCycle.wheelie());
