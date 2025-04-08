/// <reference types="cypress" />

describe('Tests for application page - Forms', () => {
    beforeEach(() => {
        cy.visit('https://ebac-jobs-e2e.vercel.app/')
    })
    it('Should bring the user to the applications forms', () => {
        cy.wait(1000)
        cy.get('input').should('have.length', 7)
        cy.screenshot('inscription-screen')
    })

    it('Should fill the application form and add a new contact', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    
        cy.get('input[placeholder="Nome"]').type('João Teste')
        cy.get('input[placeholder="E-mail"]').type('joao@teste.com')
        cy.get('input[placeholder="Telefone"]').type('11999999999')
    
        cy.contains('button', 'ADICIONAR').click()
    
        // Verifica se o novo contato aparece na tela
        cy.contains('João Teste').should('exist')
        cy.contains('joao@teste.com').should('exist')
    })
    
})