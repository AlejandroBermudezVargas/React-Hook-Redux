class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGretting() {
        return 'Hi! I am ' + this.name;
    }

    getDescription() {
        return  this.name + ' is ' + this.age + ' year(s) old!'
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }

    getDescription() {
       let description = super.getDescription();
       
       if(this.hasMajor){
           description += ' His major is ' + this.major;
       }
       return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGretting() {
        let greeting = super.getGretting();

        if (this.homeLocation) {
            greeting += ' I am visiting from ' + this.homeLocation;
        }

        return greeting;
    }
}

const me = new Traveler('Alejandro', 22, 'Costa Rica');
console.log(me);
console.log(me.getGretting());
console.log(me.getDescription());