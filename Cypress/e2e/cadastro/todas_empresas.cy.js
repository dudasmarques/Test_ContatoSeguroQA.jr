///<reference types = "Cypress"/> 

describe('Fluxo de cadastro marcando as três empresas', () => {
    it('Cadastro com as três empresas', () => {
        
        cy.botão_cadastro(); 
        cy.cadastro_todasempresas("Joelma", "Joelma@gmail.com", "55414233625", "Boa vista", "1990-04-03")
        cy.botão_salvar(); 
        
      
        
        
        


    });
});