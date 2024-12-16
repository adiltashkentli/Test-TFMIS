import 'module-alias/register';
import { test, expect } from '@playwright/test';
import CurrencyRates from '@pages/BudExecCurrencyRates';
import Dashboard from '@pages/Dashboard';

test.describe('Категория: Курсы валют', () => {
    let currencyRates;
    let dashboard;

    test.beforeEach(async ({ page }) => {
        currencyRates = new CurrencyRates(page);
        dashboard = new Dashboard(page);
        await dashboard.login();
        await currencyRates.navigateToPage();
    });
    test('Check tab header', async () => {
        await currencyRates.checkTabHeader();
    });
    test('Add modal functiolaity', async () => {
        await currencyRates.addModal();
    });    
    test ('Check spreadsheet headers', async()=>{
        await currencyRates.spreadsheetListAssertion();
    });
    test ('Increase pagination', async()=>{
        await currencyRates.pagination();
    });
})