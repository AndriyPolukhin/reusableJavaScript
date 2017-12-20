// S.O.L.I.D.

// **Single Reasponsibility Principle**
// One reason to change

// Bad
class UserSettings {
    constructor(user) {
        this.user = user;
    }
    changeSettings(settings) {
        if (this.verifyCredentials()) {
            // ..
        }
    }
    verifyCredentials() {
        //..
    }
}

// Good

class UserAuth {
    constructor(user) {
        this.user = user;
    }
    verifyCredentials() {

    }
}


class UserSettings {
    constructor(user) {
        this.user = user;
        this.auth = new UserAuth(user);
    }
    changeSettings(settings) {
        if (this.auth.verifyCredentials()) {
            //..
        }
    }
}
