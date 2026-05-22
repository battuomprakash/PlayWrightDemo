import { test, expect } from '@playwright/test'
import testData from '../../test-data/qa/testdata.json';

type TestData = {
    TestDataSet1:{
        Skill1:string,
        Skill2:string
    },
    TestDataSet2:{
        Skill1:string,
        Skill2:string
    },
    
}

const typedTestData = testData as TestData;

for (const dataSetName in typedTestData) {
    const skill = typedTestData[dataSetName as keyof TestData];
test(`Data Driven Testing using JSON file in playwright: ${skill.Skill1}`, async ({ page }) => {

    await page.goto('https://www.youtube.com/');

    // Search with keywords
    await page.getByRole('combobox', { name: 'Search' }).fill(skill.Skill1);
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');

    // Click on  playlist
    await page.getByRole('link', { name: skill.Skill1 }).click();

    // Validate web pagee title

    // "Playwright by Testers Talk - YouTube" తో exact గా match అవ్వాలి
// await expect(page).toHaveTitle("Playwright by Testers Talk - YouTube");
// ❌ Title కొంచెం different గా ఉంటే FAIL అవుతుంది
    await expect(page).toHaveTitle(new RegExp(skill.Skill1));
});
    
}