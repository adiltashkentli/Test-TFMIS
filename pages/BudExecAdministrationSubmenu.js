const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class AdministrationSubmenu {
    constructor(page) {
        this.page = page;
    }

    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.AdministrationSubmenu.submenu);
    }
    async checkCategoriesList() {
        const categories = [
            { key: 'cat1', text: 'Начисление и удержание' },
            { key: 'cat2', text: 'Процессы' },
            { key: 'cat3', text: 'Документы' },
            { key: 'cat4', text: 'Ограничения расходов по статьям' }
        ];    
        await Promise.all(categories.map(({ key, text }) => 
            expect(this.page.locator(Locators.AdministrationSubmenu[key])).toHaveText(text)
        ));
    }
    
    
}

module.exports = AdministrationSubmenu;