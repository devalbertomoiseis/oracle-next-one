function pulaLinha(){
  document.write("<br>")
}

function mostra(valor){
  document.write(valor);
  pulaLinha();
}

var vitorias = parseInt(prompt("Entre com o numero de vitorias: "))
var empates = parseInt(prompt("Entre com o numero de empates: "))
var pontos = (vitorias * 3) + empates;

mostra("Os pontos do seu time é: " + pontos)
