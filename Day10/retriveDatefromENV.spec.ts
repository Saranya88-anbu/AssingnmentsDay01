import test from "@playwright/test"

import dotenv from "dotenv"

//envfile - user defined variable to switch between the env files in the terminal

let filename=process.env.envfile || 'prod' || 'qa'||'uat'

dotenv.config({path:`Data/${filename}.env`})


//reading single environment
//dotenv.config({path:'Data/prod.env'})

//console.log(process.env.username)//admin
//console.log(process.env)//admin

// console.log(process.env.lf_url);
// console.log(process.env.lf_username);
// console.log(process.env.lf_password);

/* https://leaftaps.com/opentaps/control/main
democsr2
crmsfa */

//type assertion
let URL=process.env.URL as string
let Username=<string>process.env.Username
let Password=process.env.Password!

test(`learn to read data from Env file`, async ({page}) => {


//await page.goto(process.env.lf_url as string)
await page.goto(URL)

await page.locator('#username').fill(Username)
await page.locator('#password').fill(Password)

await page.locator('.decorativeSubmit').click()
})