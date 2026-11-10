let nome = "filipe";
let quantidadeDeXp = 5800;
let nivel = "";

if (quantidadeDeXp <= 1000) {
    nivel = "ferro";
}else if(quantidadeDeXp >= 1001 && quantidadeDeXp <= 2000){
    nivel = "bronze";
}else if(quantidadeDeXp >= 2001 && quantidadeDeXp <= 5000){
    nivel = "prata";
}else if(quantidadeDeXp >= 5001 && quantidadeDeXp <= 7000){
    nivel = "ouro";
}else if(quantidadeDeXp >= 7001 && quantidadeDeXp <= 8000){
    nivel = "platina";
}else if(quantidadeDeXp >= 8001 && quantidadeDeXp <= 9000){
    nivel = "ascendente";
}else if(quantidadeDeXp >= 9001 && quantidadeDeXp <= 10000){
    nivel ="imortal";
}else {
    nivel = "radiante";
}

    for (let i = 1; i <= 1; i++) {
        console.log(`O Herói de nome ${nome} está no nível de ${nivel} `)
    }
    