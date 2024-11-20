import getTodosPosts from "../models/postsModel.js";

export async function listarPosts(req, res) {
    // Define uma rota GET para a URL "/posts".
    // Quando uma requisição GET for feita para essa URL, esta função será executada.
    const posts = await getTodosPosts();
    // Chama a função `getTodosPosts` para obter todos os posts do banco de dados.
    res.status(200).json(posts);
    // Envia uma resposta HTTP com status 200 (OK) e os posts no formato JSON.
}
