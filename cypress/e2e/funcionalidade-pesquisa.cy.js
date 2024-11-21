/**
 * Casos de teste de pesquisa
 */

describe ('Pesquisar na Wikipedia', () => {

    it(
        'Deve encontrar uma pesquisa específica na Wikipedia quando apertar Enter', 
        () => {
            cy.search("Ayrton Senna")
        })

})

describe ('Pesquisar na Wikipedia', () => {

    it(
        'Deve sugerir resultados principais ao digitar uma palavra', 
        () => {
            cy.search('Mágico', false)
            cy.get('#cdx-typeahead-search-menu-0')
        })

})

describe ('Pesquisar na Wikipedia', () => {

    it(
        'Deve apresentar resultados parecidos caso não encontre uma página com o nome específico', 
        () => {
            cy.search('Fernando de Noroga')
            cy.contains('A mostrar resultados para')
        })

})

describe ('Pesquisar na Wikipedia', () => {

    it(
        'Deve apresentar que a pesquisa não apresentou resultados com o termo escolhido', 
        () => {
            cy.search('Sasdhsdfudshfi')
            cy.contains('A pesquisa não produziu resultados.')
        })

})