import { test } from "../fixtures/base-test.js"
import { DashboardPage } from "../pages/DashboardPage.js";
import { LoginPage } from "../pages/LoginPage.js";
import { JsonUtils } from "../utils/json-utlis.js"

test.describe("orangeHRM login tests", () => {

    test('verify valid login', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.fillUsername("Admin");
        await loginPage.fillPassword("admin123");
        await loginPage.clickOnLogin();

        const dashboardPage = new DashboardPage(page);
        await dashboardPage.validateDashboardHeader("Dashboard");
    });

    const invalidLoginData=JsonUtils.getJson("invalidLoginData");
    for (const { username, password, expectedError } of invalidLoginData) {
        test(`verify invalid login: ${username} and ${password}`, async ({ page }) => {
            const loginPage = new LoginPage(page);
            await loginPage.fillUsername(username);
            await loginPage.fillPassword(password);
            await loginPage.clickOnLogin();
            await loginPage.validateInvalidErrorMessage(expectedError);
        });
    }
})