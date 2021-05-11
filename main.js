const numeros = [];
const letras = [];
const letrasRef = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

function incrementarNumeros(numero) {
	if (numeros.length < 9 && numeros[numeros.length - 1] == numero - 1) {
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
	document.getElementById("salida_numeros").innerText = numeros;
}

function incrementarLetras(letra) {
	if (letra == "A" && letras.length == 0) {
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
	document.getElementById("salida_letras").innerText = letras;
}

document.querySelectorAll(".contenedor .controles .btn").forEach((btn) => {
	btn.addEventListener("click", () => {
		if (numeros.length == 10 && letras.length <= 10) {
			incrementarLetras(btn.innerText.slice(0, 1));
		} else if (numeros.length < 10) {
			incrementarNumeros(btn.innerText.slice(2, 3));
		}
	});
});

document.getElementById("btn_borrar").addEventListener("click", () => {
	document.getElementById("salida_numeros").innerText = "";
	document.getElementById("salida_letras").innerText = "";

	numeros.length = 0;
	letras.length = 0;
});
