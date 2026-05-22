import { Locator, Page } from "@playwright/test";

export class ResultPage{

    readonly page:Page;
    constructor(page:Page){
            this.page = page;
        
    }

    //Methods
    async clickOnPlaylist(link:string){
        // await this.page.getByText("Playwright by Testers Talk").click();
        await this.page.getByRole('link', {name: link}).click();
    }
}