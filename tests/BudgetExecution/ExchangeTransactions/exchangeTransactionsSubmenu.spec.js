import 'module-alias/register';
import { test, expect } from '@playwright/test';
import ExchangeTransactionSubmenu from '@pages/BudExecExchangeTransacSubmenu';
import Dashboard from '@pages/Dashboard';

test.describe('Подменю: Валютные ОП', () => {
    let exchangeTransactionSubmenu;
    let dashboard;

    test.beforeEach(async ({ page }) => {
        exchangeTransactionSubmenu = new ExchangeTransactionSubmenu(page);
        dashboard = new Dashboard(page);
        await dashboard.login();
        await exchangeTransactionSubmenu.navigateToPage();
    });
    test('Check categories list', async () => {
        await exchangeTransactionSubmenu.checkCategoriesList();
    });

})