import {test, chromium } from "@playwright/test";


test('learn to launch the browser',async() => {
const browserInstance = await chromium.launch({ headless: false, channel: "chrome" });

const browserContext = await browserInstance.newContext();

const page = await browserContext.newPage();

await page.goto("https://platform.testleaf.com/#/");

});

