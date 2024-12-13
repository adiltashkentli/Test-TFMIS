import { expect } from '@playwright/test';
import { BudgetExecution, ExchangeTransactionSubmenu as _ExchangeTransactionSubmenu } from '../support/locators';
import dataUser from '../data/dataUser';

class ExchangeTransactionSubmenu {
    constructor(page) {
        this.page = page;
    }

    async navigateToPage() {
        await this.page.click(BudgetExecution.menu);
        await this.page.click(_ExchangeTransactionSubmenu.submenu);
    }
    async checkCategoriesList() {
        const categories = [
            { key: 'cat1', text: 'Справочник валют' },
            { key: 'cat2', text: 'Курсы валют' },
            { key: 'cat3', text: 'Валютные расходы по выписке НБТ' }
        ];    
        await Promise.all(categories.map(({ key, text }) => 
            expect(this.page.locator(_ExchangeTransactionSubmenu[key])).toHaveText(text)
        ));
    }
    
    
}

export default ExchangeTransactionSubmenu;