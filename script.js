const SENHA_CORRETA = "112025";
const TEMPO_TROCA = 1000; // 1 segundo por foto

const FOTOS = [
    "IMG_0024.jpeg", "IMG_0056.jpeg", "IMG_0062.jpeg", "IMG_0079.jpeg",
    "IMG_0096.jpeg", "IMG_0101.jpeg", "IMG_0128.jpeg", "IMG_0248.jpeg",
    "IMG_0270.jpeg", "IMG_0324.jpeg", "IMG_0354.jpeg", "IMG_0391.jpeg",
    "IMG_0396.jpeg", "IMG_0558.jpeg", "IMG_0592.jpeg", "IMG_0604.jpeg",
    "IMG_0608.jpeg", "IMG_0637.jpeg", "IMG_0641.jpeg", "IMG_0655.jpeg",
    "IMG_0662.jpeg", "IMG_0671.jpeg", "IMG_0674.jpeg", "IMG_0697.jpeg",
    "IMG_0724.jpeg", "IMG_0879.jpeg", "IMG_1190.jpeg", "IMG_1191.jpeg",
    "IMG_1296.jpeg", "IMG_1760.jpeg", "IMG_2159.jpeg", "IMG_7888.jpeg",
    "IMG_8143.jpeg"
];

let indiceFoto = 0;
let intervaloLoop;

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
    // Guarda o loop em uma variável para podermos pará-lo depois
    intervaloLoop = setInterval(mudarFoto, TEMPO_TROCA);
}

function mudarFoto() {
    const imgSlide = document.getElementById("slide");
    
    // Se ainda tiver fotos na lista, continua passando
    if (indiceFoto < FOTOS.length) {
        imgSlide.src = FOTOS[indiceFoto];
        indiceFoto++;
    } else {
        // QUANDO AS FOTOS ACABAREM:
        clearInterval(intervaloLoop); // Para o cronômetro
        imgSlide.classList.add("escondido"); // Esconde o carrossel de fotos
        document.getElementById("mensagem-final").classList.remove("escondido"); // Mostra a mensagem do Renato
    }
}
