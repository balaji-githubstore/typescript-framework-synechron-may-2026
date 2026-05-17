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
        await this.page.locator("xpath=//input[@name='password']").fill(password);
    }

    public async clickOnLogin(): Promise<void> {
        await this.page.locator("xpath=//button[normalize-space()='Login']").click();
    }

    public async validateInvalidErrorMessage(expectedText: string): Promise<void> {
        await expect(this.page.locator("//p[contains(normalize-space(),'Invalid')]")).toHaveText(expectedText);
    }

    public async validateLoginTitle(expectedTitle: string): Promise<void> {
        await expect(this.page).toHaveTitle(expectedTitle);
    }

    public async validateLoginHeader(expectedHeader: string): Promise<void> {
        await expect(this.page.locator("xpath=//h5[text()='Login']")).toHaveText(expectedHeader)
    }

    public async validateUsernamePlaceholder(expectedUsenamePlaceholder: string): Promise<void> {
        await expect(this.page.locator("xpath=//input[@name='username']")).toHaveAttribute("placeholder", expectedUsenamePlaceholder)
    }

    public async validatePlaceholderPlaceholder(expectedPasswordPlaceholder: string): Promise<void> {
        await expect(this.page.locator("xpath=//input[@name='username']")).toHaveAttribute("placeholder", expectedPasswordPlaceholder)
    }
}

export { LoginPage }