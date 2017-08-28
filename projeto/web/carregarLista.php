
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

        <title>Nossos Fornecedores</title>
        <script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
        <link href="CSS/estilo.css" rel="stylesheet">
        <link href="CSS/geral.css" rel="stylesheet">
        <link href="CSS/fornecedores.css" rel="stylesheet">
    </head>

    <body>

        <header>
            <div class="container">
                <nav class="header">
                    <a href="index.html" class="logo-header"> <img src="IMG/logoqueroquentinha.png" width="325" height="105" alt="logo"></a>
                    <ul class="menu-header">
                        <li class="item-menu"><a class="item-menu-link" href="index.html">Home</a></li>
                        <li class="item-menu"><a class="item-menu-link" href="mapageral.html">Encontre Quentinhas</a></li>
                        <li class="item-menu"><a class="item-menu-link" href="cadastro-de-fornecedores.html">Cadastro de Fornecedor</a></li>
                        <li class="item-menu"><a class="item-menu-link" href="login.html">Login</a></li>
                    </ul>
                </nav>

            </div>
        </header>


        <div class="container container-fornecedores">
            <h2>Onde estão os nossos fornecedores</h2>
            <a href="mapageral.html" class="logo-header"> <img src="IMG/Maps.ico" width="30" height="30" alt="logo"></a>

        </div>



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
        ?>    


    </body>

    <!-- Maps API Javascript -->
    <script src="http://maps.googleapis.com/maps/api/js?key=AIzaSyDr3PbYh1o9kqjHoV63dT8DBqbvAiLIKZU"></script>

    <!-- Arquivo js contendo funções de manipulação de mapa-->
    <script type="text/javascript" src="js/mapageral.js"></script>

</html>


