// date-time

// let date = new Date();
// console.log(date);
// console.log(date.toString());
// console.log(date.toISOString());
// console.log(date.toUTCString());
// console.log(date.toDateString());
// console.log(date.toTimeString());
// console.log(date.toLocaleString());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleTimeString());
// console.log(date.toJSON());
// console.log(date.getFullYear());
// console.log(typeof date);

// let newDate = new Date(2023, 10, 23, 4, 15);
// let newDate = new Date("08-22-2023");
// console.log(newDate);
// console.log(newDate.toLocaleString());

let myTimeStamp = new Date();

// console.log(myTimeStamp);
// console.log(myTimeStamp.getTime()); // mili second value deta
// console.log(Date.now()); // mili second value deta
// console.log(Math.floor(Date.now()/1000)); // mili second to convert second 

// console.log(myTimeStamp.getMonth() + 1);
// console.log(myTimeStamp.getUTCFullYear());
// console.log(myTimeStamp.getDate());

let newDate = new Date();

console.log( newDate.toLocaleString('default',{
      weekday:"long",
}))