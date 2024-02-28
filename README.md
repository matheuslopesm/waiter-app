# WaiterApp

Sistema web feito com React, TypeScript, Styled-Components, Socket.io, Node, MongoDB e Docker, além de um aplicativo mobile feito com React Native para iOS e Android. O objetivo do projeto é construir uma aplicação que gere os pedidos de mesas de um restaurante, sendo que o garçom fará os pedidos pelo App e a Aplicação Web irá agrupá-los e geri-los pelos status de preparo do pedido.

Toda a estrutura da API foi feita do zero com TypeScript, utilizando Banco de Dados Não-relacional.

A aplicação é denominada "WaiterApp", e as operações da API são: Create, Read, Update e Delete (CRUD).

Todas as tecnologias utilizadas foram:
<div style="display: inline_block">
    <h3>Web Development:</h3>
    <img align="center" alt="Mat-Js" height="30" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white">
    <h3>Frameworks, Platforms and Libraries:</h3>
    <img align="center" alt="Mat-RJS" height="30" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB">
    <img align="center" alt="Mat-RN" height="30" src="https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB">
    <img align="center" alt="Mat-Node" height="30" src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white">
    <img align="center" alt="Mat-Sty" height="30" src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
    <img align="center" alt="Mat-SIO" height="30" src="https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101">
    <img align="center" alt="Mat-Exp" height="30" src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB">
    <img align="center" alt="Mat-Yarn" height="30" src="https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white">
    <img align="center" alt="Mat-Ins" height="30" src="https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE">
    <h3>Databases:</h3>
    <img align="center" alt="Mat-MNGDB" height="30" src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"> 
    <h3>Other:</h3>
    <img align="center" alt="Mat-MNGDB" height="30" src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white"> 
</div>

# Final Result 🔥 

<img src="fe\src\assets\images\web-version.png" alt="Web Version" />
<img src="fe\src\assets\images\app-version.png" alt="App Version" style="width: 250px;" />

## Starting 

Para usar o projeto, siga os passos abaixo:
1. Faça o download de todos arquivos neste repositório;
2. Inicie um container de MongoDb no docker com os mesmos dados contidos na pasta `api`;
3. Instale as dependências da API com o comando `yarn init -y` dentro da pasta `api`.
4. Instale as dependências do Front-End com o comando `yarn init -y` dentro da pasta `fe`.
5. Instale as dependências do App com o comando `yarn init -y` dentro da pasta `app`.
6. Após todos os passos, inicie o servidor da API com o comando `yarn dev` dentro da pasta `api`.
7. Após todos os passos, inicie o servidor do Front-End com o comando `yarn dev` dentro da pasta `fe`.
8. Após todos os passos, inicie o servidor do Front-End com o comando `yarn start` dentro da pasta `api`.
9. Substitua todos os locais de endereço IP para o endereço IPv4 da internet que está conectada no seu computador.
10. Abra o aplicativo `Expo` e puxe o projeto `app`.

--- 

##### Make with 🧠 by Matheus Lopes.