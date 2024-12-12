// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests', // Папка с тестами
  timeout: 30000, // Тайм-аут для тестов (30 секунд)
  retries: 1, // Количество повторных попыток в случае ошибки
  use: {
    headless: true, // Запуск браузера в headless режиме
    viewport: { width: 1280, height: 720 }, // Размер окна браузера
    baseURL: 'https://tfmis.vercel.app/', // Базовый URL
    screenshot: 'only-on-failure', // Скриншоты только при ошибках
    video: 'retain-on-failure', // Видео только при ошибках
  },
  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'Firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'WebKit',
      use: { browserName: 'webkit' },
    },
  ],
  reporter: [['list'], ['html', { outputFolder: 'playwright-report' }]], // Настройка отчетов
});
