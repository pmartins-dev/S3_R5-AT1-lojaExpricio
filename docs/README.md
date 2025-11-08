## 🔌 API Reference

### Produtos

#### GET /produtos
- **Descrição**: Obtém uma lista de produtos
- **Response**: Array de produtos


#### POST /produtos
- **Descrição**: Cria um novo produto
- **Body**:
```
{
    "nomeProduto": "produtoExemplo",
    "precoProduto": 0.00
}
```

- **Response**:
```
{
    "message": "Produto cadastrado com sucesso!"
}
```

- **Error Response**:
```
{
    "erro": "Campos obrigatorios não preenchidos!"
}
```

---------------------------------------------------

### Clientes

#### GET /clientes
- **Descrição**: Obtém uma lista de Clientes
- **Response**: Array de clientes

#### POST /clientes
- **Descrição**: Cria um novo cliente

- **Body**:
```
{
    "nomeCliente": "Patrick",
	"cpfCliente": "100.100.100-10",
	"emailCliente": "patrick@email.com",
	"senhaCliente": "123456789"	
}
```

- **Response**:
```
{
    "message": "Cliente cadastrado com sucesso!"
}
```

- **Error Response**:
```
{
    "erro": "Campos obrigatorios não preenchidos!"
}
```

#### POST /clientes/login
- **Descrição**: Fazer um login de usuario

- **Body**:
```
{
    "emailCliente": "patrick@email.com",
	"senhaCliente": "123456789"	
}
```

- **Response**:
```
{
    "message": "Logado com sucesso!"
}
```

#### Erros de login

- **Error Response**:
```
{
    "erro": "Email não encontrado!"
}
```

- **Error Response**:
```
{
    "erro": "Credenciais inválidas"
}
```
