function desenhaQuadrado(x, y, cor) {

  var tela = document.querySelector('canvas');
  var pincel = tela.getContext('2d');

  pincel.fillStyle = cor;
  pincel.fillRect(x, y, 50, 50);
  pincel.strokeStyle = 'black';
  pincel.strokeRect(x, y, 50, 50);

}

for(var x = 0; x < 600; x= x+50){
  desenhaQuadrado(x, 0, 'green')
  desenhaQuadrado(x, 50, 'red')
  desenhaQuadrado(x, 100, 'blue')
}


desenhaQuadrado(0,0, 'blue');
desenhaQuadrado(0, 50, 'red');
desenhaQuadrado(0,100, 'yellow');
