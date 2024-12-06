const { expect } = require('@playwright/test');
const Locators = require('../support/locators');
const dataUser = require('../data/dataUser');

class DirectorySubmenu {
    constructor(page) {
        this.page = page;
    }

    async navigateToPage() {
        await this.page.click(Locators.BudgetExecution.menu);
        await this.page.click(Locators.DirectorySubmenu.submenu);
    }
    async checkCategoriesList() {
        const categories = [
            { key: 'cat1', text: 'Операционный день' },
            { key: 'cat2', text: 'Товары и услуги' },
            { key: 'cat3', text: 'Регистрация ИНН' },
            { key: 'cat4', text: 'Тендерные заявки' },
            { key: 'cat5', text: 'Плательщики (Бюдж. Орг.)' },
            { key: 'cat6', text: 'Договора' },
            { key: 'cat7', text: 'Получатели (Поставщики)' },
            { key: 'cat8', text: 'Заработная плата (Получатели)' },
            { key: 'cat9', text: 'Банки' },
            { key: 'cat10', text: 'Уведомление об отказе' },
            { key: 'cat11', text: 'План счетов' },            
            { key: 'cat12', text: 'Отделы казначейства' },
            { key: 'cat13', text: 'Привязка отделов казначейства с БЗ' },
            { key: 'cat14', text: 'Справочник городов' },
            { key: 'cat15', text: 'Привязка БЗ (куратор)' },
            { key: 'cat16', text: 'Кураторы' },
            { key: 'cat17', text: 'Привязка куратор (Банк)' },
            { key: 'cat18', text: 'Задолженность ГУП' }            
        ];
    
        await Promise.all(categories.map(({ key, text }) => 
            expect(this.page.locator(Locators.DirectorySubmenu[key])).toHaveText(text)
        ));
    }
    
    
}

module.exports = DirectorySubmenu;