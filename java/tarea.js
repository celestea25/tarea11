/*Modificarlo para que informe un plan de
ejercicios por día. */

let diaSemana = prompt("¿Que ejercicio me toca hacer hoy?");
switch (diaSemana) {
case "lunes":
alert("Pasear a los perros ");
 break;
case "martes":
alert("ir a la facultad");
 break;
case "miercoles":
alert("partido de tenis ");
 break;
case "jueves":
alert("ir a la facultad ");
 break;
 case "viernes":
alert("partido de tenis ");
 break;
case "sabado":
alert("pasear a los perros ");
 break;
case "domingo":
alert("paseara los perros ");
 break;
 default:
alert("vuelve a escribir el dia");
}

/*Modificalo para que el bucle se ejecuta de 20 a 70.*/

for(i=20;i<=70;i++){
    document.write("El número es: " + i + "<br>");}

/*Realizar un bucle, donde el usuario pueda determinar la cantidad de veces que aparecerá
el saludo ‘Hola Mundo’*/

var num= prompt("Cuantas veces queres que se repita la frase?");
for(i=1;i<=num;i++){alert ("Hola mundo: "+i);}