let botao = document.getElementById('btn')

botao.onclick = fibonacci;

function fibonacci(){

    let num = document.getElementById('num').value;
    let fibo = [0,1];
    let i = 2;
    while(i<=num){
        let doisAntes = fibo[i-2]
        let umAntes = fibo[i-1]
        let resultado = doisAntes + umAntes;
        fibo.push(resultado)
        i++
       }
    
    console.log(fibo);

    
}