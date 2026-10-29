import { test, expect } from "@playwright/test"
test('merge lead using window handling', async ({ page, context }) => {
  await page.goto("http://leaftaps.com/opentaps/control/main");
  //Enter the username
  await page.locator("#username").fill('demosalesmanager');
  //Enter the password
  await page.locator('input[id="password"]').fill('crmsfa');
  //Click the Login button
  await page.locator('[value="Login"]').click();
  //Click CRM/SFA
  await page.locator("text=CRM/SFA").click();
  //Click Leads
  await page.locator('//a [text()="Leads"]').click();
  // Click Merge Leads
  await page.locator('//a[text()="Merge Leads"]').click();
  // Click From Lead Widget and handle the new window
  const fromPagePromise = context.waitForEvent("page");
  await page.locator('(//img[@alt="Lookup"])[1]').click();
  const fromLeadWidget = await fromPagePromise;
  // Select the first resulting Lead ID
  const fromLeadId = await fromLeadWidget
    .locator('//table[contains(@class,"x-grid3-row-table")]//tr[1]//a')
    .first()
    .click();
  // Click To Lead widget
  const toPagePromise = context.waitForEvent("page");
  await page.locator('(//img[@alt="Lookup"])[2]').click();
  const toLeadWidget = await toPagePromise;
  // Select the Second resulting Lead ID
  const toLeadId = await toLeadWidget
    .locator('(//table[@class="x-grid3-row-table"])[2]//a')
    .first()
    .click();
  // Get the message and type of the alert and Accept the alert
  page.once("dialog", async (dialog) => {
    console.log("Alert type:", dialog.type());
    console.log("Alert message:", dialog.message());
    await dialog.accept();
  });

  // Click Merge Button
  await page.locator('//a[@class="buttonDangerous"]').click();

  console.log(await page.title())
  // Assert page title
  await expect(page).toHaveTitle('View Lead | opentaps CRM');

});




/*- Enter the password.
 - Click the Login button.
 - Click CRM/SFA -
 Click Leads -
 Click Merge Leads -
 Click From Lead widget -
 Select the first resulting lead id - 
Click To Lead widget - 
Select the second resulting lead id -
 Click Merge button - 
Get the message and type of the alert - 
Accept the alert -
 Click Merge button -
 Assert the title of the page*/



