'use strict'

function gestionarFicheroXML(xmlDoc){
	let capaVacia = document.querySelector("#ficheroXML")
	let libros = xmlDoc.querySelectorAll("libro")
	for (let i = 0; i < libros.length; i++) {
		 capaVacia.innerHTML = capaVacia.innerHTML + "<p>" + libros[i].textContent + "</p>"
		
	}
}

let capa = document.querySelector("div:nth-child(1)")
capa.addEventListener("click",cargarFichero);
function cargarFichero(){
	loadLDocA("libros.xml","xml");
}


