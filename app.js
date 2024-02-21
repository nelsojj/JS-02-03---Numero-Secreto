//camelCase

let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

    //let titulo = document.querySelector('h1');   --- //seleciona aquela area/linha do HTML usando sua TAG
    //titulo.innerHTML = 'Jogo do Numero Secreto'; --- // innerHTML - escreve dentro do HTML pela variavel do JS

    //let paragrafo = document.querySelector('p');
    //paragrafo.innerHTML = 'Escolha um Numero Entre 1 e 10'; --- Fazendo para todo o corpo ->  

function exibirTextoNaTela(tag, texto){                                     // Funçao com parametros - funciona para todas tag-texto
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function mensagemInicial(){
    exibirTextoNaTela('h1', 'Jodo do Numero Secreto');
    exibirTextoNaTela('p', 'Escolha um Numero Entre 1 e 10');
}

mensagemInicial();

function verificarChute(){                                                  //função com nome e sua responsável
    let chute = document.querySelector('input').value
    
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1' , 'ACERTOU!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        let mensagemTentativa = `Parabéns. Você acertou o numero em ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p' , mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');    //Pegar o Button correto e ativalo

    }else {
        if(chute > numeroSecreto){
            exibirTextoNaTela('h1' , 'ERROU!');
            exibirTextoNaTela('p' , `O numero secreto é menor que ${chute}`);
        }else{
            exibirTextoNaTela('h1' , 'ERROU!');
            exibirTextoNaTela('p' , `O numero secreto é maior que ${chute}`);
        }
        tentativas ++;
        limparCampo();
    }
}

// As funções podem simplesmente serem definidas no final do código
function gerarNumeroAleatorio(){
    
    //return parseInt(Math.random()*10+1);  ---                         // nos da(retorna) o numero aleatorio para gente atribuir na variavel v
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){             // includes verifica se esta incluido na lista
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido)                   // colocando o numero escolhido no final da lista
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }

}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
    //desabilitando o botao para funcionar só ao entrar no laço da vitoria
}