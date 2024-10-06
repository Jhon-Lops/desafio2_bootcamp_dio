const readlineSync = require('readline-sync');  //biblioteca readline-sync  instalada para ajudar

function nivel() {
    const vitorias = readlineSync.question("Quantidade de vitórias: ");
    const derrotas = readlineSync.question("Quantidade de derrotas: ");

    let saldoVitoria = (vitorias - derrotas);

    if (saldoVitoria < 10) {
        return "Ferro";
    } else if (saldoVitoria > 11 && saldoVitoria < 20) {
        return "Bronze";
    } else if (saldoVitoria > 21 && saldoVitoria < 50) {
        return "Prata";
    } else if (saldoVitoria > 51 && saldoVitoria < 80) {
        return "Ouro";
    } else if (saldoVitoria > 81 && saldoVitoria < 90) {
        return "Diamante";
    } else if (saldoVitoria > 91 && saldoVitoria < 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}

const nivelAtual = nivel();
console.log(`Seu saldo de vitória está no nível de ${nivelAtual}`);