const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;


app.use(express.json());


app.use("/src", express.static(path.join(__dirname, "src")));
app.use("/templates", express.static(path.join(__dirname, "templates")));


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "templates", "index_cadastro.html"));
});


app.post("/cadastro", (req, res) => {
    const usuario = req.body;
    const usersPath = path.join(__dirname, "users.json");

    let data = [];

    
    if (fs.existsSync(usersPath)) {
        try {
            const fileContent = fs.readFileSync(usersPath, "utf8").trim();
            data = fileContent ? JSON.parse(fileContent) : [];
            if (!Array.isArray(data)) data = [];
        } catch (err) {
            console.error("Erro ao ler JSON:", err);
            data = [];
        }
    }

    
    data.push(usuario);

    
    try {
        fs.writeFileSync(usersPath, JSON.stringify(data, null, 2));
    } catch (err) {
        console.error("Erro ao escrever JSON:", err);
        return res.status(500).json({ message: "Erro ao salvar usuário" });
    }

    res.json({ message: "Cadastro realizado com sucesso!" });
});


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.post("/login", (req, res) => {
    const { nome, email, senha } = req.body;
    const usersPath = path.join(__dirname, "users.json");

    if(!fs.existsSync(usersPath)){
        return res.status(400).json({ message: "Nenhum Usuuário cadastrado."})
    }
    let data = [];
    try {
        const fileContent = fs.readFileSync(usersPath, "utf8").trim();
        data = fileContent ? JSON.parse(fileContent) : [];
    } catch (err) {
        console.error("Erro ao ler JSON: ", err);
        return res.status(500).json({message:"Erro Interno do Servidor."})
    }
    const usuarioEncontrado = data.find(
        u => u.nome === nome && u.email === email && u.senha === senha 
    );

    if (usuarioEncontrado){
        res.json({message: "Login realizado com sucesso!"});
    } else {
        res.status(401).json({ message: "Usuario ou senha Incorretos."});
    }
});
