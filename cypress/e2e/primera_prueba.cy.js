describe('Set de pruebas de busqueda', () => {
  it('busca una palabra en el buscador y obtiene resultados', () => {
    cy.visit('https://duckduckgo.com/') // Visita la página de DuckDuckGo
    cy.log("QUIERO MOSTRAR ESTE MENSAJE EN LA CONSOLA") // Muestra un mensaje en la consola
    cy.get('input[name="q"]').type('Cypress testing{enter}') // Escribe en el buscador y presiona Enter
    cy.get('.results--main').should('be.visible') // Verifica que los resultados sean visibles
    //cy.wait(10000) // Espera 10 segundos y no es la forma mas adecuada de hacer esperas ESPERA EXPLICITA
    cy.get(':nth-child(1) > [data-testid="result"]', {timeout: 10000}).should('be.visible') // Verifica que el elemento sea visible
    cy.get('[data-testid="result"]').first().click() // Hace clic en el primer resultado
  }) 
})

// Diferentes formas de usar selectores
/* cy.get('.carousel-inner') // Selecciona el elemento con la clase 'carousel-inner'
cy.get('#carousel-inner') // Selecciona el elemento con el id 'carousel-inner'
cy.get('#features > div.desktop-homepage_belowTheFold__Id_v_.container_root__Ycg94.container_responsive__hpeZ9')
cy.get('data-testid="belowTheFold"') // Selecciona el elemento con el atributo 'data-testid' igual a 'belowTheFold'
cy.get('button') // Selecciona todos los botones
cy.get('#content > div.row.mb-3 > div:nth-child(2) > h1') // Selecciona todos los encabezados h1
cy.get('#searchbox_input')
*/

