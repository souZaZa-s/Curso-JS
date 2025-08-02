alert("Tudo Certo")


document.getElementById("P1").innerText = "Meu Nome é felipe"
document.getElementById("P2").innerText = "Tenho 16 anos"
document.getElementById("P3").innerText = "Moro em SP"
document.getElementById("P4").innerText = "Estudo no senac"
document.getElementById("fundo").style.backgroundColor = "blueviolet"

let paragrafo = document.getElementsByTagName("p");
paragrafo[4].innerText = "Texto alterado!"

const buttoncolor = document.querySelector('button')

const cores = ["pink", "blue", "green", "orange", "red",]
let indiceCor = 0;

function mudarcorporBotao(){
    document.getElementById
    ("fundo").style.backgroundColor = cores[indiceCor];
    indiceCor = (indiceCor + 1) % cores.length;
}

buttoncolor.addEventListener("click", mudarcorporBotao)

const enviarInput = document.getElementById("botao");
buttoncolor.addEventListener("click", function(){
    const nomeDigitado = document.getElementById("nome").value;
    document.getElementById("mensagem").innerText = "olá" + nomeDigitado + "!";
});

