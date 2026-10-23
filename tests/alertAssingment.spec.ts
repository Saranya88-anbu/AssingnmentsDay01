import { test } from "@playwright/test"
test('alert assingnment', async ({ page }) => {

      //Launch the URL: https://www.leafground.com/alert.xhtml
    await page.goto('https://www.leafground.com/alert.xhtml')

    page.on('dialog', async (alert) => {
        // Handle the JavaScript prompt dialog using Playwright.

        let alertType = alert.type()
        console.log(alertType);
        let alertMessage = alert.message()
        console.log(alertMessage);

        // Enter the value "Playwright" in the prompt using the accept() method.
        if (alertType === "prompt") {
            await alert.accept("Playwright")
        } else {

            await alert.dismiss()
        }
    })
    //   Click on "Prompt Dialog".

    await page.locator('//span[text()="Show"]').nth(4).click()


})


