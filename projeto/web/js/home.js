function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        var endereco_completo = conteudo.logradouro + ", " + conteudo.bairro + ", " + conteudo.localidade + " - " + conteudo.uf;
        
        var enderecocepDiv = document.getElementById('endereco_cep');
        enderecocepDiv.innerHTML = endereco_completo;
        enderecocepDiv.value = endereco_completo;

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
