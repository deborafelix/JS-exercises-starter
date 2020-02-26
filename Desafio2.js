/* Crie um botão que ao ser clicado cria um novo elemento em tela com a forma de um quadrado
vermelho com 100px de altura e largura. Sempre que o botão for clicado um novo quadrado deve
aparecer na tela. */

<html>
    <head>
        <title>Curso de JS - Desafio 2</title>
    </head>

    <body>
    <div>
        <button class="botao">Quadrado</button>
    </div>
    </body>

    <script>
        var clique = document.querySelection ('button.botao');
        clique.onclick = function cliqueBotao() {
            var quadrado = document.createElement('.box');
                quadrado.style.backgroundColor = '#ff4f4f';
                quadrado.style.width = 100;
                quadrado.style.height= 100;
        }
    </script>
</html>
