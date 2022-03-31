const enviar = document.querySelector(`#btn`)

enviar.addEventListener(`click`, function(e){
    e.preventDefault()

    const pegaValor = function(valor){
        resultado = document.querySelector(valor).value
        return resultado
    }

    let conta1 = pegaValor(`#bloco1`) * 0.750
    let conta2 = pegaValor(`#bloco2`) * 1.071
    let conta3 = pegaValor(`#bloco3`) * 1.077
    let conta4 = pegaValor(`#bloco4`) * 2

    const resultadoFinal = conta1 + conta2 + conta3 + conta4

    document.querySelector(`.resultado`).innerHTML = `resultado final é: ${resultadoFinal} pontos`
})