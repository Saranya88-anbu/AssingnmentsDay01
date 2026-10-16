import { test } from "@playwright/test"
test('create a lead using css selectors', async ({ page }) => {
    await page.goto('http://leaftaps.com/opentaps/control/main')
    await page.locator('#username').fill('democsr2')
    await page.locator('#password').fill('crmsfa')
    await page.locator('input[type="submit"]').click()
    await page.locator('text=CRM/SFA').click()
    let pageTitle = await page.title()
    console.log(pageTitle);
    let pageUrl = await page.url()
    console.log(pageUrl);

    await page.locator('[href="/crmsfa/control/leadsMain"]').click()
    await page.locator('[href="/crmsfa/control/createLeadForm"]').click()
    await page.locator('#createLeadForm_companyName').fill('Amazon')
    await page.locator('#createLeadForm_firstName').fill('Saranya')
    await page.locator('#createLeadForm_lastName').fill('Anbarasan')
    await page.locator('#createLeadForm_personalTitle').fill('Ms.')
    await page.locator('#createLeadForm_generalProfTitle').fill('Automation Tester')
    await page.locator('#createLeadForm_annualRevenue').fill('50000')
    await page.locator('#createLeadForm_departmentName').fill('Testing')


    const sourceDropdown = page.locator('select[id="createLeadForm_dataSourceId"]');

    const sourceOptions = page.locator('select[id="createLeadForm_dataSourceId"]>option');
    const optionCount = await sourceOptions.count();

    for (let i = 0; i < optionCount; i++) {
        console.log(await sourceOptions.nth(i).innerText());
    }

    await page.locator('input[id="createLeadForm_primaryPhoneNumber"]').fill("9687542323");

    await page.locator('.smallSubmit').click();
})

/*1. Navigate to the URL: http://leaftaps.com/opentaps/control/main
2. Enter the username as democsr2.
3. Enter the password as crmsfa.
4. Click the Login button.
5. Click CRM/SFA.
6. Click Leads.
7. Click Create Lead.
8. Use only CSS selectors to locate all web elements.
9. Fill the Company Name.
10. Fill the First Name.
11. Fill the Last Name.
12. Fill the Salutation.
13. Fill the Title.
14. Fill the Annual Revenue.
15. Fill the Department.
16. Locate the Source dropdown using a CSS selector.
17. Iterate through all options in the Source dropdown.
18. Print each dropdown value/text in the console.
19. Fill the Phone Number.
20. Click the Create Lead button.*/