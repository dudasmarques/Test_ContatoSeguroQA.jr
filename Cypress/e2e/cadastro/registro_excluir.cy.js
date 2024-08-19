///<reference types = "Cypress"/> 

describe('Fluxo de excluir', () => {
    it('Excluir cadastro', () => {
        
        cy.visit("http://localhost:5400/")
        cy.cadastro_excluir(); 
        

    })
})