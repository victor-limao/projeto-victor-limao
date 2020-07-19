var config = {
  apiKey: "AIzaSyAbjq9WT60PjchcQcnVRlVKDGQQgxWsBmY",
  authDomain: "fir-app-1868c.firebaseapp.com",
  databaseURL: "https://fir-app-1868c.firebaseio.com",
  projectId: "fir-app-1868c",
  storageBucket: "",
  messagingSenderId: "517211514277"
};
firebase.initializeApp(config);

var myApp = angular.module('angularativApp', ['firebase']);

myApp.controller("angularativController", function ($scope, $http) {

  var db = firebase.database().ref();


  $scope.insert = function () {
    var data = {
      codigo: $("#txtCodigo").val(),
      produto: $("#txtProduto").val(),
      tamanho: $("#selectPeso").val(),
      estoque: $("#txtEstoque").val(),
      fornecedor: $("#txtFornecedor").val(),
      setor: $("#txtSetor").val(),
      tipo: $("#selectTipo").val(),
      valorinicial: "R$" + $("#txtValorInicial").val(),
      valorfinal: "R$" + $("#txtValorFinal").val(),
      porcentagem: $("#txtPorcentagem").val(),


    };

    db.child("Estoque").push(data);
    $("#txtLblMensagem").text("Dados Cadastrados.");

  };
});


angular.module('angularativApp', [])
  myApp.controller('angularativController', function ($scope, $http) {



    //   var data1 = data;

    $scope.record = function () {

      $scope.records = [];

      firebase.database().ref("Estoque").on("child_added", function (snapshot, prevChildKey) {

        var objestoque = snapshot.val();
        console.log(objestoque);

        //popular na view

        var data = {
          // VOLTAR AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQUI
          codigo: objestoque.codigo,
          area: objestoque.area,
          data: objestoque.data,
          descricao: objestoque.descricao,
          endereco: objestoque.endereco,
          valor: objestoque.valor,
          andamento: objestoque.andamento
        };

        $scope.records.push(data);
        $scope.$apply();
        // console.text("FDP");
        // $scope.result = "Produto cadastrado com sucesso";

      });


    };
  });	
