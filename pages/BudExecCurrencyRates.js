import { expect } from '@playwright/test';
import Locators, { BudgetExecution, ExchangeTransactionSubmenu as _ExchangeTransactionSubmenu } from '../support/locators';
import dataUser from '../data/dataUser';

class CurrencyRates {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.locator(BudgetExecution.menu).click();
        await this.page.locator(_ExchangeTransactionSubmenu.submenu).click();
        await this.page.click(Locators.CurrencyRates.categoryMenu);
    }
    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.InputExpenses.tabHeader);
        await expect(tabHeader).toContainText('Курсы валют');
    }
    async addModal(){
        await this.page.click(Locators.Recipients.add1button);
        await this.page.locator(Locators.CurrencyRates.currency).type('Somoni');
        await this.page.locator(Locators.CurrencyRates.rate).type('11.5');
        await this.page.locator(Locators.CurrencyRates.nominal).type('0.15');        
        await this.page.click(Locators.CurrenciesManual.addModalButton);
        await this.page.click(Locators.Recipients.cancel);
    }
    async spreadsheetListAssertion() {
        const headers = [
            { key: 'row1', text: 'Символ валюты' },
            { key: 'row2', text: 'Имя валюты' },
            { key: 'row3', text: 'Курсы валют' },
            { key: 'row4', text: 'Номинал' },
            { key: 'row5', text: 'Операции' },            
        ];    
        await Promise.all(headers.map(({ key, text }) => 
            expect(this.page.locator(Locators.CurrencyRates[key])).toHaveText(text)
        ));
    }
    async pagination() {
        await this.page.getByLabel(Locators.IncomeByRegions.pagination).click();
        await this.page.getByRole('option', { name: '30' }).click();
    }
    
}

export default CurrencyRates;