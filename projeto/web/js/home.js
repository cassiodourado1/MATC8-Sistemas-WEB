function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        var endereco_completo = conteudo.logradouro + ", " + conteudo.bairro + ", " + conteudo.localidade + " - " + conteudo.uf;
        document.getElementById('endereco_cep').innerHTML = endereco_completo;
        //carregar no mapa o endereco_completo       
    } else {
        alert("CEP errado.");
    }
}

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

