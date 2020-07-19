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
			nome: $("#txtNomeVendedor").val(),
			data: $("#txtData").val(),
			endereço: $("#txtEndereço").val(),
			descricao: $("#txtDescricao").val(),
			valor: $("#txtValor").val(),
			area: $("#txtArea").val(),
			status: $("#txtStatus").val(),
		};
		
		db.child("Foreigner").push(data);
		 };
		 });	
		