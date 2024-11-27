const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class BudExeIncomesMenu {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
    }
    async checkCategoriesList(){        
        const submenuList = await this.page.$$(Locators.SubmenuIncomes.categoriesOfSubmenu);
        const expectedSubmenuList = [
            'Реестр поступления (перевод со счёта)',
            'Реестр распределённых доходов',
            'Реестр поступления за период',
            'Реестр поступления'
        ];        
        for (let i = 0; i < submenuList.length; i++) {
            const submenuText = await submenuList[i].textContent();
            console.log(submenuText);
            expect(submenuText.trim()).toBe(expectedSubmenuList[i]);
        }
    }    
}

module.exports = BudExeIncomesMenu;