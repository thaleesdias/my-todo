# 📝 Task Manager API

API simples para criação, listagem e atualização de tarefas, com controle de status (concluída ou não concluída). Feita com Node.js, Express, TypeScript e PostgreSQL.

---

## 🚀 Tecnologias usadas

- Node.js
- Express
- TypeScript
- PostgreSQL
- pg (biblioteca de conexão)
- JWT
- bcrypt
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

PORT=porta_para_rodar_app

PGHOST=localhost

PGPORT=porta_do_db

PGUSER=seu_usuario

PGPASSWORD=sua_senha

PGDATABASE=seu_banco

JWT_SECRET=secret

# Rotas

rotas pra ver todas as tasks
"api/tasks"

rota para criar task
"api/create"

rota para ver tasks concluidas
"api/completed"

rota para mostar tasks incompleted
"api/incompleted"

rota para atualizar o completed
"api/task/:id/complete"

rota para marcar como incompleted
"api/task/:id/incomplete"

rota para deletar task
"api/delete/:id"

rota para criar usuario
"auth/register"

rota para logar como usuario
"auth/login"

rota para listar usuarios
"auth/list-user"

# Modo desenvolvimento

npm run dev

# Modo produção

npm run build && npm start
