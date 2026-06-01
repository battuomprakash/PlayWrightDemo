// Import playwright module
// import { test, expect } from '@playwright/test'
// import { Homepage } from '../../src/pages/Homepage'
// import { PlaylistPage } from '../../src/pages/PlaylistPage';
// import { ResultPage } from '../../src/pages/ResultPage';

import {test} from "../../src/fixture/TestFixture"

test('Page Object Model Test in Playwright', async ({ page, homepage, resultpage, playlistpage}) => {

    // Create object of homepage
    // const homepage = new Homepage(page)   
    await homepage.goToURL();
    await homepage.searchWithKeywords(`${process.env.SEARCH_KEYWORDS}`);

    // Create object of resultpage

    // const resultpage = new ResultPage(page);                 
    await resultpage.clickOnPlaylist(`${process.env.SEARCH_KEYWORDS}`);

    // Create object of playlistpage
    // const playlistpage = new PlaylistPage(page);            
    await playlistpage.validatePageTitle('#1 Playwright Tutorial Full Course 2026 | Playwright Testing Tutorial - YouTube');
});