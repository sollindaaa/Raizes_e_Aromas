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

function toggleStar(element) {
    element.classList.toggle("filled");

    if (element.classList.contains("filled")) {
        element.textContent = "★"; // cheia
    } else {
        element.textContent = "☆"; // vazia
    }
}


// --------- quiz --------

const answers = {
    natureza: 0,
    cidade: 0,
    praia: 0,
    doce: 0,
    amadeirado: 0,
    citricas: 0,
    calma: 0,
    energia: 0,
    elegancia: 0
};

function answer(option, question) {
    answers[option]++;

    document.getElementById("q" + question).style.display = "none";

    if (question < 3) {
        document.getElementById("q" + (question + 1)).style.display = "block";
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("result").style.display = "block";

    let resultText = "";

    if (answers.natureza > 0 && answers.amadeirado > 0)
        resultText = "🌿 Belle Éternelle — notas naturais e calmantes.";
    else if (answers.citricas > 0 && answers.energia > 0)
        resultText = "🍋 Citrus Vivo — perfeito para quem gosta de frescor e energia.";
    else if (answers.doce > 0 && answers.elegancia > 0)
        resultText = "✨ Jardim Serena — elegante e marcante.";
    else
        resultText = "💐 Um perfume equilibrado que combina com você!";

    document.getElementById("resultText").textContent = resultText;
}
