import express from "express";
import multer from "multer";
import {
  listarPosts,
  postarNovoPost,
  uploadImagem,
  atualizarNovoPost,
} from "../controllers/postsController.js";
import cors from "cors";

const corsOptions = {
  origin: "http://localhost:8000",
  optionsSuccessStatus: 200,
};

// Configura o armazenamento em disco para o Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Define o diretório de destino para os arquivos carregados
    cb(null, "uploads/"); // Substitua 'uploads/' pelo diretório desejado
  },
  filename: function (req, file, cb) {
    // Usa o nome original do arquivo para preservar a intenção do usuário
    cb(null, file.originalname);
  },
});

// Cria uma instância do middleware Multer com a configuração de armazenamento
const upload = multer({ storage });

const routes = (app) => {
  // Habilita o parsing de dados JSON para o corpo da requisição
  app.use(express.json());
  app.use(cors(corsOptions));

  // Rota para listar todos os posts
  app.get("/posts", listarPosts);

  // Rota para criar um novo post
  app.post("/posts", postarNovoPost);

  // Rota para upload de imagens usando o middleware Multer
  app.post("/upload", upload.single("imagem"), uploadImagem);

  app.put("/upload/:id", atualizarNovoPost);
};

export default routes;
