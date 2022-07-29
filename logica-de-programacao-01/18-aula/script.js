function pulaLinha() {

  document.write("<br>");
}

function mostra(frase) {

  document.write(frase);
  pulaLinha();
}
for( var contador = 1; contador <= 10; contador = contador + 1 ) {
  alert("Contador atual: " + contador);
}
