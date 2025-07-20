let botao = document.getElementById('btn');

botao.onclick = taxa;

function taxa(){
    let capital = document.getElementById('capitalInvestido').value;
let capitalFloat = parseFloat(capital)
let periodo = document.getElementById('periodo').value;
let periodoFloat = parseFloat(periodo)

    let soma = 1 + 0.05;
    let expoente = Math.pow(soma,periodoFloat)
    let capitalComposto = capitalFloat*expoente;
    console.log("Capital Inicial:" + capital + "Perído: "+ periodo +"taxa de juros: "+ capitalComposto)
}