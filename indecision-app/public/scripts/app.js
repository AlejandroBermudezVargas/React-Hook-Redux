'use strict';

function square(x) {
    return x * x;
}

//const squareArrow = (x) => {
//    return x * x;
//}

var squareArrow = function squareArrow(x) {
    return x * x;
};

var getFirstName = function getFirstName(fullName) {
    return fullName.split(' ')[0];
};

console.log(getFirstName('Alejandro Bermudez'));
console.log(squareArrow(8));
