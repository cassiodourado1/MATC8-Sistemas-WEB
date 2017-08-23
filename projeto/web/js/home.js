function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

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
  console.log(content.fan_count);
  likesfb.style.display="none";
}


document.addEventListener("DOMContentLoaded", function(){
  var script = document.createElement('script');

  var acess_token = "EAACEdEose0cBAOwW62AwvDzZBNakrLYqXUXtvxaro9w1WubqBogVUkJkaZAw9ZBwND0hyVAci8se8hmaUNdZApe52eHb16efQBxYjynGymGi4pA5J6PWfqZC3jlI5WsJDQUCcrfx7SndVdkvjxZCoinAWE4uG5vzu39SDdwzG5M3VwZAXgZCaRFRBvvV04fbjSFUXLzK9ew9kwZDZD"

  script.src = "https://graph.facebook.com/v2.10/1737081642972696?fields=name,fan_count&access_token="+acess_token+"&callback=callbackLikesFB";
  document.body.appendChild(script);
});
