Para abrir o projeto no navegador, inicie num servidor.
Deixei como exemplo uma foto iniciando na porta 127.0.0.1:8001


O codigo por extenso, sendo padrao em que utilizo na minha maquina:

cd Desktop/projeto-victor-limao/pet-shop-vitoria/firebase-vuejs/
php -S 127.0.0.1:8001





Explicando um pouco mais as funcoes do projeto:
- Projeto conta com controle de estoque (Cadastro/ Mercadoria), uma CRUD total dos produtos inseridos, com um calculo automatico de margem de lucro, valor bruto do lucro, valor bruto do custo e etc;
- Em Usuario, que tambem poderia ser chamado de "Clientes", armazenamos todos os dados possiveis do cliente, mesmo nao necessariamente os mostrando tudo na table para que nao fique confusa a visualizacao. Temos uma API de CEP, para que tenha mais comodidade e para que nao tenha erro de digitacao de endereco. Temos tambem um autopreenchimento do horario em que um novo cliente foi cadastrado;
- Em Caixa, temos a tela de frente de caixa, que funciona semelhante a uma tela de mercado. Voce insere os produtos e eles vao gerando um subtotal, conseguindo calcular desconto por R$ ou %, calculando tambem o troco a ser devolvido ao cliente e organizando as formas de pagamento, separando quanto foi recebido em dinheiro e quanto em cartao;
- Tudo que foi feito fica de facil exibicao em (Operacoes / Relatorios).
- A intencao em criar a tela /graficos, foi de que me coletasse os dados de venda de todos os setores do comercio e me retornasse em uma forma de facil entendimento, sem muita burocracia (por enquanto a tela esta incompleta).

Resumidamente o projeto que me referi é este, tem uma estimativa tempo de 40 dias de desenvolvimento. Tendo somente eu escrito o codigo. Deixarei em anexo algumas outras coisas que ja desenvolvi, como por exemplo Prototipos de Alta Fidelidade no PhotoShop.
