'use strict'

let fichero = "libros.xml";
loadLDocA(fichero,"xml")
function gestionarFicheroXML(xmlDoc){ //document){ //No puedes llamar al parámetro document, ya que document contiene el html. Llámale xmlDoc
	alert(xmlDoc)
	
	

	document.getElementById('ficheroXML').innerHTML += "<b>" + xmlDoc.querySelector('libro:nth-child(2)').textContent + "</b>"
	
}

/*
document.querySelector("div:nth-child(1)").addEventListener("click",()=>{

    let xmlDoc = loadLDocA("leerFicheroXML.xml","xml");
})*/
    
