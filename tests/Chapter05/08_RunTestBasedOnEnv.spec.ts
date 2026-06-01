// Import playwright module
// import { test, expect } from '@playwright/test'
// import { Homepage } from '../../src/pages/Homepage'
// import { PlaylistPage } from '../../src/pages/PlaylistPage';
// import { ResultPage } from '../../src/pages/ResultPage';

import {test} from "../../src/fixture/TestFixture"

test('Page Object Model Test in Playwright', async ({ page, homepage, resultpage, playlistpage, testData}) => {

    // Create object of homepage
    // const homepage = new Homepage(page)   
    await homepage.goToURL();
    await homepage.searchWithKeywords(String(testData.Module1DataSet1?.Skill1));

    // Create object of resultpage

    // const resultpage = new ResultPage(page);                 
    await resultpage.clickOnPlaylist(String(testData.Module1DataSet1?.Skill1));

    // Create object of playlistpage
    // const playlistpage = new PlaylistPage(page);            
    // await playlistpage.validatePageTitle('#1 Playwright Tutorial Full Course 2026 | Playwright Testing Tutorial - YouTube');
    // await playlistpage.validatePageTitle('API Testing by Testers Talk - YouTube');
    
     await playlistpage.validatePageTitle(`${testData.Module1DataSet1?.Skill1} - YouTube`);

    console.log(`Skill: ${testData.Module1DataSet1?.Skill1}`);
    console.log(`Skill: ${testData.Module1DataSet1?.Skill2}`);
    console.log(`Skill: ${testData.Module1DataSet1?.Skill3}`);

});