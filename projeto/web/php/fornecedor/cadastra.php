<?php

include("../data.php");
//dados pessoais
$nome = $_GET['nome'];
$cpfcnpj = $_GET['cpfcnpj'];
$telefone = $_GET['telefone'];
$email = $_GET['email'];
$site = $_GET['site'];
//endereco
$cep = $_GET['cep'];
$logradouro = $_GET['logradouro'];
$cidade = $_GET['cidade'];
$numero = $_GET['numero'];
$complemento = $_GET['complemento'];
$bairro = $_GET['bairro'];
$estado = $_GET['estado'];
//maps
$latitude= $_GET['latitude'];
$longitude = $_GET['longitude'];
$senha = md5($_GET['senha']);



$busca = @mysqli_query($_SG['link'],"SELECT * FROM fornecedor WHERE cpfcnpj = '$cpfcnpj'");
$query1 = @mysqli_num_rows($busca);


if ($query1 == 1) {
    echo 0;
} else {
    //cadastra endereço e pega o id do endereço inserido
    @mysqli_query($_SG['link'],"INSERT INTO `quero_quentinha`.`endereco`(`logradouro`,`bairro`,`numero`,`cidade`,
                                `cep`,`complemento`,`latitude`,`longitude`)
                   VALUES ('$logradouro','$bairro','$numero','$cidade','$cep','$complemento','$latitude','$longitude')");
    
    $endereco = mysqli_insert_id($_SG['link']);
    
    //cadastra fornecedor com o id do endereço de cima
    @mysqli_query($_SG['link'],"INSERT INTO `quero_quentinha`.`fornecedor`(`nome`,`telefone`,`email`,
                                `endereco`,`cpfcnpj`,`site`)
                    VALUES
                    ('$nome','$telefone','$email','$endereco','$cpfcnpj','$site')");
    
   //cadastra o login do maluco
    @mysqli_query($_SG['link'],"INSERT INTO `quero_quentinha`.`login` (`senha`, `situacao`, `cpfcnpj`)
                    VALUES
                    ('$senha','Ativo','$cpfcnpj')");
    echo 1;
}
