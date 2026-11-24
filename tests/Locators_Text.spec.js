const { test, expect } = require('@playwright/test');

test('Login Test', async ({page}) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByText('Forgot your password?').click();

    // await expect(page.getByText('OrangeHRM')).toBeVisible();

    // getByLable()
    await page.getByLabel('Username').fill('student');

    // Locators
    await page.locator('#username').fill('Admin');

    
    await page.locator('.oxd-input oxd-input--active').click();

    await page.locator('input').first().fill('Admin');

    // <input type='text' name='username'>
    // input - tag name
    // type - Attribute name
    // text - Attribute value

    await page.locator('[name="usernam"]').fill('Admin');

    // https://practicetestautomation.com/practice-test-login/ 
    // https://demoqa.com/alerts
    // https://demoqa.com/automation-practice-form


 
});