import { test, expect, type Page } from "../fixtures/base-test.js"
import { PlaywrightKeywords } from "./basepage/PlaywrightKeywords.js";

const DASHBOARD_LOCATOR = "xpath=//h6[contains(normalize-space(),'Dash')]"
export class DashboardPage extends PlaywrightKeywords{

    constructor(page: Page) {
        super(page);
    }

    public async validateDashboardHeader(expectedHeader: string): Promise<void> {
        // await expect(this.page.locator(DASHBOARD_LOCATOR)).toHaveText(expectedHeader);
        await this.validateExactInnerText(DASHBOARD_LOCATOR,expectedHeader);
    }
}