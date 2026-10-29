import { test, expect } from "@playwright/test";
import path from "path";


test("Learn to automate uploading multiple files", async ({ page }) => {
  // Navigate to the Advanced Upload section
  await page.goto("https://www.leafground.com/file.xhtml");
  // Upload two image files using the setInputFiles() method and pass files as an array
  let fileUploadReference = page.locator('(//input[@type="file"])[2]');
  await fileUploadReference.setInputFiles([
    path.join(__dirname, "../../Data/download.jpg"),
    path.join(__dirname, "../../Data/OIP (1).jpg"),
  ]);
  // Verify that both files are selected/uploaded successfully.
  await expect(page.getByText("download.jpg")).toBeVisible();
  await expect(page.getByText("OIP (1).jpg")).toBeVisible();
});