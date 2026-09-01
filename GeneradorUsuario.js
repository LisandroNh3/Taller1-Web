function generarUsuario(nombreCompleto) {
    // Primero hay que convertir todo a minusculas
    // Luego eliminar espacios reemplazando todos por un string vacio
    let usuarioLimpio = nombreCompleto.toLowerCase().replaceAll(" ", "");
    
    // Agregar "_dev" al final
    return usuarioLimpio + "_dev";
}

// Ejemplo 
const resultado = generarUsuario("Christopher Santos");
console.log(resultado);