import locators from '../support/locators';

class HomePage {
    constructor(page) {
        this.page = page;
        this.locators = new Locators(page);
    }    
    async navigate(){
        await this.page.goto('/');
    }
    async checkPageUrl(){
        const url = await this.page.url();
        await expect(url).toBe('/');//проверяем url
    }
    async titleAssertion(){
        const pageTitle = await this.page.title();
        await expect(pageTitle).toHaveTitle('React App')}//тайтл проверяем

    async armAssertion(){        
        await expect(this.locators.headText).toBeVisible();
        await expect(this.locators.nationalArm).toBeVisible()};//проверяем герб-лого
        
    async headTextsAssertion(){
        await expect(this.locators.headText).toBeVisible();
        await expect(this.locators.headText.textContent()).toContain('Министерство Финансов Республики Таджикистан');//проверяем 1-й заголовок
        await expect(this.locators.headTextSecond).toBeVisible();
        await expect(this.locators.headTextSecond.textContent()).toContain('ИНФОРМАЦИОННАЯ СИСТЕМА УПРАВЛЕНИЯ ГОСУДАРСТВЕННЫМИ ФИНАНСАМИ');//проверяем 2-й заголовок
    }
    
};
export default HomePage;