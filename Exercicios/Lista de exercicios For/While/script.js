function de0A20(){
    let i = 0
    while(i <= 20){
        alert(i)
        i++
    }
}
function de1a25ifmult5(){
    let i = 1
    while(i <= 25){
        if(i % 5 == 0){
            alert(`${i}, é multiplo de 5`)
        }else{
            alert(`${i}, não é multiplo de 5`)
        }
        i++
    }
}
function de2a20mult2(){
    let i = 2
    while(i <= 20){
        if(i % 2 === 0){
            alert(i)
        }
        i++
    }
}
function de15a5minus1(){
    let i = 15
    while(i >= 5){
        alert(i)
        i--
    }
}
function soma1a10etotal(){
   let acumulado = 1
   let i = 1

   while(i <= 10){
    let antes = acumulado;
    acumulado = acumulado + i;
    alert(`${antes} + ${i} = ${acumulado}`);
    i++
   }
   alert(`Soma final: ${acumulado}`)
}
function todosde1aprompt(){
    let des = Number(prompt(`Digite o número desejado: `))
    let i = 0
    while(i <= des ){
        alert(i)
        i++
    }
}
let seletor;
while (true){
seletor = Number(prompt(`Bem Vindo a lista de exercicios While.
    Por favor selecione um exercicio:
    Exercicio 1 (1)
    Exercicio 2 (2)
    Exercicio 3 (3)
    Exercicio 4 (4)
    Exercicio 5 (5)
    Exercicio 6 (6)
    Digite 0 para sair.`))

    
if(seletor == 1){
    de0A20()
} else if(seletor == 2){
    de1a25ifmult5()
} else if(seletor == 3){
    de2a20mult2()
} else if(seletor == 4){
    de15a5minus1()
} else if(seletor == 5){
    soma1a10etotal()
} else if(seletor == 6){
    todosde1aprompt()
}else if(seletor == 0){
    alert("Saindo...")
    break;
} else if(isNaN(seletor)){
    alert("Por favor digite um numero!")
} else{
    alert("Digite algo valido")
}

    }
