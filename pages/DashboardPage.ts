import { test, expect, type Page } from "../fixtures/base-test.js"

const DASHBOARD_LOCATOR = "xpath=//h6[contains(normalize-space(),'Dash')]"
export class DashboardPage {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async validateDashboardHeader(expectedHeader: string): Promise<void> {
        await expect(this.page.locator(DASHBOARD_LOCATOR)).toHaveText(expectedHeader);
    }
}