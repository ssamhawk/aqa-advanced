module.exports = {
  env: {
    browser: true, // Дозволяє використання глобальних змінних браузера
    es2021: true, // Включає підтримку останніх фіч ECMAScript
    node: true, // Дозволяє використання глобальних змінних Node.js
    'cypress/globals': true, // Додає глобальні змінні Cypress
    jest: true, // Додає глобальні змінні Jest
  },
  extends: [
    'eslint:recommended', // Використовує рекомендовані правила ESLint
    'plugin:jest/recommended', // Використовує рекомендовані правила для Jest
    'plugin:cypress/recommended', // Використовує рекомендовані правила для Cypress
    'plugin:playwright/playwright-test', // Використовує правила для Playwright
    'prettier', // Інтеграція з Prettier для уникнення конфліктів між ESLint і Prettier
  ],
  parserOptions: {
    ecmaVersion: 12, // Версія ECMAScript, яку ви використовуєте
    sourceType: 'module', // Дозволяє використовувати ECMAScript модуляцію
  },
  plugins: [
    'jest', // Плагін для роботи з Jest
    'cypress', // Плагін для роботи з Cypress
    'playwright', // Плагін для роботи з Playwright
  ],
  rules: {
    'no-console': 'warn', // Виводить попередження для викликів `console`
    'no-unused-vars': 'warn', // Виводить попередження для невикористаних змінних
    quotes: ['error', 'single'], // Вимагає використання одинарних лапок
    semi: ['error', 'always'], // Вимагає використання крапки з комою
    indent: ['error', 2], // Вимагає відступ в 2 пробіли
    'linebreak-style': ['error', 'unix'], // Використання Unix стилю кінця рядка
    'jest/no-disabled-tests': 'warn', // Виводить попередження для відключених тестів Jest
    'jest/no-focused-tests': 'error', // Забороняє використовувати сфокусовані тести (`.only`) в Jest
    'jest/no-identical-title': 'error', // Забороняє ідентичні назви тестів у Jest
    'jest/prefer-to-have-length': 'warn', // Рекомендує використовувати `.toHaveLength()` в Jest
    'jest/valid-expect': 'error', // Перевіряє правильність використання `expect()` в Jest
  },
  settings: {
    jest: {
      version: 'detect', // Автоматично визначає версію Jest
    },
  },
};
