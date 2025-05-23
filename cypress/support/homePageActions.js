class HomePageActions {
    static removerProducto() {
        cy.log('Aca hacemos las acciones para remover un producto')
    }
    static clickearCarrusel() {
        cy.log('Aca hacemos las acciones para agregar un producto al carrito')

    }
    static buscarProducto(producto) {
        cy.get('#search > input').type(producto)
        cy.get('#search > button').click()
    }
    static agregarAlCarrito() {
        cy.get('#button-cart').click()
    }
    static verificarMensajeExito(mensaje) {
        cy.get('#alert').should('be.visible')
        cy.get('#alert').should('contain', mensaje)
    }
    static revisarMenu() {
        cy.log('Aca hacemos las acciones para agregar un producto al carrito')

    }
    static verificarTituloHome() {
        cy.visit('https://winstoncastillo.com/robot-selenium/')
        cy.title().should('eq', 'Your Store')
    }
    static seleccionarProducto() {
        cy.get(':nth-child(1) > .product-thumb > .image > a > .img-fluid').should('be.visible')
        cy.get(':nth-child(1) > .product-thumb > .image > a > .img-fluid').click()
    }
    static scrollearHaciaAbajo() {
        cy.log('Aca scrolleamos hacia abajo')
        
    }
}

export default HomePageActions;