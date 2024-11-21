import { getTodosPosts, criarPost } from "../models/postsModel.js";
import fs from "fs";

// **Função para listar todos os posts**
export async function listarPosts(req, res) {
  // Obtém todos os posts do banco de dados utilizando a função `getTodosPosts`
  const posts = await getTodosPosts();
  // Envia uma resposta HTTP com status 200 (OK) e os posts no formato JSON
  res.status(200).json(posts);
}

// **Função para criar um novo post**
export async function postarNovoPost(req, res) {
  // Extrai os dados do novo post do corpo da requisição
  const novoPost = req.body;
  // Tenta criar o novo post no banco de dados
  try {
    const postCriado = await criarPost(novoPost);
    // Envia uma resposta HTTP com status 200 (OK) e o post criado
    res.status(200).json(postCriado);
  } catch (erro) {
    // Caso ocorra um erro, registra o erro no console e envia uma resposta com status 500 (Erro Interno do Servidor)
    console.error(erro.message);
    res.status(500).json({ "Erro": "Falha na requisição" });
  }
}

// **Função para fazer upload de uma imagem e criar um novo post**
export async function uploadImagem(req, res) {
  // Cria um objeto com os dados do novo post, incluindo o nome da imagem
  const novoPost = {
    descricao: "",
    imgUrl: req.file.originalname,
    alt: ""
  };
  // Tenta criar o novo post e renomear o arquivo da imagem
  try {
    const postCriado = await criarPost(novoPost);
    // Gera um novo nome para o arquivo da imagem, utilizando o ID do post criado
    const imagemAtualizada = `uploads/${postCriado.insertedId}.png`;
    // Renomeia o arquivo da imagem para o novo nome
    fs.renameSync(req.file.path, imagemAtualizada);
    // Envia uma resposta HTTP com status 200 (OK) e o post criado
    res.status(200).json(postCriado);
  } catch (erro) {
    // Caso ocorra um erro, registra o erro no console e envia uma resposta com status 500 (Erro Interno do Servidor)
    console.error(erro.message);
    res.status(500).json({ "Erro": "Falha na requisição" });
  }
}