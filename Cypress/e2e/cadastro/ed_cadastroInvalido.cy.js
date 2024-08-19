///<reference types = "Cypress"/> 

describe('Cadastro Inválido', () => {
    it('Fluxo de casatro inválido', () => {
        cy.botão_cadastro(); 
        cy.cadastro_invalido( "Pedrinho123@gmail.com", "61995582327", "Brasília", "2002-01-26"); 
        cy.botão_salvar();
        cy.get('[placeholder="Nome"]').then(($input) => {
            $input[0].reportValidity();
            expect($input[0].validationMessage).to.eq('Preencha este campo.');
          });
        


          

    });
});