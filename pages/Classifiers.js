const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class Classifiers {
    constructor(page) {
        this.page = page;
    }

    async navigateToPage() {
        await this.page.click(Locators.IncomeCeiling.budPrepMenuBut);
        await this.page.click(Locators.IncomeCeiling.menuRevenue);
        await this.page.click(Locators.Classifiers.menuClassifiers);

    }
    async listOfSubmenuCategories() {
        // Get all submenu categories
        const categories = await this.page.$$(Locators.Classifiers.categoriesOfSubmenu);

        const expectedTexts = [
            'Ведомственная классификация',
            'Функциональная классификация',
            'Источники финансирования',
            'Экономическая классификация',
            'Классификация доходов',
            'Программы и подпрограммы',
            'Типы бюджетных заявок',
            'Типы расходов',
            'Территориальная классификация',
            'Бюджетные показатели',
            'Администраторы доходов',
            'План счетов',
        ];

        for (let i = 0; i < categories.length; i++) {
            const headersText = await categories[i].textContent();
            console.log(headersText);

            // Assert that the menu text matches the expected value
            expect(headersText.trim()).toBe(expectedTexts[i]);
        }
    }
}
module.exports = Classifiers;