// livro.js
const anoAtual = new Date().getFullYear();

const livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1954,
    genero: "Fantasia",
    idadePublicacao: anoAtual - 1954,
};

// Exemplos de acesso direto às propriedades do objeto livro
console.log("Detalhes do Livro:");
console.log("Título: " + livro['titulo']);
console.log("Autor: " + livro['autor']);
console.log("Ano de Publicação: " + livro['anoPublicacao']);
console.log("Gênero: " + livro['genero']);
console.log("Idade de Publicação: " + livro['idadePublicacao'] + " anos");
