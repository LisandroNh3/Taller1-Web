const numero1 = Number(process.argv[2]);
const numero2 = Number(process.argv[3]);
const operacion = process.argv[4];



let resultado;

switch (operacion) {
    case "suma":
        resultado = numero1 + numero2;
        break;
    case "resta":
        resultado = numero1 - numero2;
        break;
    case "multiplicacion":
        resultado = numero1 * numero2;
        break;
    case "division":
        if (numero2 === 0) {
            console.log("Error: No se puede dividir entre cero.");
            process.exit(1);
        }
        resultado = numero1 / numero2;
        break;
    default:
        console.log("Error: Operación no válida. Use: suma, resta, multiplicacion o division.");
        process.exit(1);
}

console.log(`Resultado de la ${operacion}: ${resultado}`);