let entrada = prompt("Adivina un número entre 0 y 50");
while (entrada != 25) {
    console.log(entrada);
    alert("número  " + entrada + " es incorrecto");
    entrada = prompt ("Intenta con otro número entre 0 y 100");
}
alert("felicidades el número buscado es 25");