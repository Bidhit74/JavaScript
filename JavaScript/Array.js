// array

// push():      its used to insert element in the last on the array
// pop():       its used to remove last element in the array.
// unshift():   its used to insert elemnet in the starting on the array.
// shift():     its used to remove first element in the array

// includes():  its used to check passed argument are have array or not.
// indexOf():   its used to know the indexOf of passed argument.
// join():      its used to get parent array element and convert it intothe string.
// slice():     its used to return part of array slice(startFrom, endTo) and endTo not include.
// splice():    its used to slice array, its include start and or point and remove that part in the array.
// push():      when we push an array in push() method then, its push array as an element.
// concat():    its used to make new array with caller and passed array elements.
// spread:      its used to spraed all element of array.
// let car = ['Alto', 'Baleno', 'Creta', 'Ertiga', 'Indigo'];
// let supercar = ['Supra', 'Prsche', 'Maclaren'];
// let mxicar = [...car, ...supercar];
// console.log(mxicar);

// flat():      its used to return element of all array and sub-array.
// let myArr = [1, 2, 3, [4, 5], 6, [7, 8, [9, [10, 11], 12], 13], 15];
// myArr = myArr.flat(Infinity);
// console.log(myArr);

// isArray():   its used to check passed argument is array or not and its return boolean value.
// from():      its used to make passed argument in array;
// of():        its return new array of passed element.


// let myArr = [0, 1, 2, 3 ,4 ]
// myArr.push(8)
// myArr.pop()
// myArr.unshift(10)
// myArr.shift()


// console.log(myArr.includes(8));
// console.log(myArr.indexOf(4));

// let newArr = myArr.join();

// console.log(newArr);
// console.log(myArr);
// console.log( typeof newArr);
// console.log( typeof myArr);


// Splice vs Slice

// console.log("A",myArr);

// const myn1 = myArr.slice(1,3)

// console.log(myn1);
// console.log("B",myArr);

// const myn2 = myArr.splice(1,3)
// console.log(myn2);
// console.log("C",myArr);

// let car = ['Alto', 'Baleno', 'Creta', 'Ertiga', 'Indigo'];
// let supercar = ['Supra', 'Prsche', 'Maclaren'];

// car.push(supercar)
// console.log(car);
// console.log(car[5]);
// console.log(car[5][1]);

// const allCar = car.concat(supercar)
// console.log(allCar);

// const allNewCar = [...car, ...supercar]
// console.log(allNewCar);

// let myArr = [1, 2, 3, [4, 5], 6, [7, 8, [9, [10, 11], 12], 13], 15];
// let newMyArr = myArr.flat(Infinity);
// console.log(myArr);
// console.log(newMyArr);

console.log(Array.isArray("Bidhit"));
console.log(Array.from("Bidhit"));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));