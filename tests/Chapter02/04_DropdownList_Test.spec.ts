import {test,expect} from '@playwright/test'
test('Handling DropDown list in playwright', async({page}) =>{
    
    await page.goto('https://www.redmine.org/');
    await page.getByRole('link', {name: 'Register'}).click();

    // Select dropdown using value
    await page.getByLabel("Language").selectOption('eu');

    // Select dropdown using visible text
    await page.getByLabel("Language").selectOption('English');

    // Validate all the option
    // await expect(page.locator('#user_language>option')).toHaveText('Albanian','Arabic', 'Azerbaijani', 'Basque', 'Bosnian', 'Bulgarian', 'Catalan', 'Chinese', 'Chinese/Simplified', 'Croatian', 'Czech');

    //note validate all the values we use cssSelector-> using page.locator using these code in inspect page 
    // type id = "attribute_value" using #idattributevalues>option we get css selector code
});