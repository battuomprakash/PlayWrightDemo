import { test, expect } from '@playwright/test';

test('Codegen test case', async ({ page }) => {
  await page.goto('https://www.youtube.com/');
  await page.getByText('Back IN Skip navigation Search Search with your voice Sign in').click();
  await page.getByRole('combobox', { name: 'Search' }).fill('playwright by tester talk');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await page.getByRole('link', { name: 'Playwright by Testers Talk ✅' }).click();
  await page.locator('#movie_player video').click();
  await expect(page.getByRole('link', { name: 'Playwright by Testers Talk ✅' })).toBeVisible();
});