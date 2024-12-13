const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class ExchangeTransactionSubmenu {
    constructor(page) {
        this.page = page;
    }

    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.ExchangeTransactionSubmenu.submenu);
    }
    async checkCategoriesList() {
        const categories = [
            { key: 'cat1', text: 'Справочник валют' },
            { key: 'cat2', text: 'Курсы валют' },
            { key: 'cat3', text: 'Валютные расходы по выписке НБТ' }
        ];
    
        await Promise.all(categories.map(({ key, text }) => 
            expect(this.page.locator(Locators.ExchangeTransactionSubmenu[key])).toHaveText(text)
        ));
    }
    
    
}

module.exports = ExchangeTransactionSubmenu;