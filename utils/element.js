import { expect } from '@playwright/test';

export class utils {
    constructor(page) {
        this.page = page;
    }

    async aclickElement(locator) {
        await locator.click();
    }

    async fillElement(locator, input) {
        await locator.fill(input);
    }

    async getElementText(locator) {
        return await locator.textContent();
    }

    async getElementAttribute(locator, attributeName) {
        return await locator.getAttribute(attributeName);
    }

    async isElementVisible(locator) {
        await expect(locator).toBeVisible();
    }

    async isElementEnabled(locator) {
        await expect(locator).toBeEnabled();
    }

    async isElementChecked(locator) {
        await expect(locator).toBeChecked();
    }

    async isElementSelected(locator) {
        await expect(locator).toBeSelected();
    }

    async getElementCount(locator) {
        return await locator.count();
    }

    async getElementValue(locator) {
        return await locator.inputValue();
    }

    async getElementInnerHTML(locator) {
        return await locator.innerHTML();
    }

    async getElementInnerText(locator) {
        return await locator.innerText();
    }

    async getElementOuterHTML(locator) {
        return await locator.evaluate((element) => element.outerHTML);
    }
    async getElementOuterText(locator) {
        return await locator.evaluate((element) => element.outerText);
    }   
async getElementTagName(locator) {
        return await locator.evaluate((element) => element.tagName);
    }

    async getElementClassName(locator) {
        return await locator.evaluate((element) => element.className);
    }
    async getElementId(locator) {       
        return await locator.evaluate((element) => element.id); 
    }
    
    async getElementStyle(locator, styleProperty) {
        return await locator.evaluate((element, styleProperty) => {
            return window.getComputedStyle(element).getPropertyValue(styleProperty);
        }, styleProperty);

    }



}