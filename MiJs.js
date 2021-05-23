'use strict'

function gestionarFicheroXML(xmlDoc){
	let capaVacia = document.querySelector("#ficheroXML")
	let capaVacia2 = document.querySelector("#ficheroXML")
	let libros = xmlDoc.querySelectorAll("libreria")
	for (let i = 0; i < libros.length; i++) {
		capaVacia.innerHTML = capaVacia.innerHTML + "<p>" + alumnos[i].textContent + "</p>"

	}
}

let capa = document.querySelector("div:nth-child(1)")
capa.addEventListener("click",cargarFichero);
function cargarFichero(){
	loadLDocA("libros.xml","xml");
}


