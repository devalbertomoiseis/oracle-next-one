const criarTarefa = (evento) => {
     // prevenir comportamento padrão
    evento.preventDefault();
    const input =  document.querySelector('[data-form-input]');
    const valor = input.value
    console.log(valor)
    input.value = ""
}

// Pegar o atributo -> data-form-button
const novaTarefa = document.querySelector('[data-form-button]');

//Evento de Click
novaTarefa.addEventListener('click', criarTarefa)
