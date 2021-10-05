/// <reference types="cypress" />

/*
describe('My first automation test', () => {
    it('I am tasting Google seach', () => {
        cy.visit('https://www.google.com.ua/?hl=ru');
        cy.get("input[title='Поиск']").type('Sypress').type('{enter}');
    });
});

*/

/*
it ('By ID', () =>{
    cy.visit("https://facebook.com/");
    cy.get('#email');
})

it ('By class', () =>{
    cy.visit("https://facebook.com/");
    cy.get('*[class^="inputtext"]');
})

it ('By teg', () =>{
    cy.visit("https://facebook.com/");
    cy.get('img');
})

it ('By teg value', () =>{
    cy.visit("https://facebook.com/");
    cy.get('[name="pass"]');
})

it ('By class', () =>{
    cy.visit("https://privat24.ua");
    cy.get('svg[version="1.1"][xmlns="http://www.w3.org/2000/svg"]');
})
*/

it ('By Find and Eq', () =>{
    cy.visit("https://next.privat24.ua/deposit");
    cy.get('tbody').find('td').find('button').eq('0');
})
//new comment  444
it.only ('By Find and Eq', () =>{
    cy.viewport(1800,700);
    cy.visit("https://docs.cypress.io/guides/overview/why-cypress");
    cy.get('nav.fixed.w-sidebar').find('ul').find('li').find('a').eq(0);
})

