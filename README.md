# Painel de Login com JWT

Painel de autenticação construído com React e Next.js, consumindo uma API fake (DummyJSON) para praticar o fluxo completo de login com JWT — desde o armazenamento seguro do token até a proteção de rotas.

## 🎯 Objetivo

Projeto de estudo com foco em aprender fluxo de autenticação no front-end e gerenciamento de estado/sessão.

## 🚀 Tecnologias

- [React](https://react.dev/)
- [Next.js](https://nextjs.org/)
- [Axios](https://axios-http.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TanStack Query](https://tanstack.com/query/latest)
- [DummyJSON](https://dummyjson.com/) — API fake usada para autenticação

## 📚 Conceitos praticados

- Formulários controlados e validação
- Armazenamento seguro do token via cookie `httpOnly`
- API routes do Next.js como camada intermediária (front-end → rota própria → DummyJSON)
- Rotas protegidas com middleware do Next.js
- Gerenciamento de estado de servidor com TanStack Query (cache, loading, erro)
- Interceptação de requisições com Axios
- Expiração e refresh de token
- Tratamento de erros de autenticação (401/403)

## 🏗️ Arquitetura

O front-end não se comunica diretamente com a DummyJSON. O fluxo é:

```
React (formulário de login)
   ↓
API route própria do Next.js (/api/login)
   ↓
DummyJSON (/auth/login)
   ↓
API route seta o cookie httpOnly na resposta
   ↓
Middleware do Next.js valida o cookie em rotas protegidas
```

Essa camada intermediária existe porque cookies `httpOnly` só podem ser criados pelo servidor (via header `Set-Cookie`), nunca pelo JavaScript do navegador.

## ⚙️ Como rodar o projeto

```bash
# Clonar o repositório
git clone https://github.com/Fguimaraes12/auth-panel-jwt.git

# Entrar na pasta
cd nome-do-projeto

# Instalar as dependências
npm install

# Rodar em ambiente de desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:3000`.

## 🔑 Credenciais de teste (DummyJSON)

A DummyJSON disponibiliza usuários fictícios para teste. Exemplo:

- **Usuário:** `emilys`
- **Senha:** `emilyspass`

Consulte a [documentação da DummyJSON](https://dummyjson.com/docs/auth) para mais usuários disponíveis.
