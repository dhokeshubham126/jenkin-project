import { expect } from '@playwright/test';
import 'dotenv/config';
import data from '../utils/data.json' with { type: 'json' };
import { utils } from '../utils/element.js';

export class Loginclass {
    constructor(page) {
        this.page = page;
        this.utils = new utils(page);
        this.loginclick = page.getByRole('link', { name: 'Log in' });
        this.user = page.locator('#loginusername');
        this.password = page.locator('#loginpassword');
    }

    async loginDetails() {
        const userId = process.env.USERID ? process.env.USERID : data.userId;
        const password = process.env.PASSWORD ? process.env.PASSWORD : data.password;

        await this.utils.aclickElement(this.loginclick);
        await this.utils.aclickElement(this.user);
        await this.utils.fillElement(this.user, userId);
        await this.utils.aclickElement(this.password);
        await this.utils.fillElement(this.password, password);
    }
}