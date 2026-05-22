import { test, expect } from '@playwright/test'
test('Selecting date value in Playwright', async ({ page }) => {
    //go to Url
    await page.goto('https://jqueryui.com/datepicker/');

    //Hardcoded date  
    const iframe = page.frameLocator('[class="demo-frame"]');
    // await iframe. 

    //Selecting dynamic date
    // await iframe.locator('[id="datepicker"]').click();
    // await iframe.locator('//*[@id="ui-datepicker-div"]/table/tbody/tr[3]/td[4]').click();

    //Selecting past date
    // await iframe.locator('[id="datepicker"]').click();
    // await iframe.locator('[title="Prev"]').click();
    // await iframe.locator('text="15"').click();

    //Selecting future date
    // await iframe.locator('[id="datepicker"]').click();
    // await iframe.locator('[title="Next"]').click();
    // await iframe.locator('text="25"').click();

    //note code a month vunna forward are backward dates matrama pothi
});