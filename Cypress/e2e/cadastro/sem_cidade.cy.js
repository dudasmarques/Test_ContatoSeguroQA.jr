///<reference types = "Cypress"/> 

describe('Fluxo de cadastro sem cidade', () => {
    it('Cadastro sem cidade', () => {
        
        cy.botão_cadastro(); 
        cy.cadastro_semcidade("Karen", "karen.taia@gmail.com", "512559879", "1998-04-11")
        cy.botão_salvar(); 
        


    });
});