import { test, expect } from '@playwright/test'
// write a test
test('Multiple browser/tabs in Playwright Typescript', async ({ page, browser }) => {
    // test('this is my code i want open a new tab in primary window only', async ({ page, context }) => {
    // Go to URL
    await page.goto('https://www.youtube.com/');

    // Search with keywords
    await page.getByRole('combobox', { name: 'Search' }).fill('Playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');

    // Click on  playlist
    await page.getByRole('link', { name: 'Playwright by Testers Talk ✅' }).click();

    // Validate web pagee title
    await expect(page).toHaveTitle('#1 Playwright Tutorial Full Course 2026 | Playwright Testing Tutorial - YouTube');

    // this is my code i want open a new tab in primary window only
    // const newTtab = await context.newPage();


    // // New browser session
    // const context2 = await browser.newContext();
    // const page2 = await context2.newPage();

    // // Go to URL
    // await page2.goto('https://www.youtube.com/');

    // // Search with keywords
    // await page2.getByRole('combobox', { name: 'Search' }).fill('Playwright by testers talk');
    // await page2.getByRole('combobox', { name: 'Search' }).press('Enter');

    // // Click on  playlist
    // await page2.getByRole('link', { name: 'Playwright by Testers Talk ✅' }).click();

    // // Validate web pagee title
    // await expect(page2).toHaveTitle('#1 Playwright Tutorial Full Course 2026 | Playwright Testing Tutorial - YouTube');


    // //Creating new tab
   
    // const newTab = await context2.newPage();

    // await newTab.goto('https://www.youtube.com/');

    // // Search with keywords
    // await newTab.getByRole('combobox', { name: 'Search' }).fill('Playwright by testers talk');
    // await newTab.getByRole('combobox', { name: 'Search' }).press('Enter');

})

// doubt; manam edkkada verra browser lo new tab open cha primary broweser new tab yela open cheyali