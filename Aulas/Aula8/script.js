function adicionarItem() {
    let valor = document.getElementById("novoItem").value
    if (valor.trim() !== "") {
        let li = document.createElement("li")
        li.innerText = valor

        aplicarHoverAoItem(li) // Aplica o efeito ao novo item

        document.getElementById("lista").appendChild(li)
        document.getElementById("novoItem").value = ""
    } else {
        alert("Digite algum valor antes de adicionar")
    }
}
function removerItem() {
    let valor = document.getElementById("novoItem").value.trim()
    if (valor === "") {
        alert("Digite o nome do item a remover")
        return
    }

    let lista = document.getElementById("lista")
    let itens = lista.getElementsByTagName("li")
    let itemRemovido = false

    for (let item of Array.from(itens)) {
        if (item.innerText === valor) {
            lista.removeChild(item)
            itemRemovido = true
            break
        }
    }

    if (!itemRemovido) {
        alert("Item não encontrado na lista")
    }

    document.getElementById("novoItem").value = ""
}

function removerUltimo() {
    let lista = document.getElementById("lista")
    
    if (lista.lastChild) {
        lista.removeChild(lista.lastChild)
    } else {
        alert("A lista já está vazia")
    }
}

let itens = document.querySelectorAll("#lista li");

function aplicarHoverAoItem(li) {
    li.addEventListener("mouseover", function() {
        this.style.backgroundColor = "blueviolet"
    })
    li.addEventListener("mouseout", function() {
        this.style.backgroundColor = ""
    })
}