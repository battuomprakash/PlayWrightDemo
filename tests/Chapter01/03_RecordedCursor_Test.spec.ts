// Import playwright module
import { test, expect,chromium } from '@playwright/test'
// write a test
test('Record at cursor test', async ({page}) => {

    // Go to URL
    await page.goto('https://www.youtube.com/');

    // Search with keywords
    await page.getByRole('combobox', { name: 'Search' }).fill('Playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');

    // Click on  playlist
    await page.getByRole('link', { name: 'Playwright by Testers Talk ✅' }).click();

    // Validate web pagee title
    await expect(page).toHaveTitle('#1 Playwright Tutorial Full Course 2026 | Playwright Testing Tutorial - YouTube');


    await expect(page.locator('#playlist')).toContainText('#1 Playwright Tutorial Full Course 2026 | Playwright Testing Tutorial');
    await expect(page.locator('#playlist')).toContainText('#2 Playwright API Testing Tutorial Crash Course 2024');
    await expect(page.getByRole('link', { name: '#1 Playwright Tutorial Full Course 2026' })).toBeVisible();
    await expect(page.getByRole('link', { name: '2 #2 Playwright API Testing Tutorial Crash Course 2024' })).toBeVisible();
});
