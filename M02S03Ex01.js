let frase = document.getElementById('frase');
let palavras = frase.value.split(" ");

let botao = document.getElementById('btn')

botao.onclick = letra;

function letra(){
let palavras = frase.value.split(" ");
console.log(palavras);

let frasePronta = [];
for(let palavra of palavras){
   let caixaAlta = palavra[0].toUpperCase()
   let resto = palavra.slice(1);
   let palavraCompleta = caixaAlta + resto;
  frasePronta.push(palavraCompleta);

}console.log(frasePronta);
}
