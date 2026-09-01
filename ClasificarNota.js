// Captura el número que escribas después del nombre del archivo en la consola
var Nota = Number(process.argv[2]);

switch(true) {
    case isNaN(Nota):
        console.log('Error: Por favor, ingresa un número válido.');
        break;  

    case Nota >= 90 && Nota <= 100:  
        console.log('Resultado: Excelente');
        break;

    case Nota >= 80 && Nota < 90:  
        console.log('Resultado: Muy Bueno');
        break;

    case Nota >= 70 && Nota < 80:  
        console.log('Resultado: Bueno');
        break;

    case Nota >= 60 && Nota < 70:  
        console.log('Resultado: Regular');
        break;

    case Nota >= 0 && Nota < 60:  
        console.log('Resultado: Reprobado');
        break;

    default:
        console.log('Error: La nota debe estar entre 0 y 100.');
        break;
}