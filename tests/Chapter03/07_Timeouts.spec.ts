// Import playwright module
import { test, expect } from '@playwright/test'
// write a test
test('Timeout in playwright', async ({ page }) => {

    test.setTimeout(1 * 60 * 1000); // even playwright.config.ts we mention golbal wait 2mins but we use this setTimout it overrides 
                                    // global wait this paticular script one min only
    // Go to URL
    await page.goto('https://www.youtube.com/');

    // Search with keywords
    await page.getByRole('combobox', { name: 'Search' }).fill('Playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');

    // Click on  playlist                                                              // with 5sec it is to be clickable
    await page.getByRole('link', { name: 'Playwright Typescript by Testers Talks ✅' }).click({timeout : 5000});

    // Validate web pagee title
    await expect(page).toHaveTitle('#1 Playwright Typescript Tutorial Full Course 2026 | Playwright Testing Tutorial - YouTube', {timeout : 5000});

    // explict timeout
    // await page.waitForTimeout(60000);  // explict wait - 
})