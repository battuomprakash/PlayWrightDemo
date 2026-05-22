import { test, expect } from '@playwright/test'
test('Assertions in Playwright', async ({ page }) => {
    //go to Url
    await page.goto('https://www.youtube.com/');

    //visiable, editable, enabled, empty
    // await expect(page.getByPlaceholder('Search', {exact: true}).first()).toBeVisible();
    // await expect(page.getByPlaceholder('Search', {exact: true}).first()).toBeEditable();
    // await expect(page.getByPlaceholder('Search', {exact: true}).first()).toBeEnabled();
    // await expect(page.getByPlaceholder('Search', {exact: true}).first()).toBeEmpty();

    //verfiy URL, title, text, count
    await page.getByPlaceholder('Search', {exact: true}).first().click();
    await page.getByPlaceholder('Search', {exact: true}).first().fill('Playwright by tester talk');
    await page.getByPlaceholder('Search', {exact: true}).first().press('Enter');

    await expect(page).toHaveURL('https://www.youtube.com/results?search_query=Playwright+by+tester+talk');

    // here soft assertion 
    await expect.soft(page).toHaveTitle('Playwright  by tester talk - YouTube');
    await expect.soft(page.getByText('Playwright by Testers Talk ✅')).toHaveText('Playwright by Testers Talk ✅');
    await expect(page.getByText('Playwright by Testers Talk ✅')).toHaveCount(1);


});