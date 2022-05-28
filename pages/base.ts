export class BasePage {
    async open(path: string) {
        await browser.url(path);
    }
}