// Función para manejar la compra de productos
function comprarProducto(idProducto) {
  // Aquí se agrega la lógica para añadir el productos 
  alert('¡Gracias por tu compra del producto ' + idProducto + '!');
}

// Función para mostrar la ubicación en el mapa
function mostrarUbicacion() {
  // Aquí se agrega la lógica para mostrar la ubicación de la tienda
  alert('Nuestra tienda está ubicada en Calle Huamboya & Buenavista.');
}

// Eventos para los botones de compra
document.addEventListener('DOMContentLoaded', function() {
  var botonesCompra = document.querySelectorAll('button');
  botonesCompra.forEach(function(boton, index) {

    if(boton.getAttribute('onclick') === 'mostrarUbicacion()') return;
    boton.addEventListener('click', function() {
      comprarProducto(index + 1);
    });
  });
})
