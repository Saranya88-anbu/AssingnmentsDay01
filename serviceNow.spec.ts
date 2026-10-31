import { test ,expect} from "@playwright/test";
import fs from "fs";
import { parse } from "csv-parse/sync";
// Read from CSV file
const data: any = parse(fs.readFileSync('Data/service.csv', 'utf-8'), {columns: true,skip_empty_lines: true,});
// Take the first row of CSV data
const service= data[0];

//1.Launch browser and navigate to Service Now application URL
test(`learn to read data from CSV file `, async ({page}) => {

await page.goto('https://dev330545.service-now.com');
// 2. Login using valid admin credentials

await page.locator('#user_name').fill(service.Username);

await page.locator('#user_password').fill(service.Password);

 
await page.locator('[type="submit"]').click();


 
//3. Verify Service Now home page is displayed
await expect(page).toHaveURL('https://dev330545.service-now.com/now/nav/ui/home');
//4.Navigate to All → Service Catalog 
await page.locator('div[aria-label="All"]').click();
//5. Switch to Service Catalog iframe 
await page.locator("text=Service Catalog").click();

//6. Select Mobiles category 
    let frame = page.frameLocator('#gsft_main')
await frame.getByRole("link",{name:"Mobiles",exact:true}).click();
//7. Choose Apple iPhone 13 Pro
await frame.locator('//strong[text()="Apple iPhone 13 pro"]').click();
//8.Configure all required options 
await frame.locator('//label[text()="No"]').click();
await frame.locator('select[class="form-control cat_item_option "]').selectOption({value: "500MB"})
await frame.locator('//label[text()="Gold"]').click();
await frame.locator('//label[text()="512 GB [add $300.00]"]').click();



//9. Click Order Now 
await frame.locator('//button[text()="Order Now"]').click();

//10. Verify order confirmation message 
await expect (frame.getByText("Thank you, your request has been submitted")).toBeVisible();
//11. Capture full-page screenshot 
await page.screenshot({path:"Data/Order-Confirmation-Page.png",fullPage:true});

})


/*import { test, expect } from "@playwright/test"
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








URL:https://dev330545.service-now.com
Username:Admin
Password:TkA5z3JBzp//*/


/*import { test } from "@playwright/test";

import fs from "fs";
import { parse } from "csv-parse/sync";
// Read from CSV file
const data: any = parse(fs.readFileSync('Data/lead.csv', 'utf-8'), {columns: true,skip_empty_lines: true,});
// Take the first row of CSV data
const lead = data[0];


test(`learn to read data from JSON file `, async ({page}) => {

await page.goto('http://leaftaps.com/opentaps/control/main');
//Enter the username and password

await page.locator('#username').fill(lead.Username);

await page.locator('#password').fill(lead.Password);
//Click Login
 
await page.locator('.decorativeSubmit').click();
//Click CRM/SFA
await page.locator("text=CRM/SFA").click();
  //Click Leads
  await page.locator('//a [text()="Leads"]').click();
 //Click Create Leads
 await page.locator('//a[text()="Create Lead"]').click();
//Fill all the mandatory fields such as Company name, First name and Last name

await page.locator('#createLeadForm_companyName').fill(lead.CompanyName);
await page.locator('#createLeadForm_firstName').fill(lead.FirstName);
await page.locator('#createLeadForm_lastName').fill(lead.LastName);

//Select Direct Mail from the Source dropdown using label

    await page.locator('#createLeadForm_dataSourceId').selectOption({label:lead.Source});
    //Select Demo Marketing Campaign from the Marketing Campaign dropdown using value
    await page.locator('#createLeadForm_marketingCampaignId').selectOption({value:lead.MarketingCampaign});
    //Get the count and print all the values in the Marketing Campaign dropdown

    const allMarketingCampaign=page.locator('#createLeadForm_marketingCampaignId>option');
    const mcCount = await allMarketingCampaign.count();
  for (let i = 0; i < mcCount; i++) {
    const mcValues = await allMarketingCampaign.nth(i).innerText();
    console.log(mcValues);
  }
  //Select General Services from the Industry dropdown using index
  await page.locator('#createLeadForm_industryEnumId').selectOption({index:Number(lead.Industry)});
  //Select INR from the Preferred Currency dropdown
  await page.locator('#createLeadForm_currencyUomId').selectOption({value:lead.PreferredCurrency});
  //Select India from the Country dropdown
  await page.locator('#createLeadForm_generalCountryGeoId').selectOption({value:lead.Country});
//Select any state from the State dropdown
  await page.locator('#createLeadForm_generalStateProvinceGeoId').selectOption(lead.State);
  //Get the count of all states and print the values in the console 
  const allStates=page.locator('#createLeadForm_marketingCampaignId>option');
    const stCount = await allStates.count();
  for (let i = 0; i < stCount; i++) {
    const stValues = await allStates.nth(i).innerText();
    console.log(stValues);
  }
  //Click Create Lead
  await page.locator('.smallSubmit').click();
})*/


