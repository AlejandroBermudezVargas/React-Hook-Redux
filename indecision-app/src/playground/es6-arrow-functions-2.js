// arguments object - no longer  bound with arrow functions

const add = (a,b) => {
    //console.log(arguments);
    return a + b;
};

console.log(add(55, 1));

// this keywork - not longer bound

const user = {
    name: 'Alejandro',
    cities: ['Alajuela', 'San Jose', 'Cartago'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

const multiplier = {
    multiplyBy: (numberList, multiplyBy) => numberList.map((number) => number * multiplyBy) 
}

console.log(multiplier.multiplyBy([1, 2, 3, 4, 5], 25));