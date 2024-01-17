// iniciando a classe do view com um parametro objeto json
let app = new Vue({
    el: '#app', //aqui é o id do elemento html que está associado a classe vue
    data:{ //aqui é o objeto json que vai receber os dados a serem manipulados e inseridos no elemento html
        frase:'Olá <strong>Tiago</strong>, tudo bem?', //aqui é um dado que vai ser inserido no elemento html
        
    }
});