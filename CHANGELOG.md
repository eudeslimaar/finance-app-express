# CHANGELOG

Este arquivo documenta todas as mudanças significativas do projeto.

O formato segue as recomendações de [Keep a Changelog](https://keepachangelog.com/).

---

## [0.1.2] - 2025-03-09
### Melhorias
- **Refatorado `userRepository.js`** para usar o modelo `User` diretamente, sem desestruturação manual.
- **Refatorado `userModel.js`** para garantir que o campo `password` não seja exposto na API.
- **Atualizada a estrutura do banco de dados** para melhor rastreabilidade de mudanças dos usuários.

---


## [0.1.1] - 2025-03-09

### Corrigido
- Correção no `userRepository.js`: função `getUserByEmailOrUsername` agora implementada corretamente.

---

## [0.1.0] - 2025-03-09

### Criado
- **Modelo de usuário (`userModel.js`)**.
- **Repositório de usuários (`userRepository.js`)** para acesso ao banco de dados.
- **Serviço de usuários (`userService.js`)** para validações e regras de negócio.
- **Controlador de usuários (`userController.js`)** para gerenciar as requisições.
- **Rotas de usuários (`userRoutes.js`)** para definir os endpoints da API.

---