//Import playwright module
import { test, expect } from '@playwright/test';

const names = ['hari', 'Sumanth', 'prasad', 'Aku'];
const secretids = ['ha123', 'su456', 'pa789', 'ak147'];

for (let i = 0; i < names.length; i++) {  // ✅ single loop మాత్రమే // Ekkada names or secretids Adhi iching work avuthundhi 
                                      // edhuku anta అంటే same index వాడడం వలన correct pair వస్తుంది. ✅
    const username = names[i];
    const password = secretids[i];

    test(`parameterize test - ${username} / ${password}`, async ({ page }) => {
        await page.goto('https://www.techlearn.in/admin');
        await page.locator('//*[@id="user_login"]').fill(username);
        await page.locator('//*[@id="user_pass"]').fill(password);
        await page.locator('//*[@id="rememberme"]').click();
        await page.locator('//*[@id="wp-submit"]').click();
    });
}