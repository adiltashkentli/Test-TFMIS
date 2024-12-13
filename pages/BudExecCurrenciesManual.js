import { expect } from '@playwright/test';
import Locators, { BudgetExecution, ExchangeTransactionSubmenu as _ExchangeTransactionSubmenu } from '../support/locators';
import dataUser from '../data/dataUser';

class CurrenciesManual {
    constructor(page) {
        this.page = page;
    }

    async navigateToPage() {
        await this.page.click(BudgetExecution.menu);
        await this.page.click(_ExchangeTransactionSubmenu.submenu);
        await this.page.click(Locators.CurrenciesManual.categoryMenu);
    }
    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.InputExpenses.tabHeader);
        await expect(tabHeader).toContainText('Справочник валют');
    }
    async addCurrencyModal(){
        await this.page.click(Locators.CurrenciesManual.addCurrency);
        await this.page.locator(Locators.CurrenciesManual.currNo).type('22/44');
        await this.page.locator(Locators.CurrenciesManual.currSymbol).type('TJS');
        await this.page.locator(Locators.CurrenciesManual.currNameRU).type('Сомони');
        await this.page.locator(Locators.CurrenciesManual.currNameTJ).type('Сомони');
        await this.page.locator(Locators.CurrenciesManual.currNameEN).type('Somoni');
        await this.page.click(Locators.CurrenciesManual.addModalButton);
    }
    async spreadsheetListAssertion() {
        const headers = [
            { key: 'row1', text: '-' },
            { key: 'row2', text: '№ Валюты' },
            { key: 'row3', text: 'Символ валюты' },
            { key: 'row4', text: 'Имя валюты (Русский)' },
            { key: 'row5', text: 'Имя валюты (Таджикский)' },
            { key: 'row6', text: 'Имя валюты (Английский)' },
            { key: 'row7', text: 'Операции' }
        ];    
        await Promise.all(headers.map(({ key, text }) => 
            expect(this.page.locator(Locators.CurrenciesManual[key])).toHaveText(text)
        ));
    }
    async pagination() {
        await this.page.getByLabel(Locators.IncomeByRegions.pagination).click();
        await this.page.getByRole('option', { name: '30' }).click();
    }
    
}

export default CurrenciesManual;