
import 'dotenv/config';
import data from '../utils/data.json' with { type: 'json' };

export async function invokeBrowser(page) {
    const envLink = process.env.ENVLINK ?? data.Envlink;
    await page.goto(envLink);
}