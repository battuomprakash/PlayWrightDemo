import { test, expect } from '@playwright/test';

import path from 'path';
import {readExcelFile} from '../../src/utils/ExcelHelper';

const filepath = path.join(__dirname,'../../test-data/qa/TestData.xlsx');
const records = readExcelFile(filepath);

for (const record of records) {
    // ✅ Fix 3: skill.Skill1 → record.Skill1
    test(`Data Driven Testing using Excel file in playwright: ${record.Skill2}`, async ({ page }) => {

        await page.goto('https://www.youtube.com/');

        // Search with keyword
        await page.getByRole('combobox', { name: 'Search' }).fill(record.Skill2);
        await page.getByRole('combobox', { name: 'Search' }).press('Enter');

        // Click on playlist
        await page.getByRole('link', { name: record.Skill2 }).click();

        // Validate page title
        await expect(page).toHaveTitle(new RegExp(record.Skill2));
        
    });
}