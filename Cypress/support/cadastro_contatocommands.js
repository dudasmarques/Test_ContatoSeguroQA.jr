///<reference types = "Cypress"/> 


Cypress.Commands.add ("botão_cadastro" , ()=> {
    
    cy.visit("http://localhost:5400/")
    cy.get('#new-user').click(); 

})


Cypress.Commands.add ("verificar_tabela", (name, email)=>{

    cy.get('table').contains('td', name).should('be.visible');
    cy.get('table').contains('td', email).should('be.visible');
})

Cypress.Commands.add("botão_salvar" , ()=>{

    cy.get('.sc-eCImPb > button').click();
})

Cypress.Commands.add('cadastro_teste' , (name, email, number, city, date )=> {

    cy.get('[placeholder="Nome"]').type(name)
    cy.get('[placeholder="Email"]').type(email)
    cy.get('[placeholder="Telefone"]').type(number)
    cy.get('[placeholder="Cidade de nascimento"]').type(city)
    cy.get('[placeholder="Data de nascimento"]').type(date)
    cy.get('#search_input').click();
    cy.get('#multiselectContainerReact > div:nth-child(2) > ul > li:nth-child(1)').click();
    cy.get('#search_input').click();
    cy.get('[placeholder="Nome"]').click();
    cy.wait(1000);
    
    

})

Cypress.Commands.add("cadastro_invalido" , ( email, number, city, date)=>{
    cy.get('[placeholder="Email"]').type(email)
    cy.get('[placeholder="Telefone"]').type(number)
    cy.get('[placeholder="Cidade de nascimento"]').type(city)
    cy.get('[placeholder="Data de nascimento"]').type(date)
    cy.get('#search_input').click();
    cy.get('#multiselectContainerReact > div:nth-child(2) > ul > li:nth-child(1)').click();
    cy.get('#search_input').click();
    cy.get('[placeholder="Nome"]').click();
    cy.wait(2000);
    


})


Cypress.Commands.add("cadastro_sememail", (name, number, city, date)=>{
    cy.get('[placeholder="Nome"]').type(name)
    cy.get('[placeholder="Telefone"]').type(number)
    cy.get('[placeholder="Cidade de nascimento"]').type(city)
    cy.get('[placeholder="Data de nascimento"]').type(date)
    cy.get('#search_input').click();
    cy.get('#multiselectContainerReact > div:nth-child(2) > ul > li:nth-child(1)').click();
    cy.get('#search_input').click();
    cy.get('[placeholder="Nome"]').click();
    cy.wait(2000);

})

Cypress.Commands.add("cadastro_semtelefone", (name, email, city, date)=>{
    cy.get('[placeholder="Nome"]').type(name)
    cy.get('[placeholder="Email"]').type(email)
    cy.get('[placeholder="Cidade de nascimento"]').type(city)
    cy.get('[placeholder="Data de nascimento"]').type(date)
    cy.get('#search_input').click();
    cy.get('.optionListContainer .option').contains('Empresa 2').click()
    cy.get('#search_input').click();
    cy.get('[placeholder="Nome"]').click();
    cy.wait(2000);

})

Cypress.Commands.add("cadastro_semcidade", (name, email, number, date)=>{
    cy.get('[placeholder="Nome"]').type(name)
    cy.get('[placeholder="Email"]').type(email)
    cy.get('[placeholder="Telefone"]').type(number)
    cy.get('[placeholder="Data de nascimento"]').type(date)
    cy.get('#search_input').click();
    cy.get('.optionListContainer .option').contains('Empresa 3').click()
    cy.get('#search_input').click();
    cy.get('[placeholder="Nome"]').click();
    cy.wait(2000);

})


Cypress.Commands.add("cadastro_semnascimento", (name, email, number, city)=>{
    cy.get('[placeholder="Nome"]').type(name)
    cy.get('[placeholder="Email"]').type(email)
    cy.get('[placeholder="Telefone"]').type(number)
    cy.get('[placeholder="Cidade de nascimento"]').type(city)
    cy.get('#search_input').click();
    cy.get('.optionListContainer .option').contains('Empresa 3').click()
    cy.get('#search_input').click();
    cy.get('[placeholder="Nome"]').click();
    cy.wait(2000);

})

Cypress.Commands.add("cadastro_semempresa", (name, email, number, city, date)=>{
    cy.get('[placeholder="Nome"]').type(name)
    cy.get('[placeholder="Email"]').type(email)
    cy.get('[placeholder="Telefone"]').type(number)
    cy.get('[placeholder="Cidade de nascimento"]').type(city)
    cy.get('[placeholder="Data de nascimento"]').type(date)

    
})

Cypress.Commands.add('cadastro_todasempresas' , (name, email, number, city, date )=> {

    cy.get('[placeholder="Nome"]').type(name)
    cy.get('[placeholder="Email"]').type(email)
    cy.get('[placeholder="Telefone"]').type(number)
    cy.get('[placeholder="Cidade de nascimento"]').type(city)
    cy.get('[placeholder="Data de nascimento"]').type(date)
    cy.get('#search_input').click();
    cy.get('.optionListContainer .option').contains('Empresa 1').click(); 
    cy.get('.optionListContainer .option').contains('Empresa 2').click();
    cy.get('.optionListContainer .option').contains('Empresa 3').click();
    cy.get('[placeholder="Nome"]').click();
    cy.wait(1000);
    
    

})

Cypress.Commands.add('cadastro_sem1' , (name, email, number, city, date )=> {

    cy.get('[placeholder="Nome"]').type(name)
    cy.get('[placeholder="Email"]').type(email)
    cy.get('[placeholder="Telefone"]').type(number)
    cy.get('[placeholder="Cidade de nascimento"]').type(city)
    cy.get('[placeholder="Data de nascimento"]').type(date)
    cy.get('#search_input').click();
    cy.get('.optionListContainer .option').contains('Empresa 1').click(); 
    cy.get('.optionListContainer .option').contains('Empresa 2').click();
    cy.get('.optionListContainer .option').contains('Empresa 3').click();
    cy.get('[placeholder="Nome"]').click();

    

})


Cypress.Commands.add('cadastro_fechar' , (name, email, number, city, date )=> {

    cy.get('[placeholder="Nome"]').type(name)
    cy.get('[placeholder="Email"]').type(email)
    cy.get('[placeholder="Telefone"]').type(number)
    cy.get('[placeholder="Cidade de nascimento"]').type(city)
    cy.get('[placeholder="Data de nascimento"]').type(date)
    cy.get('#search_input').click();
    cy.get('.optionListContainer .option').contains('Empresa 3').click()
    cy.get('#search_input').click();
    cy.get('[placeholder="Nome"]').click();
   
})

Cypress.Commands.add('cadastro_editar' , ()=> {
    cy.get(':nth-child(1) > :nth-child(7) > :nth-child(1)').click();
   
})


Cypress.Commands.add('cadastro_excluir' , ()=> {
    cy.wait(5000);
    cy.get(':nth-child(1) > :nth-child(7) > :nth-child(2)').click(); 
    cy.wait(5000);
    cy.get('i').contains('Usuário deletado com sucesso!');
    cy.get('.swal2-confirm').click(); 

})

