class TextBox {
    fill(text: string): void
    fill(text: string, locator: string): void

    fill(text: string, locator?: string) {

        if (locator) {

            console.log(`fill into the ${locator}`);

        } else {
            console.log(`Filling the ${text}`);

        }

    }


}

const tb = new TextBox();
tb.fill("Hai");
tb.fill("Testleaf", "#username");