angular.module('angularativApp', [])	
	.controller('angularativController', function($scope, $http){	
//	
//			$http.get('https://api.myjson.com/bins/1dril1')
//			.then(function(lista){
//			$scope.meusDados = lista.data;
//			console.log(lista);	
//				
//			});
	
//			$scope.insert = function(){
//			
//			var db = firebase.database().ref();
//			
//				var data = {
//
//					nomeProprietario : $("#txtNomeProp").val(),
//					codigo : $("#txtCodigo").val(),
//					endereco : $("#txtEndereço").val(),
//					bairro : $("#txtBairro").val()
//					
//
//				};
//
//				db.child("cadastrarImovel").push(data);
//				
//				$scope.result = "Imóvel Cadastrado com Sucesso";
	
			$scope.record = function (){
				
				$scope.records = [];
					
				firebase.database().ref("CadastroProduto").on("child_added", function (snapshot,prevChildKey){
					
					var objimovel = snapshot.val();
					console.log(objimovel);
					
					//popular na view
					
					var data = {
						
						produto:objimovel.produto,
						data:objimovel.data,
						valor:objimovel.valor,
						codigo:objimovel.codigo,
						descricao:objimovel.descricao,
						quantidade:objimovel.quantidade
						
					};
					
			
					
					$scope.records.push(data);
					$scope.$apply();
					
				});
				
				 

           // });
			function deleteData(userId) {
            var personRef = firebase.database().ref().child("CadastroProduto").child(userId);
            personRef.once('value', function (snapshot) {

                if (snapshot.val() === null) {
                    /* does not exist */
                    alert('does not exist');
                } else {
                    personRef.remove();
                }
			});
			}
			
				
				$('#btnDelete').on('click', function () {
            var id = $('#txtNomeProduto').val();
            deleteData(id);
        	});
				
};
			
});