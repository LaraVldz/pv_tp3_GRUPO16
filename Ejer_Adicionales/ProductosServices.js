const Productos = [
    { descripcion: 'Auriculares', precio: 130000},
    { descripcion: 'Teclado', precio: 14},
    { descripcion: 'Mouse', precio: 70000},
    { descripcion: 'Mouse Pad', precio: 50000},
    { descripcion: 'Monitor', precio: 150000}
];

function mostrarProductos() {
    console.log("1. ");
    Productos.forEach(producto => {
        console.log(`Producto: ${producto.descripcion} - Precio: $${producto.precio}`);
    });
};

function filtrarProductos() {
    const filtrados = Productos.filter(producto => producto.precio > 20);
    filtrados.forEach(producto => {
      console.log(`Producto: ${producto.descripcion} - Precio: $${producto.precio}`);
    });
}