
function proximaPagina(destino) {
    switch(destino) {
        case "login":
            window.location.href = "index_login.html";
            break;
        case "cadastro":
            window.location.href = "index_cadastro.html";
            break;
        default:
            console.error("Destino inválido");
    }
}

/* ===========================
   CADASTRO
=========================== */
const username = document.getElementById("username");
const useremail = document.getElementById("useremail");
const password = document.getElementById("password");
const enviarBtn = document.getElementById("enviar");

if (enviarBtn) {
    enviarBtn.addEventListener("click", async () => {
        const dadosUsuario = {
            nome: username.value,
            email: useremail.value,
            senha: password.value,
        };

        if (!dadosUsuario.nome || !dadosUsuario.email || !dadosUsuario.senha) {
            alert("Preencha todos os campos!");
            return;
        }

        try {
            const response = await fetch("/cadastro", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(dadosUsuario)
            });

            const resultado = await response.json();
            alert(resultado.message);

            
            username.value = "";
            useremail.value = "";
            password.value = "";
        } catch (error) {
            console.error("Erro ao cadastrar: ", error);
            alert("Ocorreu um erro ao tentar cadastrar. Tente novamente.");
        }
    });
}

/* ===========================
   LOGIN
=========================== */
const enviarlog = document.getElementById("enviarlog");

if (enviarlog) {
    enviarlog.addEventListener("click", async () => {
        const usernamelog = document.getElementById("usernamelog");
        const useremaillog = document.getElementById("useremaillog");
        const passwordlog = document.getElementById("passwordlog");

        const dadosLogin = {
            nome: usernamelog.value,
            email: useremaillog.value,
            senha: passwordlog.value,
        };

        if (!dadosLogin.nome || !dadosLogin.email || !dadosLogin.senha) {
            alert("Preencha todos os campos!");
            return;
        }

        try {
            const response = await fetch("/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(dadosLogin)
            });

            const resultado = await response.json();

            if (response.ok) {
                alert(resultado.message);
                window.location.href = "/templates/home.html";
            } else {
                alert(resultado.message);
            }
        } catch (err) {
            console.error("Erro no login:", err);
            alert("Ocorreu um erro ao tentar logar. Tente novamente.");
        }
    });
}

/* ===========================
   BOTÕES DE NAVEGAÇÃO
=========================== */
const fazerloginBtn = document.getElementById("fazerlogin");
if (fazerloginBtn) {
    fazerloginBtn.addEventListener("click", () => {
        proximaPagina("login");
    });
}

const fazercadastroBtn = document.getElementById("fazercadastro");
if (fazercadastroBtn) {
    fazercadastroBtn.addEventListener("click", () => {
        proximaPagina("cadastro");
    });
}
