class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    mostrarInformacion() {
        console.log(`Producto: ${this.nombre}`);
        console.log(`Precio: $${this.precio}`);
        console.log(`Stock: ${this.stock} unidades`);
    }
}

const producto1 = new Producto("Mouse", 25, 10);
const producto2 = new Producto("Teclado", 45, 15);

producto1.mostrarInformacion();
console.log("--------------------");
producto2.mostrarInformacion();