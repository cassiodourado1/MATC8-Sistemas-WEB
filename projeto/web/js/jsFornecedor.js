window.onload = function () {
    var cadastrarJs = document.getElementById("cadastrar");
    var MarcarMapaJs = document.getElementById("btnMaps");
    
      cadastrarJs.onclick = function () {
        alert("clicou em cadastrar");
        Cadastrar();
    };
    
      MarcarMapaJs.onclick = function () {
        alert("clicou em marcar");
        marcarMapa();
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
    //Declaração de Variáveis
    var xmlreq = CriaRequest();
    
    var nome = document.getElementById("nome");
    var cpfcnpj = document.getElementById("cpfcnpj");
    var site = document.getElementById("site");
    var telefone = document.getElementById("telefone");
    var senha = document.getElementById("senha");
    var email = document.getElementById("email");
    var cep = document.getElementById("cep");

    
    //alert(latitude + " e " + longitude);
    
    xmlreq.open("GET", "php/fornecedor/cadastra.php?nome="+nome.value 
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
                                    //alert("fez o request blz");

                var resposta = xmlreq.responseText;
                if (resposta == 1) {
                    //alert(resposta);
                    alert("Fornecedor cadastrado com sucesso.");
                    window.location.href = "fornecedor.html";
                } else if (resposta == 0) {
                    //alert(resposta);
                    alert("Fornecedor já cadastrado!");
                    window.location.href = "fornecedor.html";
                } else {
                    alert("outra coisa" + resposta);
                }
            }
        }
    };
    xmlreq.send(null);
}
