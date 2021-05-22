'use strict'

let document = "libros.xml";
loadLDocA(document,"xml");
function gestionarFicheroXML(document){
	
	alert(xmlDoc.getElementsByTagName('libro')[0].firstChild.nodeValue)
	alert(xmlDoc.getElementsByTagName('libreria')[0].childNodes[1].firstChild.nodeValue)

	document.getElementById('ficheroXML').innerHTML += "<b>" + xmlDoc.querySelector('libro:nth-child(2)').textContent + "</b>"
	
}

document.querySelector("div:nth-child(1)").addEventListener("click",()=>{

    let xmlDoc = loadLDocA("leerFicheroXML.xml","xml");
})
    
})
