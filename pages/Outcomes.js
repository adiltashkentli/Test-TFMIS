const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class Outcomes {
    constructor(page) {
        this.page = page;

    }

    async navigateToOutcomes() {
        await this.page.click(Locators.Outcomes.budgetPreparationMenu);
        await this.page.click(Locators.Outcomes.menuOutcomes);
    }
    async checkSubmenuList(){        
        const submenuList = await this.page.$$(Locators.Outcomes.submenuList);

        const expectedSubmenuList = [
            'Общие бюджетные потолки',
            'Потолки по секторам',
            'Потолки по ГРБС',
            'Потолки по РБС',
            'Потолки по ПБС',
            'Бюджетные заявки ПБС',
            'Реестр расходных заявок',
            'Лимиты по заработной плате',
        ];

        // Loop through each heading and compare text
        for (let i = 0; i < submenuList.length; i++) {
            const submenuText = await submenuList[i].textContent();
            console.log(submenuText);

            // Assert that the heading text matches the expected value
            expect(submenuText.trim()).toBe(expectedSubmenuList[i]);
        }
    }    
}

module.exports = Outcomes;