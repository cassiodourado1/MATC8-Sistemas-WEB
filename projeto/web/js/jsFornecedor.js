window.onload = function () {
    var cadastrarJs = document.getElementById("cadastrar");

    cadastrarJs.onclick = function () {
        Cadastrar();
    };


};


function CriaRequest() {
    try {
        request = new XMLHttpRequest();
    } catch (IEAtual) {
        try {
            request = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (IEAntigo) {
            try {
                request = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (falha) {
                request = false;
            }
        }
    }
    if (!request)
        alert("Seu Navegador não suporta Ajax!");
    else
        return request;
}

function Cadastrar() {
    var xmlreq = CriaRequest();

    var nome = document.getElementById("nome");
    var cpfcnpj = document.getElementById("cpfcnpj");
    var site = document.getElementById("site");
    var telefone = document.getElementById("telefone");
    var senha = document.getElementById("senha");
    var email = document.getElementById("email");
    var cep = document.getElementById("cep");
    var complemento= document.getElementById("complemento");

    xmlreq.open("GET", "php/fornecedor/cadastra.php?nome=" + nome.value
            + "&cpfcnpj=" + cpfcnpj.value
            + "&site=" + site.value
            + "&telefone=" + telefone.value
            + "&senha=" + senha.value
            + "&email=" + email.value
            + "&cidade=" + cidade
            + "&estado=" + uf
            + "&complemento=" + complemento.value
            + "&logradouro=" + logradouro
            + "&latitude=" + latitude
            + "&longitude=" + longitude
            + "&cep=" + cep.value
            + "&bairro=" + bairro
            + "&numero=" + numero, true);
    

    xmlreq.onreadystatechange = function () {
        if (xmlreq.readyState == 4) {
            if (xmlreq.status == 200) {

                var resposta = xmlreq.responseText;
                if (resposta == 1) {
                    //alert(resposta);
                    alert("Seu cadastro foi realizado com sucesso.");
                    window.location.href = "cadastro-de-fornecedores.html";
                } else if (resposta == 0) {
                    //alert(resposta);
                    alert("Você já está cadastrado!");
                    window.location.href = "index.html";
                } else {
                    alert("Houve um erro! ->" + resposta);
                }
            }
        }
    };
    xmlreq.send(null);
}
