let myName = "Bidhit     ";

// console.log(myName.length);
// console.log(myName);

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.bidhit = function () {
  console.log(`Bidhit is present in all objects`);
};

Array.prototype.sayBidhit = function () {
  console.log(`My name Bidhit.`);
};

// heroPower.bidhit();
// myHeros.bidhit();
// myHeros.sayBidhit();
// heroPower.sayBidhit(); // this is not exucated kayki array not use in object

// // inheritance

const User = {
  name: "Bidhit",
  email: "Bidhit@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

// Teacher.__proto__ = User;

// // modern syntax
// Object.setPrototypeOf(TeachingSupport, Teacher);

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};

"iceTea       ".trueLength();
myName.trueLength();
