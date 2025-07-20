let botao = document.getElementById('btn')

botao.onclick = frete;


function frete(){
let regiao = document.getElementById('regiao').value;
let peso = parseFloat(document.getElementById('peso').value);
let preco;
switch(regiao){

    case 'norte': 
        preco = (2.20*peso);
        preco = (preco + 24);
        console.log(preco)
    break;
    case 'nordeste':
        preco = (2.10*peso);
        preco = (preco+22);
        console.log(preco)
    break;
    case 'centro-oeste':
        preco = (2*peso);
        preco = (20+peso);
        console.log(preco)
    break;

    case 'sudeste':
        preco =(1.80*peso);
        preco = (preco+16);
        console.log(preco)
    break;

    case 'sul':
        preco =(1.90*peso)
        preco = (preco+18)
        console.log(preco)
    break;

    default: 
        console.log("Região invalida")
    }}