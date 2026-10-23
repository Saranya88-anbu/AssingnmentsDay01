
import { test } from "@playwright/test"
test('create a lead using css selectors', async ({ page }) => {
//1.Launch the browser    
    await page.goto('http://leaftaps.com/opentaps/control/main')
//2. Enter the username
    await page.locator('#username').fill('democsr2')
//3. Enter the password
    await page.locator('#password').fill('crmsfa')
//4. Click Login
    await page.locator('input[type="submit"]').click()
//5. Click CRM/SFA link
    await page.locator('text=CRM/SFA').click()
//6. Click Leads link
await page.getByRole('link',{name:"Leads"}).click();
//7. Click on Create Lead
await page.getByRole('link',{name:"Create Lead"}).click();

//8. Enter company name
await page.locator('#createLeadForm_companyName').fill('Amazon')
//9. Enter first name
await page.locator('#createLeadForm_firstName').fill('Saranya')
//10.Enter last name
await page.locator('#createLeadForm_lastName').fill('Anbarasan')
//11.Click on Create Lead button
await page.locator('.smallSubmit').click();
//12.Click Edit
await page.getByRole('link',{name:"Edit"}).click();

//13.Change the company name
await page.locator('#updateLeadForm_companyName').clear();
await page.locator('#updateLeadForm_companyName').fill('Testleaf')

//14.Click Update
await page.getByRole('button',{name:"Update"}).click();

})