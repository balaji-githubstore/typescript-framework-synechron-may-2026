import { test, expect } from "../fixtures/base-test.js"
import { DashboardPage } from "../pages/DashboardPage.js";
import { LoginPage } from "../pages/LoginPage.js";


test.describe("orangeHRM login tests", () => {

    test('verify valid login', async ({ page }) => {
        const loginPage = new LoginPage(page);
        loginPage.fillUsername("Admin");
        loginPage.fillPassword("admin123");
        loginPage.clickOnLogin();

        const dashboardPage = new DashboardPage(page);
        dashboardPage.validateDashboardHeader("Dashboard");
    });

    test('verify invalid login', async ({ page }) => {
        const loginPage = new LoginPage(page);
        loginPage.fillUsername("john");
        loginPage.fillPassword("john123");
        loginPage.clickOnLogin();
        loginPage.validateInvalidErrorMessage("Invalid credentials");
    });
})