import express from "express";

const app = express();
const porta = 3000;

const host = "0.0.0.0";
//0.0.0.0 permite acesso à aplicação vindas de todas as interfaces de rede

// app.get("/dinheiro", (requisicao, resposta) => {
//   resposta.send(`<h1>R$${Math.random() * 1000}</h1>`);
// }); //rota para o endpoint /dinheiro

//configurando o servidor para prover arquivos estáticos
app.use(express.static("/publico"));


app.listen(porta, host, () => {
  console.log(`Servidor em execução em http://${host}:${porta}`); // template literals
});
