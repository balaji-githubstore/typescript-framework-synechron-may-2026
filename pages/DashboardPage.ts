import { test, expect, type Page } from "../fixtures/base-test.js"

class DashboardPage {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
}