import { test, chromium } from '@playwright/test';

test('login module', async () => {

  const browser = await chromium.launch({
    channel: 'chrome',
    headless: false
  });

  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://www.techlearn.in/admin');

  await page.locator("#user_login").fill("prakash");

  await page.waitForTimeout(3000);

  await page.locator(".input.password-input").fill("Test");

  await page.waitForTimeout(3000);
  await page.locator("#rememberme").check();
    await page.waitForTimeout(3000);

  await browser.close();
});