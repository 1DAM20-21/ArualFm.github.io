'use strict'

function gestionarFicheroXML(xmlDoc){
	let capaVacia = document.querySelector("#ficheroXML")
	let libros = xmlDoc.querySelectorAll("libreria")
	for (let i = 0; i < libros.length; i++) {
		 capaVacia.innerHTML = capaVacia.innerHTML + "<table>" + 
		 libros[i].textContent + "<tr>" + libros[i+1].textContent +
		 libros[--libros.length].textContent + "<td>" + "</td>" + 
		 "</tr>" + "</table>" 
	}
}

let capa = document.querySelector("div:nth-child(1)")
capa.addEventListener("click",cargarFichero);
function cargarFichero(){
	loadLDocA("libros.xml","xml");
}


