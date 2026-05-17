import { test } from "../fixtures/base-test.js"
import { DashboardPage } from "../pages/DashboardPage.js";
import { LoginPage } from "../pages/LoginPage.js";
import { ExcelUtils } from "../utils/excel-utlis.js"

test.describe("orangeHRM login tests", () => {

    const invalidLoginData = ExcelUtils.readExcel("invalidLoginData");
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