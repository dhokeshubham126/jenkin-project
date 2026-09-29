import { expect } from '@playwright/test';
import { utils } from '../utils/element.js';

export class Homepage {
    constructor(page) {
        this.page = page;
        this.utils = new utils(page);
        this.productlink = page.getByRole('link', { name: 'PRODUCT STORE' });
    }

    async homePage() {
        await this.utils.isElementVisible(this.productlink);
    }
}