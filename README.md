# API DE CLIENTE E CIDADE

##  Configurações Iniciais
### É necessario rodar os seguintes Pacotes:
````
npm install
npm install express
npm install body-parser
````
### A seguir rode o comando abaixo para a API começar a rodar na sua maquina.

    node index.js

## Local Host

```
localhost:6060/
```
## Endpoints
**GET /** 

Retorna todos os clientes e cidades cadastrados no banco de dados
## Exemplo de Requisição
```
http://localhost:6060/
```
## Resposta
#### 200 OK
Recebe toda a listagem de clientes e cidades.
```
{
    "BD": {
        "cliente": [
            {
                "id": 1,
                "nome": "Ana",
                "sexo": "F",
                "data_nasc": "31/10/2002",
                "idade": 20,
                "cidade": "Alegrete"
            },
            {
                "id": 2,
                "nome": "Ismael",
                "sexo": "M",
                "data_nasc": "27/05/1996",
                "idade": 26,
                "cidade": "Alegrete"
            },
            {
                "id": 3,
                "nome": "Liége",
                "sexo": "F",
                "data_nasc": "25/07/1995",
                "idade": 27,
                "cidade": "Canoas"
            }
        ],
        "cidades": [
            {
                "id": 1,
                "nome": "Alegrete",
                "estado": "RS"
            },
            {
                "id": 2,
                "nome": "Canoas",
                "estado": "RS"
            },
            {
                "id": 3,
                "nome": "São Paulo",
                "estado": "SP"
            }
        ]
    }
}
```
**POST /cliente** 

Cadastra um novo cliente no banco de dados.

### Parâmetros
|Parâmetro |Tipo	|Descrição|
|------| ------ | ------|
|nome	|string	|Nome do cliente.|
|sexo|	string	|Sexo do cliente.|
|data_nasc	|string	|Data de nascimento do cliente.|
|idade	|number|	Idade do cliente.|
|cidade|	string|	Cidade do cliente.|
### Exemplo de Requisição
```
http://localhost:6060/cliente
```
Exemplo do que Inserir:
```
    {
        "nome": "Ana",
        "sexo": "F",
        "data_nasc": "31/10/2002",
        "idade": 20,
        "cidade": "Alegrete"
    }
```
## Possíveis respostas: 
#### 400 Bad Request
Significa que algum parâmetro não foi preenchido.
```
Todos os campos são obrigatórios!!
```

#### 201 Created
Significa que o cliente foi cadastrado com sucesso.
```
Cliente cadastrado com sucesso!!
```
#### 500 Internal Server Error
Significa que o servidor encontrou uma situação com a qual não sabe lidar
```
Internal Server Error
```
**POST /cidade** 

Cadastra uma nova cidade no banco de dados.
### Parâmetros
|Parâmetro |Tipo	|Descrição|
|------| ------ | ------|
|nome	|string	|Nome da cidade.|
|estado|	string	|Sigla do estado.|
### Exemplo de Requisição:
```
http://localhost:6060/cidade
```

Exemplo do que inserir:
```
    {
        "nome": "Alegrete",
        "estado": "RS"
    }
```
## Possíveis respostas: 
#### 400 Bad Request
Significa que algum parâmetro não foi preenchido.
```
Todos os campos são obrigatórios!!
```

#### 201 Created
Significa que a cidade foi cadastrada com sucesso.
```
Cidade cadastrada com sucesso!!
```
#### 500 Internal Server Error
Significa que o servidor encontrou uma situação com a qual não sabe lidar
```
Internal Server Error
```
**DELETE /cliente/:id** 

Remove um cliente do banco de dados pelo ID.
### Exemplo de Requisição
```
http://localhost:6060/cliente/1
```

### Possíveis respostas:
```
No Content
```
#### 500 Internal Server Error
Significa que o servidor encontrou uma situação com a qual não sabe lidar
```
Internal Server Error
```
**PUT /cliente/:id** 

Atualiza um cliente do banco de dados pelo ID.
### Parâmetros
|Parâmetro |Tipo	|Descrição|
|------| ------ | ------|
|nome	|string	|Nome do cliente.|
|sexo|	string	|Sexo do cliente.|
|data_nasc	|string	|Data de nascimento do cliente.|
|idade	|number|	Idade do cliente.|
|cidade|	string|	Cidade do cliente.|

### Exemplo de Requisição
```
http://localhost:6060/cliente/2
```

Exemplo do que inserir:
```
{
  "idade": 22
}
```
### Possíveis respostas
#### 400 Bad Request
Signifa que o parametro do id colocado não é um número.
```
Bad Request
```
 #### 200 OK
 Significa que o cliente foi editado com sucesso.
```
 OK
```
#### 404 Not Found
Significa que o id procurado não existe.
```
Not Found
```
#### 500 Internal Server Error
Significa que o servidor encontrou uma situação com a qual não sabe lidar
```
Internal Server Error
```
**GET /cidade/:nome** 

Retorna a cidade correspondente ao nome informado.
### Exemplo de Requisição
```
http://localhost:6060/cidade/Alegrete
```

### Possíveis respostas:
#### 200 OK
Significa que a cidade foi encontrada e irá retornar os dados da cidade com o respectivo nome colocado.
```
{
    "id": 1,
    "nome": "Alegrete",
    "estado": "RS"
}
```
#### 404 Not Found
Significa que o nome procurado não existe.
```
Not Found
```
#### 500 Internal Server Error
Significa que o servidor encontrou uma situação com a qual não sabe lidar
```
Internal Server Error
```

**GET /cidade/estado/:estado** 

Retorna a cidade correspondente ao estado informado.

### Exemplo de Requisição
```
http://localhost:6060/cidade/estado/SP
```

### Possíveis respostas:
#### 200 OK
Significa que a cidade foi encontrada e irá retornar os dados da cidade com o respectivo nome colocado.
```
{
    "id": 3,
    "nome": "São Paulo",
    "estado": "SP"
}
```
#### 404 Not Found
Significa que o nome procurado não existe.
```
Not Found
```
#### 500 Internal Server Error
Significa que o servidor encontrou uma situação com a qual não sabe lidar
```
Internal Server Error
```

**GET /cliente/:nome** 

Retorna o cliente correspondente ao nome informado.

### Exemplo de Requisição
```
http://localhost:6060/cliente/Ana
```
### Possíveis respostas:
#### 200 OK
Significa que o cliente foi encontrado e irá retornar os dados cliente com o respectivo nome colocado.
```
{
  "id": 1,
  "nome": "Ana",
  "sexo": "F",
  "data_nasc": "31/10/2002",
  "idade": 20,
  "cidade": "Alegrete"
}
```
#### 404 Not Found
Significa que o nome procurado não existe.
```
Not Found
```
#### 500 Internal Server Error
Significa que o servidor encontrou uma situação com a qual não sabe lidar
```
Internal Server Error
```

**GET /cliente/id/:id**

Retorna o cliente correspondente ao id informado.
### Exemplo de Requisição
```
http://localhost:6060/cliente/id/1
```

### Possíveis respostas:
#### 400 Bad Request
Signifa que o parametro do id colocado não é um número.
```
Bad Request
```
#### 200 OK
Significa que o cliente foi encontrado e irá retornar os dados clinte com o id colocado.
```
{
  "id": 1,
  "nome": "Ana",
  "sexo": "F",
  "data_nasc": "31/10/2002",
  "idade": 20,
  "cidade": "Alegrete"
}

```
#### 404 Not Found
Significa que o nome procurado não existe.
```
Not Found
```
#### 500 Internal Server Error
Significa que o servidor encontrou uma situação com a qual não sabe lidar
```
Internal Server Error
```