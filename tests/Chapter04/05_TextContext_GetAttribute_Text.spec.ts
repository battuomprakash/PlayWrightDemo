// Import playwright module
import { test, expect } from '@playwright/test'
console.log();

// write a test
test('Get Text & Get attribute value in playwright', async ({ page }) => {
     await page.goto('https://github.com/BakkappaN/');

     const name = await page.locator('span[itemprop="name"]').textContent();
     const finalname = name?.trim();                                            // trim the text
     console.log(`Name is : ${finalname}`);
     expect(finalname).toBe('Testers Talk');

    const attributeValue = await page.getByTestId('repositories').first().getAttribute('data-discover');
    console.log(`Attribute Value is : ${attributeValue}`);

})
