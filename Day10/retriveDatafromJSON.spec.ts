//Json

import {test} from "@playwright/test"


import data from "../../Data/sales.json"

// console.log(data.username)//democsr2
// console.log(data.password)//crmsfa

//iterate using for loop to read multiple set of data

for(let credentials of data) {
    
test(`learn to read data from JSON file ${credentials.TestCaseID}`, async ({page}) => {

await page.goto('https://login.salesforce.com/')

await page.locator('#username').fill(credentials.Username)
await page.locator('#Login').click()

await page.locator('#password').fill(credentials.Password)

await page.locator('#Login').click()

    
})

}