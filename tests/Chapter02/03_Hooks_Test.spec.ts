import { test, expect } from '@playwright/test'

test.beforeAll(async() =>{
 console.log('Running before all tests...');
});

test.beforeEach(async({page}) =>{
     await page.goto('https://www.youtube.com/');

 console.log('Running before each tests...');
});

test.afterEach(async() =>{
 console.log('Running after each tests...');
});

test.afterAll(async() =>{
 console.log('Running after all tests...');
});

//Write a test
test('Test 1', async ({ page }) => {
    console.log('Test1 execution started...');
    //Go to Url
    // await page.goto('https://www.youtube.com/');

    //Search with keywords
    await page.getByRole('combobox', { name: 'Search' }).fill('Playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');

    // Click on playlist
   await page.getByRole('link', { name: 'Playwright by Testers Talk ✅' }).click();

    //Validate web page title
    await expect(page).toHaveTitle('#1 Playwright Tutorial Full Course 2026 | Playwright Testing Tutorial - YouTube');



})

//Write a test
test('Test 2', async ({ page }) => {

    console.log('Test2 execution started...');
    //Go to Url
//    await page.goto('https://www.youtube.com/');

    //Search with keywords
    await page.getByRole('combobox', { name: 'Search' }).fill('Playwright by testers talk');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');

    // Click on playlist
   await page.getByRole('link', { name: 'Playwright by Testers Talk ✅' }).click();

    //Validate web page title
     await expect(page).toHaveTitle('#1 Playwright Tutorial Full Course 2026 | Playwright Testing Tutorial - YouTube');



})