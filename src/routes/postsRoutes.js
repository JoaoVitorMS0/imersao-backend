import express from "express";
import { listarPosts } from "../controllers/postsController.js";

const routes = (app) => {
  app.use(express.json());
  // Habilita o middleware `express.json()`, que permite que a aplicação entenda dados enviados no formato JSON.

  app.get("/posts", listarPosts);
};

export default routes;