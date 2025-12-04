// ----Menu Haburguer----
let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")
let sombra = document.getElementById("sombra")

function abreFechaMenu() {
    //Menu fechado
    if (window.getComputedStyle(menu).right == "-210px") {
        //Menu aberto
        menu.style.right = "0"

        iconeX.style.fill = "#fff"

        //Icone X amostra
        iconeX.style.display = "inline"

        //Esconde icone barras
        iconeBarras.style.display = "none"

        sombra.style.right = "0"
    }

    else {
        //Fecha menu
        menu.style.right = "-210px"

        //Esconde icone X
        iconeX.style.display = "none"

        //Mostrar o icone barras
        iconeBarras.style.display = "inline"

        sombra.style.right = "-101vw"


    }


}

onresize = () => {
    if (window.getSelection(menu).right == "-210px") {
        //Mostra icone X
        iconeX.style.display = "none"
    } else {
        //Esconde icone barras
        iconeBarras.style.display = "inline"
    }
}