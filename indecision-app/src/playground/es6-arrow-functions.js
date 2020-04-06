function square(x) {
    return x * x;
}

//const squareArrow = (x) => {
//    return x * x;
//}

const squareArrow = (x) => x * x;

const getFirstName = (fullName) => fullName.split(' ')[0]; 


console.log(getFirstName('Alejandro Bermudez'))
console.log(squareArrow(8))