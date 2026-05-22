import {test,expect} from '@playwright/test'
test('left, right double buttons in playwright', async({page}) =>{

    await page.goto('https://www.google.com/');

    // Enter action from keyboard
    // await page.getByLabel('Search', {exact: true}).first().click();
    //  await page.getByLabel('Search', {exact: true}).first().fill('playwright tester talk');
    //  await page.getByLabel('Search', {exact: true}).first().press('Enter');
    
    // Selecting & deleting form keyboard
    // await page.getByLabel('Search', {exact: true}).first().click();
    // await page.keyboard.press('Control+A');
    // await page.keyboard.press('Delete');

    // Press TAB and Enter
    await page.getByLabel('Search', {exact: true}).first().click();
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');
   
});




