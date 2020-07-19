// JavaScript Document(function (){
	
var config = {
		
    	apiKey: "AIzaSyAbjq9WT60PjchcQcnVRlVKDGQQgxWsBmY",
    authDomain: "fir-app-1868c.firebaseapp.com",
    databaseURL: "https://fir-app-1868c.firebaseio.com",
    projectId: "fir-app-1868c",
    storageBucket: "fir-app-1868c.appspot.com",
    messagingSenderId: "517211514277"
  };
  firebase.initializeApp(config);
	var rootRef = firebase.database().ref();
	
	// var to get gen id
	
	var GId = document.getElementById('getIDByName');
	var btnGetID = document.getElementById('btnGetID');
	var theID = document.getElementById('theID');
	var theID2 = document.getElementById('theID2');
	var codigo = document.getElementById('codigo');
	var produto = document.getElementById('produto');
	var data = document.getElementById('data');
	var valor = document.getElementById('valor');
	var descricao = document.getElementById('descricao');
	var quantidade = document.getElementById('quantidade');
	var btnupdate = document.getElementById('btnupdate');
	var remove = document.getElementById('remove');
	
	btnGetID.addEventListener('click' , e =>{
		
		var getID = firebase.database().ref().child('CadastroProduto/');
		
		getID.on('child_added', function(snapshot){
			
			id = snapshot.key;
			
			message = snapshot.val();
			
			if(getIDByName.value == message.codigo){
				
				console.log(id);
				console.log(message.codigo);
				console.log(message.produto);
				console.log(message.data);
				console.log(message.valor);
				console.log(message.descricao);
				console.log(message.quantidade);
				
				document.getElementById('theID').innerHTML = "Atualize seus Dados";
				
				theID2.innerText = id;
				codigo.value = message.codigo;
				produto.value = message.produto;
				data.value = message.data;
				valor.value = message.valor;
				descricao.value = message.descricao;
				quantidade.value = message.quantidade;
			}
			
			if(document.getElementById('theID2').innerHTML == ""){
				
				document.getElementById('theID').innerHTML = "";
				document.getElementById('theID2').innerHTML = "";
				
			}
			
			if(document.getElementById('theID').innerHTML == ""){
				
				theID.innerText = "Nenhum dado foi encontrado!";
//				nome.value = "";
//				login.value = "";
//				senha.value = "";
//				codigo.value = "";
//				data.value = "";
//				descricao.value = "";
//				produto.value = "";
//				quantidade.value = "";
//				valor.value = "";		
				
				codigo.value = "";
				produto.value = "";
				data.value = "";
				valor.value = "";
				descricao.value = "";
				quantidade.value = "";
				
			}
			
			
		});
		
	});
	
	btnupdate.addEventListener('click' , e =>{
		
		var updatecadastro = firebase.database().ref().child('CadastroProduto/');
		
		updatecadastro.on('child_added' , function(snapshot){
			
			var id2 = theID2.innerHTML;
			var x = codigo.value;
			var x2 = produto.value;
			var x3 = data.value;
			var x4 = valor.value;
			var x5 = descricao.value;
			var x6 = quantidade.value;

			
			
			
			
			firebase.database().ref().child('CadastroProduto/').child(id2).update({codigo:x, produto:x2, data:x3, valor:x4, descricao:x5, quantidade:x6});
			
			document.getElementById('theID3').innerHTML = "Dados Atualizados com Sucesso!";
			
			
			
		});
		
		
		
	});
	
	remove.addEventListener('click' , e =>{
		
		var id3 = theID2.innerHTML;
			
		var dbdelete = firebase.database().ref().child('CadastroProduto').child(id3).remove();
		
		document.getElementById('theID3').innerHTML = "Dados Excluidos com Sucesso!";
		
	});
	