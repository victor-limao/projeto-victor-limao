(function (){
	
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
	var area = document.getElementById('area');
	var data = document.getElementById('data');
	var descricao = document.getElementById('descricao');
	var endereco = document.getElementById('endereco');
	var valor = document.getElementById('valor');
	var andamento = document.getElementById('andamento');
	var btnupdate = document.getElementById('btnupdate');
	var remove = document.getElementById('remove');
	
	btnGetID.addEventListener('click' , e =>{
		
		var getID = firebase.database().ref().child('CadastroAndamento/');
		
		getID.on('child_added', function(snapshot){
			
			id = snapshot.key;
			
			message = snapshot.val();
			
			if(getIDByName.value == message.codigo){
				
				console.log(id);
				console.log(message.codigo);
				console.log(message.area);
				console.log(message.data);
				console.log(message.descricao);
				console.log(message.endereco);
				console.log(message.valor);
				console.log(message.andamento);
				
				document.getElementById('theID').innerHTML = "Atualize seus Dados!";
				
				theID2.innerText = id;
				codigo.value = message.codigo;
				area.value = message.area;
				data.value = message.data;
				descricao.value = message.descricao;
				endereco.value = message.endereco;
				valor.value = message.valor;
				andamento.value = message.andamento;
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
				area.value = "";
				data.value = "";
				descricao.value = "";
				endereco.value = "";
				valor.value = "";
				andamento.value = "";
				
			}
			
			
		});
		
	});
	
	btnupdate.addEventListener('click' , e =>{
		
		var updatecadastro = firebase.database().ref().child('CadastroAndamento/');
		
		updatecadastro.on('child_added' , function(snapshot){
			
			var id2 = theID2.innerHTML;
			var x = codigo.value;
			var x2 = area.value;
			var x3 = data.value;
			var x4 = descricao.value;
			var x5 = endereco.value;
			var x6 = valor.value;
			var x7 = andamento.value;
			
		
			
			
			firebase.database().ref().child('CadastroAndamento/').child(id2).update({codigo:x, area:x2, data:x3, descricao:x4, endereco:x5, valor:x6, andamento:x7});
			
			document.getElementById('theID3').innerHTML = "Dados Atualizados com Sucesso!";
			
			
			
		});
		
		
		
	});
	
	remove.addEventListener('click' , e =>{
		
		var id3 = theID2.innerHTML;
			
		var dbdelete = firebase.database().ref().child('CadastroAndamento').child(id3).remove();
		
		document.getElementById('theID3').innerHTML = "Dados Excluidos com Sucesso!";
		
	});
	
}());