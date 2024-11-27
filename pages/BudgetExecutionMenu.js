const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class BudghetExecutionMenu {
    constructor(page) {
        this.page = page;

    }

    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        
    }
    async checkSubmenuList(){        
        const submenuList = await this.page.$$(Locators.BudgetExecution.subMenus);
        const expectedSubmenuList = [
            'Доходы',
            'Расходы',
            'Отчет',
            'Справочники',
            'Валютные ОП',
            'Банк',
            'Администрирование'
        ];        
        for (let i = 0; i < submenuList.length; i++) {
            const submenuText = await submenuList[i].textContent();
            console.log(submenuText);
            expect(submenuText.trim()).toBe(expectedSubmenuList[i]);
        }
    }    
}

module.exports = BudghetExecutionMenu;
