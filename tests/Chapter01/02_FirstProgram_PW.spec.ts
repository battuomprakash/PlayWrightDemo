// Import playwright module
import { test, expect } from '@playwright/test'
console.log();

// write a test
test('My First Playwright TypeScript Test', async ({ page }) => {

    
    // Go to URL

    //  await page.goto('https://www.google.com/');

    await page.goto('https://www.youtube.com/');

    // Search with keywords

    //google - not working showing captcha images
    //  await page.getByRole('combobox', { name: 'Search' }).fill('Playwright by testers talk');
    // await page.getByRole('combobox', { name: 'Search' }).press('Enter');

    await page.getByRole('combobox', { name: 'Search' }).fill('Playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');

    // Click on  playlist
    // await page.getByRole('link', { name: 'Playwright by Testers Talk ' }).first().click();

    await page.getByRole('link', { name: 'Playwright by Testers Talk ✅' }).click();

    // Validate web pagee title
    // await expect(page).toHaveTitle('Playwright by Testers Talk - YouTube')

    await expect(page).toHaveTitle('#1 Playwright Tutorial Full Course 2026 | Playwright Testing Tutorial - YouTube');
})
