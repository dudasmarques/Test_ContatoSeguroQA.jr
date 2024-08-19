///<reference types = "Cypress"/> 


describe('Fluxo de cadastro sem email', () => {
    it('Cadastro sem email', () => {
        cy.botão_cadastro(); 
        cy.cadastro_sememail("Fred", "315589987", "Belo Horizonte", "1996-02-10" )
        cy.botão_salvar(); 
        cy.get('[placeholder="Email"]').then(($input) => {
            $input[0].reportValidity();
            expect($input[0].validationMessage).to.eq('Preencha este campo.');
          });





    });
});