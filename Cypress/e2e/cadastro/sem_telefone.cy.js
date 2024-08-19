///<reference types = "Cypress"/> 

describe('Fluxo de cadastro sem telefone', () => {
    it('Cadastro sem telefone', () => {
        
        cy.botão_cadastro(); 
        cy.cadastro_semtelefone("Jhonathan", "jhonathasilva@gmail.com", "Fortaleza", "2000-06-09")
        cy.botão_salvar(); 
        


    });
});