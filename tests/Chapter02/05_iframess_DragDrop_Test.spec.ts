import {test,expect} from '@playwright/test'
test('Handling Iframes, Drag and Drop element in playwright', async({page}) =>{
    
    await page.goto('https://jqueryui.com/droppable/');

   const iframe = page.frameLocator('[class="demo-frame"]');

    //drag element, drop element is wrong
    // const dragElement = page.locator('[id="draggable]');
    // const dropElement = page.locator('[id="droppable"]');

    // iframe reference variable
    const dragElement = iframe.locator('[id="draggable"]');
    const dropElement = iframe.locator('[id="droppable"]');

    await dragElement.dragTo(dropElement);
});