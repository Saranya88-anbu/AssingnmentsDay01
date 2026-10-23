import { test, expect } from "@playwright/test";


test('learn playwright selectors', async ({ page }) => {
    await page.goto('https://leaftaps.com/opentaps/control/main')

    await page.getByLabel('Username').fill('democsr2')
    await page.getByLabel('Password').fill('crmsfa')

    await page.getByRole('button', { name: "Login" }).click()
    await expect(page.getByText('CRM/SFA')).toBeVisible()
    await page.getByText('CRM/SFA').click()





})
