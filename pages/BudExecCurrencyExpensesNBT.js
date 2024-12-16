import { expect } from '@playwright/test';
import Locators, { BudgetExecution, ExchangeTransactionSubmenu as _ExchangeTransactionSubmenu } from '../support/locators';
import dataUser from '../data/dataUser';
import { type } from 'os';

class CurrencyExpensesNBT {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.locator(BudgetExecution.menu).click();
        await this.page.locator(_ExchangeTransactionSubmenu.submenu).click();
        await this.page.click(Locators.CurExpensesNBT.categoryMenu);
    }
    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.InputExpenses.tabHeader);
        await expect(tabHeader).toContainText('Валютные расходы по выписке НБТ');
    }
    async getRelativeList() {
        await this.page.locator('div').filter({ hasText: /^От$/ }).getByLabel('Choose date').click();
        await this.page.getByRole('gridcell', { name: '1', exact: true }).click();
        await this.page.getByLabel('Choose date', { exact: true }).click();
        await this.page.getByRole('gridcell', { name: '31' }).nth(1).click();
        await this.page.getByLabel('Организации').click();
        await this.page.getByRole('option', { name: 'one' }).click();
        await this.page.getByLabel('БЗ', { exact: true }).click();
        await this.page.getByRole('option', { name: 'two' }).click();
        await this.page.getByLabel('Тип платежа').click();
        await this.page.getByRole('option', { name: 'three' }).click();
        await this.page.getByText('Список').click();        
    }
    async checkRowsAssertion(){
        await this.page.locator(Locators.CurExpensesNBT.checkAllRows).check();
        const firstCheckedRow = this.page.locator(Locators.CurExpensesNBT.firstCheckedRow);
        await expect(firstCheckedRow).toBeChecked();
        const fifthCheckedRow = this.page.locator(Locators.CurExpensesNBT.fifthCheckedRow);
        await expect(fifthCheckedRow).toBeChecked();
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
    async footer5inputAreas() {
        const inputs = [
            Locators.CurExpensesNBT.footerInput1,
            Locators.CurExpensesNBT.footerInput2,
            Locators.CurExpensesNBT.footerInput3,
            Locators.CurExpensesNBT.footerInput4,
            Locators.CurExpensesNBT.footerInput5,
        ];    
        for (let i = 0; i < inputs.length; i++) {
            await this.page.type(inputs[i], '45');
        }
    }
    
    async pagination() {
        await this.page.getByLabel(Locators.IncomeByRegions.pagination).click();
        await this.page.getByRole('option', { name: '30' }).click();
    }

}

export default CurrencyExpensesNBT;