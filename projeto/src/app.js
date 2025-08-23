function cadastro() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    localStorage.setItem("usuario", JSON.stringify({ nome, email, senha }));
    console.log("Usuário cadastrado:", nome, email, senha);
    alert("Usuario cadastrado")

   
}
let botaoCadastro = document.getElementById("bntenviar");
if (botaoCadastro) {
    botaoCadastro.addEventListener("click", cadastro);
}

function proximaPagina(){
    window.location.href = "index_login.html";
}

let botaoIrLogin = document.getElementById("btnIrLogin");
if (botaoIrLogin) {
    botaoIrLogin.addEventListener("click", proximaPagina);
}


function login() {
    let nomeLogin = document.getElementById("nomelog").value;
    let emailLogin = document.getElementById("emaillog").value;
    let senhaLogin = document.getElementById("senhalog").value;

    let dadosSalvos = localStorage.getItem("usuario");

    if (!dadosSalvos) {
        alert("Nenhum usuário cadastrado!");
        return;
    }

    let usuario = JSON.parse(dadosSalvos);

    if (emailLogin === usuario.email && senhaLogin === usuario.senha) {
        alert("Login bem-sucedido!");
        window.location.href = "index_exercicios.html";
    } else {
        alert("Email ou senha incorretos!");
    }
}
let botaoLogin = document.getElementById("enviarlog");
if (botaoLogin) {
    botaoLogin.addEventListener("click", login);
}