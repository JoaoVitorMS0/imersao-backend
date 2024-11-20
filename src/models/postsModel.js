import conectarAoBanco from "../config/dbConfig.js"
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);
// Cria uma conexão com o banco de dados usando a string de conexão fornecida pela variável de ambiente `STRING_CONEXAO`.
// O resultado da conexão é armazenado na variável `conexao`.


export default async function getTodosPosts() {
    // Função assíncrona para obter todos os posts do banco de dados.
    const db = conexao.db("imersao-instabytes");
    // Obtém o banco de dados com o nome "imersao-instabytes" a partir da conexão estabelecida.
    const colecao = db.collection("posts");
    // Obtém a coleção "posts" dentro do banco de dados, onde os posts serão armazenados.
    return colecao.find().toArray();
    // Executa uma consulta para encontrar todos os documentos (posts) na coleção e retorna os resultados como um array.
}