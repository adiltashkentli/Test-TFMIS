const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class BankSubmenu {
    constructor(page) {
        this.page = page;
    }

    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.BankSubmenu.submenu);
    }
    async checkCategoriesList() {
        const categories = [
            { key: 'cat1', text: 'Доходы(Банк)' },
            { key: 'cat2', text: 'Доступ и права (Банк)' },
            { key: 'cat3', text: 'Расходы по банку' },
            { key: 'cat4', text: 'Реестр расходов (расходы по банку)' },
            { key: 'cat5', text: 'Отчеты (банк)' },
            { key: 'cat6', text: 'Справочник' },
            { key: 'cat7', text: 'Реестр расходов (расходы по банку)' },
            { key: 'cat8', text: 'Расходы (банк)' } 
        ];    
        await Promise.all(categories.map(({ key, text }) => 
            expect(this.page.locator(Locators.BankSubmenu[key])).toHaveText(text)
        ));
    }
    
    
}

module.exports = BankSubmenu;