// Code your solution here
const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];


const findMatching = (drivers, value) => {
     return drivers.filter((fn) => fn.toLowerCase() === value.toLowerCase());
}

const fuzzyMatch = (drivers, value) => {
    return drivers.filter((fn) => fn[0] === value[0]      )
}
const matchName = function(drivers, value){
    return drivers.filter(item => item.name === value);
}  