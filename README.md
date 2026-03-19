<div align="center">

# 🚀 ACDX V2 — Front-end

> Projeto de estudo e desenvolvimento de uma aplicação web Angular com Server-Side Rendering (SSR).

![Status](https://img.shields.io/badge/Status-Em%20Andamento-yellow?style=for-the-badge)
![Estudo](https://img.shields.io/badge/Tipo-Estudo-blue?style=for-the-badge)

---

![Angular](https://img.shields.io/badge/Angular-21-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![RxJS](https://img.shields.io/badge/RxJS-7.8-B7178C?style=for-the-badge&logo=reactivex&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-Styles-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-SSR-339933?style=for-the-badge&logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/npm-11.9.0-CB3837?style=for-the-badge&logo=npm&logoColor=white)

</div>

---

## 📋 Sobre o Projeto

Este repositório contém o **front-end** da aplicação **ACDX Teste**, desenvolvida com Angular 21 e suporte a **Server-Side Rendering (SSR)** utilizando `@angular/ssr` e Express. O projeto faz parte de um estudo prático de desenvolvimento full-stack, integrando uma interface moderna com uma API RESTful no back-end.

O back-end da aplicação está disponível no seguinte repositório: [meu_projeto — Back-end](https://github.com/AndersonJJR/meu_projeto)

---

## ✅ Status do Projeto

| Item       | Descrição                     |
|------------|-------------------------------|
| 📌 Tipo    | Estudo / Aprendizado          |
| 🔄 Status  | EM ANDAMENTO                  |
| 🗓️ Início  | 2025                          |

---

## 🛠️ Tecnologias Utilizadas

### Front-end

| Tecnologia        | Versão   | Descrição                                    |
|-------------------|----------|----------------------------------------------|
| Angular           | ^21.2.0  | Framework principal para desenvolvimento SPA |
| TypeScript        | ~5.9.2   | Superset tipado do JavaScript                |
| RxJS              | ~7.8.0   | Programação reativa com Observables          |
| SCSS              | —        | Pré-processador CSS para estilização         |
| @angular/ssr      | ^21.2.1  | Server-Side Rendering com Angular            |
| @angular/router   | ^21.2.0  | Roteamento entre páginas da aplicação        |
| @angular/forms    | ^21.2.0  | Gerenciamento de formulários reativos        |

### Servidor / SSR

| Tecnologia | Versão  | Descrição                              |
|------------|---------|----------------------------------------|
| Express    | ^5.1.0  | Servidor HTTP para servir o SSR        |
| Node.js    | —       | Ambiente de execução do servidor       |

### Ferramentas de Desenvolvimento

| Ferramenta   | Versão   | Descrição                                    |
|--------------|----------|----------------------------------------------|
| Angular CLI  | ^21.2.1  | Interface de linha de comando do Angular     |
| Prettier     | ^3.8.1   | Formatador de código                         |
| Vitest       | ^4.0.8   | Framework de testes unitários                |
| npm          | 11.9.0   | Gerenciador de pacotes                       |

---

## 📁 Estrutura do Projeto

```
acdx-teste/
├── src/
│   ├── app/              # Módulos, componentes, serviços e rotas
│   ├── assets/           # Arquivos estáticos (imagens, ícones, etc.)
│   ├── styles.scss       # Estilos globais da aplicação
│   ├── main.ts           # Ponto de entrada do client-side
│   ├── main.server.ts    # Ponto de entrada do server-side (SSR)
│   ├── server.ts         # Configuração do servidor Express (SSR)
│   └── index.html        # Template HTML principal
├── public/               # Arquivos públicos
├── angular.json          # Configurações do Angular CLI
├── tsconfig.json         # Configurações do TypeScript
├── package.json          # Dependências do projeto
└── README.md
```

---

## ⚙️ Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [npm](https://www.npmjs.com/) (v11+)
- [Angular CLI](https://angular.io/cli) (v21+)

---

## 🚀 Como Executar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/AndersonJJR/acdx-teste.git
cd acdx-teste
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Execute em modo de desenvolvimento

```bash
npm start
# ou
ng serve
```

Acesse: [http://localhost:4200](http://localhost:4200)

### 4. Build de produção

```bash
npm run build
```

### 5. Executar com SSR (Server-Side Rendering)

```bash
npm run build
npm run serve:ssr:acdx-teste
```

### 6. Executar testes

```bash
npm run test
```

---

## 📸 Capturas de tela

### Fluxo da aplicação

<p align="center">
  <img src="./assets/cadastro_um.png" alt="Tela 01 - Cadastro" width="30%" />
  <img src="./assets/cadastro_dois.png" alt="Tela 02 - Cadastro efetuado" width="30%" />
  <img src="./assets/ethereal.png" alt="Tela 03 - Email recebido" width="30%" />
</p>

<p align="center">
  <img src="./assets/conta_vef.png" alt="Tela 04 - Conta Verificada" width="30%" />
  <img src="./assets/login.png" alt="Tela 05 - Login" width="30%" />
  <img src="./assets/home.png" alt="Tela 06 - Home" width="30%" />
</p>

<p align="center">
  <img src="./assets/home_dois.png" alt="Tela 07 - Home" width="30%" />
  <img src="./assets/produtos_um.png" alt="Tela 08 - Produtos" width="30%" />
  <img src="./assets/produtos_inativo.png" alt="Tela 09 - Produtos Inativos" width="30%" />
</p>

<p align="center">
  <img src="./assets/cadastro_produto.png" alt="Tela 10 - Cadastro de Produtos" width="45%" />
  <img src="./assets/att_produtos.png" alt="Tela 11 - Atualização de Produtos" width="45%" />
</p>


## 🔗 Repositório Back-end

Este projeto consome a API desenvolvida em Java Spring Boot disponível em:

👉 [https://github.com/AndersonJJR/meu_projeto](https://github.com/AndersonJJR/meu_projeto)

Certifique-se de que o back-end está rodando antes de iniciar o front-end em ambiente de desenvolvimento.

---

## 👤 Autor

<div align="center">

<!-- Substitua a URL abaixo pela sua imagem de perfil ou foto -->
<img src="https://avatars.githubusercontent.com/u/206952189?v=4" width="100px" style="border-radius: 50%;" alt="Foto do autor"/>

**Anderson JJR**

[![GitHub](https://img.shields.io/badge/GitHub-AndersonJJR-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/AndersonJJR)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Anderson-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/andersonchavesjunior/)

</div>

---

<div align="center">
  <p>Feito por Anderson Júnior</p>
</div>
