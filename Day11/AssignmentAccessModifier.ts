class LoginTest {
    public browserName: string = "Chrome";
    private password: string = "admin123";
    protected userName: string = "tester";

    public openApplication(): void {
        console.log(`Opening application in ${this.browserName}`);
    }

    public login(): void {
        // Private and protected properties are accessible inside the class
        console.log(`Username: ${this.userName}`);

        if (this.password === "admin123") {
            console.log("Login successful");
        }
    }
}

// Create an object outside the class
const loginTest = new LoginTest();

// Access public property and methods
console.log(loginTest.browserName);
loginTest.openApplication();
loginTest.login();

//Understand the publi,private,protected
// Uncomment each line to observe TypeScript compilation errors:
// console.log(loginTest.password); // Error: password is private
// console.log(loginTest.userName); // Error: userName is protected