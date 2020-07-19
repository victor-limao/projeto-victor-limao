(function (){
	
	var config = {
		
	apiKey: "AIzaSyAbjq9WT60PjchcQcnVRlVKDGQQgxWsBmY",
    authDomain: "fir-app-1868c.firebaseapp.com",
    databaseURL: "https://fir-app-1868c.firebaseio.com",
    projectId: "fir-app-1868c",
    storageBucket: "",
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
	var data = document.getElementById('data');
	var descricao = document.getElementById('descricao');
	var produto = document.getElementById('produto');
	var quantidade = document.getElementById('quantidade');
	var valor = document.getElementById('valor');
	var btnupdate = document.getElementById('btnupdate');
	var remove = document.getElementById('remove');
	
	btnGetID.addEventListener('click' , e =>{
		
		var getID = firebase.database().ref().child('CadastroProduto/');
		
		getID.on('child_added' , function(snapshot){
			
			id = snapshot.key;
			
			message = snapshot.val();
			
			if(getIDByName.value == message.codigo){
				
				/*console.log(id);
				console.log(message.nome);
				console.log(message.login);
				console.log(message.senha);*/
				
				document.getElementById('theID').innerHTML = "Atualize seus Dados";
				
				theID2.innerText = id;
				codigo.value = message.codigo;
				data.value = message.data;
				descricao.value = message.descricao;
				produto.value = message.produto;
				quantidade.value = message.quantidade;
				valor.value = message.valor;
				
			}
			
			if(getIDByName.value != message.codigo){
				
				document.getElementById('theID').innerHTML = "";
				document.getElementById('theID2').innerHTML = "";
				
			}
			
			if(document.getElementById('theID').innerHTML == ""){
				
				theID.innerText = "Nenhum dado foi encontrado!";
//				nome.value = "";
//				login.value = "";
//				senha.value = "";
				codigo.value  = "";
				data.value = "";
				descricao.value= "";
				produto.value= "";
				quantidade.value= "";
				valor.value= "";				
			}
			
			
		});
		
	});
	
	btnupdate.addEventListener('click' , e =>{
		
		var updatecadastro = firebase.database().ref().child('CadastroProduto/');
		
		updatecadastro.on('child_added' , function(snapshot){
			
			var id2 = theID2.innerHTML;
			var x = codigo.value;
//			var x2 = login.value;
//			var x3 = senha.value;
			var x2 = data.value;
			var x3 = descricao.value;
			var x4 = produto.value;
			var x5 = quantidade.value;
			var x6 = valor.value;
			
			firebase.database().ref().child('CadastroProduto').child(id2).update({codigo:x, data:x2, descricao:x3, produto:x4, quantidade:x5, valor:x6});
			
			
		});
		
		
	});
	
	remove.addEventListener('click' , e =>{
		
		var id3 = theID2.innerHTML;
			
		var dbdelete = firebase.database().ref().child('CadastroProduto').child(id3).remove();
		
	});
	
}());