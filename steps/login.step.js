
import { Given, When, Then } from '@cucumber/cucumber';


import { invokeBrowser } from '../utils/browseropem.js';


Given('open url', async function () {

 await invokeBrowser(this.page);

  await this.testContext.hm.homePage();
 
  
});

When('fill username and password', async function () {

      await this.testContext.lg.loginDetails();
  
});

Then('click on login button', async function () {
  await this.testContext.wl.logOutvalidation();
});

Then('verify user is able to login successfully', async function () {
  console.log("User is able to login successfully");

});