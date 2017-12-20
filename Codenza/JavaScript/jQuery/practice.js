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
