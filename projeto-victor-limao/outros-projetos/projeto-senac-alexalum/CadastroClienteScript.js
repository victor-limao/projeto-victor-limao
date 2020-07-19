// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAbjq9WT60PjchcQcnVRlVKDGQQgxWsBmY",
    authDomain: "fir-app-1868c.firebaseapp.com",
    databaseURL: "https://fir-app-1868c.firebaseio.com",
    projectId: "fir-app-1868c",
    storageBucket: "fir-app-1868c.appspot.com",
    messagingSenderId: "517211514277"
  };
  firebase.initializeApp(config);	

		
		var myApp = angular.module('foreignerApp',['firebase']);
		 
		 myApp.controller("foreignerController", function($scope,$http){
		
		var db = firebase.database().ref();
		
		
		 $scope.insert = function(){
		var data = {
			nome: $("#nome").val(),
			sobrenome: $("#sobrenome").val(),
			cep: $("#cep").val(),
			rua: $("#rua").val(),
			bairro: $("#bairro").val(),
			cidade: $("#cidade").val(),
			estado: $("#uf").val(),
			login: $("#login").val(),
			senha: $("#senha").val()
			
			
		};
		   	
				db.child("CadastroCliente").push(data);
			 $("#txtLblMensagem").text("Dados Cadastrados.");
		 };
		 });	
		
		
    
    function limpa_formulário_cep() {
            //Limpa valores do formulário de cep.
            document.getElementById('rua').value=("");
            document.getElementById('bairro').value=("");
            document.getElementById('cidade').value=("");
            document.getElementById('uf').value=("");

    };

    function meu_callback(conteudo) {
        if (!("erro" in conteudo)) {
            //Atualiza os campos com os valores.
            document.getElementById('rua').value=(conteudo.logradouro);
            document.getElementById('bairro').value=(conteudo.bairro);
            document.getElementById('cidade').value=(conteudo.localidade);
            document.getElementById('uf').value=(conteudo.uf);
        } //end if.
        else {
            //CEP não Encontrado.
            limpa_formulário_cep();
            alert("CEP não encontrado.");
        }
    };
        
    function pesquisacep(valor) {

        //Nova variável "cep" somente com dígitos.
        var cep = valor.replace(/\D/g, '');

        //Verifica se campo cep possui valor informado.
        if (cep != "") {

            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;

            //Valida o formato do CEP.
            if(validacep.test(cep)) {

                //Preenche os campos com "..." enquanto consulta webservice.
                document.getElementById('rua').value="...";
                document.getElementById('bairro').value="...";
                document.getElementById('cidade').value="...";
                document.getElementById('uf').value="...";

                //Cria um elemento javascript.
                var script = document.createElement('script');

                //Sincroniza com o callback.
                script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

                //Insere script no documento e carrega o conteúdo.
                document.body.appendChild(script);

            } //end if.
            else {
                //cep é inválido.
                limpa_formulário_cep();
                alert("Formato de CEP inválido.");
            }
        } //end if.
        else {
            //cep sem valor, limpa formulário.
            limpa_formulário_cep();
        }
	}

