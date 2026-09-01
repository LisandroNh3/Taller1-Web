
//Dando la bienvenida al usuario
console.log ("Calculadora de descuentos");
console.log ("Bienvenido, vamos a realizar descuentos a productos");

//Solicitamos datos del producto
let nombreProducto = prompt("Digite el nombre del producto");
console.log(nombreProducto);

let precioProducto = prompt("Digite el precio del producto");
console.log(precioProducto);

//El porcentaje del producto se pone en decimales ejemplo: 0.2 = 20%
let porcentajeDeDescuento = prompt("Digite el procentaje de descuento a aplicar al producto");
console.log(porcentajeDeDescuento);

//realizamos la operacion para obtener el total a pagar del producto
console.log("El total a pagar es:")
console.log(precioProducto - (precioProducto * porcentajeDeDescuento));
