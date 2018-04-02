# Pequena Documentação para o Teste Vaipe

## Rodar a aplicação
```sh
$ git clone https://github.com/betodasilva/Teste-Vaipe.git
$ cd Teste-Vaipe/
$ npm install
$ npm run dev OU npm run serve dev
```

## Componentes

**List.vue**

- Importa JSON de usuários
- Importa component form

Metodos:
    _openUserData_ - Expande tabela com dados de cada usuário

**Form.vue**

Metodos:
    _addUser_ - Adiciona novo usuário para a lista existente dentro do componente List

Computed:
    Mantém sicronização de usuários com o componente List


