'use strict;'
loadDocA("libros.xml","xml");

function gestionarFicheroXML(fichero)
{
    alert(xmlDoc.getElementsByTagName('libro')[0].firstChild.nodeValue)
	alert(xmlDoc.getElementsByTagName('libro')[0].childNodes[1].firstChild.nodeValue)

	document.getElementById('ficheroXML').innerHTML += "<b>" + xmlDoc.querySelector('libro:nth-child(2)').textContent + "</b>"
}
