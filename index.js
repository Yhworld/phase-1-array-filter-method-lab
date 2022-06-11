// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

const findMatching = (drivers, value) => {
     return drivers.filter((fn) => fn.toLowerCase() === value.toLowerCase());
}

const fuzzyMatch = (drivers, value) => {
    return drivers.filter((fn) => fn[0] === value[0]      )
}
