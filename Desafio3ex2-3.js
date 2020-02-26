/* Crie uma tela com um <input> que deve receber o nome de um usuário no Github. Após digitar o
nome do usuário e clicar no botão buscar a aplicação deve buscar pela API do Github (conforme
URL abaixo) os dados de repositórios do usuário e mostrá-los em tela:
URL de exemplo: https://api.github.com/users/diego3g/repos
Basta alterar "diego3g" pelo nome do usuário. */

var inputElement = document.querySelector('#form input');
var buttonElement = document.querySelector('#form button');
var ulElement = document.querySelector('#form ul');
var itemLoading  = document.querySelector('#item p');
itemLoading.style.display = 'none';

function buscar() {
    var nome = inputElement.value;
    itemLoading.style.display = 'block';

setTimeout(function() {
    axios.get('http://api.github.com/users/' + nome +'/repos')
    .then(function(response) {
       console.log(response);

       var linkElement = document.createElement('a');
       linkElement.href = "https://api.github.com/users/" + nome + "/repos";
       var linkName = document.createTextNode(nome);
       linkElement.appendChild(linkName);
       document.body.appendChild(linkElement);

       for (repos of response.data) {
            var list = document.createElement("li");
            var paragraphElement = document.createElement('span');
            var text = document.createTextNode(repos.name);
            paragraphElement.appendChild(text);
            list.appendChild(paragraphElement);
           
            document.body.appendChild(list);
       }
       itemLoading.style.display = 'none';

    })
    .catch(function(error){
        alert('ERRO 404 - Usuário não encontrado');
        itemLoading.style.display = 'none';
    });
}, 2000);
    inputElement.value='';

}

buttonElement.onclick = buscar;
