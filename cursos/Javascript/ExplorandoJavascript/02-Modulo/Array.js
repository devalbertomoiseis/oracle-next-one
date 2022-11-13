const listaDeDestinos = new Array(
    `Paraíba`,
    `Salvador`,
    `Recife`
);
console.table(listaDeDestinos)
listaDeDestinos.splice(1,1);
console.table(listaDeDestinos[1])