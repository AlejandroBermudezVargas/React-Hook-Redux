'use strict';

// arguments object - no longer  bound with arrow functions

var add = function add(a, b) {
    //console.log(arguments);
    return a + b;
};

console.log(add(55, 1));

// this keywork - not longer bound

var user = {
    name: 'Alejandro',
    cities: ['Alajuela', 'San Jose', 'Cartago'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
    }
};

var multiplier = {
    multiplyBy: function multiplyBy(numberList, _multiplyBy) {
        return numberList.map(function (number) {
            return number * _multiplyBy;
        });
    }
};

console.log(multiplier.multiplyBy([1, 2, 3, 4, 5], 25));
