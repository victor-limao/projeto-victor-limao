
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
			codigo: $("#txtCodigo").val(),
			area: $("#txtArea").val(),
			data: $("#txtData").val(),
			descricao: $("#txtDescricao").val(),
			endereco: $("#txtEndereco").val(),
			valor: "R$" + $("#txtValor").val(),
			andamento: $("#TxtAndamento").val(),
		};
		
		db.child("CadastroAndamento").push(data);
			 document.getElementById('theID3').innerHTML = "Dados cadastrados com Sucesso!";
		 };
		 });	
		