// const PromiseOne = new Promise(function (resolve, reject) {
//   //Do an async task
//   //DB calls, cryptography, network

//   setTimeout(function () {
//     console.log("Async Task Completed");
//     resolve();
//   }, 1000);
// });

// PromiseOne.then(function () {
//   console.log("Promise Consumed");
// });

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async Task Completed");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("Promise Consumed");
// });

// const PromiseTwo = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({
//       username: "Bidhit",
//       email: "bidhit@hotmail.com",
//     });
//   }, 1000);
// });

// PromiseTwo.then(function (user) {
//   console.log(user);
// });

// const promiseFour = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({ username: "Bidhit", password: "12345" });
//     } else {
//       reject("ERROR: Something went wrong");
//     }
//   }, 1000);
// });

// promiseFour
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => console.log("The promise is either resolved or rejected"));

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "Bidhit", password: "12345" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

// async and await

async function consumedPromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumedPromiseFive();
