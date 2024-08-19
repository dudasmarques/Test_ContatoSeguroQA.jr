///<reference types = "Cypress"/> 

describe('Fluxo de cadastro marcando as três empresas e excluindo uma', () => {
    it('Cadastro excluindo uma', () => {
        
        cy.botão_cadastro(); 
        cy.cadastro_sem1("Joelma", "Joelma@gmail.com", "55414233625", "Boa vista", "1990-04-03")
        cy.get(':nth-child(1) > .icon_cancel').click(); 
        cy.wait(1000);
        cy.botão_salvar(); 
        
      
        
        
        


    });
});