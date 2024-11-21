// Casos de teste de Edição

const usuario = Cypress.env('login'); // Usuário
const senha = Cypress.env('password'); // Senha

describe ('Editar página da Wikipedia', () => {

    beforeEach(() =>{

        cy.login({user:usuario, password:senha});

    })

    it(
        'Deve conseguir editar uma página específica da Wikipedia e ser redirecionado para a página editada.', 
        () => {

            const message = 'Aqui posso editar o texto livremente'
            cy.edit(message)
            cy.contains(message)

        })


})

/*
describe ('Editar página da Wikipedia com link indevido', () => {

    beforeEach(() =>{

        cy.login({user:usuario, password:senha});

    })

    it(
        'Deve bloquear a ação e informar que não foi possivel editar a página', 
        () => {

            cy.edit(' https://www.linkedin.com/in/daniel-vasconcelos-7bb1a5274/ ')
            cy.get('.oo-ui-flaggedElement-error').should('be-visible')

        })


})
        */