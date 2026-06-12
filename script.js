const SENHA_CORRETA = "112025";
const TEMPO_TROCA = 3000;

// Lista atualizada com os nomes exatos das suas fotos do print
const FOTOS = [
    "IMG_0324.jpeg", 
    "IMG_0391.jpeg", 
    "IMG_0396.jpeg", 
    "IMG_0604.jpeg", 
    "IMG_0608.jpeg", 
    "IMG_0655.jpeg", 
    "IMG_0697.jpeg", 
    "IMG_1191.jpeg", 
    "IMG_1760.jpeg"
];

let indiceFoto = 0;

function verificarSenha() {
    const senhaDigitada = document.getElementById("campo-senha").value;
    if (senhaDigitada === SENHA_CORRETA) {
        document.getElementById("tela-senha").classList.add("escondido");
        document.getElementById("tela-principal").classList.remove("escondido");
    } else { alert("Senha incorreta!"); }
}

function iniciarLoop() {
    document.getElementById("tela-principal").classList.add("escondido");
    document.getElementById("tela-fotos").classList.remove("escondido");
    document.getElementById("musica").play().catch(e => console.log(e));
    mudarFoto();
    setInterval(mudarFoto, TEMPO_TROCA);
}

function mudarFoto() {
    const imgSlide = document.getElementById("slide");
    imgSlide.src = FOTOS[indiceFoto];
    indiceFoto = (indiceFoto + 1) % FOTOS.length;
}
