import { test, expect } from "../fixtures/base-test.js"

test.describe("orangeHRM login UI tests", () => {
    
    test('verify title', async ({ page }) => {
        await expect(page).toHaveTitle("OrangeHRM");
    });

    test('verify header', async ({ page }) => {
        await expect(page.locator("xpath=//h5[text()='Login']")).toHaveText("Login")
    });

    test('verify username and password placeholder', async ({ page }) => {
        await expect(page.locator("xpath=//input[@name='username']")).toHaveAttribute("placeholder", "Username")
        await expect(page.locator("xpath=//input[@name='password']")).toHaveAttribute("placeholder", "Password")
    });

     
    test('verify application version', async ({ page }) => {
        await expect(page).toHaveTitle("OrangeHRM");
    });

})