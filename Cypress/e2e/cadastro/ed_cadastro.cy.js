///<reference types = "Cypress"/> 

describe('Teste Funcional de Cadastro', () => {
    it('Deve realizar o cadastro com sucesso', () => {
        cy.botão_cadastro(); 
        cy.cadastro_teste("Luan","luan@gmail.com", "61995582327", "Brasília", "2002-01-26");
        cy.botão_salvar(); 
        cy.verificar_tabela("Luan","luan@gmail.com");



       

    });
})