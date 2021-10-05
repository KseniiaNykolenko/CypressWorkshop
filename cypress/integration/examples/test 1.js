describe('My first automation test', () => {
    it('I am tasting Google seach', () => {
        cy.visit('https://www.google.com.ua/?hl=ru');
        cy.get("input[title='Поиск']").type('Sypress').type('{enter}');
    });
});

