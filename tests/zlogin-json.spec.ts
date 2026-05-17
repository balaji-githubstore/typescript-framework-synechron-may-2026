import { test } from "../fixtures/base-test.js"
import { DashboardPage } from "../pages/DashboardPage.js";
import { LoginPage } from "../pages/LoginPage.js";
import { JsonUtils } from "../utils/json-utlis.js"

test.describe("orangeHRM login tests", () => {

    //update valid login test method with data driven from json - key - validLoginData
    const validLoginData = JsonUtils.getJson("validLoginData");
    for (const { username, password, expectedText } of validLoginData) {
        test(`verify valid login: ${username} and ${password}`, async ({ page }) => {
            const loginPage = new LoginPage(page);
            await loginPage.fillUsername(username);
            await loginPage.fillPassword(password);
            await loginPage.clickOnLogin();

            const dashboardPage = new DashboardPage(page);
            await dashboardPage.validateDashboardHeader(expectedText);
        });
    }

    const invalidLoginData = JsonUtils.getJson("invalidLoginData");
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