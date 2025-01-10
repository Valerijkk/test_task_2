describe('Feedback Form Tests', () => {
  const url = 'https://www.testograf.ru/ru/blog/feedback-form-template';

  it('Отправка формы с корректными данными', () => {
    // 1. Открываем страницу с формой
    cy.visit(url);

    // 2. Находим поля и заполняем их корректными данными
    cy.get('#name').type('Тестовое Имя');
    cy.get('#mail').type('test@example.com');
    cy.get('#msg').type('Это тестовое сообщение от Cypress.');

    // 3. Кликаем по кнопке "Отправить"
    cy.get('button[type="submit"]').click();

    // 4. Проверяем, что появилось сообщение об успешной отправке
    cy.get('.success-message')
      .should('be.visible')
      .and('contain', 'Спасибо за ваше сообщение')
      // Текст в .and('contain', '...') изменить на тот,
      // который реально появляется на сайте
  });
});
