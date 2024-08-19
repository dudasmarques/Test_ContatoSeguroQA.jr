///<reference types = "Cypress"/> 

describe('Fluxo de cadastro e depois fechar', () => {
    it('Fechar cadastro', () => {
        
        cy.botão_cadastro(); 
        cy.cadastro_fechar("Kalel", "Kalel@gmail.com", "5241541", "Maranhão", "1995-04-03")
        cy.get('body > div.ReactModalPortal > div > div > button').click(); 
        
        
            
        
        
        


    });
});