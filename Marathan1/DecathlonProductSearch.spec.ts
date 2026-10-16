import { test, expect } from "@playwright/test"
test.setTimeout(6000);
test('marathan1  decathlon product search', async ({ page }) => {
    await page.goto('https://www.decathlon.in/');
    await expect(page).toHaveURL('https://www.decathlon.in/');
    const title = await page.title();
    console.log("Page Title:", title);
    await expect(page).toHaveTitle(/Buy Sporting Goods/);


    let pageUrl = await page.url()

    console.log(pageUrl);
    const searchInput = page.getByRole("searchbox");

    // 5. Verify the search input field is enabled
    await expect(searchInput).toBeEnabled();

    // 6.Enter the Product name as "shoes" in the search field
    await searchInput.fill("shoes");


    // 7. Press Enter to search the product
    await searchInput.press("Enter");
    await expect(page).toHaveTitle("Search | shoes");
    console.log("Page title:", await page.title());

    //setTimeout(() => { debugger }, 4000)

    // 10. click on the "Running" category Filter
    await page.locator('(//*[@data-test-id="accordion:add-icon"])[4]').click();
    //await page.locator('[data-test-id="filter-checkbox-sport_pratice_en-Running"]').first();
    await expect(page.getByTestId("filter-checkbox-sport_pratice_en-Running")).toBeVisible();

    //await expect(page.getByRole("checkbox",{name:"Running 29"})).toBeVisible();
    await page.getByTestId("filter-checkbox-sport_pratice_en-Running").click();
    //await page.getByRole("checkbox", { name:"Running 29" }).click();
    // 11. click on the Men Gender Field

    await page.locator('(//*[@data-test-id="accordion:add-icon"])[1]').click();
    await expect(page.getByTestId("filter-checkbox-gender_id_en-MEN")).toBeVisible();
    await page.getByTestId("filter-checkbox-gender_id_en-MEN").click();
    //await expect(page.getByRole("checkbox",{ name: "Men 359" })).toBeVisible();
    // await page.getByRole("checkbox",{ name:"Men 359" }).click();
    // 12. Click on the shoe size filter "UK 10.5".
    await page.locator('(//*[@data-test-id="accordion:add-icon"])[2]').click();

    await expect(page.getByTestId("filter-checkbox-indian_size-10.5")).toBeVisible();

    await page.getByTestId("filter-checkbox-indian_size-10.5").click();


    // 13. Click on the "Most relevant" sorting dropdown.
    await page.getByTestId("sort-bar-desktop:chevron-down-icon").click();

    // 14. Select "Price: Low to High" from the sorting options.
    await page.getByText("Price (low → high)").click();
    // 15. Click on the first product from the displayed product list.

    await page.getByTestId("product-card-product-image:img").first().click();

    // 16. Select the shoe size "UK 10.5 - EU 45" on the product detail page.
    await page.getByTestId("pdp-size-option-text-6").click();
    // 17. Click on the "Add to Cart" button
    await page.getByTestId("pdp:add-to-cart-button").click();

    await expect(page.getByRole("heading", { name: "Product(s) added to cart" })).toBeVisible();
    let productAdded = await page.getByRole("heading", { name: "Product(s) added to cart" }).textContent();
    console.log(productAdded);


    // 18. Click on the Cart option.
    await page.getByTestId("header-desktop:cart-icon").click();
    // 19. Fetch the total cart value.
    const totalCartValue = page.locator("//div[@data-test-id='cart:cart-checkout-total-cart-value']/p");
    await expect(totalCartValue).toBeVisible();

    // 20.Print the total cart amount in the console.
    const totalCartAmount = await totalCartValue.textContent();
    console.log(totalCartAmount);



})

