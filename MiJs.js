'use strict'

function gestionarFicheroXML(xmlDoc){
	
	alert(xmlDoc.getElementsByTagName('libreria')[0].firstChild.nodeValue)
	alert(xmlDoc.getElementsByTagName('busquedaLibros')[0].childNodes[1].firstChild.nodeValue)

	document.getElementById('ficheroXML').innerHTML += "<b>" + xmlDoc.querySelector('alumno:nth-child(2)').textContent + "</b>"
	
}

document.querySelector("div:nth-child(1)").addEventListener("click",()=>{

    let xmlDoc = loadLDocA("libros.xml","xml");
})
    
