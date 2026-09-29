import { expect } from '@playwright/test';
import { utils } from '../utils/element.js';

export class LogOut {
    constructor(page) {
        this.page = page;
        this.utils = new utils(page);
        this.logout = page.getByRole('button', { name: 'Log in' });
    }

    async logOutvalidation() {
        await this.utils.aclickElement(this.logout);
        await this.utils.isElementVisible(this.logout);
    }
}