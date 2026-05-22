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
        await this.page.goto(`${process.env.GOOGLE_URL}`);
    }

    async searchWithKeywords(keyword:string){
        await this.searchTextbox.click();
        await this.searchTextbox.fill(keyword);
        await this.searchTextbox.press('Enter');
    }
}