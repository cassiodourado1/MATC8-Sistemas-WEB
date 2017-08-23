function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        var endereco_completo = conteudo.logradouro + ", " + conteudo.bairro + ", " + conteudo.localidade + " - " + conteudo.uf;
        
        var enderecocepDiv = document.getElementById('endereco_cep');
        carregarNoMapa(endereco_completo);
    } else {
        alert("CEP inválido.");
    }
}

//parametros: valor do cep, arquivo de onde vem a requisição
function buscarcep(valor) { //gambiarra
    var cep = valor.replace(/\D/g, '');
    if (cep != "") {
        var validacep = /^[0-9]{8}$/;
        if (validacep.test(cep)) {
            var script = document.createElement('script');
            script.src = '//viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';
            document.body.appendChild(script);
        } else {
            alert("Formato de CEP inválido.");
        }
    }
}

function callbackLikesFB(content){
  var likesfb = document.getElementById("likesFb");
  likesfb.value = content.fan_count;
  likesfb.innerHTML = content.fan_count;
  likesfb.style.display="none";
}

document.addEventListener("DOMContentLoaded", function(){
  var script = document.createElement('script');
  script.src = 'https://graph.facebook.com/v2.10/1737081642972696?fields=name,fan_count&access_token=EAACEdEose0cBADB3NhwyAbEyODWj9bqGeh045kjYLy4MCANQ0gW5i5dCZAC3xUG9nV5LqxXCN7rtcTxXXkUStq0sOgNnHhZCfpmvVbejEY8ppiZAbt1JjNeIHqnZB9x0ZAWIxcXtIPpmTJHwRuKf9WyciagHejW72ZAyuOyi1m7vEaZCxC76iqSW1ZAhU7wrWt4ZD&callback=callbackLikesFB';
  document.body.appendChild(script);
});
