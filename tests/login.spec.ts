import { test, expect } from "../fixtures/base-test.js"
import { LoginPage } from "../pages/LoginPage.js";

test.describe("orangeHRM login tests", () => {

    test('verify valid login', async ({ page }) => {
        await page.locator("xpath=//input[@name='username']").fill("Admin");
        await page.locator("xpath=//input[@name='password']").fill("admin123");
        await page.locator("xpath=//button[normalize-space()='Login']").click();
        await expect(page.locator("//h6[contains(normalize-space(),'Dash')]")).toHaveText("Dashboard");
    });

    test('verify invalid login', async ({ page }) => {
        await page.locator("xpath=//input[@name='username']").fill("john");
        await page.locator("xpath=//input[@name='password']").fill("admin123");
        await page.locator("xpath=//button[normalize-space()='Login']").click();
        await expect(page.locator("//p[contains(normalize-space(),'Invalid')]")).toHaveText("Invalid credentials");
    });
})