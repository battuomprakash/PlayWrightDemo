// Import playwright module
import { test, expect } from '@playwright/test'
// write a test
test('Locators in playwright', async ({ page }) => {
    // Go to URL
    await page.goto('https://github.com/BakkappaN/');
    //    await page.getByRole('link',{name:'Sign in'}).click();  // text matrama use avutundhi

    //getByLabel
    //    await page.getByLabel('Homepage', {exact: true}).first().click();  // where we find aria-label="Homepage" we use getBylabel
   
    // GetByAltText
    //  await page.getByAltText("View BakkappaN's full-sized avatar").click(); // where we find alt="View BakkappaN's full-sized avatar" we use getByAltText

       await page.getByAltText("View BakkappaN's full-sized avatar").click();

    // GetByTestID
    //    await page.getByTestId("repositories").first().click();  // if there is common attribute name in more than one time in html page we used add TestIdAttribute : Attribute name
    // await page.getByTestId("projects").first().click();

    //GetByText
    // await page.getByText("Sign up").first().click(); // text ani locator loo vaste like getBYText, getByAltText manam Double quotes use cheyali

    //GetByPlaceholder, Xpath, CSSSelector
    // await page.goto('https://www.youtube.com/@testerstalk');

    // await page.getByPlaceholder('Search').fill('testertalk'); // when we find placeholder in html webpage we use getByPlaceholder

    // await page.locator('//input[@name="search_query"]').fill('tester talk'); //using xpath
    // await page.locator('input[name="search_query"]').first().fill('tester talk');

    //GetByTilte
    // await page.goto('https://www.google.com/');
    // await page.getByTitle('Search').fill('playwright by testers talk');

})
