import { Locator, Page } from "@playwright/test";

export class Homepage{

    readonly page:Page;
    readonly searchTextbox : Locator;

    constructor(page:Page){
            this.page = page;
            // page.goto('https://www.youtube.com/');
            
            //Elements
            this.searchTextbox = page.locator('input[name="search_query"]');
    }

    //Methods
    async goToURL(){
        // await this.page.goto(`${process.env.GOOGLE_URL}`);
        if (process.env.TEST_EXECUTION_ENV == 'qa') {
            await this.page.goto(`${process.env.GOOGLE_URL}`);
            console.log(`Tests are running in ${process.env.TEST_EXECUTION_ENV} env.`)
        } else if (process.env.TEST_EXECUTION_ENV == 'dev') {
            await this.page.goto(`${process.env.GOOGLE_URL}`);
            console.log(`Tests are running in ${process.env.TEST_EXECUTION_ENV} env.`)
        }
    }

    async searchWithKeywords(keyword:string){
        await this.searchTextbox.click();
        await this.searchTextbox.fill(keyword);
        await this.searchTextbox.press('Enter');
    }
}