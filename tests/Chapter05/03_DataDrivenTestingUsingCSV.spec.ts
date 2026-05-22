import { test, expect } from '@playwright/test';
import { parse } from 'csv-parse/sync';
import fs from 'fs';
import path from 'path';

type TestRecords = {
    Skill1: string,
    Skill2: string
}

const records = parse(
    fs.readFileSync(path.join(__dirname, '../../test-data/qa/testdata.csv')),
    {
        columns: true,
        skip_empty_lines : true
    }
) as TestRecords[];

// 👉 ఇది CSV file ని read చేస్తుంది

// fs అంటే File System module
// readFileSync() అంటే 👉 file ని immediately (synchronously) చదవడం
// parse(...)

// 👉 ఇది CSV text ని JavaScript objects గా మార్చుతుంది
// CSV → JavaScript Objects గా convert చేస్తుంది

for (const record of records) {
    // ✅ Fix 3: skill.Skill1 → record.Skill1
    test(`Data Driven Testing using CSV file in playwright: ${record.Skill1}`, async ({ page }) => {

        await page.goto('https://www.youtube.com/');

        // Search with keyword
        await page.getByRole('combobox', { name: 'Search' }).fill(record.Skill1);
        await page.getByRole('combobox', { name: 'Search' }).press('Enter');

        // Click on playlist
        await page.getByRole('link', { name: record.Skill1 }).click();

        // Validate page title
        await expect(page).toHaveTitle(new RegExp(record.Skill1));
    });
}