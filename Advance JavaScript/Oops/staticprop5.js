class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }

    static createId() {
        return "123";
    }
}
// const bidhit = new User("Bidhit");
// console.log(bidhit.createId());

class Teacher extends User {
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}

const userData = new Teacher("Bidhit", "bidhit@gmail.com");
console.log(userData);
userData.logMe();
// console.log(userData.createId());
