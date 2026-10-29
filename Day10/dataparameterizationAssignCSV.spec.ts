import { test } from "@playwright/test";

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
})


