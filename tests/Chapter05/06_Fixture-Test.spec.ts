// Import playwright module
// import { test, expect } from '@playwright/test'
import {test} from '../../src/fixture/TestFixture';
import { Homepage } from '../../src/pages/Homepage'
import { PlaylistPage } from '../../src/pages/PlaylistPage';
import { ResultPage } from '../../src/pages/ResultPage';

test('Implementing fixture in playwright', async ({ page }) => {

    console.log('Test execution started...');

    // Create object of homepage

    const homepage = new Homepage(page)   // this will be accept the page as a parameter
    await homepage.goToURL();
    await homepage.searchWithKeywords(`${process.env.SEARCH_KEYWORDS}`);

    // Create object of resultpage

    const resultpage = new ResultPage(page);                 // this will be accept the page as a parameter
    await resultpage.clickOnPlaylist(`${process.env.SEARCH_KEYWORDS}`)

    // Create object of playlistpage
    const playlistpage = new PlaylistPage(page);            // this will be accept the page as a parameter
    await playlistpage.validatePageTitle('#1 Playwright Tutorial Full Course 2026 | Playwright Testing Tutorial - YouTube');
    console.log('Test execution ended...')
});