const SENHA_CORRETA = "112025";
const TEMPO_TROCA = 3000;
const FOTOS = [
    "foto1.jpg", "foto2.jpg", "foto3.jpg", "foto4.jpg", "foto5.jpg",
    "foto6.jpg", "foto7.jpg", "foto8.jpg", "foto9.jpg", "foto10.jpg", "foto11.jpg"
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
