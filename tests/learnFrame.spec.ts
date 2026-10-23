import { test, expect } from "@playwright/test"
test('handling frames and alert', async ({ page }) => {
    await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm')
    let frame = page.frameLocator('#iframeResult')
    page.once('dialog', async (alert) => {
        // Handle the JavaScript prompt dialog using Playwright.

        alert.type()


        console.log(alert.message());
        await alert.accept();
    })
    await page.frameLocator('[name="iframeResult"]').locator('(//button[text()="Try it"])').click()

    const resultMessage = await page.frameLocator('//iframe[@id="iframeResult"]').locator('#demo');
    console.log(await resultMessage.innerText());
    await expect(resultMessage).toHaveText('You pressed OK!')

})
