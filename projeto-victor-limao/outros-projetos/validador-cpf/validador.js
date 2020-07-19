
        window.onload = function () {
            //Check the support for the File API support
            if (window.File && window.FileReader && window.FileList && window.Blob) {
                var fileSelected = document.getElementById('txtfiles');
                fileSelected.addEventListener('change', function (e) {
                    //Define a extensão do arquivo
                    var fileExtension = /text.*/;
                    //Pega o arquivo
                    var fileTobeRead = fileSelected.files[0];
                    //Verifica se a extensão coincide.
                    if (fileTobeRead.type.match(fileExtension)) {
                        var fileReader = new FileReader();
                        fileReader.onload = function (e) {
                            var fileContents = document.getElementById('txtLblMensagem3');
                            var txtCPF = document.getElementById('txtLblMensagem0');
                            txtCPF.innerText = ("O(s) CPF(s) informados foram: ");
                            console.log(fileReader);
                            var cpfs = fileReader.result.split('\n');
                            for (let i = 0; i < cpfs.length; i++) {
                                if (cpfs[i].trim() == "")
                                    continue;

                                var isValid = vercpf(cpfs[i]);
                                fileContents.innerText += cpfs[i].trim() + " => " + (isValid ? "válido" : "inválido") + "\n";
                            }

                            //    var array = filereader.result;

                            //    array.foreach(function (element, index) {
                            //        if (element == filereader) {
                            //            array[index] = 'lalala'
                            //        }
                            //    })
                        }
                        var cpfVer = fileReader.readAsText(fileTobeRead);
                    }
                    else {
                        var nTxt = document.getElementById('txtLblMensagem2');
                        //    nTxt.innerText = ("Arquivo inválido, selecione um arquivo de texto.");
                        alert("Arquivo inválido, selecione um arquivo de texto.");

                    }

                }, false);
            }
            
        }
