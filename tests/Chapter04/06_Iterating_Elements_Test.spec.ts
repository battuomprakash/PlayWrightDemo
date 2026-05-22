import { test, expect } from "@playwright/test";
test('Iterating matching elements in playwright', async ({ page }) => {
    await page.goto('https://github.com/BakkappaN/');

    const repositoryLinks = await page.$$('.repo');
    for (const repositoryLink of repositoryLinks) {                         // using forof loop
        const text = await repositoryLink.textContent();
        console.log(`Text from 1st loop: ${text}`);
    }
  
    console.log(`=====================`);

    for (let index = 0; index < repositoryLinks.length; index++) {          // using for loop
        const text = await repositoryLinks[index].textContent();
        console.log(`Text from 2st loop: ${text}`);
    }

     console.log(`=====================`);

     
    const repositoryLinks2 = await page.locator('.repo');                       // using for loop nth
    const count = await repositoryLinks2.count();
    for (let index = 0; index < count; index++) {
        const text  = await repositoryLinks2.nth(index).textContent();
        console.log(`Text from 3st loop: ${text}`);
    }
})