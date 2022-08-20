alert ("Bienvenido")
let palabra = prompt ("Ingresa la palabra que deseas repetir");
let cantidad = parseInt(prompt ("Ingresa la cantidad de veces que deseas repetir la palabra"));

for (i = 0; i < cantidad; i++) {
    document.write (palabra + "<br>");
} 

document.write ("<h2>Tu palabra " + palabra +" se repitió " + cantidad + " veces");