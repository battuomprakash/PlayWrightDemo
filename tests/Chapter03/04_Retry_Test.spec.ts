// Import playwright module
import { test, expect } from '@playwright/test'
// write a test
test('My First Playwright TypeScript Test 1', {tag: ['@SmokeTesting']}, async ({ page }) => {

    console.log('Test Execution started...');
    // Go to URL
    await page.goto('https://www.youtube.com/');

    // Search with keywords
    await page.getByRole('combobox', { name: 'Search' }).fill('Playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');

    // Click on  playlist
    await page.getByRole('link', { name: 'Playwright by Testers Talk ✅' }).click();

    // Validate web pagee title
    await expect(page).toHaveTitle('#1 Playwright Typescript Tutorial Full Course 2026 | Playwright Testing Tutorial - YouTube');
})