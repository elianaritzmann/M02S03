let botao = document.getElementById('btn');

botao.onclick = matriz;

function matriz(){
    let numero = document.getElementById('numero').value;

   

    for(let i=0; i<numero;i++){
        let matriz ='';
        for(let j=0; j< numero;j++){
            if(i===j){
                matriz +='1'
            }else{
                matriz += '0'
            }
        }

        console.log(matriz)

    }

}