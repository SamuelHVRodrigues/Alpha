
function fillHeader() {
    document.querySelector("header h1").innerHTML = "Corvo";
}

function fillMain() {
    document.getElementById("gallery").querySelector("h2").innerHTML = "Galeria";
    document.getElementById("gallery").querySelector("p").innerHTML = "Os corvos são grandes aves negras estreitamente relacionadas às gralhas. Embora pertençam ao grupo científico dos pássaros canoros, sua voz não é melodiosa. Entre os vários ruídos que emitem estão crocitos, grasnidos e gorgulhos. Algumas culturas consideram essas aves pretas um símbolo da morte e um sinal de maus eventos futuros. Certas pessoas, porém, admiram os corvos por sua grande inteligência. Os corvos que vivem em cidades jogam as sementes difíceis de abrir na rua, para que os carros as quebrem e eles então possam comê-las.";

    document.getElementById("img-1").setAttribute("src", "assets/corvo-1.jpg");
    document.getElementById("img-2").setAttribute("src", "assets/corvo-2.jpg");
    document.getElementById("img-3").setAttribute("src", "assets/corvo-3.jpg");
    
    
    document.getElementById("links").querySelector("h2").innerHTML = "Saiba mais sobre corvos";

    document.getElementById("li-1").setAttribute("href", "https://www.megacurioso.com.br/animais/39743-10-fatos-sobre-os-corvos-que-vao-deixar-voce-fascinado.htm");
    document.getElementById("li-1").innerHTML = "10 Fatos sobre os corvos que vão deixar você fascinado";

    document.getElementById("li-2").setAttribute("href", "https://www.bbc.com/portuguese/vert-fut-52910678");
    document.getElementById("li-2").innerHTML = "A surpreendente inteligência dos corvos"

    document.getElementById("li-3").setAttribute("href", "https://jc.ne10.uol.com.br/blogs/o-viral/2021/10/13615166-corvos-que-falam-como-seres-humanos-inteligencia-da-ave-surpreende-e-vira-alvo-de-experiencias.html");
    document.getElementById("li-3").innerHTML = "Corvos que falam como seres humanos: inteligência da ave surpreende e vira alvo de experiências";
}

function fillFooter() {
    document.querySelector("footer a").innerHTML = "Desenvolvido por SamuelHVRodrigues";
    document.querySelector("footer a").setAttribute("href", "https://github.com/SamuelHVRodrigues")
}


fillHeader();
fillMain();
fillFooter();