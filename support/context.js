
import { Homepage } from '../pageobject/classhome.js';
import { Loginclass } from '../pageobject/classlogin.js';
import { LogOut } from '../pageobject/classwelcome.js';
export class TestContext{
    constructor(page) {
    this.page=page;
this.hm = new Homepage(page);
this.lg = new Loginclass(page);
this.wl = new LogOut(page);

    }
}