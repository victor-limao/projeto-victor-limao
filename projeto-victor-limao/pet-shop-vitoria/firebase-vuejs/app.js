
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
            current: '',
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

        ordemdeservicosbanhoetosa: {
            add: {
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
                remove: {
                    error: false,
                    messages: [],
                    key: '',
                    nome: '',

                },
                getlist: {
                    list: [],
                },
                list: [],

            },

            edit: {
                error: false,
                messages: [],

                fields: {
                    key: '',

                    keyclient: {
                        value: '',
                        error: false,
                        messages: [],
                    },
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
                    servico: {
                        value: '',
                        error: false,
                        messages: [],
                    },
                    taxidog: {
                        value: '',
                        error: false,
                        messages: [],
                    },
                    valorservico: {
                        value: '',
                        error: false,
                        messages: [],
                    },
                    dataservico: {
                        value: '',
                        error: false,
                        messages: [],
                    },
                    obsservico: {
                        value: '',
                        error: false,
                        messages: [],
                    },



                },
            },
            edit2: {
                error: false,
                messages: [],

                fields: {
                    key: '',
                    keypedido: {
                        value: '',
                        error: false,
                        messages: [],
                    },
                    keyclient: {
                        value: '',
                        error: false,
                        messages: [],
                    },
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
                    servico: {
                        value: '',
                        error: false,
                        messages: [],
                    },
                    taxidog: {
                        value: '',
                        error: false,
                        messages: [],
                    },
                    valorservico: {
                        value: '',
                        error: false,
                        messages: [],
                    },
                    dataservico: {
                        value: '',
                        error: false,
                        messages: [],
                    },
                    obsservico: {
                        value: '',
                        error: false,
                        messages: [],
                    },
                    statuspedido: {
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
            getlist: {
                list: [],
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
                        value: '1',
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

                        value: '0,00',
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

                addlist: [],
                addlist1: [],
                addlist2: [],
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

        aberturacaixa: {
            select: {
                selectlist: [],
            },
            abrircaixa: {
                fields: {
                    valor: {
                        value: '',
                        error: false,
                        messages: [],
                    },
                    data: {
                        value: '',
                        error: false,
                        messages: [],
                    },
                    admin: {
                        value: '',
                        error: false,
                        messages: [],
                    },
                },
                list: [],
            },
            fecharcaixa: {
                fields: {
                    totalcartao: {
                        value: '',
                        error: false,
                        messages: [],
                    },
                    totaldinheiro: {
                        value: '',
                        error: false,
                        messages: [],
                    },
                    totalreforco: {
                        value: '',
                        error: false,
                        messages: [],
                    },
                    totalsangria: {
                        value: '',
                        error: false,
                        messages: [],
                    },
                    totalbalanca: {
                        value: '',
                        error: false,
                        messages: [],
                    },
                    totalrecebidocash: {
                        value: '',
                        error: false,
                        messages: [],
                    },
                    totalrecebidocard: {
                        value: '',
                        error: false,
                        messages: [],
                    },

                },

                list: [],
            },

        },
        sangria: {
            add: {
                fields: {
                    valor: {
                        value: '',
                        error: false,
                        messages: [],
                    }, comentario: {
                        value: '',
                        error: false,
                        messages: [],
                    },

                },
            },
        },
        reforco: {
            add: {
                fields: {
                    valor: {
                        value: '',
                        error: false,
                        messages: [],
                    }, comentario: {
                        value: '',
                        error: false,
                        messages: [],
                    },

                },
            },
        },


        products: {
            add: {
                error: false,
                messages: [],

                fields: {
                    teste: {
                        value: '',
                        error: false,
                        messages: [],
                    },
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
                    testelist: [],
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

        getselecteditem: {
            add: {
                error: false,
                messages: [],
                fields: {
                    produto: {
                        value: '',
                        error: false,
                        messages: [],

                    },
                    valorfinal: {
                        value: '',
                        error: false,
                        messages: [],

                    },
                    quantidadeemestoque: {
                        value: '',
                        error: false,
                        messages: [],

                    },
                    quantidadeselec: {
                        value: '',
                        error: false,
                        messages: [],

                    },
                    produto: {
                        value: '',
                        error: false,
                        messages: [],

                    },

                },
            },
            remove: {
                list: [],
            }
        },

        footer: {

            messages: [],
        },
    },
    methods: {



        //PRODUTOS
        // Abrindo Modal Add Product

        getProducts: function () {
            document.cookie = "i18next=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            firebase.database().ref(App.firebase.path + '/products').on('value', function (data) {

                App.products.list = [];

                data.forEach(function (item) {

                    var product = item.val();
                    product.key = item.key;
                    product.lucroporcentagem = parseFloat(product.lucroporcentagem).toFixed(2).replace(".", ",");
                    product.gastototal = parseFloat(product.gastototal).toFixed(2).replace(".", ",");
                    product.lucrodinheiro = parseFloat(product.lucrodinheiro).toFixed(2).replace(".", ",");
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


        openSearchProduct: function () {

            $('#openSearchProduct').modal();
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

        addNewSale: function (keyproduct) {
     
            var product = App.sales.add.fields.nome.value;
            var price = parseFloat((document.getElementById("iptPrice").value).replace(",", "."));
            var amount = parseFloat(App.sales.add.fields.quantidade.value);
            //console.log(product);
            //console.log(price);
            //console.log(amount);
            if (!product || !price || !amount) {
                alert('Informe o produto!');
                return;
            }

            var product = {
                product: product,
                price: price,
                priceFormat: App.numberFormat(price),
                amount: amount,
                amountFormat: App.numberFormat(amount, 3),
                key: keyproduct,
                key1: 0
            };

            product.total = product.amount * product.price;
            product.totalFormat = App.numberFormat(product.total);
            // console.log("product");
            // console.log(product);
            // console.log("product");
          

            App.sales.list.push(product);
            //console.log(App.sales.list);
            App.calcTotalCaixa();

            App.sales.add.fields.nome.value = '';
            App.sales.add.messages = [];
            document.getElementById("iptPrice").value = '';
            App.sales.add.messages = [];
            App.sales.add.fields.quantidade.value = 1;
            App.sales.add.messages = [];
            //console.log(App.sales.list);
            //console.log(App.sales.list);



        },
        addNewSaleOrdem: function (keyordem) {
           
            var product = App.sales.add.fields.nome.value;
            var price = parseFloat((document.getElementById("iptPrice").value).replace(",", "."));
            var amount = parseFloat(App.sales.add.fields.quantidade.value);
            //console.log(product);
            //console.log(price);
            //console.log(amount);
            if (!product || !price || !amount) {
                alert('Informe o produto!');
                return;
            }

            var product = {
                product: product,
                price: price,
                priceFormat: App.numberFormat(price),
                amount: amount,
                amountFormat: App.numberFormat(amount, 3),
                key: 0,
                key1: keyordem
            };

            firebase.database().ref(App.firebase.path + '/ordemdeservico/' + keyordem).child("quantidade").set(
                0
            )

            product.total = product.amount * product.price;
            product.totalFormat = App.numberFormat(product.total);
            // console.log("product");
            // console.log(product);
            // console.log("product");


            App.sales.list.push(product);
            //console.log(App.sales.list);
            App.calcTotalCaixa();

            App.sales.add.fields.nome.value = '';
            App.sales.add.messages = [];
            document.getElementById("iptPrice").value = '';
            App.sales.add.messages = [];
            App.sales.add.fields.quantidade.value = 1;
            App.sales.add.messages = [];
            //console.log(App.sales.list);

            $('#openSearchProduct').modal('toggle');


        },


        getEstoque: function (inputprocuraestoque) {
            //console.log(inputprocuraestoque);
            App.sales.add.addlist = [];
            App.sales.add.addlist1 = [];
            var nomeproduto = inputprocuraestoque;
            firebase.database().ref(App.firebase.path + '/products').on('value', function (data) {

                //var concat = "/"+nomeproduto+"*/";
                //console.log(concat)
                var concatenando = new RegExp(nomeproduto, "i");
                var testando = [];
                var posicao = 0;
                data.forEach(function (item) {
                    var listsales = item.val();
                    listsales.key = item.key;
                    var arrayteste = {
                        "key": listsales.key,
                        product: [
                            listsales
                        ]
                    };
                    //console.log(arrayteste);
                    //console.log(concatenando);
                    //console.log(arrayteste.product[0]);
                    if (arrayteste.product[0].produto.match(concatenando)) {
                        listsales.valorfinal = parseFloat(listsales.valorfinal).toFixed(2).replace(".", ",");
                        listsales.posicao = posicao++;
                        App.sales.add.addlist.push(listsales);
                    }
                })
                //console.log(App.sales.add.addlist);


            })
            firebase.database().ref(App.firebase.path + '/ordemdeservico').on('value', function (data) {

                var concatenando = new RegExp(nomeproduto, "i");
                var concatqtd = new RegExp("1", "i");
                var posicao = 0;
                data.forEach(function (item) {
                    var listsales = item.val();
                    listsales.key = item.key;
                    var arrayteste = {
                        "key": listsales.key,
                        product: [
                            listsales
                        ]
                    };
                    //console.log(arrayteste);
                    //console.log(concatenando);
                    //console.log(arrayteste.product[0]);
                    var strqtd = (arrayteste.product[0].quantidade).toString();                   
                    if ((arrayteste.product[0].cliente.match(concatenando) || arrayteste.product[0].nome.match(concatenando)) && strqtd.match(concatqtd)) {                       
                        listsales.valorservico = parseFloat(listsales.valorservico).toFixed(2).replace(".", ",");
                        listsales.posicao = posicao++;
                        App.sales.add.addlist1.push(listsales);

                    }
                })
                //console.log(App.sales.add.addlist1);
            })


        },
        editSelectedItem: function (produto, keyproduto, valorfinal, quantidadeemestoque, quantidadeselecionada) {
            // alert(quantidadeselecionada) 
            //  alert(produto);
            //  alert(keyproduto);
            //  alert(quantidadeemestoque);
            valorfinal = valorfinal.replace(",", ".");
            valorfinal = parseFloat(valorfinal);
            //alert(valorfinal);
            //quantiadeselecionadaestoque = document.getElementById("quantiadeselecionadaestoque").value
            // var quantiadeselecionadaestoque = document.getElementById("quantiadeselecionadaestoque").value;
            //alert(quantiadeselecionadaestoque);

            var quantidadefinal = parseFloat(quantidadeemestoque) - parseFloat(quantidadeselecionada);
            //console.log(quantidadefinal);
            if (isNaN(quantidadefinal)) {
                alert("Preencha a quantidade.");
            }
            else {
                // alert(quantidadefinal);
                //alert(quantidadefinal);
                //console.log(keyproduto);

            firebase.database().ref(App.firebase.path + '/products/' + keyproduto).child("quantidade").set(
                    quantidadefinal
            )

                App.sales.add.fields.nome.value = produto;
                document.getElementById("iptPrice").value = valorfinal;
                App.sales.add.fields.quantidade.value = quantidadeselecionada;
                $('#openSearchProduct').modal('hide');
                document.getElementById("quantidadeselecionada").value = "";

                App.addNewSale(keyproduto);
            }

        },
        editSelectedItemOrdem: function (cliente, keyordem, nome, valorservico, dataservico, servico, quantidade) {
            //console.log(cliente + ", "+nome+" -- "+servico);
            //console.log(keyordem);
            //console.log(nome);
            valorservico = parseFloat(valorservico.replace(",", "."))
            //console.log(valorservico);
            //console.log(dataservico);
            //console.log(servico);
            //console.log(quantidade);
            var quantidadefinal = quantidade - 1;
            //console.log(quantidadefinal);

            firebase.database().ref(App.firebase.path + '/ordemdeservico/' + keyordem).child("quantidade").set(
                quantidadefinal
            )



            App.sales.add.fields.nome.value = cliente + ", " + nome + " -- " + servico;
            App.sales.add.fields.quantidade.value = 1;
            document.getElementById("iptPrice").value = valorservico;
            App.addNewSaleOrdem(keyordem);
        },


        getAberturadeCaixa: function () {
        
            document.cookie = "i18next=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            var data = new Date();
            var dia = data.getDate();
            var mes = parseInt(data.getMonth()) + 1;
            var ano = data.getFullYear();


            if (dia < 10) {
                dia = "0" + dia;
            }
            if (mes < 10) {
                mes = "0" + mes;
            }

            var dataconcat = dia + "/" + mes + "/" + ano;

            App.aberturacaixa.select.selectlist = [];
            //console.log( App.aberturacaixa.select.selectlist);
            firebase.database().ref(App.firebase.path + '/aberturadecaixa').on('value', function (data) {

                var concatenando = new RegExp(dataconcat, "i");
                //console.log(concatenando);
                data.forEach(function (item) {
                    var abertura = item.val();
                    abertura.key = item.key;
                    var arrayteste = {
                        "key": abertura.key,
                        aberturadecaixa: [
                            abertura
                        ]
                    };


                    if (arrayteste.aberturadecaixa[0].data.match(concatenando)) {

                        App.aberturacaixa.select.selectlist.push(abertura);
                       
                        //console.log(App.aberturacaixa.select.selectlist);

                    }
                })
                //console.log(App.aberturacaixa.select.selectlist);


            })


        },
        getAberturadeCaixaAtivo: function () {
            
            document.cookie = "i18next=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            logado = true;
            var data = new Date();
            var dia = data.getDate();
            var mes = parseInt(data.getMonth()) + 1;
            var ano = data.getFullYear();


            if (dia < 10) {
                dia = "0" + dia;
            }
            if (mes < 10) {
                mes = "0" + mes;
            }

            var dataconcat = dia + "/" + mes + "/" + ano;

            firebase.database().ref(App.firebase.path + '/aberturadecaixa').on('value', function (data) {

                var concatenando = new RegExp(dataconcat, "i");
                var arrayteste = [];
                //console.log(concatenando);
                data.forEach(function (item) {
                    var abertura = item.val();
                    abertura.key = item.key;
                    arrayteste = {
                        "key": abertura.key,
                        aberturadecaixa: [
                            abertura
                        ]
                    };


                    if (arrayteste.aberturadecaixa[0].data.match(concatenando)) {
                        App.aberturacaixa.select.selectlist.push(abertura);

                    }
                    else if (!arrayteste.aberturadecaixa[0].data.match(concatenando)) {


                    }
                })
                if (document.cookie && arrayteste.aberturadecaixa[0].data.match(concatenando)) {
                    App.page.current = '/';
                }
                else if (document.cookie && !arrayteste.aberturadecaixa[0].data.match(concatenando)) {
                    window.location.href = "/#/aberturadecaixa"
                }
                else {
                    window.location.href = "/login.html"
                }



            })


        },



        getSales: function () {
            document.cookie = "i18next=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            firebase.database().ref(App.firebase.path + '/sales').on('value', function (data) {

                var totaldinheiro = 0;
                var totalcartao = 0;
                var totalgeral = 0;


                data.forEach(function (item) {
                    var listsales = item.val();
                    listsales.key = item.key;
                    //console.log(listsales);

                    // console.log((listsales.totalcompra)+" R$ - "+(listsales.datavenda));
                    App.sales.add.list.push(listsales);


                    totaldinheiro += parseFloat(listsales.cash);
                    totalcartao += parseFloat(listsales.card);

                    //console.log(totalcartao);
                    //totalgeral += totalizando;
                    //console.log("total cash é igual a: "+ totalcartao);
                    //console.log(listsales);
                    listsales.cash = parseFloat(listsales.cash).toFixed(2).replace(".", ",");
                    listsales.card = parseFloat(listsales.card).toFixed(2).replace(".", ",");
                    listsales.subtotalcompra = parseFloat(listsales.subtotalcompra).toFixed(2).replace(".", ",");
                    listsales.totalcompra = parseFloat(listsales.totalcompra).toFixed(2).replace(".", ",");
                    App.sales.add.fields.dinheiro.value = totaldinheiro.toFixed(2).replace(".", ",");
                    App.sales.add.fields.totalcartao.value = parseFloat(totalcartao).toFixed(2).replace(".", ",");
                    App.sales.add.fields.relatoriototal.value = (parseFloat(totalcartao) + parseFloat(totaldinheiro)).toFixed(2).replace(".", ",");

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


            //console.log(subtotal)
            //console.log(App.sales.list[0].total);

            for (var i = 0; i < App.sales.list.length; i++) {
                subtotal += App.sales.list[i].total;
            }
            //console.log(subtotal);


            var somaValorRecebido = (cash + card).toFixed(2);

            App.sales.add.fields.valortotalrecebido.value = parseFloat(somaValorRecebido).toFixed(2);


            App.sales.add.fields.subtotalcompra.value = (subtotal).toFixed(2);
            // console.log(subtotal);

            if (App.sales.add.fields.discountType == 'value') {
                App.sales.add.fields.totalcompra.value = (subtotal - discount).toFixed(2);
            } else if (App.sales.add.fields.discountType == 'percent') {
                App.sales.add.fields.totalcompra.value = (subtotal * (100 - discount) / 100).toFixed(2);
            }

            if (App.sales.add.fields.valortotalrecebido.value < App.sales.add.fields.totalcompra.value) {
                // console.log("Algo de errado, você está recebendo menos do que deve...");
                App.sales.add.fields.troco.error = true;
            } else {
                // console.log("Ok, você está recebendo tanto quanto deve, confira o troco...");
                App.sales.add.fields.troco.error = false;
            }

            App.sales.add.fields.troco.value = (cash + card).toFixed(2) - parseFloat(App.sales.add.fields.totalcompra.value).toFixed(2);
            App.sales.add.fields.troco.value.toFixed(2);
            // App.sales.add.fields.subtotalFormat = App.numberFormat(App.sales.add.fields.addsubtotal);
            // App.sales.add.fields.totalFormat = App.numberFormat(App.sales.add.fields.total);

            // App.sales.add.fields.subtotalcompra.value = App.sales.add.fields.subtotalFormat;
            // App.sales.add.fields.totalcompra.value = App.sales.add.fields.totalFormat;
        },


        // Adicionando Venda  
        addSale: function () {

            if (document.getElementById("cash") == "") {
                document.getElementById("cash") = "0,00"
            }
            if (document.getElementById("card") == "") {
                document.getElementById("card") = "0,00";
            }
            var cashfloat = parseFloat(document.getElementById("cash").value.replace(",", "."));
            var cardfloat = parseFloat(document.getElementById("card").value.replace(",", "."));
            //console.log(cashfloat);
            //console.log(cardfloat);
            var somarecebido = cardfloat + cashfloat;
            //alert(somarecebido);
            if (somarecebido < App.sales.add.fields.totalcompra.value) {

                alert("Valor recebido abaixo do esperado.");
            }
            else if (somarecebido >= App.sales.add.fields.totalcompra.value) {

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
                //alert(horaImprimivel);
                // e todos os demais campos aqui...

                // se deu algum erro...
                if (error) {
                    App.sales.add.error = true;
                    App.sales.add.messages.push('Verifique todos os campos.');
                    return;
                }

                App.sales.list = App.sales.list.slice();
                //console.log(App.sales.list);
                firebase.database().ref(App.firebase.path + '/sales').push({
                    cash: cashfloat,
                    card: cardfloat,
                    desconto: App.sales.add.fields.desconto.value + " " + App.sales.add.fields.discountType,
                    totalcompra: App.sales.add.fields.totalcompra.value,
                    subtotalcompra: App.sales.add.fields.subtotalcompra.value,
                    valortotalrecebido: App.sales.add.fields.valortotalrecebido.value,
                    troco: App.sales.add.fields.troco.value,
                    produtos: App.sales.list,
                    datavenda: horaImprimivel,



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

                        //alert('Venda inserida com sucesso!');

                    })
                    .catch(function (err) {
                        App.sales.add.error = true;
                        App.sales.add.messages = [];
                        App.sales.add.messages.push('Aconteceu um erro interno. Tente novamente.');
                    });
                document.location.reload(true);
            }
        },

        removeSaleProduct: function (sale, i, keyproduct, keyordem) {
            console.log(keyproduct +"produto");
            console.log(keyordem +"ordem");
            //console.log(keyproduct);
            //console.log(sale.amount);
            App.sales.list.splice(i, 1);


            App.getselecteditem.remove.list = [];
            if(keyproduct != 0 && keyordem == 0){
                
               
                    firebase.database().ref(App.firebase.path + '/products').on('value', function (data) {
    
                        App.getselecteditem.remove.list = [];
                        //var concat = "/"+nomeproduto+"*/";
                        //console.log(concat)
                        var concatenando = new RegExp(keyproduct, "i");
                        var testando = [];
                        var posicao = 0;
                        data.forEach(function (item) {
                            var listsales = item.val();
                            listsales.key = item.key;
                            var arrayteste = {
                                "key": keyproduct,
                                product: [
                                    listsales
                                ]
                            };
    
    
                            if (arrayteste.product[0].key.match(concatenando)) {
                                listsales.valorfinal = parseFloat(listsales.valorfinal).toFixed(2).replace(".", ",");
                                listsales.posicao = posicao++;
                                App.getselecteditem.remove.list.push(listsales);
                            }
                          
                        })
    
                    })
                    console.log(App.getselecteditem.remove.list[0].quantidade);
    
                    var repoeestoque = parseFloat(App.getselecteditem.remove.list[0].quantidade) + parseFloat(sale.amount);
                    firebase.database().ref(App.firebase.path + '/products/' + keyproduct).child("quantidade").set(
                        repoeestoque,
    
                    )
                
            }
            if(keyordem != 0 && keyproduct == 0){
               
                firebase.database().ref(App.firebase.path + '/ordemdeservico/' + keyordem).child("quantidade").set(
                    1
                )
            }
           
            
            App.calcTotalCaixa();

        },
        // Abrindo Modal User
        openAddOrdemdeServico: function () {
            $('#modalSeachClienteOrdemServico').modal();
        },
        searchClienteOrdemServico: function () {
            App.ordemdeservicosbanhoetosa.list = [];
            var inpcliente = document.getElementById("inp-searchcliente").value;

            firebase.database().ref(App.firebase.path + '/users').on('value', function (data) {

                var concatenando = new RegExp(inpcliente, "i");
                //console.log(concatenando);
                data.forEach(function (item) {
                    var abertura = item.val();
                    abertura.key = item.key;
                    //console.log(abertura);
                    var arrayteste = {
                        "key": abertura.key,
                        aberturadecaixa: [
                            abertura
                        ]
                    };
                    //console.log(arrayteste.aberturadecaixa[0].cliente);
                    if (arrayteste.aberturadecaixa[0].cliente.match(concatenando) || arrayteste.aberturadecaixa[0].nome.match(concatenando)) {

                        App.ordemdeservicosbanhoetosa.list.push(abertura);
                        //console.log(App.ordemdeservicosbanhoetosa.list);


                    }
                })
            })
        },
        selectedClienteOrdem: function (ordemdeservicosbanhoetosatable) {

            $('#modalSeachClienteOrdemServico').modal('toggle');


            var splitstatus = App.ordemdeservicosbanhoetosa.list[0].status.split("º");
            //console.log(splitstatus[0]);
            var numstatus = parseFloat(splitstatus[0]) + 1;
            var strstatus = "º visita"
            //console.log(numstatus + strstatus);
            App.ordemdeservicosbanhoetosa.edit.fields.keyclient.value = ordemdeservicosbanhoetosatable.key;
            App.ordemdeservicosbanhoetosa.edit.fields.key.value = ordemdeservicosbanhoetosatable.key;
            App.ordemdeservicosbanhoetosa.edit.fields.cliente.value = ordemdeservicosbanhoetosatable.cliente;
            App.ordemdeservicosbanhoetosa.edit.fields.telefone.value = ordemdeservicosbanhoetosatable.telefone;
            App.ordemdeservicosbanhoetosa.edit.fields.cep.value = ordemdeservicosbanhoetosatable.cep;
            App.ordemdeservicosbanhoetosa.edit.fields.rua.value = ordemdeservicosbanhoetosatable.rua;
            App.ordemdeservicosbanhoetosa.edit.fields.uf.value = ordemdeservicosbanhoetosatable.uf;
            App.ordemdeservicosbanhoetosa.edit.fields.bairro.value = ordemdeservicosbanhoetosatable.bairro;
            App.ordemdeservicosbanhoetosa.edit.fields.cidade.value = ordemdeservicosbanhoetosatable.cidade;
            App.ordemdeservicosbanhoetosa.edit.fields.numero.value = ordemdeservicosbanhoetosatable.numero;
            App.ordemdeservicosbanhoetosa.edit.fields.complemento.value = ordemdeservicosbanhoetosatable.complemento;
            App.ordemdeservicosbanhoetosa.edit.fields.status.value = numstatus + strstatus;
            App.ordemdeservicosbanhoetosa.edit.fields.nome.value = ordemdeservicosbanhoetosatable.nome;
            App.ordemdeservicosbanhoetosa.edit.fields.pet.value = ordemdeservicosbanhoetosatable.pet;
            App.ordemdeservicosbanhoetosa.edit.fields.idade.value = ordemdeservicosbanhoetosatable.idade;
            App.ordemdeservicosbanhoetosa.edit.fields.genero.value = ordemdeservicosbanhoetosatable.genero;
            App.ordemdeservicosbanhoetosa.edit.fields.raca.value = ordemdeservicosbanhoetosatable.raca;
            App.ordemdeservicosbanhoetosa.edit.fields.temperamento.value = ordemdeservicosbanhoetosatable.temperamento;
            App.ordemdeservicosbanhoetosa.edit.fields.observacao.value = ordemdeservicosbanhoetosatable.observacao;


            $('#modalAddOrdemdeServico').modal();
        },
        addOrdemServico: function () {
            App.ordemdeservicosbanhoetosa.getlist.list = [];
            console.log(App.ordemdeservicosbanhoetosa.getlist.list);
            if (!App.ordemdeservicosbanhoetosa.edit.fields.servico.value) App.ordemdeservicosbanhoetosa.edit.fields.servico.value = "Banho";
            //alert(App.ordemdeservicosbanhoetosa.edit.fields.servico.value);
            if (document.getElementById("valorservico").value == "") {
                document.getElementById("valorservico").value = "R$ 0,00";
            }
            if (App.ordemdeservicosbanhoetosa.edit.fields.taxidog.value == "") {
                App.ordemdeservicosbanhoetosa.edit.fields.taxidog.value = "R$ 0,00";
            }

            var splitvalorservico = document.getElementById("valorservico").value;

            var valorconvertido;

            if (isNaN(splitvalorservico)) {
                valorconvertido = parseFloat(splitvalorservico.split(" ")[1].replace(",", "."));
            }
            else {
                valorconvertido = document.getElementById("valorservico").value;
            }

          
           
            var data = App.ordemdeservicosbanhoetosa.edit.fields.dataservico.value;
          
            var datasplit = data.split("T");
            var dataconvert = datasplit[0].split("-");
            var dateconvertida = dataconvert[2] + "/" + dataconvert[1] + "/" + dataconvert[0];
            var permitedata;
            if (!data) { permitedata = 0; }
            else { permitedata = 1 }
           
            if (valorconvertido > 0 && permitedata != 0) {

                var datacompleta = dateconvertida + " " + datasplit[1];
                App.ordemdeservicosbanhoetosa.list = [];
                firebase.database().ref(App.firebase.path + '/ordemdeservico').push({
                    
                    keyclient: App.ordemdeservicosbanhoetosa.edit.fields.keyclient.value,
                    cliente: App.ordemdeservicosbanhoetosa.edit.fields.cliente.value,
                    telefone: App.ordemdeservicosbanhoetosa.edit.fields.telefone.value,
                    cep: App.ordemdeservicosbanhoetosa.edit.fields.cep.value,
                    rua: App.ordemdeservicosbanhoetosa.edit.fields.rua.value,
                    uf: App.ordemdeservicosbanhoetosa.edit.fields.uf.value,
                    bairro: App.ordemdeservicosbanhoetosa.edit.fields.bairro.value,
                    cidade: App.ordemdeservicosbanhoetosa.edit.fields.cidade.value,
                    numero: App.ordemdeservicosbanhoetosa.edit.fields.numero.value,
                    complemento: App.ordemdeservicosbanhoetosa.edit.fields.complemento.value,
                    status: App.ordemdeservicosbanhoetosa.edit.fields.status.value,
                    nome: App.ordemdeservicosbanhoetosa.edit.fields.nome.value,
                    pet: App.ordemdeservicosbanhoetosa.edit.fields.pet.value,
                    idade: App.ordemdeservicosbanhoetosa.edit.fields.idade.value,
                    genero: App.ordemdeservicosbanhoetosa.edit.fields.genero.value,
                    raca: App.ordemdeservicosbanhoetosa.edit.fields.raca.value,
                    temperamento: App.ordemdeservicosbanhoetosa.edit.fields.temperamento.value,
                    observacao: App.ordemdeservicosbanhoetosa.edit.fields.observacao.value,
                    servico: App.ordemdeservicosbanhoetosa.edit.fields.servico.value,
                    dataservico: App.ordemdeservicosbanhoetosa.edit.fields.dataservico.value,
                    taxidog: App.ordemdeservicosbanhoetosa.edit.fields.taxidog.value,
                    obsservico: App.ordemdeservicosbanhoetosa.edit.fields.obsservico.value,
                    valorservico: valorconvertido,
                    dataservico: datacompleta,
                    quantidade: 1,
                    statuspedido: "Não chegou",
                })
                    .then(function () {
                        App.ordemdeservicosbanhoetosa.list = [];
                        App.ordemdeservicosbanhoetosa.edit.fields.cliente.value = '';
                        App.ordemdeservicosbanhoetosa.edit.fields.telefone.value = '';
                        App.ordemdeservicosbanhoetosa.edit.fields.cep.value = '';
                        App.ordemdeservicosbanhoetosa.edit.fields.rua.value = '';
                        App.ordemdeservicosbanhoetosa.edit.fields.uf.value = '';
                        App.ordemdeservicosbanhoetosa.edit.fields.bairro.value = '';
                        App.ordemdeservicosbanhoetosa.edit.fields.cidade.value = '';
                        App.ordemdeservicosbanhoetosa.edit.fields.numero.value = '';
                        App.ordemdeservicosbanhoetosa.edit.fields.complemento.value = '';
                        App.ordemdeservicosbanhoetosa.edit.fields.status.value = '';
                        App.ordemdeservicosbanhoetosa.edit.fields.nome.value = '';
                        App.ordemdeservicosbanhoetosa.edit.fields.pet.value = '';
                        App.ordemdeservicosbanhoetosa.edit.fields.idade.value = '';
                        App.ordemdeservicosbanhoetosa.edit.fields.genero.value = '';
                        App.ordemdeservicosbanhoetosa.edit.fields.raca.value = '';
                        App.ordemdeservicosbanhoetosa.edit.fields.temperamento.value = '';
                        App.ordemdeservicosbanhoetosa.edit.fields.observacao.value = '';
                        App.ordemdeservicosbanhoetosa.edit.fields.servico.value = '';
                        App.ordemdeservicosbanhoetosa.edit.fields.dataservico.value = '';
                        App.ordemdeservicosbanhoetosa.edit.fields.taxidog.value = '';
                        App.ordemdeservicosbanhoetosa.edit.fields.obsservico.value = '';
                        document.getElementById("valorservico").value = '',
                        App.ordemdeservicosbanhoetosa.edit.messages.push('Ordem de serviço criada com sucesso!');
                    })
                    .catch(function () {
                     
                    })
            }
            else {
                alert("Verifique todos os campos necessários.");
            }
            console.log(App.ordemdeservicosbanhoetosa.getlist.list);

        },


        //FORNECEDORES    
        // Buscando Fornecedores 
        getProviders: function () {
            document.cookie = "i18next=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
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

        getOrdensdeservico: function () {
          
            App.ordemdeservicosbanhoetosa.getlist.list = [],
            document.cookie = "i18next=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            firebase.database().ref(App.firebase.path + '/ordemdeservico').on('value', function (data) {

                var concatenando = new RegExp("1", "i");
                //console.log(concatenando);
                data.forEach(function (item) {
                    var abertura = item.val();
                    abertura.key = item.key;
                    var arrayteste = {
                        "key": abertura.key,
                        aberturadecaixa: [
                            abertura
                        ]
                    };
                    //console.log(abertura.quantidade)
                    var strqtd = (abertura.quantidade).toString();
                    //console.log(strqtd);
                    //console.log(strqtd);
                        if(strqtd.match(concatenando)){
                            App.ordemdeservicosbanhoetosa.getlist.list.push(abertura);
                            //console.log(App.ordemdeservicosbanhoetosa.getlist.list);
                        }             
                })
            })
        },

        //CLIENTES 
        //Buscando usuários
        getUsers: function () {
            document.cookie = "i18next=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            firebase.database().ref(App.firebase.path + '/users').on('value', function (data) {

                App.users.list = [];

                data.forEach(function (item) {

                    var user = item.val();
                    user.key = item.key;
                    // console.log(user);
                    // console.log(item.key);
                    App.users.list.push(user);
                    //console.log(App.users.list);
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
        getOrdem: function (key, callback) {
            firebase.database().ref(App.firebase.path + '/ordemdeservico/' + key).once('value').then(function (data) {
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
        openEditOrdem: function (data) {
            console.log(data.dataservico);
            var datasplit = data.dataservico.split(" ");
            console.log(datasplit);
            var splitdata = datasplit[0].split("/");
            console.log(splitdata);

            var dataconvertida = splitdata[2] + "-" + splitdata[1] + "-" + splitdata[0] + "T" + datasplit[1];
            console.log(data.key);
            App.ordemdeservicosbanhoetosa.edit2.fields.keypedido.value = data.key,
                App.ordemdeservicosbanhoetosa.edit2.fields.keyclient.value = data.keyclient,
                App.ordemdeservicosbanhoetosa.edit2.fields.cliente.value = data.cliente,
                App.ordemdeservicosbanhoetosa.edit2.fields.telefone.value = data.telefone,
                App.ordemdeservicosbanhoetosa.edit2.fields.cep.value = data.cep,
                App.ordemdeservicosbanhoetosa.edit2.fields.rua.value = data.rua,
                App.ordemdeservicosbanhoetosa.edit2.fields.uf.value = data.uf,
                App.ordemdeservicosbanhoetosa.edit2.fields.bairro.value = data.bairro,
                App.ordemdeservicosbanhoetosa.edit2.fields.cidade.value = data.cidade,
                App.ordemdeservicosbanhoetosa.edit2.fields.numero.value = data.numero,
                App.ordemdeservicosbanhoetosa.edit2.fields.complemento.value = data.complemento,
                App.ordemdeservicosbanhoetosa.edit2.fields.status.value = data.status,
                App.ordemdeservicosbanhoetosa.edit2.fields.nome.value = data.nome,
                App.ordemdeservicosbanhoetosa.edit2.fields.pet.value = data.pet,
                App.ordemdeservicosbanhoetosa.edit2.fields.idade.value = data.idade,
                App.ordemdeservicosbanhoetosa.edit2.fields.genero.value = data.genero,
                App.ordemdeservicosbanhoetosa.edit2.fields.raca.value = data.raca,
                document.getElementById("editstatuspedido").value = data.statuspedido,
                App.ordemdeservicosbanhoetosa.edit2.fields.temperamento.value = data.temperamento,
                App.ordemdeservicosbanhoetosa.edit2.fields.observacao.value = data.observacao,
                App.ordemdeservicosbanhoetosa.edit2.fields.servico.value = data.servico,
                App.ordemdeservicosbanhoetosa.edit2.fields.dataservico.value = dataconvertida,
                App.ordemdeservicosbanhoetosa.edit2.fields.taxidog.value = data.taxidog,
                App.ordemdeservicosbanhoetosa.edit2.fields.obsservico.value = data.obsservico,
                App.ordemdeservicosbanhoetosa.edit2.fields.dataservico.value = data.dataservico,
                App.ordemdeservicosbanhoetosa.edit2.fields.valorservico.value = data.valorservico,


                $('#modalEditOrdemdeServico').modal();
        },

        editOrdem: function () {
           
            App.ordemdeservicosbanhoetosa.getlist.list = [];
            
            var convertvalor = document.getElementById("editordemvalorservico").value.split(" ");
            var valorsplit = convertvalor[1];
            var valorconvertido;

            if (valorsplit == undefined) {
                valorconvertido = parseFloat(document.getElementById("editordemvalorservico").value);
                //alert(valorconvertido);
            }
            else if (valorsplit != undefined) {
                valorconvertido = parseFloat(valorsplit.replace(",", "."));
            }

            var testepush = { 
                keyclient: App.ordemdeservicosbanhoetosa.edit2.fields.keyclient.value,
                cliente: App.ordemdeservicosbanhoetosa.edit2.fields.cliente.value,
                telefone: App.ordemdeservicosbanhoetosa.edit2.fields.cliente.value,
                cep: App.ordemdeservicosbanhoetosa.edit2.fields.cep.value,
                rua: App.ordemdeservicosbanhoetosa.edit2.fields.rua.value,
                uf: App.ordemdeservicosbanhoetosa.edit2.fields.uf.value,
                cidade: App.ordemdeservicosbanhoetosa.edit2.fields.cidade.value,
                numero: App.ordemdeservicosbanhoetosa.edit2.fields.numero.value,
                complemento: App.ordemdeservicosbanhoetosa.edit2.fields.complemento.value,
                status: App.ordemdeservicosbanhoetosa.edit2.fields.status.value,
                nome: App.ordemdeservicosbanhoetosa.edit2.fields.nome.value,
                pet: App.ordemdeservicosbanhoetosa.edit2.fields.pet.value,
                idade: App.ordemdeservicosbanhoetosa.edit2.fields.idade.value,
                genero: App.ordemdeservicosbanhoetosa.edit2.fields.genero.value,
                raca: App.ordemdeservicosbanhoetosa.edit2.fields.raca.value,
                temperamento: App.ordemdeservicosbanhoetosa.edit2.fields.temperamento.value,
                observacao: App.ordemdeservicosbanhoetosa.edit2.fields.observacao.value,
                servico: App.ordemdeservicosbanhoetosa.edit2.fields.servico.value,
                dataservico: App.ordemdeservicosbanhoetosa.edit2.fields.dataservico.value,
                taxidog: App.ordemdeservicosbanhoetosa.edit2.fields.taxidog.value,
                obsservico: App.ordemdeservicosbanhoetosa.edit2.fields.obsservico.value,
                statuspedido: document.getElementById("editstatuspedido").value,
                valorservico: valorconvertido,
                quantidade: 1
            }
            

            //alert(valorconvertido)
            firebase.database().ref(App.firebase.path + '/ordemdeservico/' + App.ordemdeservicosbanhoetosa.edit2.fields.keypedido.value).set({
                keyclient: App.ordemdeservicosbanhoetosa.edit2.fields.keyclient.value,
                cliente: App.ordemdeservicosbanhoetosa.edit2.fields.cliente.value,
                telefone: App.ordemdeservicosbanhoetosa.edit2.fields.cliente.value,
                cep: App.ordemdeservicosbanhoetosa.edit2.fields.cep.value,
                rua: App.ordemdeservicosbanhoetosa.edit2.fields.rua.value,
                uf: App.ordemdeservicosbanhoetosa.edit2.fields.uf.value,
                cidade: App.ordemdeservicosbanhoetosa.edit2.fields.cidade.value,
                numero: App.ordemdeservicosbanhoetosa.edit2.fields.numero.value,
                complemento: App.ordemdeservicosbanhoetosa.edit2.fields.complemento.value,
                status: App.ordemdeservicosbanhoetosa.edit2.fields.status.value,
                nome: App.ordemdeservicosbanhoetosa.edit2.fields.nome.value,
                pet: App.ordemdeservicosbanhoetosa.edit2.fields.pet.value,
                idade: App.ordemdeservicosbanhoetosa.edit2.fields.idade.value,
                genero: App.ordemdeservicosbanhoetosa.edit2.fields.genero.value,
                raca: App.ordemdeservicosbanhoetosa.edit2.fields.raca.value,
                temperamento: App.ordemdeservicosbanhoetosa.edit2.fields.temperamento.value,
                observacao: App.ordemdeservicosbanhoetosa.edit2.fields.observacao.value,
                servico: App.ordemdeservicosbanhoetosa.edit2.fields.servico.value,
                dataservico: App.ordemdeservicosbanhoetosa.edit2.fields.dataservico.value,
                taxidog: App.ordemdeservicosbanhoetosa.edit2.fields.taxidog.value,
                obsservico: App.ordemdeservicosbanhoetosa.edit2.fields.obsservico.value,
                statuspedido: document.getElementById("editstatuspedido").value,
                valorservico: valorconvertido,
                quantidade: 1

            }).then(function () {
                document.location.reload(true);
                // App.ordemdeservicosbanhoetosa.getlist.list = [];
                // App.ordemdeservicosbanhoetosa.getlist.list.push(testepush);
                $('#modalEditOrdemdeServico').modal("toggle");
            });

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
        goOrdemServicoRemove: function (key) {
            route.go('#/ordemservico-remove/' + key);
        },

        // Removendo Ordem de serviço
        removeOrdemdeServico: function () {
            App.ordemdeservicosbanhoetosa.remove.error = false;
            App.ordemdeservicosbanhoetosa.remove.messages = [];

            firebase.database().ref(App.firebase.path + '/ordemdeservico/' + App.ordemdeservicosbanhoetosa.remove.key).remove()
                .then(function () {
                    App.ordemdeservicosbanhoetosa.remove.key = '';
                    App.ordemdeservicosbanhoetosa.remove.codigo = '';
                    App.ordemdeservicosbanhoetosa.remove.cliente = '';
                    App.ordemdeservicosbanhoetosa.remove.messages.push('Ordem de serviço removida com sucesso!');
                    route.go('#/ordemdeservicosbanhoetosa');
                    window.location.reload(true);
                })
                .catch(function (err) {
                    App.ordemdeservicosbanhoetosa.remove.error = true;
                    App.ordemdeservicosbanhoetosa.remove.messages.push('Aconteceu um erro interno. Tente novamente.');
                });
                
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
        abrircaixa: function () {
            var valorabertura;
            console.log(valorabertura);
            if(isNaN(valorabertura)) valorabertura = parseFloat(document.getElementById("valorabertura").value.replace(",","."));
            console.log(valorabertura);
            var dataconvert = App.aberturacaixa.abrircaixa.fields.data.value.split("-");
            var davaconvertida = dataconvert[2] + "/" + dataconvert[1] + "/" + dataconvert[0];

            App.aberturacaixa.abrircaixa.list = [];

            firebase.database().ref(App.firebase.path + '/aberturadecaixa').on('value', function (data) {

                var concatenando = new RegExp(davaconvertida, "i");
                //console.log(concatenando);
                data.forEach(function (item) {
                    var abertura = item.val();
                    abertura.key = item.key;
                    var arrayteste = {
                        "key": abertura.key,
                        aberturadecaixa: [
                            abertura
                        ]
                    };
                    if (arrayteste.aberturadecaixa[0].data.match(concatenando)) {

                        App.aberturacaixa.abrircaixa.list.push(abertura);
                        console.log(App.aberturacaixa.abrircaixa.list);


                    }
                })
            })
            if (document.getElementById("valorabertura").value == "" || App.aberturacaixa.abrircaixa.fields.data.value == "" || App.aberturacaixa.abrircaixa.fields.admin.value == "") {
                alert("Preencha todos os campos.");
            }
            else if (App.aberturacaixa.abrircaixa.list.length != 0) {
                alert("Já foi feita a abertura de caixa na data informada.");
            }
            else if (App.aberturacaixa.abrircaixa.list.length == 0) {
                firebase.database().ref(App.firebase.path + '/aberturadecaixa').push({
                    data: davaconvertida,
                    usuario: App.aberturacaixa.abrircaixa.fields.admin.value,
                    valor: valorabertura
                })
                alert("Caixa aberto no dia " + davaconvertida + " com sucesso.");
                window.location.href = "/";
            }



        },
        addsangria: function () {
            var data = new Date();
            var dia = data.getDate();
            var mes = parseFloat(data.getMonth()) + 1;
            var ano = data.getFullYear();
            var hora = data.getHours();
            var minuto = data.getMinutes();

            if (dia < 10) {
                dia = "0" + dia;
            }
            if (mes < 10) {
                mes = "0" + mes;
            }
            var dataconvertida = dia + "/" + mes + "/" + ano + " " + hora + ":" + minuto;
            // alert(dataconvertida);

            console.log(App.sangria.add.fields.valor.value);
            console.log(App.sangria.add.fields.comentario.value);
            console.log(dataconvertida);

            if (App.sangria.add.fields.comentario.value == "" || App.sangria.add.fields.valor.value == "") {
                alert("Preencha todos os campos");
            }

            if (App.sangria.add.fields.comentario.value != "" && App.sangria.add.fields.valor.value != "" && dataconvertida != "") {

                firebase.database().ref(App.firebase.path + '/sangrias').push({
                    data: dataconvertida,
                    comentario: App.sangria.add.fields.valor.value,
                    valor: App.sangria.add.fields.valor.value,
                })
                alert("Sangria realizada com sucesso.");
                document.location.reload();
            }
        },
        addreforco: function () {
            var data = new Date();
            var dia = data.getDate();
            var mes = parseFloat(data.getMonth()) + 1;
            var ano = data.getFullYear();
            var hora = data.getHours();
            var minuto = data.getMinutes();

            if (dia < 10) {
                dia = "0" + dia;
            }
            if (mes < 10) {
                mes = "0" + mes;
            }
            var dataconvertida = dia + "/" + mes + "/" + ano + " " + hora + ":" + minuto;
            // alert(dataconvertida);


            if (App.reforco.add.fields.comentario.value == "" || App.reforco.add.fields.valor.value == "") {
                alert("Preencha todos os campos");
            }

            if (App.reforco.add.fields.comentario.value != "" && App.reforco.add.fields.valor.value != "" && dataconvertida != "") {

                firebase.database().ref(App.firebase.path + '/reforcos').push({
                    data: dataconvertida,
                    comentario: App.reforco.add.fields.valor.value,
                    valor: App.reforco.add.fields.valor.value,
                })
                alert("Reforço realizado com sucesso.");
                document.location.reload();
            }
        },
        // editestoque: function () {

        //     var data = new Date();
        //     var dia = data.getDate();
        //     var mes = parseFloat(data.getMonth()) +1;
        //     var ano = data.getFullYear();
        //     var hora = data.getHours();
        //     var minuto = data.getMinutes();

        //     if(dia < 10){
        //         dia = "0"+dia;
        //     }
        //     if(mes < 10){
        //         mes = "0"+mes;
        //     }
        //     var dataconvertida = dia+"/"+mes+"/"+ano;


        //     var estoque = [];
        //     var somaestoque = 0;
        //     firebase.database().ref(App.firebase.path + '/products').on('value', function (data) {
        //         var concatenando = new RegExp(dataconvertida, "i");

        //         data.forEach(function (item) {
        //             var abertura = item.val();
        //             abertura.key = item.key;
        //             console.log(abertura);
        //             var arrayteste = {
        //                 "key": abertura.key,
        //                 aberturadecaixa: [
        //                     abertura
        //                 ]
        //             };

        //             if(arrayteste.aberturadecaixa.length > 0){

        //                 estoque.push(abertura);
        //                 console.log(estoque);
        //                 console.log("entrou aqui rapaziada.");
        //             }

        //         })


        //     })
        // },


    },



});

App.calcTotalCaixa();
App.getProducts();
App.getUsers();
App.getOrdensdeservico();
App.getProviders();
App.getSales();
App.getAberturadeCaixa();
App.getAberturadeCaixaAtivo();
// App.editestoque();


document.cookie;
function deslogar() {

    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    window.location.href = "/";

}
var route = new FMRoute();
// HOME

route.get('/', function (vars, next) {
    document.cookie = "i18next=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
     logado = true;
   

    var data = new Date();
    var dia = data.getDate();
    var mes = parseInt(data.getMonth()) + 1;
    var ano = data.getFullYear();


    if (dia < 10) {
        dia = "0" + dia;
    }
    if (mes < 10) {
        mes = "0" + mes;
    }

    var dataconcat = dia + "/" + mes + "/" + ano;

    firebase.database().ref(App.firebase.path + '/aberturadecaixa').on('value', function (data) {

        var concatenando = new RegExp(dataconcat, "i");
        var arrayteste = [];
        //console.log(concatenando);
        data.forEach(function (item) {
            var abertura = item.val();
            abertura.key = item.key;
             arrayteste = {
                "key": abertura.key,
                aberturadecaixa: [
                    abertura
                ]
            };


            if (arrayteste.aberturadecaixa[0].data.match(concatenando)) {
                App.aberturacaixa.select.selectlist.push(abertura);
               
            }
            else if(!arrayteste.aberturadecaixa[0].data.match(concatenando)){
               
              
            }
        })
        if (document.cookie && arrayteste.aberturadecaixa[0].data.match(concatenando)) {
            App.page.current = 'home';
        }
        else if (document.cookie && !arrayteste.aberturadecaixa[0].data.match(concatenando)){
            window.location.href = "/#/aberturadecaixa"
        }
        else {
            window.location.href = "/login.html"
        }
      


    })
    next();
});
route.get('/logado', function (vars, next) {
    document.cookie = "i18next=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    alert("entrou logado");
    document.cookie = "username=logado; path=/";
    window.location.href = "/"
    next();
});
route.get('/ordemdeservicosbanhoetosa', function (vars, next) {
    document.cookie = "i18next=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    logado = true;
    var data = new Date();
    var dia = data.getDate();
    var mes = parseInt(data.getMonth()) + 1;
    var ano = data.getFullYear();


    if (dia < 10) {
        dia = "0" + dia;
    }
    if (mes < 10) {
        mes = "0" + mes;
    }

    var dataconcat = dia + "/" + mes + "/" + ano;

    firebase.database().ref(App.firebase.path + '/aberturadecaixa').on('value', function (data) {

        var concatenando = new RegExp(dataconcat, "i");
        var arrayteste = [];
        //console.log(concatenando);
        data.forEach(function (item) {
            var abertura = item.val();
            abertura.key = item.key;
             arrayteste = {
                "key": abertura.key,
                aberturadecaixa: [
                    abertura
                ]
            };


            if (arrayteste.aberturadecaixa[0].data.match(concatenando)) {
                App.aberturacaixa.select.selectlist.push(abertura);
               
            }
            else if(!arrayteste.aberturadecaixa[0].data.match(concatenando)){
               
              
            }
        })
        if (document.cookie && arrayteste.aberturadecaixa[0].data.match(concatenando)) {
            App.page.current = 'ordemdeservicosbanhoetosa';
        }
        else if (document.cookie && !arrayteste.aberturadecaixa[0].data.match(concatenando)){
            window.location.href = "/#/aberturadecaixa"
        }
        else {
            window.location.href = "/login.html"
        }
      


    })
    next();
});
route.get('/deslogado', function (vars, next) {
    document.cookie = "i18next=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    alert("entrou deslogado");
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.href = "/"
    next();
});
route.get('/home', function (vars, next) {
    document.cookie = "i18next=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    logado = true;
    var data = new Date();
    var dia = data.getDate();
    var mes = parseInt(data.getMonth()) + 1;
    var ano = data.getFullYear();


    if (dia < 10) {
        dia = "0" + dia;
    }
    if (mes < 10) {
        mes = "0" + mes;
    }

    var dataconcat = dia + "/" + mes + "/" + ano;

    firebase.database().ref(App.firebase.path + '/aberturadecaixa').on('value', function (data) {

        var concatenando = new RegExp(dataconcat, "i");
        var arrayteste = [];
        //console.log(concatenando);
        data.forEach(function (item) {
            var abertura = item.val();
            abertura.key = item.key;
             arrayteste = {
                "key": abertura.key,
                aberturadecaixa: [
                    abertura
                ]
            };


            if (arrayteste.aberturadecaixa[0].data.match(concatenando)) {
                App.aberturacaixa.select.selectlist.push(abertura);
               
            }
            else if(!arrayteste.aberturadecaixa[0].data.match(concatenando)){
               
              
            }
        })
        if (document.cookie && arrayteste.aberturadecaixa[0].data.match(concatenando)) {
            App.page.current = '/home';
        }
        else if (document.cookie && !arrayteste.aberturadecaixa[0].data.match(concatenando)){
            window.location.href = "/#/aberturadecaixa"
        }
        else {
            window.location.href = "/login.html"
        }
      


    })
    next();

    next();
});
route.get('/aberturadecaixa', function (vars, next) {
    document.cookie = "i18next=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    logado = true;
    if (logado == true) {

        App.page.current = "aberturadecaixa"
        var usercookies = document.cookie.split("=");
             
        App.aberturacaixa.abrircaixa.fields.admin.value = usercookies[1];
        
        next();
        document.cookie = "i18next=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
    else {
        window.location.href = "/login.html"
        next();
    }


});
route.get('/sangria', function (vars, next) {
    document.cookie = "i18next=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    logado = true;
    var data = new Date();
    var dia = data.getDate();
    var mes = parseInt(data.getMonth()) + 1;
    var ano = data.getFullYear();


    if (dia < 10) {
        dia = "0" + dia;
    }
    if (mes < 10) {
        mes = "0" + mes;
    }

    var dataconcat = dia + "/" + mes + "/" + ano;

    firebase.database().ref(App.firebase.path + '/aberturadecaixa').on('value', function (data) {

        var concatenando = new RegExp(dataconcat, "i");
        var arrayteste = [];
        //console.log(concatenando);
        data.forEach(function (item) {
            var abertura = item.val();
            abertura.key = item.key;
             arrayteste = {
                "key": abertura.key,
                aberturadecaixa: [
                    abertura
                ]
            };


            if (arrayteste.aberturadecaixa[0].data.match(concatenando)) {
                App.aberturacaixa.select.selectlist.push(abertura);
               
            }
            else if(!arrayteste.aberturadecaixa[0].data.match(concatenando)){
               
              
            }
        })
        if (document.cookie && arrayteste.aberturadecaixa[0].data.match(concatenando)) {
            App.page.current = 'sangria';
        }
        else if (document.cookie && !arrayteste.aberturadecaixa[0].data.match(concatenando)){
            window.location.href = "/#/aberturadecaixa"
        }
        else {
            window.location.href = "/login.html"
        }
      


    })
    next();
});

// Fornecedores - Providers
route.get('/providers', function (vars, next) {
    document.cookie = "i18next=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    logado = true;
    if (document.cookie) {
        App.page.current = 'providers';
    }
    else {
        window.location.href = "/login.html"
    }
    next();
});

route.get('/vendas', function (vars, next) {
    document.cookie = "i18next=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    logado = true;
    if (document.cookie) {
        App.page.current = 'vendas';
    }
    else {
        window.location.href = "/login.html"
    }
    next();
});


route.get('/graficos', function (vars, next) {
    document.cookie = "i18next=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    logado = true;
    if (document.cookie) {
        window.location.href = "/graficoscanvas.html"
    }
    else {
        window.location.href = "/login.html"
    }
    next();


    next();
});
route.get('/fechamentodecaixa', function (vars, next) {
    document.cookie = "i18next=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    logado = true;
    if (document.cookie) {
        window.location.href = "/fechamentocaixa.html"
    }
    else {
        window.location.href = "/login.html"
    }
    next();

});

route.get('/caixa', function (vars, next) {
    document.cookie = "i18next=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    logado = true;
    var data = new Date();
    var dia = data.getDate();
    var mes = parseInt(data.getMonth()) + 1;
    var ano = data.getFullYear();


    if (dia < 10) {
        dia = "0" + dia;
    }
    if (mes < 10) {
        mes = "0" + mes;
    }

    var dataconcat = dia + "/" + mes + "/" + ano;

    firebase.database().ref(App.firebase.path + '/aberturadecaixa').on('value', function (data) {

        var concatenando = new RegExp(dataconcat, "i");
        var arrayteste = [];
        //console.log(concatenando);
        data.forEach(function (item) {
            var abertura = item.val();
            abertura.key = item.key;
             arrayteste = {
                "key": abertura.key,
                aberturadecaixa: [
                    abertura
                ]
            };


            if (arrayteste.aberturadecaixa[0].data.match(concatenando)) {
                App.aberturacaixa.select.selectlist.push(abertura);
               
            }
            else if(!arrayteste.aberturadecaixa[0].data.match(concatenando)){
               
              
            }
        })
        if (document.cookie && arrayteste.aberturadecaixa[0].data.match(concatenando)) {
            App.page.current = 'caixa';
        }
        else if (document.cookie && !arrayteste.aberturadecaixa[0].data.match(concatenando)){
            window.location.href = "/#/aberturadecaixa"
        }
        else {
            window.location.href = "/login.html"
        }
      


    })
    next();
});



route.get('/providers-edit/:key', function (vars, next) {
    document.cookie = "i18next=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    logado = true;
    if (document.cookie) {
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
    }
    else {
        window.location.href = "/login.html"
    }
    next();

});

route.get('/providers-remove/:key', function (vars, next) {
    document.cookie = "i18next=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    logado = true;
    if (document.cookie) {
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
    }
    else {
        window.location.href = "/login.html"
    }
    next();


    next();
});



// Produtos - Products
route.get('/products', function (vars, next) {
    document.cookie = "i18next=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    logado = true;
    if (document.cookie) {
        App.page.current = 'products';
    }
    else {
        window.location.href = "/login.html"
    }
    next();

});

route.get('/products-remove/:key', function (vars, next) {
    document.cookie = "i18next=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    logado = true;
    if (document.cookie) {
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

    }
    else {
        window.location.href = "/login.html"
    }
    next();

});


// Usuarios - Users
route.get('/users', function (vars, next) {
    document.cookie = "i18next=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    logado = true;
    if (document.cookie) {
        App.page.current = 'users';
    }
    else {
        window.location.href = "/login.html"
    }
    next();
});

route.get('/users-edit/:key', function (vars, next) {
    document.cookie = "i18next=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    logado = true;
    if (document.cookie) {
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
    }
    else {
        window.location.href = "/login.html"
    }
    next();

});

route.get('/users-remove/:key', function (vars, next) {
    document.cookie = "i18next=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    logado = true;
    if (document.cookie) {
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
    }
    else {
        window.location.href = "/login.html"
    }
    next();

});
route.get('/ordemservico-remove/:key', function (vars, next) {
    document.cookie = "i18next=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    logado = true;
    if (document.cookie) {
        App.page.current = 'ordemservico-remove';

        App.getOrdem(vars.key, function (user) {
            // limpando erros do form
            App.ordemdeservicosbanhoetosa.remove.error = false;
            App.ordemdeservicosbanhoetosa.remove.messages = [];

            // limpando erros dos campos
            App.ordemdeservicosbanhoetosa.remove.key = user.key;
            App.ordemdeservicosbanhoetosa.remove.codigo = user.codigo;
            App.ordemdeservicosbanhoetosa.remove.cliente = user.cliente;

        });
    }
    else {
        window.location.href = "/login.html"
    }
    next();

});




// Caixa - Sale
route.get('/caixa', function (vars, next) {
    document.cookie = "i18next=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    logado = true;
    if (document.cookie) {
        App.page.current = 'caixa';
    }
    else {
        window.location.href = "/login.html"
    }
    next();

});

// Nao existe - 404 not found
route.error('404', function (vars, next) {
    document.cookie = "i18next=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
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
    App.sales.add.fields.valortotalrecebido.value = somaValorRecebido.toFixed(2);

    App.sales.add.fields.troco.value = somaDesconto.toFixed(2);

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
    App.sales.add.fields.troco.value.toFixed(2);
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

function procuraestoque() {
    var inputprocuraestoque = document.getElementById("inputprocuraestoque").value;
    App.getEstoque(inputprocuraestoque);
}


$(function maskmoney() {


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



function calcTotalCaixa() {
    if (document.getElementById("cash").value == "") document.getElementById("cash").value = "0,00"
    if (document.getElementById("card").value == "") document.getElementById("card").value = "0,00"
    document.cookie = "i18next=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    console.log("aqui");
    var subtotal = 0;
    var discount = parseFloat(App.sales.add.fields.desconto.value);
    var recebido = parseFloat(App.sales.add.fields.valortotalrecebido.value);
    var cash = parseFloat(document.getElementById("cash").value.replace(",", "."));
    var card = parseFloat(document.getElementById("card").value.replace(",", "."));
    var total = parseFloat(App.sales.add.fields.totalcompra.value);

    if (typeof cash != 'number' || isNaN(cash || cash == "")) document.getElementById("cash").value = "0,00";
    if (typeof card != 'number' || isNaN(card) || card == "") document.getElementById("card").value = "0,00";
    if (typeof somaValorRecebido != 'number' || isNaN(somaValorRecebido)) somaValorRecebido = 0;
    if (typeof discount != 'number' || isNaN(discount)) discount = 0;
    console.log(cash);
    console.log(card);

    //console.log(subtotal)
    //console.log(App.sales.list[0].total);

    for (var i = 0; i < App.sales.list.length; i++) {
        subtotal += App.sales.list[i].total;
    }
    //console.log(subtotal);


    var somaValorRecebido = cash + card;

    App.sales.add.fields.valortotalrecebido.value = somaValorRecebido.toFixed(2);


    App.sales.add.fields.subtotalcompra.value = subtotal.toFixed(2);
    // console.log(subtotal);

    if (App.sales.add.fields.discountType == 'value') {
        App.sales.add.fields.totalcompra.value = (subtotal - discount).toFixed(2);
    } else if (App.sales.add.fields.discountType == 'percent') {
        App.sales.add.fields.totalcompra.value = (subtotal * (100 - discount) / 100).toFixed(2);
    }

    if (App.sales.add.fields.valortotalrecebido.value < App.sales.add.fields.totalcompra.value) {
        // console.log("Algo de errado, você está recebendo menos do que deve...");
        App.sales.add.fields.troco.error = true;
    } else {
        // console.log("Ok, você está recebendo tanto quanto deve, confira o troco...");
        App.sales.add.fields.troco.error = false;
    }

    App.sales.add.fields.troco.value = (parseFloat(cash + card) - parseFloat(App.sales.add.fields.totalcompra.value)).toFixed(2);

    // App.sales.add.fields.subtotalFormat = App.numberFormat(App.sales.add.fields.addsubtotal);
    // App.sales.add.fields.totalFormat = App.numberFormat(App.sales.add.fields.total);

    // App.sales.add.fields.subtotalcompra.value = App.sales.add.fields.subtotalFormat;
    // App.sales.add.fields.totalcompra.value = App.sales.add.fields.totalFormat;

}
