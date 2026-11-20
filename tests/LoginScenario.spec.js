const { test, expect } = require('@playwright/test');

test('Login Test', async ({page}) => {

    // Step 1:
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Step 2: 
    // await page.locator('#Username').fill('Admin');
    // await page.locator('#Password').fill('admin123');
    // await page.locator('#Login').click();

    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login'}).click();

    // Step 3: Validate successful login
    await expect(page).toHaveTitle(/OrangeHRM/)

});