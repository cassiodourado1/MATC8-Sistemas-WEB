<?php

include("../data.php");
$busca = @mysqli_query($_SG['link'],"SELECT F.nome, F.telefone, F.site, E.latitude, E.longitude FROM `fornecedor` as F INNER JOIN `endereco` as E ON F.endereco = E.id_endereco");

$rows = array();
while( $r = mysqli_fetch_assoc($busca)){
  $rows[] = $r;
}
print json_encode($rows);

?>
