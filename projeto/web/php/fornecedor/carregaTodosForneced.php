<?php

include("../data.php");
$busca = @mysqli_query($_SG['link'],"SELECT E.latitude, E.longitude FROM `fornecedor` INNER JOIN `endereco` as E ON fornecedor.endereco = E.id_endereco");

$rows = array();
while( $r = mysqli_fetch_assoc($busca)){
  $rows[] = $r;
}
print json_encode($rows);

?>
