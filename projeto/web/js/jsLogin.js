window.onload = function () {
    var entrarJs = document.getElementById("entrar");

    entrarJs.onclick = function () {
        login();
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

function login() {

    var xmlreq = CriaRequest();

    var cpfcnpj = document.getElementById("cpfcnpj");
    var senha = document.getElementById("senha");

    xmlreq.open("GET", "./php/login/valida.php?cpfcnpj=" + cpfcnpj.value + "&senha=" + senha.value, true);

    xmlreq.onreadystatechange = function () {
        if (xmlreq.readyState == 4 && xmlreq.status == 200) {
            var resposta = xmlreq.responseText;
            if (resposta == 1) {
                alert("Bem Vindo ao Quero Quentinha!");
                window.location.href = "./index.html";
            } else {
                alert("LOGIN inválido, tente novamente. Erro: " + resposta);
                window.location.href = "./login.html";
            }
        }
    };
    xmlreq.send(null);
}
