function print1a30Mult3(){
    for(let i = 0; i <= 30; i ++)
        if(i % 3 === 0){
            alert(i)
        }
}

function print0a50evenorodd(){
    for(let i = 0; i <= 50; i ++)
        if(i % 2 == 0){
            alert(`${i}, é par`)
        } else{
            alert(`${i}, é impar `)
        }
}

function tabelsBook6(){
    for(let i = 0; i <= 10; i ++){
     let mult = 6;
    alert(`6 x ${i} = ${mult * i}`)
    }
}

function countdown10to0(){
    for(let i = 10; i >= 0; i--){
        alert(i)
    }
}
        
function print5to50Mults5(){
    for(let i = 0; i <= 50; i ++)
        if(i % 5 === 0){
            alert(i)
        }
}

function print1to20Ifunderequalorabove10(){
    for(let i = 0; i <= 20; i++ ){
        if(i < 10){
            alert(`${i}, é menor que 10`)
        } else if(i == 10){
            alert(`${i}, é iqual que 10`) 
    } else if(i > 10){
        alert(`${i}, é maior que 10`)
    }
    }
        
}
let seletor;
while (seletor !== 0){

seletor = Number(prompt(`Bem vindo a lista de exercicios laço For,
    para selecionar o exercicio presione:
    Exercicio 1 (1)
    Exercicio 2 (2)
    Exercicio 3 (3)
    Exercicio 4 (4)
    Exercicio 5 (5)
    Exercicio 6 (6)`));

if(seletor == 1){
    print1a30Mult3()
} else if(seletor === 2){
    print0a50evenorodd()
} else if(seletor === 3){
    tabelsBook6()
} else if(seletor === 4){
    countdown10to0()
} else if(seletor === 5){
    print5to50Mults5()
} else if(seletor === 6){
    print1to20Ifunderequalorabove10()
}else if( seletor !== 0){
    alert("Por Favor, Digite um numero de Exercicio valido.")
}
}

alert("Programa encerrado. Até mais!")


