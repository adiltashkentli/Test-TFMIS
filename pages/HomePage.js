const { expect } = require('@playwright/test');
const Locators = require('../support/locators');

class HomePage {
    constructor(page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto('/');
    }

    async checkPageUrl() {
        await expect(this.page).toHaveURL('/'); // проверяем url
    }

    async titleAssertion() {
        await expect(this.page).toHaveTitle('React App'); // проверяем тайтл
    }

    async armAssertion() {
        await expect(this.page.locator(Locators.MainPage.nationalArm)).toBeTruthy(); // проверяем герб
    }

    async headTextsAssertion() {
        const text1 = await this.page.locator(Locators.MainPage.headText).innerText();
        await expect(text1).toContain('Министерство Финансов Республики Таджикистан'); // проверяем 1-й заголовок
        const text2 = await this.page.locator(Locators.MainPage.headTextSec).innerText();
        await expect(text2).toContain('ИНФОРМАЦИОННАЯ СИСТЕМА УПРАВЛЕНИЯ ГОСУДАРСТВЕННЫМИ ФИНАНСАМИ');
    }
}

module.exports = HomePage;
