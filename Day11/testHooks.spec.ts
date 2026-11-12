//hooks

import {test} from "@playwright/test"

import {parse} from "csv-parse/sync"

import fs from 'fs'

//exposing globally

let value:any

test.describe.serial('Run the test in serial mode',async () => {
    


//data base connectivity

test.beforeAll('Database connectivity',async () => {
console.log("test runs before all the test");
value=parse(fs.readFileSync('Data/leaf.csv','utf-8'),{columns:true,skip_empty_lines:true})
    
})


//login functionality

test.beforeEach('Login functionaliy', async ({page}) => {
console.log("login before each and every test");
await page.goto('https://leaftaps.com/opentaps/control/main')
await page.locator('#username').fill(value[0].username)
await page.locator('#password').fill(value[0].password)
await page.locator(".decorativeSubmit").click()
await page.locator('text=CRM/SFA').click()

    
})


//create lead
test('Create a lead module',async ({page}) => {
console.log("lead is created");
await page.locator('//a[text()="Leads"]').click()
   
})

//create Account
test('Create a Account module',async ({page}) => {
console.log("Account is created");
await page.locator('//a[text()="Accounts"]').click()  
})


//print the test results

test.afterEach('test results',async ({},testinfo) => {
console.log("printing test result after each and every test");
console.log(testinfo.status);
console.log(testinfo.title);
   
})

//Close DB and browser

test.afterAll('teardowns parts and close the browser',async () => {
console.log(" test runs after all the tests");
   
})

})