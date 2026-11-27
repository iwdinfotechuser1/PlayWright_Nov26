const { test, expect } = require('@playwright/test');

test('Login Test', async ({page}) => {

    await page.goto('https://demoqa.com/automation-practice-form');
    // await expect(page).toHaveTitle('demosite');

    // await page.locator('#dateOfBirthInput').click();

    // Open Date Picker
    const datePicker = page.locator('#dateOfBirthInput');
    await datePicker.click();

    // Select Month
    await page.locator('.react-datepicker__month-select').selectOption('6');
    // Select Year
    await page.locator('.react-datepicker__year-select').selectOption('2001');
    // Select Day 20
    await page.locator('.react-datepicker__day--020').click();

    // Validation
    await expect(datePicker).toHaveValue('20 Jul 2001');

});