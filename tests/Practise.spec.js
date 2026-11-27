const { test, expect } = require('@playwright/test');

test('Login Test', async ({page}) => {

    await page.goto('https://demoqa.com/automation-practice-form');
    await expect(page).toHaveTitle('demosite');

    await page.locator('#firstName').fill('Dev');
    await page.locator('#lastName').fill('Dubale');
    await page.locator('#userEmail').fill('test@test.com');

    await page.getByText('Male', {exact: true}).click();
    await page.locator('#userNumber').fill('0988765432');

    // await page.locator('#subjectsInput').fill('Maths');
    await page.getByText('Reading', { exact: true}).click();

    await page.locator('#currentAddress').fill('Mumbai, Maharashtra');
    await page.locator('#state').click();
    await page.getByText('NCR', {exact: true}).click();

    await page.locator('#city').click();
    await page.getByText('Delhi', {exact: true}).click();

    await page.getByRole('button', {name: 'Submit' }).click();

 // Validation - Thanks for submitting the form
    await expect(
        page.getByText('Thanks for submitting the form')
    ).toBeVisible();

    await page.waitForTimeout(10000);

});