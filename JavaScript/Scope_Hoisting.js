// scope
// const a = 50;
// let b = 20;
// var c = 30;
// var c = 300; 
// if (true) {
//     const a = 10;
    // let b = 20;
    // var c = 30;
    // c = 30;
//     console.log(a);
// }
// console.log(a);
// console.log(b);
// console.log(c);

// scope level and mini hoisting

// function one() {
//     let username = "Bidhit";
//     function two() {
//         let website = "youtube.com";
//         console.log(username+website);
//     }
//     // console.log(website);
//     two();
// }

// one();

// +++++++++++ Interesting +++++++++++
addOne(5);
function addOne(num) {
    return num + 1;
}

addTwo(6);
const addTwo = function(num) {
    return num + 2;
}