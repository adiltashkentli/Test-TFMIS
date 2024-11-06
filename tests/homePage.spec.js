const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');

test.describe('HomePage', () => {
  let homePage;

  test.beforeEach(async ({page}) => {
    homePage = new HomePage(page);
    await homePage.navigate('/');
  });

  test('Home page test', async ({page})=> {
  const homePage = new HomePage(page);
  //проверяем тайтл
  
  await expect(page).toHaveTitle("React App");
  await homePage.titleAssertion();
  //проверяем вебадрес
  await expect(page).toHaveURL("/");
  await homePage.checkPageUrl();
  //проверяем герб
  await homePage.armAssertion();
  //проверяем 2 заголовокa
  await homePage.headTextsAssertion();
})
});