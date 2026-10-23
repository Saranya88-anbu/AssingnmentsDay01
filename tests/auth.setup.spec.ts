import {test , expect} from "@playwright/test"



test('storagestate auth file creation',async ({page}) => {

await page.goto('https://leaftaps.com/opentaps/control/main')


//retry assertion
//await expect (page.getByAltText('Salesforce login')).toBeVisible()

await page.getByRole('textbox',{name:"Username"}).fill('democsr2')

await page.getByRole('textbox',{name:"Password"}).fill('crmsfa')

//await page.getByRole('textbox',{name:"Password"}).fill('Qeagle@123')
//await page.getByLabel('Password').fill('Charvi28')

await page.getByRole('button',{name:"Login"}).click()



//await page.waitForTimeout(30000)

await page.context().storageState({path:'playwright/.auth/user.json'})
//await page.getByRole('link',{name:"CRM/SFA"}).toBeVisible();

//await page.getByTitle('App Launcher').click()


})