///<reference types = "Cypress"/> 

describe('Fluxo de cadastro sem nascimento', () => {
    it('Cadastro sem nascimento', () => {
        
        cy.botão_cadastro(); 
        cy.cadastro_semnascimento("Amanda", "amandinha@gmail.com", "654847821", "Catalão")
        cy.botão_salvar(); 
        cy.get('[placeholder="Data de nascimento"]').then(($input) => {
            $input[0].reportValidity();
            expect($input[0].validationMessage).to.eq('Preencha este campo.');
          });
        


    });
});