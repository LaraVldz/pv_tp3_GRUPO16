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
    console.log("2. ");
    const filtrados = Productos.filter(producto => producto.precio > 20);
    filtrados.forEach(producto => {
      console.log(`Producto: ${producto.descripcion} - Precio: $${producto.precio}`);
    });
}
function agregarIVA() {
  console.log("3. ");
  const conIVA = Productos.map(p => ({
    descripcion: p.descripcion,
    precioConIVA: (p.precio * 1.21).toFixed(2)
  }));
  conIVA.forEach(p => {
    console.log(`Producto: ${p.descripcion} - Precio con IVA: $${p.precioConIVA}`);
  });
}

function ordenarProductos() {
    console.log("4. ");
    Productos.sort((a, b) => a.precio - b.precio);
    console.log("Productos ordenados:");
    Productos.forEach(p => {
      console.log(`Producto: ${p.descripcion} - Precio: $${p.precio}`);
    });
}
function agregarProducto() {
  console.log("5. ");
  Productos.push({ descripcion: "Parlante Bluetooth", precio: 59000.90 });
  console.log("Producto agregado.");
  mostrarProductos();
}

function eliminarMasBarato() {
  console.log("6. ");
  if (Productos.length === 0) {
    console.log("No hay productos para eliminar.");
    return;
  }

  let indiceMin = 0;
  Productos.forEach((p, i) => {
    if (p.precio < Productos[indiceMin].precio) indiceMin = i;
  });

  const eliminado = Productos.splice(indiceMin, 1)[0];
  console.log(`Producto eliminado: ${eliminado.descripcion} - Precio: $${eliminado.precio}`);
  mostrarProductos();
}