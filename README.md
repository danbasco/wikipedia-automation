
# Projeto de Testes Automatizados com Cypress

Este repositório contém uma suíte de testes automatizados utilizando Cypress, desenvolvida para garantir a qualidade e funcionamento das funcionalidades principais do sistema. Abaixo, você encontrará a estrutura do projeto, instruções de instalação e execução, além de descrições dos testes presentes.

# Wikipedia

A **Wikipedia** é uma enciclopédia online colaborativa e gratuita, onde voluntários ao redor do mundo podem criar e editar artigos sobre uma ampla variedade de tópicos. Lançada em 2001, ela é mantida pela Wikimedia Foundation e está disponível em diversos idiomas, funcionando como uma das principais fontes de referência aberta na internet.

Os usuários podem fazer cadastro e login, pesquisar artigos no site e até editar os artigos caso tenha uma conta verificada.

## Pré-requisitos

- **Node.js**: Certifique-se de ter o Node.js instalado em sua máquina.
- **Cypress**: O Cypress deve estar instalado como dependência do projeto.

## Instalação

Cada arquivo de teste cobre uma funcionalidade específica do sistema, garantindo que os componentes críticos funcionem conforme o esperado.

## Configuração de ambiente

Siga os passos abaixo para configurar o ambiente de testes:

   ```bash
   git clone https://github.com/danbasco/wikipedia_cypress.git
```

### Instale as dependências do projeto:

```
npm install cypress
```

### Configurando o .ENV
Substitua o Arquivo `cypress.env.example.json` por `cypress.env.example.json`. No **login** e **password**, substitua com a **sua** senha para a plataforma da Wikipedia. 

_OBS: para os testes de edição de página, é importante que possua uma conta verificada na plataforma._

### Executando os Testes
Para executar os testes, você tem duas opções:

Modo Interativo: Abra a interface do Cypress para executar os testes manualmente.

```
npx cypress open
```
Modo Headless: Execute todos os testes no modo headless (sem interface), ideal para integração contínua.
```
npx cypress run
```

É também necessário fazer a configuração do **ENV**, com o login e senha na plataforma 
_OBS: Será necessário uma conta verificada para conseguir editar a página e realizar seus testes._



## Funcionalidades Testadas
- **Login**
- **Edição de Artigos**
- **Pesquisa**
