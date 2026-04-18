import {test, expect} from '@playwright/test';

test('task11', async ({ page }) => {
    await page.goto('https://demoqa.com/automation-practice-form');

    await page.locator('#firstName').fill('Varun');
    await page.locator('#lastName').fill('Krishna');

    
    await expect(page.locator('#firstName')).toHaveValue('Varun');

    await page.locator('#userEmail').fill('varunkrishna705@gmail.com');

    await expect(page.locator('#userEmail')).toBeVisible();

    await page.locator("//label[text()='Male']").click();

    await expect(page.locator('#gender-radio-1')).toBeChecked();

    await page.locator('#userNumber').fill('9876543210');

    await expect(page.locator('#userNumber')).toHaveAttribute('maxlength', '10');

    await page.locator('#dateOfBirthInput').fill('10 May 2004');

    await page.locator('#subjectsInput').fill('Computer Science');
    await page.keyboard.press('Enter');

    await expect(page.locator('.subjects-auto-complete__multi-value'))
        .toContainText('Computer Science');

    await page.locator('#hobbies-checkbox-1').click();
    await page.locator('#hobbies-checkbox-3').click();

    await page.locator('#currentAddress').fill('Bangalore');

    await expect(page.locator('#currentAddress')).toHaveValue('Bangalore');

    await page.locator('#state').click();
    await page.getByRole('option', { name: 'NCR' }).click();

    await page.locator('#city').click();
    await page.getByRole('option', { name: 'Gurgaon' }).click();

    await page.locator('#submit').click();

    // await expect(page).toHaveScreenshot('submission.png');
});