import { test, expect } from "../fixtures/base-test.js"
import { DashboardPage } from "../pages/DashboardPage.js";
import { LoginPage } from "../pages/LoginPage.js";


test.describe("orangeHRM login tests", () => {

    test('verify valid login', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.fillUsername("Admin");
        await loginPage.fillPassword("admin123");
        await loginPage.clickOnLogin();

        const dashboardPage = new DashboardPage(page);
        await dashboardPage.validateDashboardHeader("Dashboard");
    });

    test('verify invalid login', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.fillUsername("john");
        await loginPage.fillPassword("john123");
        await loginPage.clickOnLogin();
        await loginPage.validateInvalidErrorMessage("Invalid credentials");
    });
})