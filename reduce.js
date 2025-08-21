//The reduce() method in JavaScript iterates over an array and accumulates its elements into a single value. It takes two arguments: a callback function and an optional initial value.


// const items = [
//     {name:'chicken',price: 180},
//     {name:'vagetables',price: 80},
//     {name:'fruit',price: 80},
//     {name:'fruit',price: 80}
// ]

// const totalPrice = items.reduce((total,item)=>{
//     console.log(`total:${total}`);
//     console.log(`item:${item.price}`);
//     return total + item.price;//here total is the accumulator that's why we don't need to say total += item.price;
// },0);
// console.log(totalPrice);

//---------------------------
const people = [
    {name:"shanta",age: 20},
    {name:"rubel",age: 32},
    {name:"ayan",age: 6},
    {name:"lubab",age: 6},
]

// const result = people.reduce((grouped,person)=>{
//     let age = person.age;
//     console.log(grouped[age])
//     if(grouped[age] == null){
//         grouped[age] = [];
//     }
//     grouped[age].push(person.name);
//     return grouped
// },{});
// console.log(result);

//---------------------------

const numbers = [1,2,3,4,5,60];

const sum = numbers.reduce((total,num)=>{
    return total + num
},0);
console.log(sum);

