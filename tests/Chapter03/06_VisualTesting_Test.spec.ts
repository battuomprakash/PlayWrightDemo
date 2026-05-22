// Import playwright module
import { test, expect } from '@playwright/test'
// write a test
test('Visual Comparison in playwright', {tag: ['@SmokeTesting']}, async ({ page }) => {

    console.log('Test Execution started...');
    // Go to URL
    await page.goto('https://github.com/login');
     
    await expect(page).toHaveScreenshot('GithubLoginPage.png');

    await page.locator('#login_field').fill('Playwright with typescript');

     await expect(page).toHaveScreenshot('GithubLoginPage.png');

})

test('Element Visual Comparison in playwright', {tag: ['@SmokeTesting']}, async ({ page }) => {

    console.log('Test Execution started...');
    // Go to URL
    await page.goto('https://github.com/login');
    const element = page.getByLabel('login_field');
     
    await expect(page).toHaveScreenshot('GithubLoginform.png');

    await page.locator('#login_field').fill('Playwright with typescript');

     await expect(page).toHaveScreenshot('GithubLoginPage.png');


})   


// worst toppic i heard