const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class ReportSubmenu {
    constructor(page) {
        this.page = page;
    }

    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.ReportSubmenu.submenu);
    }
    async checkCategoriesList() {
        const categories = [
            { key: 'cat1', text: 'Сальдо за период' },
            { key: 'cat2', text: 'Бухгалтерские отчеты' },
            { key: 'cat3', text: 'Выписка' },
            { key: 'cat4', text: 'Баланс за период' },
            { key: 'cat5', text: 'Прочие расходы' },
            { key: 'cat6', text: 'Ввод остатков БО по фондам' },
            { key: 'cat7', text: 'Отчеты об исполнении бюджета' },
            { key: 'cat8', text: 'Бухгалтерские отчеты' },
            { key: 'cat9', text: 'Финансовые отчеты' },
            { key: 'cat10', text: 'Отчеты по доходам' },
            { key: 'cat11', text: 'Отчёт по доходам' }
        ];
    
        await Promise.all(categories.map(({ key, text }) => 
            expect(this.page.locator(Locators.ReportSubmenu[key])).toHaveText(text)
        ));
    }
    
    
}

module.exports = ReportSubmenu;