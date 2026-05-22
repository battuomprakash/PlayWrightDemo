// Import playwright module
import { test, expect } from '@playwright/test'
import { Homepage } from 'src/pages/Homepage'
import { PlaylistPage } from 'src/pages/PlaylistPage';
import { ResultPage } from 'src/pages/ResultPage';

test('My First Playwright TypeScript Test', async ({ page }) => {

    console.log('Test Execution Startedd..');

    // console.log('SEARCH_KEYWORDS:', process.env.SEARCH_KEYWORDS);
    // console.log('GOOGLE_URL:', process.env.GOOGLE_URL);

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
});