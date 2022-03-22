//DEFINICION DE LOS DATOS A TRAVES DE OBJETOS
const productos = [
    { id: "0", tipo: "jeanHombre", modelo: "Jean Kansas", precio: 2200 , img: "multimedia/kansas-2b.jpg"},
    {  id: "1", tipo: "jeanHombre", modelo: "Jean Texas", precio: 2200 , img: "multimedia/texas-2.jpg"},
    {  id: "2", tipo: "jeanHombre", modelo: "Jean Washington", precio: 2200 , img: "multimedia/washington-2.jpg"},
    {  id: "3", tipo: "jeanMujer", modelo: "Jean Indiana", precio: 2000 , img: "multimedia/Jean-Indiana-1.jpg"},
    { id: "4", tipo: "jeanMujer", modelo: "Jean Luisina", precio: 2000 , img: "multimedia/Jean-Luisina-1.jpg"},
    { id: "5", tipo: "jeanMujer", modelo: "Jean Virginia", precio: 2000 , img: "multimedia/Jean-virginia-1.jpg"},
    { id: "6", tipo: "buzo", modelo: "Buzo Hope", precio: 2450 , img: "multimedia/buzo-hope.jpg"},
    { id: "7", tipo: "buzo", modelo: "Buzo Rustico First", precio: 2500 , img: "multimedia/buzo-rustico-1.jpg"},
    { id: "8", tipo: "buzo", modelo: "Buzo Rustico Second", precio: 2500 , img: "multimedia/buzo-rustico-2.jpg"},
];

// DOM Y EVENTOS
const containerTienda = document.getElementById('containerTienda');

const containerCarrito = document.getElementById('containerCarrito');

const carrito = [];

for (const producto of productos) {

  const divProducto = document.createElement('div');
  const imgProducto = document.createElement('img');
  const nombreProducto = document.createElement('h2');
  const precioProducto = document.createElement('h3');
  const botonComprar = document.createElement('button');

  divProducto.className = 'card';
  imgProducto.className = 'card-img-top';
  nombreProducto.className = 'nombre-producto';
  precioProducto.className = 'card-precio';
  botonComprar.className = 'btn btn-dark';

  imgProducto.src = producto.img;
  nombreProducto.append(producto.modelo);
  precioProducto.append(`$${producto.precio}`);
  botonComprar.append('Comprar');
  botonComprar.id = `${producto.id}`;

  botonComprar.onclick = () => {
    const productoComprado = productos.find(producto => producto.id === botonComprar.id);
    carrito.push({ nombre: productoComprado.modelo, precio: productoComprado.precio });
  }

  divProducto.append(imgProducto, nombreProducto, precioProducto, botonComprar);
  containerTienda.append(divProducto);

}

const mostrarCarrito = () => {

  for (const producto of carrito) {
    const nombreProducto = `<h4>Producto : ${producto.nombre}</h4>`
    const precioProducto = `<h4>Precio : ${producto.precio}</h4>`
    containerCarrito.innerHTML += nombreProducto
    containerCarrito.innerHTML += precioProducto
  }

  const total = carrito.reduce((accumulador, producto) => accumulador + producto.precio, 0);
  containerCarrito.append(`Total Compra :  ${total}`)

}

let botonCarrito = document.getElementById("btnCarrito")
botonCarrito.onclick = mostrarCarrito;
