import {test, expect} from '@playwright/test';

test('task2', async ({ page }) => {
    await page.goto('https://vinothqaacademy.com/demo-site/')

    await page.locator('//input[@name="vfb-5"]').fill('Varun')
    
    await expect(page.locator('//input[@name="vfb-5"]')).toHaveValue('Varun')

    await page.locator('//input[@name="vfb-7"]').fill('Krishna')

    await expect(page.locator('//input[@name="vfb-7"]')).toBeVisible()

    await page.locator("//label[text()='Male']").click()

    await expect(page.locator('//input[@value="Male"]')).toBeChecked()

    await page.locator('//li[@id="item-vfb-20"]//span[@class="vfb-span"]').nth(1).click()
    await page.locator('//li[@id="item-vfb-20"]//span[@class="vfb-span"]').nth(3).click()

    await page.locator('//input[@id="vfb-13-address"]').fill('Bangalore')
    await page.locator('//input[@id="vfb-13-address-2"]').fill('Bangalore')
    await page.locator('//input[@id="vfb-13-city"]').fill('Bangalore')

    await page.locator('//input[@id="vfb-13-zip"]').fill('560068')

    await expect(page.locator('//input[@id="vfb-13-zip"]')).toHaveAttribute('type', 'text')

    await page.locator('//span[@class="select2-selection select2-selection--single"]').nth(0).click()   
    await page.getByRole('option', { name: 'India' }).click();

    await expect(page.locator('//span[@class="select2-selection select2-selection--single"]').nth(0))
        .toContainText('India')

    await page.locator('//input[@type="email"]').fill('varunkrishna123@gmail.com')

    await page.locator('//input[@id="vfb-18"]').fill('01/01/2000')
    await page.keyboard.press('Enter')

    await page.locator('(//b[@role="presentation"])[2]').click()
    await page.getByRole('option').nth(1).click()

    await page.locator('(//b[@role="presentation"])[3]').click()  
    await page.getByRole('option').nth(1).click()

    await page.locator('//input[@id="vfb-19"]').fill('1234567890')

    await expect(page.locator('//input[@id="vfb-19"]')).toBeEnabled()

    await page.locator('//textarea[@id="vfb-23"]').fill('I want to join the course')
    await page.locator('//input[@id="vfb-3"]').fill('33')

    await page.locator('//input[@id="vfb-4"]').click()

    // await expect(page).toHaveScreenshot('form-submission.png');
});