///<reference types = "Cypress"/> 

describe('Fluxo de cadastro sem empresa', () => {
    it('Cadastro sem empresa', () => {
        
        cy.botão_cadastro(); 
        cy.cadastro_semempresa("Paula", "Paulinha@gmail.com", "45212541", "Recife", "2015-04-04")
        cy.botão_salvar(); 
        cy.wait(2000);
        cy.get('i').contains('Insira as empresas do usuário!');
        cy.get('.swal2-confirm').click(); 
        
        
        


    });
});