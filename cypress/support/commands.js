// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//


/** FUNCIONALIDADE DO LOGIN  */

Cypress.Commands.add('login', ({user = null, password = null}) => { 

    cy.visit('https://pt.wikipedia.org/'); // SIte da Wikipedia
    cy.get('#pt-login-2 > a > span').click(); // Botão de Login

    /** Deve preencher o usuário caso seja passado alguma variável */

    if(user != null){cy.get('#wpName1').type(user);}  // Usuário 
    if(password != null){cy.get('#wpPassword1').type(password);} // Senha

    cy.get('#wpLoginAttempt').click() // Botão de Login

 })


/** FUNCIONALIDADE DE EDIÇÃO */

// Função para evitar que a aplicação quebre em um teste ocasional que acontece para clicar em um botão
function tryToClick(selector) {

    cy.get('body').then(($body) => {
      if ($body.find(selector).length) {
        cy.get(selector).click();
      } else {
        cy.log(`Elemento ${selector} não encontrado.`);
      }
    });
  }

// Comando de Editar
Cypress.Commands.add('edit', (message) =>{

    cy.visit('https://pt.wikipedia.org/wiki/Ajuda:P%C3%A1gina_de_testes/1'); // Link para página de edição
    cy.get('#ca-ve-edit > a > span').click(); // Botão de editar


    /**Essa função serve para evitar um erro de uma caixa de diálogo que aparece imediatamente após
     * Acessar a página de editar, porém não é constante que ela está presente
     */
    tryToClick('.oo-ui-messageDialog-actions > .oo-ui-flaggedElement-progressive > .oo-ui-buttonElement-button')

    // Fecha o elemento de ajuda
    cy.get('.oo-ui-popupWidget-head > .oo-ui-widget > .oo-ui-buttonElement-button > .oo-ui-iconElement-icon').click();

    cy.get('.ve-ce-documentNode').type(message, {force:true}); // Área de digitação
    cy.get('.oo-ui-flaggedElement-primary > .oo-ui-tool-link').click(); // Botão de postar atualização
    cy.get('.oo-ui-processDialog-actions-primary > .oo-ui-widget > .oo-ui-buttonElement-button').click() // Confirmação


})


/** FUNCIONALIDADE DE PESQUISA */

Cypress.Commands.add('search', (message, enter=true) => { // Enter = true por default para pesquisar diretamente

    cy.visit('https://pt.wikipedia.org/') // Site da Wikipedia
    cy.get('#p-search > .cdx-button--fake-button > .vector-icon').click() // Botão de pesquisa

    const busca = enter ? `${message}{enter}` : message // operador ternário para confirmar o termo de busca
    cy.get('.cdx-text-input__input').type(busca) // pesquisa da mensagem

    
})

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })