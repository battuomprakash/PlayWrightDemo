import { expect, Locator, Page } from "@playwright/test";


export class PlaylistPage{

    readonly page:Page;
    constructor(page:Page){
            this.page = page;
        
    }

    //Methods
    async validatePageTitle(Title:string){
        await expect(this.page).toHaveTitle(Title);
    }
}