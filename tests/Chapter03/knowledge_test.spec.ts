import { test, expect } from '@playwright/test'
// //hooks
// test.beforeAll( async({page})=>{
//     console.log('using beforeAll');
// })
// test.beforeEach( async({page})=>{
//     console.log('using beforeEach');
//     await page.goto('https://www.youtube.com/');
// })
// test.afterEach( async({page})=>{
//     console.log('using afterEach');
// })
// test.afterAll( async({page})=>{
//     console.log('using AfterAll');
// })


// locators and hooks
// test('knowledge', async({page})=>{
// await page.goto('https://github.com/');
// await page.getByRole('link', {name: 'sign up'}).first().click();
// await page.getByPlaceholder('Email').fill('hellow world');
// await page.goBack();
// await page.locator('a[aria-label="Homepage"]').click();

//     await page.getByPlaceholder('Search').first().click();
//     await page.getByPlaceholder('Search').fill('hyr tutorials');
//     await page.getByPlaceholder('Search').press('Enter');
//     await page.getByText("Core Java in Telugu | Java Programming").click();
//     await expect(page).toHaveTitle('P0 - Java Course Introduction | Java Programming | Core Java | - YouTube');
// });

// test('knowledge', async({page})=>{
//   await page.goto('https://www.redmine.org/');

//   await page.getByRole('link', {name:'Register'}).click();
//   await page.locator('//*[@id="user_mail"]').fill('//*[@id="user_mail"]');
//   await page.locator('//*[@id="user_language"]').selectOption('bg');
//  });


// iframe and drag and drop
// test('knowledge', async({page})=>{
//   await page.goto('https://jqueryui.com/droppable/');

//    const iframe = page.frameLocator('//*[@id="content"]/iframe');

//    const dragme = iframe.getByText("Drag me to my target");
//    const dropped = iframe.getByText("Drop here");

//    await dragme.dragTo(dropped);

//  });


// mouse hover
// test('knowledge', async({page})=>{
// await page.goto('https://www.youtube.com/');
// await page.getByPlaceholder('Search').first().hover();
// await page.getByPlaceholder('Search').first().click();
//     await page.getByPlaceholder('Search').fill('hyr tutorials');
//     await page.getByPlaceholder('Search').press('Enter');
//     await page.getByText("Core Java in Telugu | Java Programming").click();
//     await expect(page).toHaveTitle('P0 - Java Course Introduction | Java Programming | Core Java | - YouTube');
// });

// test('knowledge', async ({ page }) => {
//     await page.goto('https://www.youtube.com/');
//     await page.getByPlaceholder('Search').first().hover();
//     await page.getByPlaceholder('Search').first().click();
//     await page.getByPlaceholder('Search').fill('hyr tutorials');
//     await page.getByPlaceholder('Search').press('Enter');
// await page.getByText("Core Java in Telugu | Java Programming").click({button: 'left'});
// await page.getByText("Core Java in Telugu | Java Programming").click({button: 'right'});
// await page.getByText("Core Java in Telugu | Java Programming").click({ button: 'middle' });
// await expect(page).toHaveTitle('P0 - Java Course Introduction | Java Programming | Core Java | - YouTube');
// });

// test('knowledge', async ({ page }) => {

// await page.goto('https://www.google.com/');
// await page.getByLabel('Search', {exact:true}).fill("hellow google");
// await page.locator('textarea[jsname="yZiJbe"]').press('Enter');
// await page.locator('textarea[jsname="yZiJbe"]').press('Control+A');
// await page.locator('textarea[jsname="yZiJbe"]').press('Delete');
// });

// test('knowledge', async ({ page }) => {

//     await page.goto('https://jqueryui.com/datepicker/');
//     const iframe = page.frameLocator('//*[@id="content"]/iframe');
// await iframe.locator('[id="datepicker"]').fill('12/15/2024');

// await iframe.locator('[id="datepicker"]').click();
// await iframe.locator('//*[@id="ui-datepicker-div"]/table/tbody/tr[4]/td[5]/a').click();
// await iframe.locator('a[class="ui-datepicker-prev ui-corner-all"]').click();
// await iframe.locator('//*[@id="ui-datepicker-div"]/table/tbody/tr[1]/td[5]/a').click();

//     await iframe.locator('//*[@id="ui-datepicker-div"]/div/a[2]').click();
//     await iframe.locator('//*[@id="ui-datepicker-div"]/table/tbody/tr[5]/td[5]/a').click();  
// });

// test('knowledge', async ({ page }) => {
//     await page.goto('https://www.youtube.com/');
//     await page.getByPlaceholder('Search').first().click();
//     await page.getByPlaceholder('Search').fill('hyr tutorials');
//     await page.getByPlaceholder('Search').press('Enter');
//     await expect.soft(page).toHaveTitle('P0 - Java Course Introduction nn| Java Programming | Core Java | - YouTube');
//     await expect(page).toHaveURL('https://www.youtube.com/results?search_query=hyr+tutorials');
// });


//grouping and annotations
// test.describe('SmokeTesting', ()=>{
//     test('knowledge_1', async ({ page }) => {
//     await page.goto('https://www.youtube.com/');
//     await page.getByPlaceholder('Search').first().click();
//     await page.getByPlaceholder('Search').fill('hyr tutorials');
//     await page.getByPlaceholder('Search').press('Enter');
//     await expect.soft(page).toHaveTitle('hyr tutorials - YouTube');
//     await expect(page).toHaveURL('https://www.youtube.com/results?search_query=hyr+tutorials');
// })
// })

// test.describe('RegressionTesting', ()=>{
//     test.only('knowledge_2', async ({ page }) => {
//     await page.goto('https://www.youtube.com/');
//     await page.getByPlaceholder('Search').first().click();
//     await page.getByPlaceholder('Search').fill('hyr tutorials');
//     await page.getByPlaceholder('Search').press('Enter');
//     await expect.soft(page).toHaveTitle('hyr tutorials - YouTube');
//     await expect(page).toHaveURL('https://www.youtube.com/results?search_query=hyr+tutorials');
// })
// })

// test.describe("SanityTesting", ()=>{
//     test.skip('knowledge_3', async ({ page }) => {
//     await page.goto('https://www.youtube.com/');
//     await page.getByPlaceholder('Search').first().click();
//     await page.getByPlaceholder('Search').fill('hyr tutorials');
//     await page.getByPlaceholder('Search').press('Enter');
//     await expect.soft(page).toHaveTitle('hyr tutorials - YouTube');
//     await expect(page).toHaveURL('https://www.youtube.com/results?search_query=hyr+tutorials');
// })
// })

//tags
//     test('knowledge_1',{tag: ['@fun']}, async ({ page }) => {
//     await page.goto('https://www.youtube.com/');
//     await page.getByPlaceholder('Search').first().click();
//     await page.getByPlaceholder('Search').fill('hyr tutorials');
//     await page.getByPlaceholder('Search').press('Enter');
//     await expect.soft(page).toHaveTitle('hyr tutorials - YouTube');
//     await expect(page).toHaveURL('https://www.youtube.com/results?search_query=hyr+tutorials');
// })



//     test('knowledge_2', {tag: ['@fun','@non-fun']}, async ({ page }) => {
//     await page.goto('https://www.youtube.com/');
//     await page.getByPlaceholder('Search').first().click();
//     await page.getByPlaceholder('Search').fill('hyr tutorials');
//     await page.getByPlaceholder('Search').press('Enter');
//     await expect.soft(page).toHaveTitle('hyr tutorials - YouTube');
//     await expect(page).toHaveURL('https://www.youtube.com/results?search_query=hyr+tutorials');
// })



//     test('knowledge_3', {tag: ['@non-fun']}, async ({ page }) => {
//     await page.goto('https://www.youtube.com/');
//     await page.getByPlaceholder('Search').first().click();
//     await page.getByPlaceholder('Search').fill('hyr tutorials');
//     await page.getByPlaceholder('Search').press('Enter');
//     await expect.soft(page).toHaveTitle('hyr tutorials - YouTube');
//     await expect(page).toHaveURL('https://www.youtube.com/results?search_query=hyr+tutorials');
// })

// retry same test methood
//  test('knowledge_3', {tag: ['@non-fun']}, async ({ page }) => {
//     await page.goto('https://www.youtube.com/');
//     await page.getByPlaceholder('Search').first().click();
//     await page.getByPlaceholder('Search').fill('hyr tutorials');
//     await page.getByPlaceholder('Search').press('Enter');
//     await expect.soft(page).toHaveTitle('hyr tutorials - YouTube');
//     await expect(page).toHaveURL('https://www.youtube.com/results?search_query=hyr+tutorials');
// })

//Parameterized
//   const name = ['sumanth', 'harish', 'ravi', 'somu']
//   const pwd = ['sum123#','har456@','ra789!','som017&']

//   for(let i=0; i<name.length;i++){

//     const username = name[i];
//     const password = pwd[i];

//     test(`Parameterizing_${username}_${password}`, async({page})=>{
//         await page.goto('https://www.techlearn.in/admin');
//         await page.locator('input[class="input"]').fill(username);
//         await page.locator('input[class="input password-input"]').fill(password);
//         await page.locator('//*[@id="rememberme"]').click();
//         await page.locator('input[id="wp-submit"]').click();
//         await page.reload();

//     });

//   }

 

// tiemouts
test.setTimeout(2*60*2000);
const name = ['sumanth', 'harish', 'ravi', 'somu']
const pwd = ['sum123#', 'har456@', 'ra789!', 'som017&']

for (let i = 0; i < name.length; i++) {

    const username = name[i];
    const password = pwd[i];

    test(`Parameterizing_${username}_${password}`, async ({ page }) => {
        await page.goto('https://www.techlearn.in/admin');
        await page.locator('input[class="input"]').fill(username);
        await page.locator('input[class="input password-input"]').fill(password);
        await page.locator('//*[@id="rememberme"]').click({timeout:5000});
        await page.locator('input[id="wp-submit"]').click();
        await page.reload();

    });

}