import { expect, type Page } from "../../fixtures/base-test.js"

class PlaywrightKeywords {
    private readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    public async sendTextToElement(locator: string, text: string): Promise<void> {
        await this.page.locator(locator).fill(text);
    }

    public async clickElement(locator: string): Promise<void> {
        await this.page.locator(locator).click();
    }
}