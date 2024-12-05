const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class ExpensesSubmenu {
    constructor(page) {
        this.page = page;
    }

    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.ExpensesSubmenu.submenuExpenses);
    }
    async checkCategoriesList(){
        const submenuList = await this.page.$$(Locators.ExpensesSubmenu.categories);
        const expectedCategoriesList = [
            'Ввод расхода',
            'Лимиты по заработной плате',
            'Кассовый план',
            'Реестр Тендерных Заявок',
            'Реестр договоров',
            'Реестр обязательств БО',
            'Реестр расчетов зарплат',
            'Реестр Счет-фактуров',
            'Реестр расходных заявок',
            'Бухгалтерская справка',
            'Прочие расходы без бюджета',
            'Реестр Объектов(Титульный лист)',
            'Реестр договорных обязательство (самооплата)',
            'Реестр Командировочный расходов',
            'Реестр заявок на ЦКВ',
            'Реестр платёжных поручений (Сомони)',
            'Реестр платёжных для обналичивание',
            'Реестр заявок на перевод'            
        ];        
        for (let i = 0; i < submenuList.length; i++) {
            const submenuText = await submenuList[i].textContent();
            console.log(submenuText);
            expect(submenuText.trim()).toBe(expectedCategoriesList[i]);
        }
    }    
}

module.exports = ExpensesSubmenu;