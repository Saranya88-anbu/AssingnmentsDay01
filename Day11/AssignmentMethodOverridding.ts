class BasePage {
    findElement() {
        console.log("Finding a web element");
    }

    clickElement() {
        console.log("Clicking a web element");
    }

    enterText() {
        console.log("Entering text into a web element");
    }

    performCommonTasks() {
        console.log("Performing common page tasks");
    }
}

class LoginPage extends BasePage {
    override performCommonTasks() {
        console.log("Performing login page tasks");
        this.findElement();
        this.enterText();
        this.clickElement();
    }
}

// Create an object of BasePage
const basePage = new BasePage();
basePage.findElement();
basePage.clickElement();
basePage.enterText();
basePage.performCommonTasks();

// Create an object of LoginPage
const loginPage = new LoginPage();
loginPage.performCommonTasks();