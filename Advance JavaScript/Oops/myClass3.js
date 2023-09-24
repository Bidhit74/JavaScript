// ES6

// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   encryptedPassword() {
//     return `${this.password}abc`;
//     // return `*****`;
//   }

//   changeUsername() {
//     return `${this.username.toUpperCase()}`;
//   }
// }

// const userDetails = new User("Bidhit", "bidhit@gmail.com", 123);

// console.log(userDetails.encryptedPassword());
// console.log(userDetails.changeUsername());

// // behind the scene

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};
User.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const userDetails = new User("Bidhit", "bidhit@gmail.com", 123);

console.log(userDetails.encryptPassword());
console.log(userDetails.changeUsername());
