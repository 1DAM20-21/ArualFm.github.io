'use strict;'
loadLDocA("libros.xml","xml");

function gestionarFicheroXML(libros) {
    alert(libros.getElementsByTagName('libros')[0].firstChild.nodeValue)
	alert(libros.getElementsByTagName('libros')[0].childNodes[1].firstChild.nodeValue)

	document.getElementById('libros').innerHTML += "<b>" + xmlDoc.querySelector('libros:nth-child(2)').textContent + "</b>"
}
document.querySelector("div:nth-child(1)").addEventListener("click",()=>{

    let xmlDoc = loadLDocA("libros.xml","xml");
})
