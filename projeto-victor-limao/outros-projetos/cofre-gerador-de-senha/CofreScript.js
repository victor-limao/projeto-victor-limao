
var senhaAleatoria;

function getSenhaAleatoria(lenght) {

    passwd = ''
    do {
        passwd += Math.random().toString(9).substr(2);

    }
    while (passwd < lenght)
    passwd = passwd.substr(0, lenght);

    return passwd;

}

function GerarSenha() {
    senhaAleatoria = getSenhaAleatoria(6);

    var ptext = document.getElementById("h1text");
    ptext.innerHTML = "O C�digo do cofre �: ******";

    // A SENHA EST� NO CONSOLE A PARTIR DE QUANDO GERADA.
    console.log(senhaAleatoria);
    var senhaHidden = document.getElementById("senhaHidden");
    senhaHidden.innerHTML = senhaAleatoria;
}


function MostrarSenha() {
    var senhaHidden = document.getElementById("senhaHidden");
    senhaHidden.hidden = ! senhaHidden.hidden;

    var mostrarSenhaButton = document.getElementById("MostrarSenhaButton");
    if (senhaHidden.hidden)
        mostrarSenhaButton.innerHTML = "Mostrar C�digo";
    else
        mostrarSenhaButton.innerHTML = "Esconder C�digo";
}


function PegarSenha() {
    var posicaoCerta = 0
    var posicaoErrada = 0;

    var DigiteSenha = document.getElementById("senha").value
    var label = document.getElementById("txtLblMensagem");

    if (DigiteSenha == senhaAleatoria) {
        label.innerHTML = "C�digo correto";
    }
    else {
        for (var i = 0; i < senhaAleatoria.length; i = i + 1) {
            if (senhaAleatoria.substr(i, 1) == DigiteSenha.substr(i, 1))
                posicaoCerta++;
        }

        for (var i = 0; i < senhaAleatoria.length; i = i + 1) {
            for (var x = 0; x < senhaAleatoria.length; x++) {
                if (senhaAleatoria.substr(i, 1) == DigiteSenha.substr(x, 1))
                    posicaoErrada++;
            }
        }

        label.innerHTML = "C�digo inv�lido, " + posicaoErrada + " certos";
        if (posicaoCerta > 0)
            label.innerHTML = label.innerHTML + " e " + posicaoCerta + " na posi��o correta."

       
    }
};




