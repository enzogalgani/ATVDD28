//  Controle de Estoque Simples (Lista Básica)
const perifericos = ["Teclado Mecânico", "Mouse Gamer", "Headset", "Monitor", "Webcam Full HD"];

perifericos[2] = "Webcam Full HD";

for (let posicao = 0; posicao < perifericos.length; posicao++) {
    console.log("Posição " + posicao + ": " + perifericos[posicao]);

}

// Ficha Cadastral de Equipamento (Objeto Básico)
const computador = {
    patrimonio: "PAT-007",
    processador: "Intel i7",
    memoriaRAM: "32",
    emManutencao: false
};

console.log("O computador de patrimônio " + computador.patrimonio + " possui processador " + computador.processador + " e " + computador.memoriaRAM + " GB de RAM ");

// Carrinho de Compras (Lista de Objetos)
const carrinho = [
    { nome: "Mouse", preco: 50, quantidade: 1 },
    { nome: "Teclado", preco: 120, quantidade: 1 },
    { nome: "Monitor", preco: 800, quantidade: 2 },
    { nome: "Cabo", preco: 35, quantidade: 3 }
];

let valorTotal = 0;

for (let posicao = 0; posicao < carrinho.length; posicao++) {
    valorTotal += carrinho[posicao].preco * carrinho[posicao].quantidade;
}

console.log("Valor total: R$ " + valorTotal);

// Perfil de Usuário e Permissões (Objeto com Listas)
const usuario = {
    nome: "Enzo",
    cargo: "Diretor",
    permissoes: ["vendas", "estoque", "admin"]
};

console.log(usuario.nome + " - " + usuario.cargo);

for (let posicao = 0; posicao < usuario.permissoes.length; posicao++) {
    console.log("-Acesso liberado: " + usuario.permissoes[posicao]);

    if (usuario.permissoes[posicao] === "admin") {
        console.log("Atenção: Usuário com privilégios totais!");

    }
}

// Gerenciamento de Chamados de Suporte (Lista de Objetos com Listas)
const chamados = [
    { id: 1, cliente: "Gabriel", resolvido: false, historico: ["Chamado aberto", "Técnico atribuído"] },
    { id: 2, cliente: "João", resolvido: true, historico: ["Chamado aberto", "Chamado fechado"] },
    { id: 3, cliente: "Pedro", resolvido: false, historico: ["Chamado aberto", "Aguardando peça"] }
];

for (let posicao = 0; posicao < chamados.length; posicao++) {
    if (chamados[posicao].resolvido === false) {
        console.log("ID: " + chamados[posicao].id);
        console.log("Cliente: " + chamados[posicao].cliente);

        for (let passo = 0; passo < chamados[posicao].historico.length; passo++) {
            console.log("- " + chamados[posicao].historico[passo]);
        }
    }
}