import 'module-alias/register';
import { test, expect } from '@playwright/test';
import CurrencyExpensesNBT from '@pages/BudExecCurrencyExpensesNBT';
import Dashboard from '@pages/Dashboard';

test.describe('Категория: Валютные расходы по выписке НБТ', () => {
    let currencyExpensesNBT;
    let dashboard;

    test.beforeEach(async ({ page }) => {
        currencyExpensesNBT = new CurrencyExpensesNBT(page);
        dashboard = new Dashboard(page);
        await dashboard.login();
        await currencyExpensesNBT.navigateToPage();
    });
    test('Check tab header', async () => {
        await currencyExpensesNBT.checkTabHeader();
    });
    test('Get relative list', async () => {
        await currencyExpensesNBT.getRelativeList();
    });
    test('Check rows assertion', async () => {
        await currencyExpensesNBT.checkRowsAssertion();
    });
    test ('Check spreadsheet headers', async()=>{
        await currencyExpensesNBT.spreadsheetListAssertion();
    });
    test ('Footer area (backend not finished/in process)', async()=>{
        await currencyExpensesNBT.footer5inputAreas();
    });
    test ('Increase pagination', async()=>{
        await currencyExpensesNBT.pagination();
    });
})