import {test , expect} from "@playwright/test"

test.use({

    storageState:'playwright/.auth/user.json'
})

test('skip login using storage state',async ({page}) => {

await page.goto('https://leaftaps.com/opentaps/control/login;jsessionid=C4AC029EE0C01D383EAA0BDCB64EDE64.jvm1')

await page.waitForTimeout(2000)


})