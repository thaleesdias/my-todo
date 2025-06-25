# 📝 Task Manager API

API simples para criação, listagem e atualização de tarefas, com controle de status (concluída ou não concluída). Feita com Node.js, Express, TypeScript e PostgreSQL.

---

## 🚀 Tecnologias usadas

- Node.js
- Express
- TypeScript
- PostgreSQL
- pg (biblioteca de conexão)
- dotenv (para variáveis de ambiente)

---

## ⚙️ Instalação

# Clona o repositório

git clone https://github.com/thalessdias/my-todo.git

# Acessa o diretório

cd /src

# Instala as dependências

pnpm install ou npm install

# Copia o arquivo de variáveis de ambiente

cp .env.example .env

# Preenche o .env com as infos do seu banco

PGHOST=localhost

PGPORT=porta_do_db

PGUSER=seu_usuario

PGPASSWORD=sua_senha

PGDATABASE=seu_banco

PORT=porta_para_rodar_app
---

# Rotas

rotas pra ver todas as tasks
"/tasks"

rota para criar task
"/create"

rota para ver tasks concluidas
"/completed"

rota para atualizar o completed
"/task/:id/complete"

rota para marcar como incompleted
"/task/:id/incomplete"

rota para deletar task
"/delete/:id"

# Modo desenvolvimento

npm run dev

# Modo produção

npm run build && npm start
