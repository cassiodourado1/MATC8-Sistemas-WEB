<?php
require_once("../data.php");

$cpfcnpj = $_GET['cpfcnpj'];
$senha = ($_GET['senha']);


if (valida($cpfcnpj, $senha)===1) {
    echo 1;
} else {
    expulsaVisitante();
}
