angular.module('angularativApp', [])	
	.controller('angularativController', function($scope, $http){	
	
		$scope.record = function(){

				$scope.records = [];
					
				firebase.database().ref("CadastroCliente").on("child_added", function (snapshot,prevChildKey){
					
					var loginesenha = snapshot.val();
					
//						var logado = false;
					
					
					
					
//				if(logado == false){
				if(loginesenha.login == $scope.login1 && loginesenha.senha == $scope.senha1)
				{
//					logado = true; 
					alert("Logado com Sucesso!");
					location.href = "Compra.html";
					
					return;
				}	
					
					else{
						$("#txtLblMensagem").text("Acesso Negado!");
//						alert("acesso negado!");
						
					}
					
					
			});
	 };
});