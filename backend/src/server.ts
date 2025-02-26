import express, { Request, Response } from "express";
import path from "path"
import cors from "cors";
import dotenv from "dotenv";
import rota from "./rotas/rotas";

dotenv.config();

const server = express();
const port = process.env.PORT || 5000;

server.use(cors());

server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({ extended: false }));

server.use(rota);

server.listen(port, () => {
    console.log('Servidor rodando na porta ' + port)
});
