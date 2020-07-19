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
					
				firebase.database().ref("CadastroAndamento").on("child_added", function (snapshot,prevChildKey){
					
					var objandamento = snapshot.val();
					console.log(objandamento);
					
					//popular na view
					
					var data = {
						
						codigo:objandamento.codigo,
						area:objandamento.area,
						data:objandamento.data,
						descricao:objandamento.descricao,
						endereco:objandamento.endereco,
						valor:objandamento.valor,
						andamento:objandamento.andamento
					};
					
					$scope.records.push(data);
					$scope.$apply();
					
				});
				
				
			};
			
});