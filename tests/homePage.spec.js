const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage').default;

test.describe('HomePage', () => {
  let homePage;

  test.beforeEach(async () => {
    homePage = new HomePage();
    await homePage.goto('/');
  });

  test('Home page test', async ({page})=> {
  const homePage = new HomePage;
  //проверяем тайтл
  await homePage.navigate();
  await homePage.checkPageTitle();
  //проверяем вебадрес
  await homePage.checkPageUrl();
  //проверяем герб
  await homePage.armAssertion();
  //проверяем 2 заголовокa
  await homePage.headTextsAssertion();
})
});
