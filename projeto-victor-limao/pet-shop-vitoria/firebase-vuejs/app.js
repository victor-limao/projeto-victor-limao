
var App = new Vue({
    el: '#AppVue',


    watch: {
        'discount': function (a, b) {
            App.calcTotalCaixa();
        },
        'discountType': function (a, b) {
            App.calcTotalCaixa();
        }
    },
    data: {
        page: {
            current: '/login.html',
        },
        firebase: {
            path: '/PETSHOP',
        },
        users: {
            add: {
                error: false,
                messages: [],

                fields: {
                    codigo: {
                        value: '',
                        error: false,
                        messages: [],
                    },

                    cliente: {
                        value: '',
                        error: false,
                        messages: [],
                    },

                    telefone: {
                        value: '',
                        error: false,
                        messages: [],
                    },

                    cep: {
                        value: '',
                        error: false,
                        messages: [],
                    },

                    rua: {
                        value: '',
                        error: false,
                        messages: [],
                    },

                    numero: {
                        value: '',
                        error: false,
                        messages: [],
                    },

                    complemento: {
                        value: '',
                        error: false,
                        messages: [],
                    },


                    bairro: {
                        value: '',
                        error: false,
                        messages: [],
                    },

                    cidade: {
                        value: '',
                        error: false,
                        messages: [],
                    },

                    uf: {
                        value: '',
                        error: false,
                        messages: [],
                    },

                    datacadastro: {
                        value: '',
                        error: false,
                        messages: [],
                    },

                    dataatual: {
                        value: '',
                        error: false,
                        messages: [],
                    },

                    status: {
                        value: '',
                        error: false,
                        messages: [],
                    },

                    nome: {
                        value: '',
                        error: false,
                        messages: [],
                    },

                    idade: {
                        value: '',
                        error: false,
                        messages: [],
                    },

                    pet: {
                        value: '',
                        error: false,
                        messages: [],
                    },

                    genero: {
                        value: '',
                        error: false,
                        messages: [],
                    },


                    raca: {
                        value: '',
                        error: false,
                        messages: [],
                    },

                    temperamento: {
                        value: '',
                        error: false,
                        messages: [],
                    },

                    observacao: {
                        value: '',
                        error: false,
                        messages: [],
                    },


                },

            },
            edit: {
                error: false,
                messages: [],

                fields: {
                    key: '',

                    codigo: {
                        value: '',
                        error: false,
                        messages: [],
                    },

                    cliente: {
                        value: '',
                        error: false,
                        messages: [],
                    },

                    telefone: {
                        value: '',
                        error: false,
                        messages: [],
                    },

                    cep: {
                        value: '',
                        error: false,
                        messages: [],
                    },

                    rua: {
                        value: '',
                        error: false,
                        messages: [],
                    },

                    numero: {
                        value: '',
                        error: false,
                        messages: [],
                    },

                    complemento: {
                        value: '',
                        error: false,
                        messages: [],
                    },

                    bairro: {
                        value: '',
                        error: false,
                        messages: [],
                    },

                    cidade: {
                        value: '',
                        error: false,
                        messages: [],
                    },

                    uf: {
                        value: '',
                        error: false,
                        messages: [],
                    },

                    datacadastro: {
                        value: '',
                        error: false,
                        messages: [],
                    },

                    status: {
                        value: '',
                        error: false,
                        messages: [],
                    },

                    nome: {
                        value: '',
                        error: false,
                        messages: [],
                    },

                    idade: {
                        value: '',
                        error: false,
                        messages: [],
                    },

                    pet: {
                        value: '',
                        error: false,
                        messages: [],
                    },

                    genero: {
                        value: '',
                        error: false,
                        messages: [],
                    },


                    raca: {
                        value: '',
                        error: false,
                        messages: [],
                    },

                    temperamento: {
                        value: '',
                        error: false,
                        messages: [],
                    },

                    observacao: {
                        value: '',
                        error: false,
                        messages: [],
                    },


                },
            },
            remove: {
                error: false,
                messages: [],
                key: '',
                cliente: '',

            },
            list: [],
        },
        login: {
            select: {
                error: false,
                messages: [],
                fields: {
                    login: {
                        value: '',
                        error: false,
                        messages: [],

                    },
                    senha: {
                        value: '',
                        error: false,
                        messages: [],

                    },
                },
            },
            list: [],
        },

        providers: {
            add: {
                error: false,
                messages: [],

                fields: {
                    nome: {
                        value: '',
                        error: false,
                        messages: [],

                    },

                    marca: {
                        value: '',
                        error: false,
                        messages: [],

                    },
                },
            },

            edit: {
                error: false,
                messages: [],

                fields: {
                    nome: {
                        value: '',
                        error: false,
                        messages: [],
                    },

                    marca: {
                        value: '',
                        error: false,
                        messages: [],

                    },
                },


            },

            remove: {
                error: false,
                messages: [],
                key: '',
                nome: '',

            },
            list: [],
        },



        // newSale: {
        //     add: {
        //         error: false,
        //         messages: [],

        //         fields: {
        //             nome: {
        //                 value: '',
        //                 error: false,
        //                 messages: [],

        //             },
        //         },
        //     },
        // },

        sales: {
            add: {
                error: false,
                messages: [],

                fields: {
                    nome: {
                        value: '',
                        error: false,
                        messages: [],

                    },

                    cash: {
                        value: '0',
                        error: false,
                        messages: [],
                    },
                    card: {
                        value: '0',
                        error: false,
                        messages: [],
                    },

                    quantidade: {
                        value: '',
                        error: false,
                        messages: [],

                    },
                    dataatual: {
                        value: '',
                        error: false,
                        messages: [],
                    },

                    subtotalFormat: 0,
                    totalFormat: 0,

                    totalcompra: {
                        value: '0,00',
                        error: false,
                        messages: [],
                    },

                    subtotalcompra: {
                        value: '0,00',
                        error: false,
                        messages: [],
                    },

                    subtotal: 0,


                    valortotalcompra: {
                        value: '0,00',
                        error: false,
                        messages: [],

                    },

                    porcentagem: {
                        value: '',
                        error: false,
                        messages: [],

                    },


                    valortotalrecebido: {
                        value: '0,00',
                        error: false,
                        messages: [],

                    },

                    troco: {
                        value: '0,00',
                        error: false,
                        messages: [],

                    },

                    discountType: 'value',



                    desconto: {
                        value: '',
                        error: false,
                        messages: [],

                    },

                    precoproduto: {

                        value: '',
                        error: false,
                        messages: [],

                    },

                    tipodevenda: {

                        value: '',
                        error: false,
                        messages: [],

                    },

                    relatoriototal: {

                        value: '',
                        error: false,
                        messages: [],

                    },
                    cash: {

                        value: '',
                        error: false,
                        messages: [],

                    },
                    card: {

                        value: '',
                        error: false,
                        messages: [],

                    },
                    dinheiro: {

                        value: '',
                        error: false,
                        messages: [],

                    },
                    totalcartao: {

                        value: '',
                        error: false,
                        messages: [],

                    },




                },
                list: [],
            },

            edit: {
                error: false,
                messages: [],

                fields: {
                    nome: {
                        value: '',
                        error: false,
                        messages: [],

                    },

                    valor: {
                        value: '',
                        error: false,
                        messages: [],

                    },

                    quantidade: {
                        value: '',
                        error: false,
                        messages: [],

                    },

                    valortotal: {
                        value: '',
                        error: false,
                        messages: [],

                    },
                },
            },

            view: {
                error: false,
                messages: [],
                fields: {
                    valortotalrecebido: {
                        value: '',
                        error: false,
                        messages: [],

                    },
                    desconto: {
                        value: '',
                        error: false,
                        messages: [],

                    },

                    valortotal: {
                        value: '',
                        error: false,
                        messages: [],

                    },
                    total: {
                        value: '',
                        error: false,
                        messages: [],

                    },
                    datavenda: {
                        value: '',
                        error: false,
                        messages: [],

                    },
                    subtotalcompra: {
                        value: '',
                        error: false,
                        messages: [],

                    },
                    troco: {
                        value: '',
                        error: false,
                        messages: [],

                    },
                },
                list: [],
            },

            remove: {
                error: false,
                messages: [],
                key: '',
                nome: '',

            },



            list: [],
        },


        products: {
            add: {
                error: false,
                messages: [],

                fields: {
                    codigodebarras: {
                        value: '',
                        error: false,
                        messages: [],

                    },

                    produto: {
                        value: '',
                        error: false,
                        messages: [],

                    },

                    marca: {
                        value: '',
                        error: false,
                        messages: [],

                    },

                    peso: {
                        value: '',
                        error: false,
                        messages: [],

                    },

                    categoria: {
                        value: '',
                        error: false,
                        messages: [],

                    },

                    quantidade: {
                        value: '',
                        error: false,
                        messages: [],

                    },

                    valorinicial: {
                        value: '',
                        error: false,
                        messages: [],

                    },

                    valorfinal: {
                        value: '',
                        error: false,
                        messages: [],

                    },

                    lucrodinheiro: {
                        value: '',
                        error: false,
                        messages: [],

                    },
                    lucroporcentagem: {
                        value: '',
                        error: false,
                        messages: [],

                    },

                    lucrototal: {
                        value: '',
                        error: false,
                        messages: [],

                    },

                    gastototal: {
                        value: '',
                        error: false,
                        messages: [],

                    },

                    undmedida: {
                        value: '',
                        error: false,
                        messages: [],

                    },
                    list: [],
                },
            },

            edit: {
                error: false,
                messages: [],

                fields: {
                    codigodebarras: {
                        value: '',
                        error: false,
                        messages: [],

                    },

                    produto: {
                        value: '',
                        error: false,
                        messages: [],

                    },

                    marca: {
                        value: '',
                        error: false,
                        messages: [],

                    },

                    peso: {
                        value: '',
                        error: false,
                        messages: [],

                    },

                    categoria: {
                        value: '',
                        error: false,
                        messages: [],

                    },

                    quantidade: {
                        value: '',
                        error: false,
                        messages: [],

                    },

                    valorinicial: {
                        value: '',
                        error: false,
                        messages: [],

                    },

                    valorfinal: {
                        value: '',
                        error: false,
                        messages: [],

                    },

                    lucrodinheiro: {
                        value: '',
                        error: false,
                        messages: [],

                    },

                    lucroporcentagem: {
                        value: '',
                        error: false,
                        messages: [],

                    },

                    lucrototal: {
                        value: '',
                        error: false,
                        messages: [],

                    },

                    gastototal: {
                        value: '',
                        error: false,
                        messages: [],

                    },

                    undmedida: {
                        value: '',
                        error: false,
                        messages: [],

                    },
                    list: [],
                },


            },

            remove: {
                error: false,
                messages: [],
                key: '',
                produto: '',
                marca: '',

            },
            list: [],
        },
        list: [],

        footer: {

            messages: [],
        },
    },
    methods: {



        //PRODUTOS
        // Abrindo Modal Add Product

        getProducts: function () {
            firebase.database().ref(App.firebase.path + '/products').on('value', function (data) {

                App.products.list = [];

                data.forEach(function (item) {

                    var product = item.val();
                    product.key = item.key;
                    product.lucroporcentagem = product.lucroporcentagem.toFixed(2).replace(".", ",");
                    product.gastototal = product.gastototal.toFixed(2).replace(".", ",");
                    product.lucrodinheiro = product.lucrodinheiro.toFixed(2).replace(".", ",");
                    product.valorinicial = parseFloat(product.valorinicial).toFixed(2).replace(".", ",");
                    product.valorfinal = parseFloat(product.valorfinal).toFixed(2).replace(".", ",").replace(" ", "");
                    //console.log(product)
                    // console.log(product);
                    // console.log(item.key);
                    App.products.list.push(product);


                });
            });
        },

        getProduct: function (key, callback) {
            firebase.database().ref(App.firebase.path + '/products/' + key).once('value').then(function (data) {
                var product = data.val();
                product.key = data.key;

                console.log(product);
                // AQUI PUXA O TODOS OS DADOS DO USUÁRIO console.log(user);
                callback(product);
            });
        },

        openAddProduct: function () {

            $('#modalProductAdd').modal();
            App.sales.add.messages = [];
        },

        addProduct: function () {

            // limpando erros do form
            App.products.add.error = false;
            App.products.add.messages = [];

            // limpando erros dos campos
            App.products.add.fields.produto.value = App.products.add.fields.produto.value.trim();
            App.products.add.fields.produto.error = false;
            App.products.add.fields.produto.messages = [];

            var error = false;

            // validando campos

            if (App.products.add.fields.produto.value == '') {
                App.products.add.fields.produto.error = true;
                App.products.add.fields.produto.messages.push('Campo obrigatório.');
                error = true;
            }


            // e todos os demais campos aqui...

            // se deu algum erro...
            if (error) {
                App.products.add.error = true;
                App.products.add.messages.push('Verifique todos os campos.');
                return;
            }

            firebase.database().ref(App.firebase.path + '/products').push({
                codigodebarras: App.products.add.fields.codigodebarras.value,
                produto: App.products.add.fields.produto.value,
                marca: App.products.add.fields.marca.value,
                peso: App.products.add.fields.peso.value,
                categoria: App.products.add.fields.categoria.value,
                quantidade: App.products.add.fields.quantidade.value,
                valorinicial: App.products.add.fields.valorinicial.value,
                valorfinal: App.products.add.fields.valorfinal.value,
                lucrodinheiro: App.products.add.fields.lucrodinheiro.value,
                lucroporcentagem: App.products.add.fields.lucroporcentagem.value,
                lucrototal: App.products.add.fields.lucrototal.value,
                gastototal: App.products.add.fields.gastototal.value,
                undmedida: App.products.add.fields.undmedida.value,


            })
                .then(function () {
                    App.products.add.messages = [];
                    App.products.add.fields.codigodebarras.value = '';
                    App.products.add.messages = [];
                    App.products.add.fields.produto.value = '';
                    App.products.add.messages = [];
                    App.products.add.fields.marca.value = '';
                    App.products.add.messages = [];
                    App.products.add.fields.peso.value = '';
                    App.products.add.messages = [];
                    App.products.add.fields.categoria.value = '';
                    App.products.add.messages = [];
                    App.products.add.fields.quantidade.value = '';
                    App.products.add.messages = [];
                    App.products.add.fields.valorinicial.value = '';
                    App.products.add.messages = [];
                    App.products.add.fields.valorfinal.value = '';
                    App.products.add.messages = [];
                    App.products.add.fields.lucrodinheiro.value = '';
                    App.products.add.messages = [];
                    App.products.add.fields.lucroporcentagem.value = '';
                    App.products.add.messages = [];
                    App.products.add.fields.lucrototal.value = '';
                    App.products.add.messages = [];
                    App.products.add.fields.gastototal.value = '';
                    App.products.add.messages = [];
                    App.products.add.fields.undmedida.value = '';


                    App.products.add.messages.push('Produto inserido inserido com sucesso!');

                })
                .catch(function (err) {
                    App.products.add.error = true;
                    App.products.add.messages = [];
                    App.products.add.messages.push('Aconteceu um erro interno. Tente novamente.');
                });

        },


        // Abrindo Modal Edit Product
        openEditProduct: function (key) {
            firebase.database().ref(App.firebase.path + '/products/' + key).once('value').then(function (data) {

                var product = data.val();
                product.key = data.key;
                console.log(product);


                // limpando erros do form
                App.products.edit.error = false;
                App.products.edit.messages = [];

                // limpando erros dos campos
                App.products.edit.fields.key = product.key;

                App.products.edit.fields.codigodebarras.value = product.codigodebarras;
                App.products.edit.fields.codigodebarras.error = false;
                App.products.edit.fields.codigodebarras.messages = [];

                App.products.edit.fields.produto.value = product.produto;
                App.products.edit.fields.produto.error = false;
                App.products.edit.fields.produto.messages = [];

                App.products.edit.fields.marca.value = product.marca;
                App.products.edit.fields.marca.error = false;
                App.products.edit.fields.marca.messages = [];


                App.products.edit.fields.peso.value = product.peso;
                App.products.edit.fields.peso.error = false;
                App.products.edit.fields.peso.messages = [];


                App.products.edit.fields.categoria.value = product.categoria;
                App.products.edit.fields.categoria.error = false;
                App.products.edit.fields.categoria.messages = [];


                App.products.edit.fields.quantidade.value = product.quantidade;
                App.products.edit.fields.quantidade.error = false;
                App.products.edit.fields.quantidade.messages = [];


                App.products.edit.fields.valorinicial.value = product.valorinicial;
                App.products.edit.fields.valorinicial.error = false;
                App.products.edit.fields.valorinicial.messages = [];


                App.products.edit.fields.valorfinal.value = product.valorfinal;
                App.products.edit.fields.valorfinal.error = false;
                App.products.edit.fields.valorfinal.messages = [];


                App.products.edit.fields.lucrodinheiro.value = product.lucrodinheiro;
                App.products.edit.fields.lucrodinheiro.error = false;
                App.products.edit.fields.lucrodinheiro.messages = [];


                App.products.edit.fields.lucroporcentagem.value = product.lucroporcentagem;
                App.products.edit.fields.lucroporcentagem.error = false;
                App.products.edit.fields.lucroporcentagem.messages = [];


                App.products.edit.fields.lucrototal.value = product.lucrototal;
                App.products.edit.fields.lucrototal.error = false;
                App.products.edit.fields.lucrototal.messages = [];


                App.products.edit.fields.gastototal.value = product.gastototal;
                App.products.edit.fields.gastototal.error = false;
                App.products.edit.fields.gastototal.messages = [];


                App.products.edit.fields.undmedida.value = product.undmedida;
                App.products.edit.fields.undmedida.error = false;
                App.products.edit.fields.undmedida.messages = [];



            });

            if (typeof product == 'undefined') {
                product = {
                    key: App.products.edit.fields.key,
                    codigodebarras: App.products.add.fields.codigodebarras.value,

                };
            }


            $('#modalProductEdit').modal();


        },

        editProduct: function () {

            // limpando erros do form
            App.products.edit.error = false;
            App.products.edit.messages = [];

            // limpando erros dos campos
            App.products.edit.fields.produto.value = App.products.edit.fields.produto.value.trim();
            App.products.edit.fields.produto.error = false;
            App.products.edit.fields.produto.messages = [];


            var error = false;

            // validando campos

            if (App.products.edit.fields.produto.value == '') {
                App.products.edit.fields.produto.error = true;
                App.products.edit.fields.produto.messages.push('Campo obrigatório.');
                error = true;
            }

            // e todos os demais campos aqui...

            // se deu algum erro...
            if (error) {
                App.products.edit.error = true;
                App.products.edit.messages.push('Verifique todos os campos.');
                return;
            }

            firebase.database().ref(App.firebase.path + '/products/' + App.products.edit.fields.key).set({
                codigodebarras: App.products.edit.fields.codigodebarras.value,
                produto: App.products.edit.fields.produto.value,
                marca: App.products.edit.fields.marca.value,
                peso: App.products.edit.fields.peso.value,
                categoria: App.products.edit.fields.categoria.value,
                quantidade: App.products.edit.fields.quantidade.value,
                valorinicial: App.products.edit.fields.valorinicial.value,
                valorfinal: App.products.edit.fields.valorfinal.value,
                lucrodinheiro: App.products.edit.fields.lucrodinheiro.value,
                lucroporcentagem: App.products.edit.fields.lucroporcentagem.value,
                lucrototal: App.products.edit.fields.lucrototal.value,
                gastototal: App.products.edit.fields.gastototal.value,
                undmedida: App.products.edit.fields.undmedida.value,
            })
                .then(function () {
                    App.products.edit.messages.push('Mercadoria editada com sucesso!');
                })
                .catch(function (err) {
                    App.products.edit.error = true;
                    App.products.edit.messages.push('Aconteceu um erro interno. Tente novamente.');
                });
        },
        // Route Tela Remove User
        goRemoveProduct: function (key) {
            $('#modalProductEdit').modal('hide');
            route.go('#/products-remove/' + key);
            console.log(key);

        },

        removeProduct: function () {
            App.products.remove.error = false;
            App.products.remove.messages = [];

            firebase.database().ref(App.firebase.path + '/products/' + App.products.remove.key).remove()
                .then(function () {
                    App.products.remove.key = '';
                    App.products.remove.produto = '';
                    App.products.remove.marca = '';
                    App.products.remove.messages.push('Mercadoria removida com sucesso!');
                    route.go('#/products');
                })
                .catch(function (err) {
                    App.products.remove.error = true;
                    App.products.remove.messages.push('Aconteceu um erro interno. Tente novamente.');
                });
        },





        //CAIXA
        // Abrindo Modal de Vendas
        openAddSale: function () {
            $('#modalSaleAdd').modal();
            App.sales.add.fields.nome.value = "FK"
            App.sales.add.fields.cash.value = "0"
            App.sales.add.fields.card.value = "0"
            App.sales.add.fields.quantidade.value = "1"
            App.sales.add.fields.desconto.value = "0"
        },

        clearNumber: function (number) {
            number = number.replace('R$ ', '');
            number = number.replace(/\./g, '');
            number = number.replace(',', '.');
            number = parseFloat(number);
            if (isNaN(number)) number = 0;
            return number;
        },

        numberFormat: function (number, precision) {
            if (typeof precision == 'undefined') precision = 2;
            return number_format(number, precision, ',', '.');
        },

        addNewSale: function () {


            var product = App.sales.add.fields.nome.value;
            var price = parseFloat(App.sales.add.fields.precoproduto.value);
            var amount = parseFloat(App.sales.add.fields.quantidade.value);

            if (!product || !price || !amount) {
                alert('Informe o produto!');
                return;
            }

            var product = {
                product: product,
                price: price,
                priceFormat: App.numberFormat(price),
                amount: amount,
                amountFormat: App.numberFormat(amount, 3)
            };

            product.total = product.amount * product.price;
            product.totalFormat = App.numberFormat(product.total);


            App.sales.list.push(product);
            App.calcTotalCaixa();

            App.sales.add.fields.nome.value = '';
            App.sales.add.messages = [];
            App.sales.add.fields.precoproduto.value = '';
            App.sales.add.messages = [];
            App.sales.add.fields.quantidade.value = '';
            App.sales.add.messages = [];




        },

        getSales: function () {
            firebase.database().ref(App.firebase.path + '/sales').on('value', function (data) {
                var totaldinheiro = 0;
                var totalcartao = 0;
                var totalgeral = 0;


                data.forEach(function (item) {
                    var listsales = item.val();
                    listsales.key = item.key;


                    // console.log((listsales.totalcompra)+" R$ - "+(listsales.datavenda));
                    App.sales.add.list.push(listsales);


                    totaldinheiro += parseFloat(listsales.cash);
                    totalcartao += parseFloat(listsales.card);
                    console.log(totalcartao);
                    totalgeral += listsales.totalcompra;
                    //console.log("total cash é igual a: "+ totalcartao);
                    //console.log(listsales);
                    listsales.cash = parseFloat(listsales.cash).toFixed(2).replace(".", ",");
                    listsales.card = parseFloat(listsales.card).toFixed(2).replace(".", ",");
                    listsales.subtotalcompra = parseFloat(listsales.subtotalcompra).toFixed(2).replace(".", ",");
                    listsales.totalcompra = listsales.totalcompra.toFixed(2).replace(".", ",");
                    App.sales.add.fields.dinheiro.value = totaldinheiro.toFixed(2).replace(".", ",");
                    App.sales.add.fields.totalcartao.value = totalcartao.toFixed(2).replace(".", ",");
                    App.sales.add.fields.relatoriototal.value = totalgeral.toFixed(2).replace(".", ",");

                    // console.log(subtotal)
                    // if (typeof subtotal != 'number' || isNaN(subtotal)) subtotal = 0;
                    // App.sales.add.fields.relatoriototal.value = subtotal;


                });



            });

        },


        calcTotalCaixa: function () {
            var subtotal = 0;
            var discount = parseFloat(App.sales.add.fields.desconto.value);
            var recebido = parseFloat(App.sales.add.fields.valortotalrecebido.value);
            var cash = parseFloat(App.sales.add.fields.cash.value);
            var card = parseFloat(App.sales.add.fields.card.value);
            var total = parseFloat(App.sales.add.fields.totalcompra.value);

            if (typeof cash != 'number' || isNaN(cash)) cash = 0;
            if (typeof card != 'number' || isNaN(card)) card = 0;
            if (typeof somaValorRecebido != 'number' || isNaN(somaValorRecebido)) somaValorRecebido = 0;
            if (typeof discount != 'number' || isNaN(discount)) discount = 0;

            for (var i in App.sales.list) {
                subtotal += App.sales.list[i].total;
            }
            //console.log(subtotal);



            var somaValorRecebido = cash + card;

            App.sales.add.fields.valortotalrecebido.value = somaValorRecebido;


            App.sales.add.fields.subtotalcompra.value = subtotal;
            // console.log(subtotal);

            if (App.sales.add.fields.discountType == 'value') {
                App.sales.add.fields.totalcompra.value = subtotal - discount;
            } else if (App.sales.add.fields.discountType == 'percent') {
                App.sales.add.fields.totalcompra.value = subtotal * (100 - discount) / 100;
            }

            if (App.sales.add.fields.valortotalrecebido.value < App.sales.add.fields.totalcompra.value) {
                // console.log("Algo de errado, você está recebendo menos do que deve...");
                App.sales.add.fields.troco.error = true;
            } else {
                // console.log("Ok, você está recebendo tanto quanto deve, confira o troco...");
                App.sales.add.fields.troco.error = false;
            }

            App.sales.add.fields.troco.value = (cash + card) - App.sales.add.fields.totalcompra.value;
            parseFloat(App.sales.add.fields.troco.value).toFixed(2);
            // App.sales.add.fields.subtotalFormat = App.numberFormat(App.sales.add.fields.addsubtotal);
            // App.sales.add.fields.totalFormat = App.numberFormat(App.sales.add.fields.total);

            // App.sales.add.fields.subtotalcompra.value = App.sales.add.fields.subtotalFormat;
            // App.sales.add.fields.totalcompra.value = App.sales.add.fields.totalFormat;

        },


        // Adicionando Venda  
        addSale: function () {


            if (App.sales.add.fields.card.value == "") {
                App.sales.add.fields.card.value = 0
            }
            if (App.sales.add.fields.cash.value == "") {
                App.sales.add.fields.cash.value = 0
            }
            var cashfloat = parseFloat(App.sales.add.fields.cash.value);
            var cardfloat = parseFloat(App.sales.add.fields.card.value);
            var somarecebido = cardfloat + cashfloat;
            if (somarecebido < App.sales.add.fields.totalcompra.value) {

                alert("Valor recebido abaixo do esperado.");
            }
            else if (somarecebido >= App.sales.add.fields.totalcompra.value){

                // limpando erros do form
                App.sales.add.error = false;
                App.sales.add.messages = [];

                // limpando erros dos campos
                App.sales.add.fields.valortotalrecebido.value = App.sales.add.fields.valortotalrecebido.value;
                App.sales.add.fields.valortotalrecebido.error = false;
                App.sales.add.fields.valortotalrecebido.messages = [];

                var error = false;

                // validando campos

                if (App.sales.add.fields.valortotalrecebido.value == '') {
                    App.sales.add.fields.valortotalrecebido.error = true;
                    App.sales.add.fields.valortotalrecebido.messages.push('Campo obrigatório.');
                    error = true;
                }



                // e todos os demais campos aqui...

                // se deu algum erro...
                if (error) {
                    App.sales.add.error = true;
                    App.sales.add.messages.push('Verifique todos os campos.');
                    return;
                }

                firebase.database().ref(App.firebase.path + '/sales').push({
                    cash: App.sales.add.fields.cash.value,
                    card: App.sales.add.fields.card.value,
                    desconto: App.sales.add.fields.desconto.value + " " + App.sales.add.fields.discountType,
                    totalcompra: App.sales.add.fields.totalcompra.value,
                    subtotalcompra: App.sales.add.fields.subtotalcompra.value,
                    valortotalrecebido: App.sales.add.fields.valortotalrecebido.value,
                    troco: App.sales.add.fields.troco.value,
                    produtos: App.sales.list,
                    datavenda: App.sales.add.fields.dataatual.value,



                })
                    .then(function () {
                        App.sales.add.messages = [];
                        App.sales.add.fields.nome.value = '';
                        App.sales.add.messages = [];
                        App.sales.add.fields.precoproduto.value = '';
                        App.sales.add.messages = [];
                        App.sales.add.fields.cash.value = '0,00';
                        App.sales.add.messages = [];
                        App.sales.add.fields.card.value = '0,00';
                        App.sales.add.messages = [];
                        App.sales.add.fields.quantidade.value = '';
                        App.sales.add.messages = [];
                        App.sales.add.fields.desconto.value = '0,00';
                        App.sales.add.messages = [];
                        App.sales.add.fields.totalcompra.value = '0,00';
                        App.sales.add.messages = [];
                        App.sales.add.fields.subtotalcompra.value = '0,00';
                        App.sales.add.messages = [];
                        App.sales.add.fields.valortotalrecebido.value = '0,00';
                        App.sales.add.messages = [];
                        App.sales.add.fields.troco.value = '0,00';
                        App.sales.add.messages = [];

                        App.sales.list = '';

                        alert('Venda inserida com sucesso!');

                    })
                    .catch(function (err) {
                        App.sales.add.error = true;
                        App.sales.add.messages = [];
                        App.sales.add.messages.push('Aconteceu um erro interno. Tente novamente.');
                    });
                    document.location.reload(true);
            }
        },

        removeSaleProduct: function (sale, i) {
            App.sales.list.splice(i, 1);
            App.calcTotalCaixa();

        },



        //FORNECEDORES    
        // Buscando Fornecedores 
        getProviders: function () {
            firebase.database().ref(App.firebase.path + '/providers').on('value', function (data) {

                App.providers.list = [];

                data.forEach(function (item) {

                    var provider = item.val();
                    provider.key = item.key;
                    // console.log(provider);
                    // console.log(item.key);
                    App.providers.list.push(provider);


                });

            });
        },


        // Buscando Fornecedor
        getProvider: function (key, callback) {
            firebase.database().ref(App.firebase.path + '/providers/' + key).once('value').then(function (data) {
                var provider = data.val();
                provider.key = data.key;

                // console.log(provider);
                // AQUI PUXA O TODOS OS DADOS DO USUÁRIO console.log(user);
                callback(provider);
            });
        },


        // Abrindo Modal User
        openProviderUser: function () {
            $('#modalProviderAdd').modal();
        },

        // Adicionando Fornecedor   
        addProvider: function () {

            // limpando erros do form
            App.providers.add.error = false;
            App.providers.add.messages = [];

            // limpando erros dos campos
            App.providers.add.fields.nome.value = App.providers.add.fields.nome.value.trim();
            App.providers.add.fields.nome.error = false;
            App.providers.add.fields.nome.messages = [];

            var error = false;

            // validando campos

            if (App.providers.add.fields.nome.value == '') {
                App.providers.add.fields.nome.error = true;
                App.providers.add.fields.nome.messages.push('Campo obrigatório.');
                error = true;
            }


            // e todos os demais campos aqui...

            // se deu algum erro...
            if (error) {
                App.providers.add.error = true;
                App.providers.add.messages.push('Verifique todos os campos.');
                return;
            }

            firebase.database().ref(App.firebase.path + '/providers').push({
                nome: App.providers.add.fields.nome.value,
                marca: App.providers.add.fields.marca.value,

            })
                .then(function () {
                    App.providers.add.messages = [];
                    App.providers.add.fields.nome.value = '';
                    App.providers.add.messages = [];
                    App.providers.add.fields.marca.value = '';

                    App.providers.add.messages.push('Usuário inserido com sucesso!');

                })
                .catch(function (err) {
                    App.providers.add.error = true;
                    App.providers.add.messages = [];
                    App.providers.add.messages.push('Aconteceu um erro interno. Tente novamente.');
                });

        },


        // Route Tela Edit Provider
        goEditProvider: function (key) {
            route.go('#/providers-edit/' + key);

        },

        // Abrindo Modal Edit Provider
        openEditProvider: function (key) {
            firebase.database().ref(App.firebase.path + '/providers/' + key).once('value').then(function (data) {

                var provider = data.val();
                provider.key = data.key;
                // console.log(provider);


                // limpando erros do form
                App.providers.edit.error = false;
                App.providers.edit.messages = [];

                // limpando erros dos campos
                App.providers.edit.fields.key = provider.key;

                App.providers.edit.fields.nome.value = provider.nome;
                App.providers.edit.fields.nome.error = false;
                App.providers.edit.fields.nome.messages = [];

                App.providers.edit.fields.marca.value = provider.marca;
                App.providers.edit.fields.marca.error = false;
                App.providers.edit.fields.marca.messages = [];



            });

            if (typeof provider == 'undefined') {
                provider = {
                    key: App.providers.edit.fields.key,
                    nome: App.providers.edit.fields.nome,
                };
            }


            $('#modalProviderEdit').modal();


        },
        openSale: function (key) {
            firebase.database().ref(App.firebase.path + '/sales/' + key).once('value').then(function (data) {
                App.sales.view.list = [];
                sale = data.val();
                sale.key = data.key;
                var subtotal = 0;

                console.log(sale.desconto);
                var split1 = sale.desconto.split(" ");
                var cvtsplit1 = split1[1];


                if (cvtsplit1 == "percent") {
                    App.sales.view.fields.desconto.value = split1[0] + "%";
                }
                else if (cvtsplit1 == "value") {
                    App.sales.view.fields.desconto.value = "R$" + parseFloat(split1[0]).toFixed(2).replace(".", ",");
                }




                App.sales.view.fields.datavenda.value = sale.datavenda;
                App.sales.view.fields.total.value = "R$" + parseFloat(sale.totalcompra).toFixed(2).replace(".", ",");
                App.sales.view.fields.subtotalcompra.value = "R$" + parseFloat(sale.subtotalcompra).toFixed(2).replace(".", ",");
                App.sales.view.fields.valortotalrecebido.value = "R$" + parseFloat(sale.valortotalrecebido).toFixed(2).replace(".", ",");
                App.sales.view.fields.troco.value = "R$" + parseFloat(sale.troco).toFixed(2).replace(".", ",");


                sale.produtos.forEach(function (sale) {

                    subtotal += sale.total;

                    App.sales.view.list.push(sale);


                });

            });

            if (typeof sale == 'undefined') {
                sale = {
                    key: App.sales.view.fields.key,
                    nome: App.sales.view.fields.nome,
                };
            }


            $('#modalSaleEdit').modal();


        },

        // Editando Provider
        editProvider: function () {

            // limpando erros do form
            App.providers.edit.error = false;
            App.providers.edit.messages = [];

            // limpando erros dos campos
            App.providers.edit.fields.nome.value = App.providers.edit.fields.nome.value.trim();
            App.providers.edit.fields.nome.error = false;
            App.providers.edit.fields.nome.messages = [];


            var error = false;

            // validando campos

            if (App.providers.edit.fields.nome.value == '') {
                App.providers.edit.fields.nome.error = true;
                App.providers.edit.fields.nome.messages.push('Campo obrigatório.');
                error = true;
            }

            // e todos os demais campos aqui...

            // se deu algum erro...
            if (error) {
                App.providers.edit.error = true;
                App.providers.edit.messages.push('Verifique todos os campos.');
                return;
            }

            firebase.database().ref(App.firebase.path + '/providers/' + App.providers.edit.fields.key).set({
                nome: App.providers.edit.fields.nome.value,
                marca: App.providers.edit.fields.marca.value,

            })
                .then(function () {
                    App.providers.edit.messages.push('Forcenedor editado com sucesso!');
                })
                .catch(function (err) {
                    App.providers.edit.error = true;
                    App.providers.edit.messages.push('Aconteceu um erro interno. Tente novamente.');
                });
        },

        // Abrindo Modal Remove Provider
        openRemoveProvider: function (provider) {
            if (typeof user == 'undefined') {
                provider = {
                    nome: App.providers.edit.fields.nome,
                    marca: App.providers.edit.fields.marca.value,
                };


            }

            // limpando erros do form
            App.providers.remove.error = false;
            App.providers.remove.messages = [];

            // limpando erros dos campos
            App.providers.remove.key = provider.key;
            App.providers.remove.codigo = provider.codigo;
            App.providers.remove.cliente = provider.cliente;

            $('#modalProvderEdit').modal('hide');
            $('#modalProviderRemove').modal();
        },


        // Route Tela Remove Provider
        goRemoveProvider: function (key) {
            $('#modalProviderEdit').modal('hide');
            route.go('#/providers-remove/' + key);
        },

        // Removendo Provider
        removeProvider: function () {
            App.providers.remove.error = false;
            App.providers.remove.messages = [];

            firebase.database().ref(App.firebase.path + '/providers/' + App.providers.remove.key).remove()
                .then(function () {
                    App.providers.remove.key = '';
                    App.providers.remove.nome = '';
                    App.providers.remove.marca = '';
                    App.providers.remove.messages.push('Fornecedor removido com sucesso!');
                    route.go('#/providers');
                })
                .catch(function (err) {
                    App.providers.remove.error = true;
                    App.providers.remove.messages.push('Aconteceu um erro interno. Tente novamente.');
                });
        },



        //CLIENTES 
        //Buscando usuários
        getUsers: function () {
            firebase.database().ref(App.firebase.path + '/users').on('value', function (data) {

                App.users.list = [];

                data.forEach(function (item) {

                    var user = item.val();
                    user.key = item.key;
                    // console.log(user);
                    // console.log(item.key);
                    App.users.list.push(user);
                });

            });

        },

        // Buscando usuário
        getUser: function (key, callback) {
            firebase.database().ref(App.firebase.path + '/users/' + key).once('value').then(function (data) {
                var user = data.val();
                user.key = data.key;

                // console.log(user);
                // AQUI PUXA O TODOS OS DADOS DO USUÁRIO console.log(user);
                callback(user);
            });
        },

        // Adicionando usuário
        openAddUser: function () {
            $('#modalUserAdd').modal();
        },
        addUser: function () {

            // limpando erros do form
            App.users.add.error = false;
            App.users.add.messages = [];

            // limpando erros dos campos
            App.users.add.fields.cliente.value = App.users.add.fields.cliente.value.trim();
            App.users.add.fields.cliente.error = false;
            App.users.add.fields.cliente.messages = [];
            App.users.add.fields.rua.value = App.users.add.fields.rua.value.trim();
            App.users.add.fields.rua.error = false;
            App.users.add.fields.rua.messages = [];
            App.users.add.fields.telefone.value = App.users.add.fields.telefone.value.trim();
            App.users.add.fields.telefone.error = false;
            App.users.add.fields.telefone.messages = [];
            App.users.add.fields.numero.value = App.users.add.fields.numero.value.trim();
            App.users.add.fields.numero.error = false;
            App.users.add.fields.numero.messages = [];

            App.users.add.fields.complemento.value = App.users.add.fields.complemento.value.trim();
            App.users.add.fields.complemento.error = false;
            App.users.add.fields.complemento.messages = [];

            var error = false;

            // validando campos

            if (App.users.add.fields.cliente.value == '') {
                App.users.add.fields.cliente.error = true;
                App.users.add.fields.cliente.messages.push('Campo obrigatório.');
                error = true;
            }

            if (App.users.add.fields.rua.value == '') {
                App.users.add.fields.rua.error = true;
                App.users.add.fields.rua.messages.push('Campo obrigatório.');
                error = true;
            }

            if (App.users.add.fields.telefone.value == '') {
                App.users.add.fields.telefone.error = true;
                App.users.add.fields.telefone.messages.push('Campo obrigatório.');
                error = true;
            }

            if (App.users.add.fields.numero.value == '') {
                App.users.add.fields.numero.error = true;
                App.users.add.fields.numero.messages.push('Campo obrigatório.');
                error = true;
            }

            // e todos os demais campos aqui...

            // se deu algum erro...
            if (error) {
                App.users.add.error = true;
                App.users.add.messages.push('Verifique todos os campos.');
                return;
            }

            firebase.database().ref(App.firebase.path + '/users').push({
                codigo: App.users.add.fields.codigo.value,
                cliente: App.users.add.fields.cliente.value,
                telefone: App.users.add.fields.telefone.value,
                cep: App.users.add.fields.cep.value,
                rua: App.users.add.fields.rua.value,
                numero: App.users.add.fields.numero.value,
                complemento: App.users.add.fields.complemento.value,
                bairro: App.users.add.fields.bairro.value,
                cidade: App.users.add.fields.cidade.value,
                uf: App.users.add.fields.uf.value,
                datacadastro: App.users.add.fields.datacadastro.value,
                status: App.users.add.fields.status.value,
                nome: App.users.add.fields.nome.value,
                idade: App.users.add.fields.idade.value,
                pet: App.users.add.fields.pet.value,
                genero: App.users.add.fields.genero.value,
                raca: App.users.add.fields.raca.value,
                temperamento: App.users.add.fields.temperamento.value,
                observacao: App.users.add.fields.observacao.value,

            })
                .then(function () {
                    App.users.add.messages = [];
                    App.users.add.fields.codigo.value = '';
                    App.users.add.fields.cliente.value = '';
                    App.users.add.fields.telefone.value = '';
                    App.users.add.fields.cep.value = '';
                    App.users.add.fields.rua.value = '';
                    App.users.add.fields.numero.value = '';
                    App.users.add.fields.complemento.value = '';
                    App.users.add.fields.bairro.value = '';
                    App.users.add.fields.cidade.value = '';
                    App.users.add.fields.uf.value = '';
                    App.users.add.fields.datacadastro.value = '';
                    App.users.add.fields.status.value = '';
                    App.users.add.fields.nome.value = '';
                    App.users.add.fields.idade.value = '';
                    App.users.add.fields.pet.value = '';
                    App.users.add.fields.genero.value = '';
                    App.users.add.fields.raca.value = '';
                    App.users.add.fields.temperamento.value = '';
                    App.users.add.fields.observacao.value = '';




                    App.users.add.messages.push('Usuário inserido com sucesso!');

                })
                .catch(function (err) {
                    App.users.add.error = true;
                    App.users.add.messages = [];
                    App.users.add.messages.push('Aconteceu um erro interno. Tente novamente.');
                });

        },

        // Abrindo Modal Edit User
        openEditUser: function (key) {
            firebase.database().ref(App.firebase.path + '/users/' + key).once('value').then(function (data) {

                var user = data.val();
                user.key = data.key;
                // console.log(user);


                // limpando erros do form
                App.users.edit.error = false;
                App.users.edit.messages = [];

                // limpando erros dos campos
                App.users.edit.fields.key = user.key;

                App.users.edit.fields.codigo.value = user.codigo;
                App.users.edit.fields.codigo.error = false;
                App.users.edit.fields.codigo.messages = [];

                App.users.edit.fields.cliente.value = user.cliente;
                App.users.edit.fields.cliente.error = false;
                App.users.edit.fields.cliente.messages = [];

                App.users.edit.fields.telefone.value = user.telefone;
                App.users.edit.fields.telefone.error = false;
                App.users.edit.fields.telefone.messages = [];

                App.users.edit.fields.cep.value = user.cep;
                App.users.edit.fields.cep.error = false;
                App.users.edit.fields.cep.messages = [];


                App.users.edit.fields.rua.value = user.rua;
                App.users.edit.fields.rua.error = false;
                App.users.edit.fields.rua.messages = [];


                App.users.edit.fields.numero.value = user.numero;
                App.users.edit.fields.numero.error = false;
                App.users.edit.fields.numero.messages = [];


                App.users.edit.fields.complemento.value = user.complemento;
                App.users.edit.fields.complemento.error = false;
                App.users.edit.fields.complemento.messages = [];


                App.users.edit.fields.bairro.value = user.bairro;
                App.users.edit.fields.bairro.error = false;
                App.users.edit.fields.bairro.messages = [];


                App.users.edit.fields.cidade.value = user.cidade;
                App.users.edit.fields.cidade.error = false;
                App.users.edit.fields.cidade.messages = [];


                App.users.edit.fields.uf.value = user.uf;
                App.users.edit.fields.uf.error = false;
                App.users.edit.fields.uf.messages = [];


                App.users.edit.fields.datacadastro.value = user.datacadastro;
                App.users.edit.fields.datacadastro.error = false;
                App.users.edit.fields.datacadastro.messages = [];


                App.users.edit.fields.status.value = user.status;
                App.users.edit.fields.status.error = false;
                App.users.edit.fields.status.messages = [];


                App.users.edit.fields.nome.value = user.nome;
                App.users.edit.fields.nome.error = false;
                App.users.edit.fields.nome.messages = [];


                App.users.edit.fields.idade.value = user.idade;
                App.users.edit.fields.idade.error = false;
                App.users.edit.fields.idade.messages = [];


                App.users.edit.fields.pet.value = user.pet;
                App.users.edit.fields.pet.error = false;
                App.users.edit.fields.pet.messages = [];


                App.users.edit.fields.genero.value = user.genero;
                App.users.edit.fields.genero.error = false;
                App.users.edit.fields.genero.messages = [];


                App.users.edit.fields.raca.value = user.raca;
                App.users.edit.fields.raca.error = false;
                App.users.edit.fields.raca.messages = [];


                App.users.edit.fields.temperamento.value = user.temperamento;
                App.users.edit.fields.temperamento.error = false;
                App.users.edit.fields.temperamento.messages = [];


                App.users.edit.fields.observacao.value = user.observacao;
                App.users.edit.fields.observacao.error = false;
                App.users.edit.fields.observacao.messages = [];


            });

            if (typeof user == 'undefined') {
                user = {
                    key: App.users.edit.fields.key,
                    cliente: App.users.edit.fields.cliente,
                };
            }


            $('#modalUserEdit').modal();


        },

        // Route Tela Edit User
        goEditUser: function (key) {
            route.go('#/users-edit/' + key);

        },

        // Editando User
        editUser: function () {

            // limpando erros do form
            App.users.edit.error = false;
            App.users.edit.messages = [];

            // limpando erros dos campos
            App.users.edit.fields.cliente.value = App.users.edit.fields.cliente.value.trim();
            App.users.edit.fields.cliente.error = false;
            App.users.edit.fields.cliente.messages = [];


            var error = false;

            // validando campos

            if (App.users.edit.fields.cliente.value == '') {
                App.users.edit.fields.cliente.error = true;
                App.users.edit.fields.cliente.messages.push('Campo obrigatório.');
                error = true;
            }

            // e todos os demais campos aqui...

            // se deu algum erro...
            if (error) {
                App.users.edit.error = true;
                App.users.edit.messages.push('Verifique todos os campos.');
                return;
            }

            firebase.database().ref(App.firebase.path + '/users/' + App.users.edit.fields.key).set({
                codigo: App.users.edit.fields.codigo.value,
                cliente: App.users.edit.fields.cliente.value,
                telefone: App.users.edit.fields.telefone.value,
                cep: App.users.edit.fields.cep.value,
                rua: App.users.edit.fields.rua.value,
                numero: App.users.edit.fields.numero.value,
                complemento: App.users.edit.fields.complemento.value,
                bairro: App.users.edit.fields.bairro.value,
                cidade: App.users.edit.fields.cidade.value,
                uf: App.users.edit.fields.uf.value,
                datacadastro: App.users.edit.fields.datacadastro.value,
                status: App.users.edit.fields.status.value,
                nome: App.users.edit.fields.nome.value,
                idade: App.users.edit.fields.idade.value,
                pet: App.users.edit.fields.pet.value,
                genero: App.users.edit.fields.genero.value,
                raca: App.users.edit.fields.raca.value,
                temperamento: App.users.edit.fields.temperamento.value,
                observacao: App.users.edit.fields.observacao.value
            })
                .then(function () {
                    App.users.edit.messages.push('Usuário editado com sucesso!');
                })
                .catch(function (err) {
                    App.users.edit.error = true;
                    App.users.edit.messages.push('Aconteceu um erro interno. Tente novamente.');
                });
        },

        // Abrindo Modal Remove User
        openRemoveUser: function (user) {
            if (typeof user == 'undefined') {
                user = {
                    key: App.users.edit.fields.key,
                    cliente: App.users.edit.fields.cliente.value,
                };


            }

            // limpando erros do form
            App.users.remove.error = false;
            App.users.remove.messages = [];

            // limpando erros dos campos
            App.users.remove.key = user.key;
            App.users.remove.codigo = user.codigo;
            App.users.remove.cliente = user.cliente;

            $('#modalUserEdit').modal('hide');
            $('#modalUserRemove').modal();
        },

        // Route Tela Remove User
        goRemoveUser: function (key) {
            $('#modalUserEdit').modal('hide');
            route.go('#/users-remove/' + key);
        },

        // Removendo user
        removeUser: function () {
            App.users.remove.error = false;
            App.users.remove.messages = [];

            firebase.database().ref(App.firebase.path + '/users/' + App.users.remove.key).remove()
                .then(function () {
                    App.users.remove.key = '';
                    App.users.remove.codigo = '';
                    App.users.remove.cliente = '';
                    App.users.remove.messages.push('Usuário removido com sucesso!');
                    route.go('#/users');
                })
                .catch(function (err) {
                    App.users.remove.error = true;
                    App.users.remove.messages.push('Aconteceu um erro interno. Tente novamente.');
                });
        },

    },



});

App.calcTotalCaixa();
App.getProducts();
App.getUsers();
App.getProviders();
App.getSales();


document.cookie;
function deslogar() {

    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    window.location.href = "/";

}
var route = new FMRoute();
// HOME

route.get('/', function (vars, next) {

    logado = true;
    if (document.cookie) {
        App.page.current = 'home';
    }
    else {
        window.location.href = "/login.html"
    }
    next();
});
route.get('/logado', function (vars, next) {
    alert("entrou logado");
    document.cookie = "username=logado; path=/";
    window.location.href = "/"
});
route.get('/deslogado', function (vars, next) {
    alert("entrou deslogado");
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.href = "/"
});

route.get('/home', function (vars, next) {
    window.location.href = "home"

    next();
});
// Fornecedores - Providers
route.get('/providers', function (vars, next) {
    App.page.current = 'providers';

    next();
});

route.get('/vendas', function (vars, next) {
    App.page.current = 'vendas';

    next();
});


route.get('/graficos', function (vars, next) {

    window.location.href = "/graficoscanvas.html"


    next();
});

route.get('/caixa', function (vars, next) {

    logado = true;
    if (document.cookie) {
        App.page.current = 'caixa';
    }
    else {
        window.location.href = "/login.html"
    }
    next();
    next();
});



route.get('/providers-edit/:key', function (vars, next) {
    App.page.current = 'providers-edit';
    // MINIMIZADO POPULACAO 
    App.getProvider(vars.key, function (provider) {
        // limpando erros do form
        App.providers.edit.error = false;
        App.providers.edit.messages = [];

        // limpando erros dos campos
        App.providers.edit.fields.key = provider.key;

        App.providers.edit.fields.nome.value = provider.nome;
        App.providers.edit.fields.nome.error = false;
        App.providers.edit.fields.nome.messages = [];

        App.providers.edit.fields.marca.value = provider.marca;
        App.providers.edit.fields.marca.error = false;
        App.providers.edit.fields.marca.messages = [];



    });

    next();
});

route.get('/providers-remove/:key', function (vars, next) {
    App.page.current = 'providers-remove';

    App.getProvider(vars.key, function (provider) {
        // limpando erros do form
        App.providers.remove.error = false;
        App.providers.remove.messages = [];

        // limpando erros dos campos
        App.providers.remove.key = provider.key;
        App.providers.remove.nome = provider.nome;
        App.providers.remove.marca = provider.marca;

    });

    next();
});



// Produtos - Products
route.get('/products', function (vars, next) {
    App.page.current = 'products';

    next();
});

route.get('/products-remove/:key', function (vars, next) {
    App.page.current = 'products-remove';

    App.getProduct(vars.key, function (product) {
        // limpando erros do form
        App.products.remove.error = false;
        App.products.remove.messages = [];

        // limpando erros dos campos
        App.products.remove.key = product.key;
        App.products.remove.produto = product.produto;
        App.products.remove.marca = product.marca;

    });

    next();
});


// Usuarios - Users
route.get('/users', function (vars, next) {
    App.page.current = 'users';

    next();
});

route.get('/users-edit/:key', function (vars, next) {
    App.page.current = 'users-edit';
    // MINIMIZADO POPULACAO 
    App.getUser(vars.key, function (user) {
        // limpando erros do form
        App.users.edit.error = false;
        App.users.edit.messages = [];

        // limpando erros dos campos
        App.users.edit.fields.key = user.key;

        App.users.edit.fields.codigo.value = user.codigo;
        App.users.edit.fields.codigo.error = false;
        App.users.edit.fields.codigo.messages = [];

        App.users.edit.fields.cliente.value = user.cliente;
        App.users.edit.fields.cliente.error = false;
        App.users.edit.fields.cliente.messages = [];

        App.users.edit.fields.telefone.value = user.telefone;
        App.users.edit.fields.telefone.error = false;
        App.users.edit.fields.telefone.messages = [];

        App.users.edit.fields.cep.value = user.cep;
        App.users.edit.fields.cep.error = false;
        App.users.edit.fields.cep.messages = [];


        App.users.edit.fields.rua.value = user.rua;
        App.users.edit.fields.rua.error = false;
        App.users.edit.fields.rua.messages = [];


        App.users.edit.fields.numero.value = user.numero;
        App.users.edit.fields.numero.error = false;
        App.users.edit.fields.numero.messages = [];

        App.users.edit.fields.complemento.value = user.complemento;
        App.users.edit.fields.complemento.error = false;
        App.users.edit.fields.complemento.messages = [];


        App.users.edit.fields.bairro.value = user.bairro;
        App.users.edit.fields.bairro.error = false;
        App.users.edit.fields.bairro.messages = [];


        App.users.edit.fields.cidade.value = user.cidade;
        App.users.edit.fields.cidade.error = false;
        App.users.edit.fields.cidade.messages = [];


        App.users.edit.fields.uf.value = user.uf;
        App.users.edit.fields.uf.error = false;
        App.users.edit.fields.uf.messages = [];


        App.users.edit.fields.datacadastro.value = user.datacadastro;
        App.users.edit.fields.datacadastro.error = false;
        App.users.edit.fields.datacadastro.messages = [];


        App.users.edit.fields.status.value = user.status;
        App.users.edit.fields.status.error = false;
        App.users.edit.fields.status.messages = [];


        App.users.edit.fields.nome.value = user.nome;
        App.users.edit.fields.nome.error = false;
        App.users.edit.fields.nome.messages = [];


        App.users.edit.fields.idade.value = user.idade;
        App.users.edit.fields.idade.error = false;
        App.users.edit.fields.idade.messages = [];


        App.users.edit.fields.pet.value = user.pet;
        App.users.edit.fields.pet.error = false;
        App.users.edit.fields.pet.messages = [];


        App.users.edit.fields.genero.value = user.genero;
        App.users.edit.fields.genero.error = false;
        App.users.edit.fields.genero.messages = [];


        App.users.edit.fields.raca.value = user.raca;
        App.users.edit.fields.raca.error = false;
        App.users.edit.fields.raca.messages = [];


        App.users.edit.fields.temperamento.value = user.temperamento;
        App.users.edit.fields.temperamento.error = false;
        App.users.edit.fields.temperamento.messages = [];


        App.users.edit.fields.observacao.value = user.observacao;
        App.users.edit.fields.observacao.error = false;
        App.users.edit.fields.observacao.messages = [];


    });

    next();
});

route.get('/users-remove/:key', function (vars, next) {
    App.page.current = 'users-remove';

    App.getUser(vars.key, function (user) {
        // limpando erros do form
        App.users.remove.error = false;
        App.users.remove.messages = [];

        // limpando erros dos campos
        App.users.remove.key = user.key;
        App.users.remove.codigo = user.codigo;
        App.users.remove.cliente = user.cliente;

    });

    next();
});




// Caixa - Sale
route.get('/caixa', function (vars, next) {
    App.page.current = 'caixa';

    next();
});

// Nao existe - 404 not found
route.error('404', function (vars, next) {
    App.page.current = '404';

    next();
});

route.run();


// API CEP
function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    App.users.add.fields.rua.value = ("");
    App.users.add.fields.bairro.value = ("");
    App.users.add.fields.cidade.value = ("");
    App.users.add.fields.uf.value = ("");
    App.users.edit.fields.rua.value = ("");
    App.users.edit.fields.bairro.value = ("");
    App.users.edit.fields.cidade.value = ("");
    App.users.edit.fields.uf.value = ("");

};

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        App.users.add.fields.rua.value = (conteudo.logradouro);
        App.users.add.fields.bairro.value = (conteudo.bairro);
        App.users.add.fields.cidade.value = (conteudo.localidade);
        App.users.add.fields.uf.value = (conteudo.uf);
        App.users.edit.fields.rua.value = (conteudo.logradouro);
        App.users.edit.fields.bairro.value = (conteudo.bairro);
        App.users.edit.fields.cidade.value = (conteudo.localidade);
        App.users.edit.fields.uf.value = (conteudo.uf);
    } //end if.
    else {
        //CEP não Encontrado.
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
};

function pesquisacep(valor) {

    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if (validacep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            App.users.add.fields.rua.value = "...";
            App.users.add.fields.bairro.value = "...";
            App.users.add.fields.cidade.value = "...";
            App.users.add.fields.uf.value = "...";

            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);

        } //end if.
        else {
            //cep é inválido.
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
    }
}










function calcTotalCompra() {


    var precoproduto = parseFloat(App.sales.add.fields.precoproduto.value);
    var quantidade = parseFloat(App.sales.add.fields.quantidade.value);
    var somaValorFinal = precoproduto * quantidade;

    App.sales.add.fields.valortotalcompra.value = somaValorFinal;

    if (App.sales.add.fields.quantidade.value == '') {
        App.sales.add.fields.quantidade.value = 1;
    }
}

function calcRecebido() {
    var cash = parseFloat(App.sales.add.fields.cash.value).toFixed(2);
    var card = parseFloat(App.sales.add.fields.card.value).toFixed(2);
    var precoproduto = parseFloat(App.sales.add.fields.precoproduto.value).toFixed(2);
    var quantidade = parseFloat(App.sales.add.fields.quantidade.value).toFixed(2);
    var desconto = parseFloat(App.sales.add.fields.desconto.value).toFixed(2);

    var somaValorFinal = precoproduto * quantidade;

    var somaValorRecebido = cash + card;
    var somaTroco = somaValorRecebido - somaValorFinal;
    var somaDesconto = parseFloat(somaTroco + desconto).toFixed(2);
    App.sales.add.fields.valortotalrecebido.value = somaValorRecebido;

    App.sales.add.fields.troco.value = somaDesconto;

    if (App.sales.add.fields.cash.value == '') {
        App.sales.add.fields.cash.value = 0;
    }
    if (App.sales.add.fields.card.value == '') {
        App.sales.add.fields.card.value = 0;
    }

    if (App.sales.add.fields.valortotalrecebido.value < App.sales.add.fields.valortotalcompra.value) {
        console.log("Algo de errado, você está recebendo menos do que deve...");
        App.sales.add.fields.troco.error = true;
    } else {
        console.log("Ok, você está recebendo tanto quanto deve, confira o troco...");

    }

}


// pega a porcentagem e calcula automaticamente o valor final
function calcValorFinal() {

    var preco = parseFloat(App.products.add.fields.valorinicial.value);
    var valorfinal = parseFloat(App.products.add.fields.valorfinal.value);
    var porcentagem = parseFloat(App.products.add.fields.lucroporcentagem.value);
    var total = preco * (porcentagem / 100);
    var result = total + preco;
    var ganhound = valorfinal - preco;
    App.products.add.fields.lucrodinheiro.value = ganhound;
    App.products.add.fields.valorfinal.value = result;


    var gastototal = preco * parseFloat(App.products.add.fields.quantidade.value);
    App.products.add.fields.gastototal.value = gastototal;

    var lucrototal = total * parseFloat(App.products.add.fields.quantidade.value);
    App.products.add.fields.lucrototal.value = lucrototal;
    console.log("Seu lucro foi de " + total + " e o valor final será de " + result);
}


// pega valor final e calcula automaticamente a porcentagem
function calcPorcentagem() {
    var preco = parseFloat(App.products.add.fields.valorinicial.value);
    var valorfinal = parseFloat(App.products.add.fields.valorfinal.value);
    var total = valorfinal - preco;
    var porcentagem = total / (preco) * 100;
    App.products.add.fields.lucroporcentagem.value = porcentagem;
    App.products.add.fields.lucrodinheiro.value = total;


    var lucrototal = total * parseFloat(App.products.add.fields.quantidade.value);
    App.products.add.fields.lucrototal.value = lucrototal;


    console.log("Valor inicial foi de R$:" + preco + ", seu valor final de: R$" + valorfinal + " e seu lucro foi de " + porcentagem + "% e: " + total);

}

function editValorFinal() {

    var preco = parseFloat(App.products.edit.fields.valorinicial.value);
    var valorfinal = parseFloat(App.products.edit.fields.valorfinal.value);
    var porcentagem = parseFloat(App.products.edit.fields.lucroporcentagem.value);
    var total = preco * (porcentagem / 100);
    var result = total + preco;
    App.products.edit.fields.lucrodinheiro.value = total;
    App.products.edit.fields.valorfinal.value = result;


    var gastototal = preco * parseFloat(App.products.edit.fields.quantidade.value);
    App.products.edit.fields.gastototal.value = gastototal;

    var lucrototal = total * parseFloat(App.products.edit.fields.quantidade.value);
    App.products.edit.fields.lucrototal.value = lucrototal;
    console.log("Seu lucro foi de " + total + " e o valor final será de " + result);


}

function editPorcentagem() {
    var preco = parseFloat(App.products.edit.fields.valorinicial.value);
    var valorfinal = parseFloat(App.products.edit.fields.valorfinal.value);
    var total = valorfinal - preco;
    var porcentagem = total / (preco) * 100;
    App.products.edit.fields.lucroporcentagem.value = porcentagem;
    App.products.edit.fields.lucrodinheiro.value = total;


    var lucrototal = total * parseFloat(App.products.edit.fields.quantidade.value);
    App.products.edit.fields.lucrototal.value = lucrototal;


    console.log("Valor inicial foi de R$:" + preco + ", seu valor final de: R$" + valorfinal + " e seu lucro foi de " + porcentagem + "%");

}

function moveRelogio() {

    var date = new Date();
    var year = date.getFullYear();

    momentoAtual = new Date()
    var correct = 1;


    var dia = momentoAtual.getDate();
    if (dia < 10) {
        dia = "0" + dia;
    }

    var mes = momentoAtual.getMonth() + correct;
    if (mes < 10) {
        mes = "0" + mes;
    }

    var ano = momentoAtual.getFullYear();


    var hora = momentoAtual.getHours();
    if (hora < 10) {
        hora = "0" + hora;
    }


    var minuto = momentoAtual.getMinutes();
    if (minuto < 10) {
        minuto = "0" + minuto;
    }


    var segundo = momentoAtual.getSeconds();
    if (segundo < 10) {
        segundo = "0" + segundo;
    }



    horaImprimivel = dia + "/" + mes + "/" + ano + " - " + hora + ":" + minuto + ":" + segundo;
    horaImprimivel2 = dia + "/" + mes + "/" + ano;

    document.getElementById("yearfooter").innerHTML = year;
    document.form_relogio.relogio.value = horaImprimivel;
    App.users.add.fields.dataatual.value = horaImprimivel;
    App.sales.add.fields.dataatual.value = horaImprimivel;

    setTimeout("moveRelogio()", 1000)
}








// function DataeHora(){
// var tmp =0;


// var dt = new Date();
// var dia = dt.getDate();



// var mt = new Date();
// var mes = mt.getMonth() + tmp;


// var yr = new Date();
// var ano = yr.getFullYear();




// var mn = new Date();
// var minuto = mn.getMinutes() +tmp ;
// if (minuto < 10){
//     minuto = "0" + minuuto;
// }



// var hr = new Date();
// var hora = hr.getHours();
// if (hora < 10){
//     hora = "0" + hora;
// }



// var sec = new Date();
// var segundo = sec.getSeconds();
// if (segundo < 10){
//     segundo = "0" + segundo;
// }





// "Janeiro", "Feveireiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"

// var meses = new Array(1,2,3,4,5,6,7,8,9);
// document.write(dia + "/" + meses[mes] + "/" + ano + ", " + hora + ":" + minuto + ":" + segundo +"</br>");
// }

// window.setInterval("DataeHora()",1000);



// var Elem = document.getElementById("clock");
// function Horario() {
//     var Hoje = new Date();
//     var Horas = Hoje.getHours();
//     if (Horas < 10) {
//         Horas = "0" + Horas;
//     }
//     var Minutos = Hoje.getMinutes();
//     if (Minutos < 10) {
//         Minutos = "0" + Minutos;
//     }
//     var Segundos = Hoje.getSeconds();
//     if (Segundos < 10) {
//         Segundos = "0" + Segundos;
//     }
//     Elem = document.write(Horas + ":" + Minutos + ":" + Segundos + "</br>");
// }
// window.setInterval("Horario()", 1000);


function number_format(number, decimals, decPoint, thousandsSep) {// eslint-disable-line camelcase
    number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
    var n = !isFinite(+number) ? 0 : +number;
    var prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
    var sep = typeof thousandsSep === 'undefined' ? ',' : thousandsSep;
    var dec = typeof decPoint === 'undefined' ? '.' : decPoint;
    var s = '';

    var toFixedFix = function (n, prec) {
        if (('' + n).indexOf('e') === -1) {
            return +(Math.round(n + 'e+' + prec) + 'e-' + prec);
        } else {
            var arr = ('' + n).split('e');
            var sig = '';
            if (+arr[1] + prec > 0) {
                sig = '+';
            }
            return (+(Math.round(+arr[0] + 'e' + sig + (+arr[1] + prec)) + 'e-' + prec)).toFixed(prec);
        }
    };

    // @todo: for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec).toString() : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }

    return s.join(dec);
}


$(function maskmoney() {

    $(App.sales.add.fields.precoproduto.value).maskMoney({
        thousands: '.',
        decimal: ','
    });


    $(App.sales.add.fields.precoproduto.value).maskMoney({
        thousands: '.',
        decimal: ','
    });


    $(App.sales.add.fields.desconto.value).maskMoney({
        thousands: '.',
        decimal: ','
    });


    $(App.sales.add.fields.quantidade.value).maskMoney({
        thousands: '.',
        decimal: ',',
        precision: 3
    });

    $(App.sales.add.fields.nome.value).maskMoney({
        thousands: '.',
        decimal: ',',
        precision: 3
    });


    $(App.sales.add.fields.precoproduto.value).maskMoney({
        thousands: '.',
        decimal: ',',
        precision: 3
    });


    $(App.sales.add.fields.desconto.value).on('change', function () {
        App.calcTotalCaixa();

    });


    // $(App.sales.add.fields.nome.value).mask("999.999.990,00", {reverse: true});

    App.sales.add.fields.discountType = 'percent';
    App.sales.add.fields.desconto.value = '0';
    var porcentagem = App.sales.add.fields.desconto.value;

    $(porcentagem).trigger('change');

});




function CalctotalCaixa() {
    var subtotal = 0;
    var discount = parseFloat(App.sales.add.fields.desconto.value);
    var recebido = parseFloat(App.sales.add.fields.valortotalrecebido.value);
    var cash = parseFloat(App.sales.add.fields.cash.value);
    var card = parseFloat(App.sales.add.fields.card.value);
    var total = parseFloat(App.sales.add.fields.totalcompra.value);

    if (typeof cash != 'number' || isNaN(cash)) cash = 0;
    if (typeof card != 'number' || isNaN(card)) card = 0;
    if (typeof somaValorRecebido != 'number' || isNaN(somaValorRecebido)) somaValorRecebido = 0;
    if (typeof discount != 'number' || isNaN(discount)) discount = 0;

    for (var i in App.sales.list) {
        subtotal += App.sales.list[i].total;
    }

    var somaValorRecebido = parseFloat(cash + card).toFixed(2);

    App.sales.add.fields.valortotalrecebido.value = somaValorRecebido;
    var totalcompra = parseFloat(App.sales.add.fields.totalcompra.value).toFixed(2);

    App.sales.add.fields.subtotalcompra.value = subtotal;
    console.log(subtotal);

    if (App.sales.add.fields.discountType == 'value') {
        App.sales.add.fields.totalcompra.value = parseFloat(subtotal - discount).toFixed(2);
    } else if (App.sales.add.fields.discountType == 'percent') {
        App.sales.add.fields.totalcompra.value = parseFloat(subtotal * (100 - discount) / 100).toFixed(2);
    }

    if (App.sales.add.fields.valortotalrecebido.value < App.sales.add.fields.totalcompra.value) {
        console.log("Algo de errado, você está recebendo menos do que deve...");
        App.sales.add.fields.troco.error = true;
    } else {
        console.log("Ok, você está recebendo tanto quanto deve, confira o troco...");
        App.sales.add.fields.troco.error = false;
    }

    App.sales.add.fields.troco.value = (somaValorRecebido - totalcompra).toFixed(2);
}

if (App.sales.add.fields.tipodevenda.value == 'Pet Shop') {
    alert("Esta vazio o campo de tipo de venda");

}
