/*

Primero creamos las variables(constantes),
las dos primeras: numeros y letras, son arreglos los cuales vamos a ir icrementando cada vez que se agregar un caracter.

La ultima, letrasRef, son de referencia para calcular y validar que
a la hora de ingresar las letras, coincidan con el arreglo: letras.

*/
const numeros = [];
const letras = [];
const letrasRef = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

// La funcion incrementarNumeros() valida que numero se ingresa,
// Si nada funciona se asume que es un error y muestra la alerta
function incrementarNumeros(numero) {
	if (numeros.length < 9 && numeros[numeros.length - 1] == numero - 1) {
		// La funcion array.push(nuevoElemento) se usa para agregar un nuevo elemento de arreglo
		// En este caso agregamos el numero actual al arreglo "numeros".
		numeros.push(numero);
	} else if (numeros.length == 0 && numero == 1) {
		numeros.push(numero);
	} else if (numeros.length == 9 && numero == 0) {
		numeros.push(numero);
	} else {
		Swal.fire({
			icon: "error",
			title: "Oops...",
			text: "El número es incorrecto"
		});
	}
	// Por ultimo cada vez que se agrega un número,
	// Se actualiza el panel de salida, y muestra el arreglo correspondiente
	// En este caso el arreglo "numeros".
	document.getElementById("salida_numeros").innerText = numeros;
}

// La funcion incrementarLetras() valida que letra se ingresa,
// Si nada funciona se asume que es un error y muestra la alerta
function incrementarLetras(letra) {
	if (letra == "A" && letras.length == 0) {
		// La funcion array.push(nuevoElemento) se usa para agregar un nuevo elemento de arreglo
		// En este caso agregamos el numero actual al arreglo "letras".
		letras.push(letra);
	} else if (letrasRef.indexOf(letra) == letras.length) {
		letras.push(letra);
	} else {
		Swal.fire({
			icon: "error",
			title: "Oops...",
			text: "La letra no es la correcta"
		});
	}
	// Por ultimo cada vez que se agrega una letra,
	// Se actualiza el panel de salida, y muestra el arreglo correspondiente
	// En este caso el arreglo "letras".
	document.getElementById("salida_letras").innerText = letras;
}

// Aqui lo que hago es que por cada boton con la class="btn" va a agregar un eventListener de tipo click,
// dependiendo de que arreglo este vacio y cual no enviar el valor correspondiente.
document.querySelectorAll(".contenedor .controles .btn").forEach((btn) => {
	btn.addEventListener("click", () => {
		if (numeros.length == 10 && letras.length <= 10) {
			// La función string.slice(incio, fin) recorta un string
			incrementarLetras(btn.innerText.slice(0, 1));
		} else if (numeros.length < 10) {
			incrementarNumeros(btn.innerText.slice(2, 3));
		}
	});
});

// Al final le agregamos la funcion al boton de borrar,
// Primero vacia la vista visual y luego vacia los arreglos para empezar otra vez.
document.getElementById("btn_borrar").addEventListener("click", () => {
	document.getElementById("salida_numeros").innerText = "";
	document.getElementById("salida_letras").innerText = "";

	numeros.length = 0;
	letras.length = 0;
});
