// .spec.js -> Specification JavaScript
const {test, expect} = require("@playwright/test");
// import { test, expect } from '@playwright/test';

test('Verify page title', async({ page }) => {

    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);

});

// require() -> loads functionality from a package
// test - is used to define & execute test cases.
// expect - is used to assertions (Validation)
// {test, expect} - is object destructuring , a JavaScript concept we have already learned