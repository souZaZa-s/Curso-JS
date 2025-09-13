// ------------------- CADASTRO -------------------
function cadastro() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if (!nome || !email || !senha) {
        alert("Preencha todos os campos!");
        return;
    }

    localStorage.setItem("usuario", JSON.stringify({ nome, email, senha }));
    alert("Usuário cadastrado com sucesso!");
}

// Botão de cadastro
let botaoCadastro = document.getElementById("enviar");
if (botaoCadastro) {
    botaoCadastro.addEventListener("click", cadastro);
}

// ------------------- NAVEGAÇÃO -------------------
function irParaLogin() {
    window.location.href = "index_login.html";
}

let botaoIrLogin = document.getElementById("btnirLogin");
if (botaoIrLogin) {
    botaoIrLogin.addEventListener("click", irParaLogin);
}

// ------------------- LOGIN -------------------
function login() {
    let nomeLogin = document.getElementById("nomeLogin").value;
    let senhaLogin = document.getElementById("senhaLogin").value;

    let dadosSalvos = localStorage.getItem("usuario");

    if (!dadosSalvos) {
        alert("Nenhum usuário cadastrado!");
        return;
    }

    let usuario = JSON.parse(dadosSalvos);

    if (nomeLogin === usuario.nome && senhaLogin === usuario.senha) {
        alert("Login bem-sucedido!");
        window.location.href = "index_exercicios.html";
    } else {
        alert("Nome ou senha incorretos!");
    }
}

// Botão de login
let botaoLogin = document.getElementById("btnLogin");
if (botaoLogin) {
    botaoLogin.addEventListener("click", login);
}
