let botao = document.getElementById('btn')
botao.onclick = validar
function validar(){

let dia = document.getElementById('dia').value;
let mes = document.getElementById('mes').value;
let ano = document.getElementById('ano').value;

if(ano > 0 && ano< 9999)
    if(mes>= 1 && mes <=12){
        if( mes == 4 ||mes == 6 || mes == 11){
            if(dia>0 && dia <31 ){
                 console.log("Data Válida!")}

            else{console.log("Data invalida") }

            }else if( mes == 1 ||mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12){

                    if(dia>0 && dia <=31 )
                                {console.log("Data Válida!")}
                    
                     else{console.log("Data invalida")}

            }else if(mes == 2){

                    if(dia >0 && dia <=28){
                        console.log("Data Válida")

                    }else{console.log("Data inválida")}}

     }else{console.log("Data invalida")

}else{console.log("Data invalida")}

}