#Passo a passo usado na criação do projeto de backend

Para incializar o projeto
yarn init -y

Adicionar o express no projeto
yarn add express

Adicionar o gerenciador do node
yarn add nodemon -D

Adicionado no arquivo package.json 
  "scripts": {
    "dev": "nodemon src/index.js"
  },

Para esse projeto foi usado o banco de dados mongoDB da empresa Atlas

Adicionar o Multer para usar o MultiPart file (inclue o uso do fileupload)
yarn add multer 

Adicionar o shap para manipulação de imagens dentro da aplicação.
yarn add sharp

Adionar o cors, para permitir acesso ao frontend de diferentes domínios
yarn add cors

Adicionar o socket.io para retorno atraves de real-time que usa o protocolo de websocket
yarn add socket.io

Para executar
yarn dev