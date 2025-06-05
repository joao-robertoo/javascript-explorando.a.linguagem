console.log(`Trabalhando com condicionais`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDedestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
);

const idadeComprador = 21;
console.log("Destinos possíveis:");
console.log(listaDedestinos);

if(maiorDeIdade >= 18){
    console.log("Comprador maior de idade")
    listaDedestinos.splice(1,1) //removendo um item
}else {
    console.log("Não é maior de idade e não posso vender")
}

console.log(listaDedestinos);