import { chromium,test,webkit } from "@playwright/test"
test('learn to launch the chromium and webkit browser',async()=>{
    let browser= await chromium.launch({headless:false})
    let context= await browser.newContext()
    let page= await context.newPage()

    await page.goto("https://www.redbus.in/")
    const url=page.url()
    console.log(url);
    const title=await page.title()
    console.log(title);

    let webkitBrowser= await webkit.launch({headless:false})
    let webkitContext= await webkitBrowser.newContext()
    let webkitPage= await webkitContext.newPage()

    await webkitPage.goto("https://www.flipkart.com/")
    const url1=webkitPage.url()
    console.log(url1);
    const title1=await webkitPage.title()
    console.log(title1);


    
    
})

