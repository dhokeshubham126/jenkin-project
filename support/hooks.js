//import {before, after} from "@cucumber/cucumber";

//import{chromium} from "@playwright/test";


//before(async function () {

    //browser launch

    //this.browser= await chromium.launch({headless:false});
    //Context creation
    //this.context=await this.browser.newContext();
//page creation

//this.page=await this.context.newPage();




//} )



   // After(async function (scenario) {

   //if (scenario.result.status === 'FAILED') {

     //   const screenshot = await this.page.screenshot();

       // await this.attach(
        //);
  //  }
    
//await this.page.close();
//await this.context.close();
//await this.browser.close();

//})


import {
    Before,
    After,
    setDefaultTimeout
} from '@cucumber/cucumber';

import{BrowserManager} from '../utils/BrowserPage.js';
import { TestContext } from './context.js';



Before(async function () {
    

    this.browser= await BrowserManager.launchBrowser(process.env.BROWSER || 'chromium');
    this.context = await this.browser.newContext();

    this.page = await this.context.newPage();

    // Create application-level test context
    this.testContext= new TestContext(this.page);
});

After(async function () {
    await this.page.close();
    await this.context.close();
    await this.browser.close();
});
