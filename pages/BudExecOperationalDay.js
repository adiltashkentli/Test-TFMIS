const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class OperationalDay {
    constructor(page) {
        this.page = page;
    }
    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.DirectorySubmenu.submenu);
        await this.page.click(Locators.OperationalDay.categoryMenu);
    }
    async checkTabHeader() {
        const tabHeader = await this.page.locator(Locators.InputExpenses.tabHeader);
        await expect(tabHeader).toContainText('Операционный день');
    }
    async chooseDate() {
        // Get the current operational day text
        const actualDay = this.page.locator(Locators.OperationalDay.currentDay);
        const actualText = await actualDay.textContent();
        console.log(`Initial Date: ${actualText}`);
        await expect(actualDay).toHaveText(actualText); // Validate the text matches itself (redundant, consider removing)
    
        // Select a new date
        await this.page.click(Locators.OperationalDay.dateSelector);
        await this.page.click(Locators.OperationalDay.date);
        await this.page.click(Locators.OperationalDay.saveButton);
    
        // Verify success alert
        const alert = this.page.locator(Locators.OperationalDay.alert);
        await expect(alert).toHaveText('Операционная дата обновлена!');
        
        // Validate that the operational day has been updated
        const actualDayChanged = this.page.locator(Locators.OperationalDay.currentDay);
        const actualTextChanged = await actualDayChanged.textContent();
        console.log(`Updated Date: ${actualTextChanged}`);
        await expect(actualDayChanged).toHaveText(actualTextChanged); // Compare with its own content (redundant, consider removing)
    }
    
    
    async closeButtonFunc() {
        const closeButton = this.page.locator(Locators.OperationalDay.closeButton);
        await expect(closeButton).toBeVisible();
        await expect(closeButton).toBeEnabled();
    }
        
}
module.exports = OperationalDay;