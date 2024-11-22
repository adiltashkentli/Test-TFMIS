const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class Changes {
    constructor(page) {
        this.page = page;

    }

    async navigateToPage() {
        await this.page.click(Locators.Outcomes.budgetPreparationMenu);
        await this.page.click(Locators.ChangesMenu.submenuChanges);
    }
    async checkSubmenuList(){        
        const submenuList = await this.page.$$(Locators.ChangesMenu.categoriesOfSubmenu);

        const expectedSubmenuList = [
            'Изменение расходного бюджета без объекта',
            'Изменение расходного бюджета по объектам',
            'Изменение доходного бюджета',
        ];        
        for (let i = 0; i < submenuList.length; i++) {
            const submenuText = await submenuList[i].textContent();
            console.log(submenuText);
            expect(submenuText.trim()).toBe(expectedSubmenuList[i]);
        }
    }    
}

module.exports = Changes;