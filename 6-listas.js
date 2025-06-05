console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDedestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
);

listaDedestinos.push(`Curitiba`); //adicionando um item na lista
console.log("Destinos possíveis:");
console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDedestinos);

listaDedestinos.splice(1,1);
console.log(listaDedestinos);

console.log(listaDedestinos[1]);