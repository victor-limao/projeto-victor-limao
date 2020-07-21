$(document).ready(verificalogin());


function verificalogin(){
    if(document.cookie){
       
    }
    else {
        window.location.href = "/login.html"
    }
}
console.log(document.getElementsByClassName("line-chart"))


var ctx = document.getElementsByClassName("line-chart");

var randomScalingFactor = function () {

    var mathrandom = Math.round(Math.random() * 15000);
    // console.log(mathrandom);
    return mathrandom;


};
var chartGraph = new Chart(ctx, {
    type: 'doughnut',

    data: {
        labels: ["Loja", "Banho e Tosa", "Veterinária", "Outros"],
        datasets: [
            {

                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    0,


                ],

                backgroundColor: ['rgba(255, 0, 0, 0.8', 'rgba(0, 0, 0, 0.8', 'rgba(25, 51, 76, 0.8'],
                hoverBackgroundColor: 'rgba(0, 0, 0, 0.3)',
                hoverBorderColor: 'rgba(0, 0, 0, 0.5)',
                pointBorderColor: 'rgba(0, 100, 255, 1)',




            },



        ],


    },

    options: {
        title: {
            display: true,
            fontSize: 20,
            text: "Vendas 09/2019 - PET Vitória"
        },


    }


});
function deslogar(){
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    window.location.href = "/";
    
}