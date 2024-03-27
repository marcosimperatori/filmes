# Galeria de filmes

## Consumindo dados da api: https://www.themoviedb.org/ com react js

O objetivo deste projeto é desmontrar como consumir dados de uma api de filmes, usando react e axios, bem como a componentização da aplicação. Ao longo do desenvolvimento foram utilizados:

* Hooks: useState, useEffect, useParams, useNavigate;
* Axios para fazer as requisições a api.


Funcionamento: 
* na página home o usuário pode navegar entre os filmes mais populares;
* ao clicar em "Ver detalhes" é aberta uma página com a sinopse do filme. Nela o usuário poderá adiconar (ou não) aquele filme a sua lista de favoritos;
* no menu superior direito, ao clicar no botão "Meus favoritos", o usuário será redirecioando a uma página com a sua lista de filmes adicionados. Nesta lista, ele poderá excluir um item qualquer ou clicar em "Mais informações" para ver a págian com os detalhes do filme.

Para utilizar esta api é necessário realizar um cadastro, a partir do qual será possível obter uma chave que deve ser enviada a cada requisição.


## Para executar o projeto na sua máquina:

* certifique-se de que já tenha o node js instalado;
* faça um donwload do repositório e respectiva extração;
* abra o terminal no diretório do sistema e execute:

```npm install``` 

e na sequencia: ```npm run dev```

## Importante:

Nos trechos onde existir o código a seguir, é necessário que você insira a sua chave da api.

```javascript
 const response = await api.get("movie/now_playing", {
    params: {
      api_key: "<sua chave aqui>",
      language: "pt-BR",
      page: 1,
        },
    });
```

Até então a lista de favoritos é salvo no próprio navegador do usuário, em localStorage, com a chave @topfilmes.

A seguir algumas fotos da aplicação:

![Página home](/src/assets/img/home.jpg)
![Página home](/src/assets/img/detalhes.jpg)
![Página home](/src/assets/img/info.jpg)
![Página home](/src/assets/img/localstorage.jpg)
