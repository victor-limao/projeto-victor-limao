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
	var nome = document.getElementById('nome');
	var login = document.getElementById('login');
	var senha = document.getElementById('senha');
	var btnupdate = document.getElementById('btnupdate');
	var remove = document.getElementById('remove');
	
	btnGetID.addEventListener('click' , e =>{
		
		var getID = firebase.database().ref().child('CadastroUsuario/');
		
		getID.on('child_added' , function(snapshot){
			
			id = snapshot.key;
			
			message = snapshot.val();
			
			if(getIDByName.value == message.nome){
				
				/*console.log(id);
				console.log(message.nome);
				console.log(message.login);
				console.log(message.senha);*/
				
				document.getElementById('theID').innerHTML = "Atualize seus Dados";
				
				theID2.innerText = id;
				nome.value = message.nome;
				login.value = message.login;
				senha.value = message.senha;
				
			}
			
			if(getIDByName.value != message.nome){
				
				document.getElementById('theID').innerHTML = "";
				document.getElementById('theID2').innerHTML = "";
				
			}
			
			if(document.getElementById('theID').innerHTML == ""){
				
				theID.innerText = "Nenhum dado foi encontrado!";
				nome.value = "";
				login.value = "";
				senha.value = "";
				
				
			}
			
			
		});
		
	});
	
	btnupdate.addEventListener('click' , e =>{
		
		var updatecadastro = firebase.database().ref().child('CadastroUsuario/');
		
	updatecadastro.on('child_added' , function(snapshot){
			
			var id2 = theID2.innerHTML;
			var x = nome.value;
			var x2 = login.value;
			var x3 = senha.value;
			
			firebase.database().ref().child('CadastroUsuario').child(id2).update({nome:x, login:x2, senha:x3});
			
			
		});
		
		
	});
	
	remove.addEventListener('click' , e =>{
		
		var id3 = theID2.innerHTML;
			
		var dbdelete = firebase.database().ref().child('CadastroUsuario').child(id3).remove();
		
	});
	
}());