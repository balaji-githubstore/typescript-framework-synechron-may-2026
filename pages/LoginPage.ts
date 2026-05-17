import { expect, type Page } from "../fixtures/base-test.js"

class LoginPage {

    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async fillUsername(username: string): Promise<void> {
        await this.page.locator("xpath=//input[@name='username']").fill(username);
    }

    public async fillPassword(password: string): Promise<void> {
        await this.page.locator("xpath=//input[@name='password']").fill("admin123");
    }

    public async clickOnLogin(): Promise<void> {
        await this.page.locator("xpath=//button[normalize-space()='Login']").click();
    }

    public async validateInvalidErrorMessage(expectedText: string): Promise<void> {
        await expect(this.page.locator("//p[contains(normalize-space(),'Invalid')]")).toHaveText(expectedText);
    }
}

export { LoginPage }