import { test, expect, type Page } from "../fixtures/base-test.js"

class LoginPage {

    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async fillUsername(username: string): Promise<void> {
        await this.page.locator("xpath=//input[@name='username']").fill(username);
    }

    //fillPassword()
    //clickOnLogin()
    //getInvalidErrorMessage()

}

export { LoginPage }