import HomePageActions from '../support/homePageActions';

describe('Casos de Prueba del Home Page', () => {
    it ('Busca y anade un producto al carrito de compras', () => {
        HomePageActions.verificarTituloHome()
        HomePageActions.buscarProducto('Macbook Pro') // Pasando un valor específico
        HomePageActions.seleccionarProducto()
        HomePageActions.agregarAlCarrito()
        HomePageActions.verificarMensajeExito('Success: You have added MacBook to your shopping cart!')
    });
    it ('Busca y extrae un producto al carrito de compras', () => {
        HomePageActions.verificarTituloHome()
        HomePageActions.buscarProducto('iPhone') // Usando un producto diferente
        HomePageActions.seleccionarProducto()
        HomePageActions.agregarAlCarrito()
        HomePageActions.verificarMensajeExito('Success: You have added iPhone to your shopping cart!')
        HomePageActions.visualizarPreviaCarrito()
        HomePageActions.removerProducto()
    });
    
/*    it ('Busca un producto usando el valor por defecto', () => {
        HomePageActions.verificarTituloHome()
        HomePageActions.buscarProducto() // Usará 'Macbook Pro' por defecto
        HomePageActions.seleccionarProducto()
    }); */

});