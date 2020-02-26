/* Crie uma função que recebe a idade de um usuário e retorna uma Promise que depois de 2
segundos retornará se usuário é maior ou não que 18 anos. Se o usuário ter mais que 18 anos de
idade o resultado deve cair no .then, caso contrário, no .catch */

var inputElement = document.querySelector('#vf input');
var buttonElement = document.querySelector('#vf button');

function checaIdade() {
    return new Promise(function (resolve, reject){
        var idade = inputElement.value;
        setTimeout(function() {
            if (idade <= '18') {
                reject();
            } else {
                resolve();
            }
        }, 2000);
    });

   }

    buttonElement.onclick = clicar;

    function clicar() {
        checaIdade()
        .then(function() {
        console.log("Maior que 18");
        }).catch(function() {
        console.log("Menor que 18");
        });
        inputElement.value='';

    }