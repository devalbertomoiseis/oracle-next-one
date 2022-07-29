var segredo = 5
var input = document.querySelector("input")

function verifica(){
  if(input.value == segredo){
    alert("você acertou ?!")
  }else{
    alert("você errou")
  }

}
var button = document.querySelector("button");
button.onclick = verifica;
