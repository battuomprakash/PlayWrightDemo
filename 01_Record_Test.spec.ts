import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

await test.step('Navigation to URL ', async()=>{
 await page.goto('https://www.techlearn.in/wp-login.php?redirect_to=https%3A%2F%2Fwww.techlearn.in%2Fwp-admin%2F&reauth=1');
 
});
await test.step('Enter username & password ', async()=>{
  await page.getByRole('textbox', { name: 'Username or Email Address' }).fill('new');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('user123');
});
await test.step('Click on sign in ', async()=>{
  await page.getByRole('button', { name: 'Log In' }).click();
});
await test.step('Validate error message ', async()=>{
  await expect(page.locator('#login_error')).toContainText('Error: Invalid Username.');
});

});