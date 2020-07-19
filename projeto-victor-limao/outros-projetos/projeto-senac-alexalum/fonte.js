var app=angular.module("CalculatorApp",[]);

//criar controller
app.controller('CalculatorController', function($http,$scope){
$http.get('https://api.myjson.com/bins/wsxyj')
	.then(function(lista){ 
$scope.meusDados = lista.data; 

	});	
});		