import {test as base} from '@playwright/test'
import { Homepage } from '../../src/pages/Homepage';
import { PlaylistPage } from '../../src/pages/PlaylistPage';
import { ResultPage } from '../../src/pages/ResultPage';

import {loadTestData} from '../../src/utils/JsonHelper';
import { TestData} from '../../src/interface/Module1TestData.interface';

export const test = base.extend<{
    saveLogs:void; 
    homepage: Homepage;
    resultpage:ResultPage;
    playlistpage:PlaylistPage;
    testData: TestData;
}>({
    saveLogs: [async ({ },use)=>{
        console.log('Global beforeEach is running...');
         await use();
         console.log('Global afterEach is running...');
    },
           {auto: true}],
           homepage: async({page}, use)=>{
            const homepage = new Homepage(page);
            await use(homepage);
           },
            resultpage: async({page}, use)=>{
            const resultpage = new ResultPage(page);
            await use(resultpage);
           },
            playlistpage: async({page}, use)=>{
            const playlistpage = new PlaylistPage(page);
            await use(playlistpage);
           },
            testData: async({}, use)=>{
            const testData = await loadTestData();
            await use(testData);
           }
});
export {expect} from '@playwright/test';