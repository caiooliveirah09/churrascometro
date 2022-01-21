function calcular(){
    let inputAdultos = document.getElementById("adultos");
    let inputCriancas = document.getElementById("criancas");
    let inputDuracao = document.getElementById("duracao");
    let resultado = document.getElementById("resultado");
    
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let quantidadeTotalCarne = carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao) / 2 * criancas);
    let quantidadeTotalCerveja = cervejaPorAdulto(duracao) * adultos;
    let quantidadeTotalRefrigerantes = refrigerantePorCriancas(duracao) / 2 * criancas

    resultado.innerHTML = `<p>${quantidadeTotalCarne/1000}KG DE CARNE</p>`
    resultado.innerHTML += `<p>${quantidadeTotalCerveja/1000}L DE CERVEJA</p>`
    resultado.innerHTML += `<p>${quantidadeTotalRefrigerantes/1000}L DE REFRIGERANTE</p>`
}

function carnePorPessoa(duracao){
    if(duracao >= 6){
        return 650;
    }else{
        return 400;
    }
}

function cervejaPorAdulto(duracao){
    if(duracao >= 6){
        return 2000;
    }else{
        return 1200;
    }
}

function refrigerantePorCriancas(duracao){
    if(duracao >= 6){
        return 1500;
    }else{
        return 1000;
    }
}






