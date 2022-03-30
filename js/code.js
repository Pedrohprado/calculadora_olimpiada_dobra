const enviar = document.querySelector(`#btn`) // "pegando" o input submit e colocando dentro de uma const

enviar.addEventListener(`click`, function(e){   // criando um evento de click para o input submit
    
    e.preventDefault() // interromper o envio do form

    let bloco1 = document.querySelector(`#bloco1`).value 
    let bloco2 = document.querySelector(`#bloco2`).value      // selecionando o ID.value dele e colocando esse valor dentro de uma let
    let bloco3 = document.querySelector(`#bloco3`).value
    let bloco4 = document.querySelector(`#bloco4`).value


    let resultado1 = bloco1 * 0.750
    let resultado2 = bloco2 * 1.071  // fazendo o calculo de cada questão 
    let resultado3 = bloco3 * 1.077
    let resultado4 = bloco4 * 2.000

    const resultadoFinal = resultado1 + resultado2 + resultado3 + resultado4  // somando esses valores

    document.querySelector(`.resultado`).innerHTML = `resultado final é: ${resultadoFinal} pontos` //  colocando o valor dentro do span com class .resultado
})
