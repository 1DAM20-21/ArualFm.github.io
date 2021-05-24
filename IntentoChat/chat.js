'use strict'

let fichero = "fichero.txt";
setInterval(CargaFichero,5000)

function CargaFichero() {
    loadLDocA(fichero,"txt")
}

function gestionarFicheroTXT(documento) {
        alert(documento)
        let lineas = documento.split("\n")
        alert(lineas)
        let capaVacia = document.querySelector("#ficheroTXT")
        capaVacia.innerHTML = ""

        for (let i = 0; i < lineas.length; i++) {
            if(i % 2 == 0)
            {
                capaVacia.innerHTML += "<p class='izquierda'>" + lineas[i] + "</p>"
            }else
            {
                capaVacia.innerHTML += "<p class='derecha'>" + lineas[i] + "</p>"
            }
            
        }
}