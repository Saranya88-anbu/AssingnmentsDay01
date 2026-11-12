// Base class
class WebComponent {
    selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }

    click(): void {
        console.log(`Clicking component: ${this.selector}`);
    }

    focus(): void {
        console.log(`Focusing on component: ${this.selector}`);
    }
}

// Derived class: Button
class Button extends WebComponent {
    override click(): void {
        super.click();
        console.log(`Button clicked: ${this.selector}`);
    }
}

// Derived class: TextInput
class TextInput extends WebComponent {
    value: string = "";

    enterText(text: string): void {
        this.value = text;
        console.log(`Entering text "${this.value}" into: ${this.selector}`);
    }
}

// Demonstrate the components
function testComponents(): void {
    const button = new Button("#loginButton");
    const textInput = new TextInput("#username");

    button.focus();
    button.click();

    textInput.focus();
    textInput.enterText("Saranya");

    console.log(`Current input value: ${textInput.value}`);
}

testComponents();