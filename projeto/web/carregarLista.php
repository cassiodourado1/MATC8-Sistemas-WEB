<?php

include("php/data.php");
$query = "SELECT 
    fornecedor.nome, 
    fornecedor.cpfcnpj, 
    fornecedor.email, 
    fornecedor.telefone, 
    fornecedor.site, 
    endereco.logradouro, 
    endereco.bairro, 
    endereco.cidade,
    endereco.uf,
    endereco.cep,
    login.situacao FROM fornecedor
INNER JOIN endereco 
ON fornecedor.endereco =  endereco.id_endereco 
INNER JOIN login 
ON login.cpfcnpj = fornecedor.cpfcnpj
order by fornecedor.nome asc";
$resultado = @mysqli_query($_SG['link'], $query);
if (mysqli_num_rows($resultado) > 0) {
    print "<table border='1'>";
    print "<tr>"
            . "<td>Nome</td>"
            . "<td>CPF/CNPJ</td>"
            . "<td>Telefone</td>"
            . "<td>Email</td>"
            . "<td>Site</td>"
            . "<td>Endereço</td>"
            . "</tr>";
    while ($info = mysqli_fetch_array($resultado)) {
        if (@$info[situacao] == 'A') {
            print "<tr><td>$info[nome]</td> "
                    . "<td>$info[cpfcnpj]</td>"
                    . "<td>$info[telefone]</td>"
                    . "<td>$info[email]</td>"
                    . "<td>$info[site]</td>"
                    . "<td>$info[logradouro], " . "$info[cidade], " . "$info[uf], " . "$info[cep] </td>"
                    . "</tr>";
        }
    }
    print "</table>";
}
