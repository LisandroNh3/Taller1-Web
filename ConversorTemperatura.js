//Damos la bienvenida al programa
console.log("Conversor de temperatura");

console.log("Bienvenido, vamos a convertir grados Celsius a Fahrenheit");

//Preguntamos la temperatura en celcius a convertir
let gradosCelsius = Number(prompt("Digite los grados Celsius"));

console.log(gradosCelsius);

//operacion que convierte de celsius a farenheit
let gradosFahrenheit = (gradosCelsius * 9 / 5) + 32;

console.log("Temperatura en Fahrenheit:", gradosFahrenheit);

