// Caso de teste de login correto

const usuario = Cypress.env('login'); // Login
const senha = Cypress.env('password'); // Senha

describe('Página de Login', () => {

  it('Deve preencher os dados de Login corretamente e ser redirecionado para a página principal', () => {

    cy.login({user:usuario, password:senha});
    cy.url().should('include', 'P%C3%A1gina_principal')

  })
})

describe('Página de Login', () => {
    
  it('Deve preencher os dados de Login incorretamente e o sistema vai informar que os dados estão incorretos', () => {
    
    cy.login({user:usuario, password:"1"});
    cy.get('.cdx-message__content').should('be.visible');
  
    })
})

describe('Página de Login', () => {
    
  it('Deve tentar efetuar o login sem preencher o usuário e informar que falta o dado correto.', () => {
    
    cy.login({pasword:senha});
    cy.get("#wpName1").then(($input) => {
      expect($input[0].validationMessage).to.eq('Please fill out this field.');
  });
  
    })
})

describe('Página de Login', () => {
    
  it('Deve tentar efetuar o login sem preencher a senha e informar que falta o dado correto.', () => {
    
    cy.login({user:usuario});
    cy.get("#wpPassword1").then(($input) => {
      expect($input[0].validationMessage).to.eq('Please fill out this field.');
  });
  
    })
})