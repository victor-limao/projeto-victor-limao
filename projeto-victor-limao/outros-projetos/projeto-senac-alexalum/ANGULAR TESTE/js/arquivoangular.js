angular.module('angularativApp', [])	
	.controller('angularativController', function($scope, $http){	
		
		$scope.cadastrarusuario = function(){
			
			var txtlogincadastro = document.getElementById('txtlogincadastro');
			var txtsenhacadastro = document.getElementById('txtsenhacadastro');
			var txtnomecadastro = document.getElementById('txtnomecadastro');
				
				var db = firebase.database().ref();
								
				var data = {

					nome  : $("#txtnomecadastro").val(),
					login  : $("#txtlogincadastro").val(),
					senha   : $("#txtsenhacadastro").val()

				};
				
				db.child("CadastroUsuario").push(data);
				
				txtnomecadastro.value = "";
				txtlogincadastro.value = "";
				txtsenhacadastro.value = "";
				
				$("#avisocadastro").text("Cadastro realizado com sucesso !!!");
			
		};
		
		$scope.logar = function(){

			$scope.records = [];
					
			firebase.database().ref("CadastroUsuario").on("child_added", function (snapshot,prevChildKey){
					
				var loginesenha = snapshot.val();
										
				if(loginesenha.login == $scope.txtlogin && loginesenha.senha == $scope.txtsenha){
					
					location.href = "menuprincipal.html";
					
					return;
				
				}	
					
				else{
						
					$("#avisologar").text("Acesso Negado! Tente Digitar Novamente.");
						
				}
					
					
			});
		
		};
		
		$scope.buscar = function(){
			
			document.getElementById("tt").style.display = "inline";
				
			$scope.records = [];
					
			firebase.database().ref("CadastroUsuario").on("child_added", function (snapshot,prevChildKey){
					
				var objusuario = snapshot.val();
				console.log(objusuario);
					
				//popular na view
					
				var data = {
						
					nome:objusuario.nome,
					login:objusuario.login,
					senha:objusuario.senha
						
				};
					
				$scope.records.push(data);
				$scope.$apply();
			
			
			});
					
		}
		
		$scope.clickItem2 = function(){
					
				document.getElementById("tt").style.display = "none";
    	
		};
		
			
});


	
	
