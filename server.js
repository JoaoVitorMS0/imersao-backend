import express from "express";
import routes from "./src/routes/postsRoutes.js";
// Importa o framework Express, que será utilizado para criar a nossa aplicação web.

const app = express();
// Cria uma instância do aplicativo Express, que será o ponto de partida para a nossa aplicação.
app.use(express.static("uploads"));
routes(app);
app.listen(3000, () => {
  console.log("Servidor escutando...");
  // Inicia o servidor na porta 3000 e exibe uma mensagem no console indicando que o servidor está pronto para receber requisições.
});
