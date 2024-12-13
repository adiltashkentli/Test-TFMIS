import 'module-alias/register';
import { test, expect } from '@playwright/test';
import CurrenciesManual from '@pages/BudExecCurrenciesManual';
import Dashboard from '@pages/Dashboard';

test.describe('Категория: Справочник валют', () => {
    let currenciesManual;
    let dashboard;

    test.beforeEach(async ({ page }) => {
        currenciesManual = new CurrenciesManual(page);
        dashboard = new Dashboard(page);
        await dashboard.login();
        await currenciesManual.navigateToPage();
    });
    test('Check tab header', async () => {
        await currenciesManual.checkTabHeader();
    });
    test('Add currency modal functiolaity', async () => {
        await currenciesManual.addCurrencyModal();
    });    
    test ('Check spreadsheet headers', async()=>{
        await currenciesManual.spreadsheetListAssertion();
    });
    test ('Increase pagination', async()=>{
        await currenciesManual.pagination();
    });
})