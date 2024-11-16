const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class Dashboard {
    constructor(page) {
        this.page = page;

    }

    async login() {
        await this.page.goto('/');
        await this.page.fill(Locators.Dashboard.login, dataUser.loginData.user);
        await this.page.fill(Locators.Dashboard.password, dataUser.loginData.password);
        await this.page.click(Locators.Dashboard.loginButton);
    }

    async checkHeadings() {
        // Fetch all heading elements
        const headings = await this.page.$$(Locators.Dashboard.headings);

        const expectedHeadings = [
            'Главная',
            'Карта сайта',
            'Форум',
            'НПД',
            'Помощь',
        ];

        // Loop through each heading and compare text
        for (let i = 0; i < headings.length; i++) {
            const headingText = await headings[i].textContent();
            console.log(headingText);

            // Assert that the heading text matches the expected value
            expect(headingText.trim()).toBe(expectedHeadings[i]);
        }
    }

    async languageSelection() {
        const languageButton = this.page.locator(Locators.Dashboard.langSlcBtn);
        // Ensure the language selection button is enabled
        await expect(languageButton).toBeEnabled();
    }

    async listOfBudgetPreparation() {
        // Get all submenu items
        const submenus = await this.page.$$(Locators.Dashboard.budgPrpMenusList);
        
        const expectedTexts = [
            'Доходы',
            'Расходы',
            'Изменение',
            'Администрирование',
            'Классификаторы',
        ];

        // Loop through each submenu item and assert its text
        for (let i = 0; i < submenus.length; i++) {
            const menuText = await submenus[i].textContent();
            console.log(menuText);

            // Assert that the menu text matches the expected value
            expect(menuText.trim()).toBe(expectedTexts[i]);
        }
    }
}

module.exports = Dashboard;
