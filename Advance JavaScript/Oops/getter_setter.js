class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get email() {
        return this._email.toUpperCase();
    }
    set email(value) {
        this._email = value;
    }

    get password() {
        return `${this._password}bidhit`;
    }

    set password(value) {
        this._password = value;
    }
}

const bidhit = new User("bidhit@gmail.com", "abc");
console.log(bidhit.email);
