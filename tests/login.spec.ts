import { test, expect } from "../fixtures/base-test.js"

test.describe("orangeHRM login tests", () => {

    test('verify valid login', async ({ page }) => {
       //enter username as Admin
       //password as admin123
       //click on login 
       //verify "Dashboard" header
    });

    test('verify invalid login', async ({ page }) => {
         //enter username as john
       //password as john223
       //click on login 
       //verify "Invalid credentials" error
    });
})