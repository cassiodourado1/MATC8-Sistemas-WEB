SELECT fornecedor.nome as 'Nome',
		fornecedor.cpfcnpj as 'CPF/CNPJ',
        fornecedor.email as 'Email',
        fornecedor.telefone as 'Telefone',
        fornecedor.site as 'Site',
        endereco.logradouro as 'Rua',
        endereco.bairro as 'Bairro',
        endereco.cidade as 'Cidade',
        endereco.uf as 'Estado',
        endereco.cep as 'CEP',
        login.situacao as 'Situação do Cadatro'        
FROM fornecedor
INNER JOIN endereco ON fornecedor.endereco =  endereco.id_endereco 
INNER JOIN login ON login.cpfcnpj = fornecedor.cpfcnpj
order by fornecedor.nome asc
