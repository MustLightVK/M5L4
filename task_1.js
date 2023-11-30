const myName = 'Vlad';
let age = 23;
const familyStatus = ({
    single: 'не женат/не замужем',
    engaged: 'помолвлен/помолвлена',
    married: 'женат/замужем'}
);
let haveChildren = false;

console.log(myName, typeof myName);
console.log(age, typeof age);
console.log(familyStatus.married, typeof familyStatus.married);
console.log(haveChildren, typeof haveChildren);


console.log();
console.log(familyStatus.married, typeof familyStatus);
