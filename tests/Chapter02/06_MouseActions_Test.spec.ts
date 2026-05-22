import {test,expect} from '@playwright/test'
test('left, right double buttons in playwright', async({page}) =>{
    
    await page.goto('https://www.youtube.com/');

    // await page.getByPlaceholder('Search').fill('Playwright by Testers Talk');
    // await page.getByPlaceholder('Search').press('Enter');
    // left button click
    // await page.getByRole('link', {name: 'Playwright TypeScript by Testers Talk ✅'}).click({button: 'left'});

    // middle button click
    // await page.getByRole('link', {name: 'Playwright TypeScript by Testers Talk ✅'}).click({button: 'middle'});

    // right button click
    // await page.getByRole('link', {name: 'Playwright TypeScript by Testers Talk ✅'}).click({button: 'right'});

    //mouse hover

    // await page.getByLabel('Search with your voice').hover();

    //double click
    await page.getByLabel('Search with your voice').dblclick();

   
});