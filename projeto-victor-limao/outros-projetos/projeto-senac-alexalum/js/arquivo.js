angular.module('angularativApp', [])	
	.controller('angularativController', function($scope, $http){	
	
			$http.get('https://api.myjson.com/bins/1dril1')
			.then(function(lista){
			$scope.meusDados = lista.data;
			console.log(lista);	
				
			});
	
			$scope.insert = function(){
			
			var db = firebase.database().ref();
			
				var data = {

					nomeProprietario : $("#txtNomeProp").val(),
					codigo : $("#txtCodigo").val(),
					endereco : $("#txtEndereço").val(),
					bairro : $("#txtBairro").val()
					

				};

				db.child("cadastrarImovel").push(data);
				
				$scope.result = "Imóvel Cadastrado com Sucesso";

			};
	
			$scope.record = function (){
				
				$scope.records = [];
					
				firebase.database().ref("cadastrarImovel").on("child_added", function (snapshot,prevChildKey){
					
					var objimovel = snapshot.val();
					console.log(objimovel);
					
					//popular na view
					
					var data = {
						
						nomeProprietario:objimovel.nomeProprietario,
						codigo:objimovel.codigo,
						endereco:objimovel.endereco,
						bairro:objimovel.bairro
						
					};
					
					$scope.records.push(data);
					$scope.$apply();
					
				});
				
				
			}
			
});