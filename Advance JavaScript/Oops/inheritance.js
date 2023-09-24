class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const userDtails = new Teacher("Bidhit", "bidhit@gmail.com", "1234");

userDtails.addCourse();

console.log(userDtails instanceof Teacher);
console.log(userDtails instanceof User);
