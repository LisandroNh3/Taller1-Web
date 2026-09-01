console.log ("Calculadora de descuentos");
console.log ("Bienvenido, vamos a realizar descuentos a productos");

let nombreProducto = prompt("Digite el nombre del producto");
console.log(nombreProducto);

let precioProducto = prompt("Digite el precio del producto");
console.log(precioProducto);

let porcentajeDeDescuento = prompt("Digite el procentaje de descuento a aplicar al producto");
console.log(porcentajeDeDescuento);

console.log(precioProducto - (precioProducto * porcentajeDeDescuento));
