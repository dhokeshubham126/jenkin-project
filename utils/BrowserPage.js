import { chromium, firefox, webkit } from 'playwright';

class BrowserManager {

    static async launchBrowser(browserName) {

        let browser;

        if (browserName === 'chrome' || browserName === 'chromium') {
            browser = await chromium.launch({
                headless: false
            });
        } 
        else if (browserName === 'firefox') {
            browser = await firefox.launch({
                headless: false
            });
        } 
        else if (browserName === 'webkit') {
            browser = await webkit.launch({
                headless: false
            });
        } 
        else {
            throw new Error(`Unsupported browser: ${browserName}`);
        }

        return browser;
    }
}

export { BrowserManager };